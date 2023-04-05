import { Metadata } from "next";
import { projects } from "../../../data/projects";
import Accordion from "../../../utils/accordian";

export const metadata: Metadata = {
    title: 'Projects',
    description: 'Showcase my Github Projects.',
  };

export default function Projects() {
    return (
        <section className="w-full">
            <h1 className='text-3xl font-bold'>Projects</h1>
            <p className=' my-5'>Below is a list of personal projects. To view all my repos please click{' '}
                <a 
                href='https://github.com/marcus-biddle'
                className='cursor-pointer underline'
                >
                    here.
                </a>
            </p>
            <Accordion open={false} data={projects}/>
        </section>
    )
}