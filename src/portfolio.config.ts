
export const openGraphInfoes = {
    title: "Abdul Khalek Sohan - Software Enginee",
    description: "Software Engineer with over one year of experience developing front-end and back-end to enhance business productivity. Strong ability to build and maintain complex applications.", // very short description
    image: "https://i.ibb.co/9tgszr8/munna.png" //image path should not be local. It must be a direct image link
}

export const personalInformation = {
    profileImg: "./images/munna.jpeg", //profile image must be stored in "static/images" this path or use direct link of a image
    name: "Abdul Khalek Sohan",
    address: "Feni Sadar, Feni",
    contactNumber: "+880 1838-560500",
    email: "abdul.khalek.sohan@gmail.com",
    currentDesignation: "Software Engineer",
    currentCompanyName: "Gaze",
    description: "Software Engineer with over one year of experience developing front-end and back-end to enhance business productivity. Strong ability to build and maintain complex applications, with a strong command of technologies such as React.js, Next.js, SvelteKit, Angular, Nest.js, PostgreSQL, Docker, Livekit etc. I have successfully built and delivered a wide range of web applications. From creating interactive and user-friendly front-end interfaces to developing robust and scalable back-end systems, I take pride in my ability to tackle complex challenges and deliver high-quality solutions. Take a look at my portfolio to explore my diverse projects and discover how I can contribute to you next.",
    city: "Chittagong",
    country: "Bangladesh"

}

export const navbarInfoes = {
    logoImg: "./images/logo.svg", // logo must be stored in static/images path
}

export const heroBoxInfoes = {
    image: personalInformation.profileImg,
    name: personalInformation.name,
    typewriterArr: ['Learner', 'Open Source Contributor', 'Software Engineer'], // write the text array here what you want show in the typewriter animation's effect
    currentDesignation: personalInformation.currentDesignation,
    currentCompanyName: personalInformation.currentCompanyName,
    description: personalInformation.description,
    address: `${personalInformation.address}, ${personalInformation.city}, ${personalInformation.country}`,
    resumeLink: "https://drive.google.com/file/d/1cJwdswRexcuCUIzmZUfbAESmrkfkdPwM/view?usp=drive_link"
}


// each property required
export const socialMediaInfoes = [
    {
        name: "Github",
        link: "https://github.com/sohan-fahad",
        svgCode: [
            "M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
        ],
        viewBox: "0 0 496 512"
    },

    {
        name: "Linkedin",
        link: "https://www.linkedin.com/in/abdul-khalek-sohan",
        svgCode: [
            "M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"
        ],
        viewBox: "0 0 448 512"
    },

    {
        name: "Facebook",
        link: "https://www.facebook.com/sohanfahad4/",
        svgCode: [
            "M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"
        ],
        viewBox: "0 0 512 512"
    },

    {
        name: "Email",
        link: "mailto:abduk.khalek.sohan@gmail.com",
        svgCode: [
            "M23,20 L23,6 L12,15 L1,6 L1,20 L23,20 Z M12,12 L22,4 L2,4 L12,12 Z"
        ],
        viewBox: "0 0 24 24"
    },
]


export const experienceInfoes = [
    {
        jobPeriod: "July 2022 to Present",
        designation: "Software Engineer",
        companyName: "Gaze",
        description: `Developing and maintaining e-commerce, kiosk, and AI base     pose front-end and contributing as a full-stack developer for the e-learning platform. Collaborating with the team to create solutions for various technical challenges.`,
        href: "https://gaze.ai/"
    },

    {
        jobPeriod: "December 2021 to April 2022",
        designation: "Junior Software Engineer",
        companyName: "Bistspack Solution",
        description: `Developed and maintained food delivery websites. Worked on the Front-end using React and
						Next.js. Collaborated with the team to create solutions for various technical challenges`,
        href: "https://bitsmedia.com/"
    }
]


