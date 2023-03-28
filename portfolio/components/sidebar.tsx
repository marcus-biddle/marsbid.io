import { LayoutGroup, motion } from "framer-motion";
import Link from "next/link"
import { useRouter } from "next/router";
import { routes } from "../data/routes";

const Logo = () => {
    // TODO: change font for the logo; fix spacing
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
        className='z-0'
        >
            M
        </motion.div>
    )
};

export default function Sidebar() {
    const { pathname } = useRouter();
    
    return (
        <div className="lg:sticky lg:top-20">
            <div>
            <Logo />
            </div>
            <LayoutGroup>
                <nav className="relative flex flex-col items-start space-x-0 space-y-3">
                    {routes.map((route) => {
                    return (
                        <Link
                            key={route.path}
                            href={route.path}
                            className={`capitalize z-50 transition-all`}
                            >
                                <span className="relative">
                                    <div className={`pt-1 px-2 ${pathname === route.path ? 'font-bold' : 'text-neutral-500'}`}>
                                    {route.name}
                                    </div>
                                    {pathname === route.path ? (
                                        <motion.div
                                        className='absolute z-[-1] bg-slate-300 inset-0 rounded-lg'
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
                </nav>
            </LayoutGroup>
        </div>
    );
};