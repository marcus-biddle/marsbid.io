import { motion } from "framer-motion";
import Link from "next/link"
import { useRouter } from "next/router";
import { useState } from "react";

const routes = [
    {
        path: '/',
        name: 'home'
    },
    {
        path: '/about',
        name: 'about'
    },
    {
        path: '/chess',
        name: 'chess'
    },
    {
        path: '/workouts',
        name: 'workouts'
    },
    {
        path: '/tech',
        name: 'tech'
    },
]

const Logo = () => {
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
        <div className="flex flex-col">
            <Logo />
        {routes.map((route) => {
            return (
                <Link
                    key={route.path}
                    href={route.path}
                    className={`capitalize z-50 my-2 px-2 transition duration-300
                    ${pathname == route.path ? 'transition duration-300 ease-in border rounded-lg bg-slate-400 border-transparent text-black' : ' border rounded-lg border-transparent'}
                    `}
                    >
                        {route.name}
                </Link>
            )
            
        })}
        </div>
    )
}