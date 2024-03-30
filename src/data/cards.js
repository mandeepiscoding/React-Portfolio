import csscImage from '../assets/images/cssc.png'
import logo from '../assets/images/logo.png'
import ecommerce from '../assets/images/ecommerce.png'
import emptracker from '../assets/images/emptracker.png'
import weather from '../assets/images/weather.png'
import cat from '../assets/images/cat.png'
import socialnetwork from '../assets/images/socialnetwork.png'
import quiz from '../assets/images/quiz.png'
import readme from '../assets/images/readme.png'
import techblog from '../assets/images/techblog.png'
import fullstackfusion from '../assets/images/fullstackfusion.png'

const Projects = () => {
    const projectList = [
    {
        "id": 1,
        "title": "Full Stack Fusion",
        "description": "Full Stack Fusion is a team effort to create a smooth MERN stack app. Users can sign in securely, check out the menu, manage items, and place orders easily. It uses React for the frontend, Node.js and Express.js with GraphQL for the backend, MongoDB with Mongoose for the database, and JWT for authentication.",
        "link": "https://full-stack-fusion.onrender.com/",
        "gitHub": "https://github.com/waltermatulich/full-stack-fusion",
        "tech": [
            "html/CSS",
            "Node.js",
            "Concurrently",
            "Apollo",
            "dotenv",
            "bcrypt",
            "express",
            "Graphql",
            "JSON Web Token",
            "MongoDB",
            "Mongoose",
            "React",
            "Vite",
        ],
        "video": "",
        "image": fullstackfusion,
        "cardClass": "card-column",
        "altText": "Full Stack Fusion's Restaurant Website"
    },        
    {
        "id": 2,
        "title": "Club Sandwich Sandwich Club",
        "description": "An easy-to-use website for viewing, rating, and adding your favorite sandwich recipes.  The application includes encrypted user authentication, a SQL database for storing sandwich recipes, user information, and ratings, and full CRUD API implementation for all stored data.",
        "link": "https://club-sandwich-sandwich-club-ddb63265b5d8.herokuapp.com/",
        "gitHub": "https://github.com/philsloan/Club-Sandwich-Sandwich-Club",
        "tech": [
            "html/CSS",
            "Node.js",
            "dotenv",
            "bcrypt",
            "express",
            "express-session",
            "MySQL",
            "sequelize",
            "handlebars",
        ],
        "video": "",
        "image": csscImage,
        "cardClass": "card-column",
        "altText": "Club Sandwich Sandwich Club Website"
    },
    {
        "id": 3,
        "title": "Tech Blog",
        "description": "CMS-style blog site where developers can publish their blog posts and comment on other developers’ posts.",
        "link": "https://infinite-retreat-78041-f7a77362a32e.herokuapp.com",
        "gitHub": "https://github.com/mandeepiscoding/tech-blog",
        "tech": [
            "html/CSS",
            "Node.js",
            "dotenv",
            "bcrypt",
            "express",
            "express-session",
            "MySQL",
            "sequelize",
            "handlebars",
        ],
        "video": "",
        "image": techblog,
        "cardClass": "card-column rest",
        "altText": "Image of the tech blog website"
    },
    {
        "id": 4,
        "title": "Logo Maker",
        "description": "A Node.js command-line application that prompts the user to select a color, shape, and text to create a logo and save it as an SVG file. Includes a suite of auto-tests utilizing Jest.",
        "link": "",
        "gitHub": "https://github.com/mandeepiscoding/SVG-Logo-Maker",
        "tech": [
            "Node.js",
            "Inquirer",
            "Jest",
        ],
        "video": "https://drive.google.com/file/d/1tjNkYiHFWvIahLgMsNct5AZwIrItbaj0/view",
        "image": logo,
        "cardClass": "card-column rest",
        "altText": "Logo Maker Application in Terminal"
    },
    {
        "id": 5,
        "title": "E-commerce Backend",
        "description": "The back end for an e-commerce site using Express.js API and Sequelize to interact with a MySQL database.",
        "link": "",
        "gitHub": "https://github.com/mandeepiscoding/E-commerce-Back-End",
        "tech": [
            "Node.js",
            "Dotenv",
            "Express",
            "MySQL",
            "Sequelize",
            "Insomnia",
        ],
        "video": "https://drive.google.com/file/d/1-DjQs9Em1ddHG2ksVarRx-iGeW6nJ6Ze/view",
        "image": ecommerce,
        "cardClass": "card-column rest",
        "altText": "E-commerce backend API calls being made in Insomnia"
    },
    {
        "id": 6,
        "title": "Employee Tracker",
        "description": "A command-line application to manage a company's employee database.",
        "link": "",
        "gitHub": "https://github.com/mandeepiscoding/Employee-Tracker",
        "tech": [
            "Node.js",
            "Dotenv",
            "Inquirer",
            "Express",
            "MySQL",
        ],
        "video": "https://drive.google.com/file/d/1m-VEvS9RvwzYfda4KJnuzyBjKa-KrIIo/view",        
        "image": emptracker,
        "cardClass": "card-column rest",
        "altText": "Employee tracker application running in a VS Code terminal"
    },
    {
        "id": 7,
        "title": "Weather Dashboard",
        "description": "A weather dashboard for showing the 5 day weather forecast for the city of your choice. Utilizes JQuery & JQuery UI to prompt the user to enter a city and fetch data from openweather.com to display weather for that city.",
        "link": "https://mandeepiscoding.github.io/Weather-Dashboard/",
        "gitHub": "https://github.com/mandeepiscoding/Weather-Dashboard",
        "tech": [
            "HTML/CSS",
            "Javascript",
            "JQuery",
            "JQuery UI",
            "Bootstrap",
            "Moment.js",
            "Open Weathermap API",
        ],
        "video": "",          
        "image": weather,
        "cardClass": "card-column rest",
        "altText": "Image of the weather dashboard web site"
    },
    {
        "id": 8,
        "title": "Cat Advice Generator",
        "description": "Discover Cat Therapy, your go-to spot for adorable cat pictures and helpful advice, all wrapped up in one cozy web page.",
        "link": "https://aaplayer001.github.io/p1-cat-advice-generator/",
        "gitHub": "https://github.com/AAPlayer001/p1-cat-advice-generator",
        "tech": [
            "HTML/CSS",
            "Javascript",
            "Bulma CSS",
            "Adviceslip API",
            "Cataas API",
        ],
        "video": "",          
        "image": cat,
        "cardClass": "card-column rest",
        "altText": "Cat Therapy Website Image"
    },
    {
        "id": 9,
        "title": "Social Network API",
        "description": "An API for a social network web application where users can share their thoughts, react to friends’ thoughts, and create a friend list.",
        "link": "",
        "gitHub": "https://github.com/mandeepiscoding/Social-Network-API",
        "tech": [
            "Node.js",
            "Express.js",
            "MongoDB",
            "Mongoose",
            "Insomnia",
            "Dotenv",
        ],
        "video": "https://drive.google.com/file/d/1k9TPbZE9lOqIGmz3TH4q_FAKKY1Szz1f/view",          
        "image": socialnetwork,
        "cardClass": "card-column rest",
        "altText": "Image of the social network backend API calls being made in Insomnia"
    },
    {
        "id": 10,
        "title": "Code Quiz",
        "description": "A timed coding quiz with multiple-choice questions. Utilizes vanilla html. css, and javascript to present a series of web-development related questions.",
        "link": "https://mandeepiscoding.github.io/timed-coding-quiz/",
        "gitHub": "https://github.com/mandeepiscoding/timed-coding-quiz",
        "tech": [
            "HTML/CSS",
            "Javascript",
        ],
        "video": "",          
        "image": quiz,
        "cardClass": "card-column rest",
        "altText": "Image of the code quiz website"
    },
    {
        "id": 11,
        "title": "Readme Generator",
        "description": "A node.js application that prompts for project information and automatically generates a high-quality README.md file using that information.",
        "link": "",
        "gitHub": "https://github.com/mandeepiscoding/Professional-README-Generator",
        "tech": [
            "Node.js",
            "Inquirer",
        ],
        "video": "",          
        "image": readme,
        "cardClass": "card-column rest",
        "altText": "Image of the readme generator application running in a VS Code terminal"
    },
]
return projectList
}

export default Projects