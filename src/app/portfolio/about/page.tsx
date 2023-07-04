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
            As a graduate student studying at the intersection of AI and Software Engineering, I have always been particularly drawn to the proverb - "Give a man a fish you feed him for a day, teach a man how to fish you feed him for a lifetime."

            Self-sustainability is a key tenet of software engineering that became my passion as I gained experience as a software engineer from my undergraduate education and experience working in the industry. This passion has led me on my journey to transition from software engineering to working on my Ph.D. in the field of AI for Social Good, as I study challenges toward democratizing the rapidly developing strengths of large language models for societal benefits.
            My work on enabling software engineering to make AI easy to use for local communities further accentuated my belief that as the theoretical foundations of AI are being pushed, we must not forget the social good applications of this state-of-the-art technology. 
        </p>
        </Card>
        </div>
    )
}


