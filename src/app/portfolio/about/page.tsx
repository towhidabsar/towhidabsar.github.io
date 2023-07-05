'use client';

import { Avatar, Card, DarkThemeToggle, Flowbite } from 'flowbite-react';
import CustomNavbar from '../components/navbar';

export default function About() {

    return (
        <div className="space-y-2">
            <Avatar img="/towhid.webp" size="xl"/>
        <Card className="object-fill md:h-auto">
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            About Me
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
            I am a software architecture enthusiast; I enjoy optimizing the design of even the simplest of systems to reduce redundancies and enable proper separation of concerns; and hyperfocused on reusability. Now, I am bringing that enthusiasm to large language models and computational social science.  
            <br></br>
            <br></br>
            A perennial student at the crossroads of machine learning and software engineering, I have always been particularly drawn to self-sustainability as a key tenet of software engineering.
            I experienced life as a software engineer starting from my BS/MS at the Rochester Institute of Technology followed by working as a Full-Stack Developer when I transitioned to working on my Ph.D. in Natural Language Processing for Social Good. 
            <br></br>
            <br></br>
            Now, I study challenges toward democratizing the rapidly developing strengths of large language models and bridging the technical gap for societal benefits. My work on enabling software engineering to make AI easy to use for local communities further accentuated my belief that as the theoretical foundations of AI are being pushed, we must not forget the social good applications of this state-of-the-art technology.
            <br></br>
            <br></br>
        </p>
        </Card>
        </div>
    )
}


