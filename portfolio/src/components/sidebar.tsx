import { LayoutGroup, motion } from "framer-motion";
import Link from "next/link"
import { useRouter } from "next/router";
import { routes } from "../../data/data";

const Logo = () => {
    // TODO: change font for the logo
    return (
        <motion.div
        initial={{ opacity: 0, scale: 0.1 }}
        animate={{
            scale: 5,
            x: 170,
            y: -25,
            opacity: 1
        }}
        transition={{ delay: .35 }}
        className='text-orange-600 z-0'
        >
            M
        </motion.div>
    )
};

export default function Sidebar() {
    const { pathname } = useRouter();
    
    return (
        <div className="flex flex-col lg: sticky lg:top-20">
            <div>
            <Logo />
            </div>
            <LayoutGroup>
            {routes.map((route) => {
                return (
                    <Link
                        key={route.path}
                        href={route.path}
                        className={`capitalize z-50 my-2 transition-all`}
                        >
                            <span className="relative">
                                <div className={`pt-1 pl-3 ${pathname === route.path ? 'font-bold' : ''}`}>
                                {route.name}
                                </div>
                                {pathname === route.path ? (
                                    <motion.div
                                    className='absolute z-[-1] px-9 py-4 bg-slate-300 inset-0 bg-neutral-100 rounded-lg'
                                    layoutId="sidebar"
                                    transition={{
                                        type: 'spring',
                                        stiffness: 350,
                                        damping: 30
                                    }}
                                    />
                                ): null}
                            </span>
                    </Link>
                )
            })}
            </LayoutGroup>
        </div>
    );
};