import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Projects',
    description: 'Showcase my Github Projects.',
  };

export default function Projects() {
    return (
        <section>
            <h1 className='text-3xl font-bold'>Projects</h1>
        </section>
    )
}