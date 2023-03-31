export const projects = [
    {
        title: 'E-commerce Pokemon App',
        languages: [
            {
                name: 'Typescript',
                icon: ''
            },
        ],
        framework: { name: 'React', icon: ''},
        backend: { used: false, name: ''},
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
        additionalInfo: [
            {
                info: 'Decided to go with the CSS-in-JS approach by useing styled components instead of css modules. This is helpful because I can incorporate JS/TS logic into it. However, the con to this approach is that it needs to be added to the DOM and will slow down rendering.'
            }
        ],
        img: '',
    },
    {
        title: 'Todo-List App',
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
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
        additionalInfo: [
            {
                info: 'Decided to go with the CSS-in-JS approach by useing styled components instead of css modules. This is helpful because I can incorporate JS/TS logic into it. However, the con to this approach is that it needs to be added to the DOM and will slow down rendering.',
            },
            {
                info: 'Server is hosted on Atlas. It follows a basic MVC pattern.',
            },
        ],
        img: ''
    },
]