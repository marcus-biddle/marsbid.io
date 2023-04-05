import Image, { StaticImageData } from "next/image";
import { useState } from "react";
import { Data } from "../data/projects";
import { delay, motion } from "framer-motion";

interface AccordionProps {
    open: boolean;
    data: Data[];
}

interface PanelProps {
    open: boolean;
    index: number;
    header: string;
    children: React.ReactNode[];
    activeTab: number;
    activePanel(index: number): void; 
}

const Panel = ({ 
    open,
    index,
    header,
    children,
    activeTab,
    activePanel
 }: PanelProps) => {
    // const [height, setHeight] = useState(0);
    // const [active, setActive] = useState(open);

    const isActive = activeTab === index;
    const variants = {
        open: { opacity: 1, y: 0},
        closed: { opacity: 0, y: '-5%'},
    }
    
    return (
        <div aria-expanded={isActive}>
            <button role={"tab"} className=' relative flex border border-solid border-neutral-500 w-full text-left pl-5 py-2' onClick={() => activePanel(index)}>
                <div className={'flex space-x-[30rem] '}>
                    <p>{header}</p>
                </div>
                <p className=" absolute right-4 ">
                    {isActive ? '-' : '+'}
                </p>
            </button>
                <div aria-hidden={isActive} >
                    <motion.div
                    animate={isActive ? "open" : "closed"}
                    variants={variants}
                    transition={{ 
                        stiffness: .5,
                        delay: .15
                     }}
                    >
                        { isActive? children : null}
                    </motion.div>
                </div>
        </div>
    )
};

export default function Accordion({ data, open }: AccordionProps) {
    const [activeTab, setActiveTab] = useState(-1)
    return (
        <>
        <ul>
            {Object.values(data).map((item: Data, index) => {
                return (
                    <div key={item.title} >
                        <Panel
                        open={open}
                        header={item.title}
                        index={index}
                        activeTab={activeTab}
                        activePanel={(i: number): void => {
                            setActiveTab(activeTab === i ? -1 : i)
                        }}
                        >
                            <div className="mt-5">
                                {item.description}
                            </div>
                            <div className="flex flex-row gap-4 py-5 snap-x scrollbar-hide overflow-auto">
                                {item.imgs.map((img: StaticImageData) => {
                                    return (
                                    <Image 
                                    alt={item.title}
                                    src={img}
                                    height={300}
                                    />
                                    )
                                    
                                })}
                            </div>
                            <p className=" font-bold">Additional Information</p>
                            <ul>
                                {item.additionalInfo.map((info: string) => {
                                    return (
                                        <li className="list-disc list-inside pb-3">
                                            {info}
                                        </li>
                                    )
                                })}
                            </ul>
                            <div className="flex flex-row pb-3 space-x-5">
                                <div className="opacity-50 hover:opacity-100 cursor-pointer">
                                    <a
                                    href={item.github}
                                    >
                                        View the repo
                                    </a>
                                </div>
                                <div className="opacity-50 hover:opacity-100 cursor-pointer">
                                    <a
                                    href={item.demo}
                                    >
                                        View the live demo
                                    </a>
                                </div>
                            </div>
                        </Panel>
                    </div>
                )
            })}
        </ul>
        </>
    )
}