export const skillInfoes = [
    {
        name: "Node.js",
        img: "/svg/node.svg"
    },
    {
        name: "JavaScript",
        img: "./svg/javascript.svg"
    },
    {
        name: "TypeScript",
        img: "./svg/typescript.svg"
    },
    {
        name: "Nest.js",
        img: "./svg/nest.svg"
    },
    {
        name: "PostgreSQL",
        img: "./svg/postgresql.svg"
    },
    {
        name: "MySql.js",
        img: "./svg/mysql.svg"
    },
    {
        name: "Docker",
        img: "./svg/docker.svg"
    },
    {
        name: "Redis",
        img: "./svg/redis.svg"
    },
    {
        name: "Git",
        img: "./svg/git.svg"
    },
    {
        name: "Digital Ocean",
        img: "./svg/digitalOcean.svg"
    },
    {
        name: "AWS",
        img: "./svg/aws.svg"
    },
    {
        name: "Nginix",
        img: "./svg/nginx.svg"
    },
]

export const educationInfoes = [
    {
        studyPeriod: "July 2022 to Present",
        departmentName: "BSc in Computer Science",
        universityName: "Bangladesh University",
        cgpa: `3.51 (running)`
    },

    {
        studyPeriod: "February 2016 to April 2021",
        departmentName: "Diploma in Engineering at Computer Science",
        universityName: "nstitute of Computer Science & Technology",
        cgpa: `3.63`
    }
]

export const projectFilteMenu = ['All', 'Javascript', 'TypeScript', 'React.js', 'SvelteKit', 'Nest.js']

export const projectsData = [
    {
        index: 1,
        name: "Loox, A fashion e-commerce",
        description: "The objective was to create a responsive and user-friendly web application for an e-commerce website that would increase user engagement and sales.",
        url: "https://loox.com.bd/",
        tech: ['TypeScript', 'SvelteKit', 'Rx.js']
    },
    {
        index: 2,
        name: "GazePay Passwordless E-wallet",
        description: "Aimed to develop a Face recognition-based e-wallet application allowing users to quickly and securely make digital transactions, such as Payments, Add and Refund money.",
        url: "https://gazepay.io/",
        tech: ['TypeScript', 'SvelteKit', 'Nest.js']
    },

    {
        index: 3,
        name: "Therapia de Bolso",
        description: "Therapia de Bolso is basically an online base Brazilian medical service provider.",
        url: " https://terapiadebolso.com.br",
        tech: ['TypeScript', 'Angular', "Rx.js", 'Nest.js']
    },

    {
        index: 4,
        name: "Single Vendor E-commerce & Pose",
        description: "The objective was to create a responsive and user-friendly single vendor e-commerce website that would increase user engagement and sales.",
        url: " https://getinstant.net/",
        tech: ['TypeScript', 'React.js', 'Next.js', "Redux", 'Nest.js']
    },

    {
        index: 5,
        name: "Be Fluent",
        description: "We are aiming to help people build their English skills in 1-to-1 lessons. Its subscriptional base service, where user subscribe for their lession.",
        url: "https://befluent.io/",
        tech: ['TypeScript', 'SvelteKit', "Rx.js", 'Nest.js']
    },

    {
        index: 6,
        name: "Food Delivery System Application",
        description: "Aimed to develop a web application allowing users to easily browse menus, place orders, and track delivery status.",
        url: "https://food-hub44.netlify.app/",
        tech: ['Javascript', 'React.js', 'Redux',]
    },
]

export const achivementData = [
    {
        index: 1,
        name: "Achivement Titlw",
        description: "achivement descriptione",
    },
]

export const snedEmailInfoes = {
    receiverEmail: "sohan@gmail.com", //replace it with your receiver email
    authEmail: "sohan@gmail.com", //replace it with your auth email
    authEmailPassword: "1245463", //enter your email password
    host: 'smtp-relay.sendinblue.com',
    secure: false,
    port: 587,
}

export const copyrightInfo = "2024 Abdul Khalek Sohan"