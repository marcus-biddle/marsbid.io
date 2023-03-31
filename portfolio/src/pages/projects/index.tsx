import { Metadata } from "next";
import { projects } from "../../../data/projects";

export const metadata: Metadata = {
    title: 'Projects',
    description: 'Showcase my Github Projects.',
  };

export default function Projects() {
    return (
        <section>
            <h1 className='text-3xl font-bold'>Projects</h1>
            <div className="my-5 flex flex-row gap-x-52">
                {projects.map((project) => {
                    return (
                        <a 
                        key={project.title}
                        className=''>
                            <header>{project.title}</header>
                            <section className='flex flex-row'>
                                {project.languages.map((language) => {
                                    return (
                                        <div key={language.name} >
                                            {language.name}
                                        </div>
                                    )
                                })}
                            </section>
                        </a>
                    )
                })}
            </div>
            <div>Next Project? TBD</div>
        </section>
    )
}