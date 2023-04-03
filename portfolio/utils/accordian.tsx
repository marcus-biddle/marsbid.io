import { useEffect, useState } from "react";
import { Data } from "../data/projects"

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
    const [height, setHeight] = useState(0);
    const [active, setActive] = useState(open);

    const isActive = activeTab === index;
    
    return (
        <div aria-expanded={isActive}>
            <button role={"tab"} className=' border border-solid border-neutral-500 w-full text-left pl-5 py-2' onClick={() => activePanel(index)}>
                <div className={''}>{header} +</div>
            </button>
            {isActive ?
                <div aria-hidden={isActive}>
                    <div>{children}</div>
                </div>
            : null
            }
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
                            <div>
                                {item.description}
                            </div>
                            <div>
                                {item.additionalInfo[0]}
                            </div>
                        </Panel>
                    </div>
                )
            })}
        </ul>
        </>
    )
}