import todo from './todo.jpeg';
import todo2 from './todo2.jpeg';
import todo3 from './todo3.png';
import poke from './pokemon.jpeg';
import poke2 from './pokemon2.jpeg';
import poke3 from './pokemon3.jpeg';
import poke4 from './pokemon4.jpeg';
import { StaticImageData } from 'next/image';

export interface Data {
    title: string,
    languages: {
        name: string;
        icon: string;
    }[],
    framework: {
        name: string;
        icon: string;
    },
    backend: {
        used: boolean;
        name: string;
    },
    description: string,
    additionalInfo: string[],
    imgs: StaticImageData[],
    github: string,
    demo: string
}

export interface AccordionData {
    data: Data[]
}

export const projects: Data[] = [
    {
        title: 'Pokemon E-commerce App',
        languages: [
            {
                name: 'Typescript',
                icon: ''
            },
        ],
        framework: { name: 'React', icon: ''},
        backend: { used: false, name: ''},
        description: 'This project combines React and the Pokemon Rest API. The focus of this project is on the e-commerce functionality of the site: navigating through the Home page, CLP, PDP, the Cart page, and allowing the user to checkout. This is hosted on AWS Amplify.',
        additionalInfo: [
            'This project requires two different calls to the same API to get all the information.',
            'This project is written in Typescript.',
            'Future plans are to expand the checkout flow with delivery times, include card numbers and addresses, and to create a confirmation page.'
        ],
        imgs: [poke, poke2, poke3, poke4],
        github: 'https://github.com/marcus-biddle/store',
        demo: 'https://mars-todo-dashboard.netlify.app/'
    },
    {
        title: 'Todo App',
        languages: [
            {
                name: 'Typescript',
                icon: ''
            },
            {
                name: 'Javascript',
                icon: ''
            },
        ],
        framework: { name: 'React', icon: ''},
        backend: { used: true, name: 'MongoDb'},
        description: 'This is the first project I created in React using Typescript and Mongodb for the backend. It has all the CRUD capabilities and any user can modify the tasks. This is hosted on Netlify.',
        additionalInfo: [
        'The repo is split between Client and Server folders. The server is hosted on Atlas. It follows a basic MVC pattern. I used Postman to test that each request went through as expected.',
        'The focus of this project was to get a better understanding of implementing servers and how they function.',
        'Future plans for this project would be to create a login and have each task connected to who wrote it.'
        ],
        imgs: [todo, todo2, todo3],
        github: 'https://github.com/marcus-biddle/Todo',
        demo: 'https://master.d3jwck8go0cxg4.amplifyapp.com/'
    },
]