'use client';

import { Accordion, Modal} from 'flowbite-react';
import { useState } from 'react';

export default function Projects() {
    const [openModal, setOpenModal] = useState<string | undefined>();
    const props = { openModal, setOpenModal };
    return (
        <Accordion className='m-20'>
            <Accordion.Panel>
            <Accordion.Title className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Citizenly App
            </Accordion.Title>
            <Accordion.Content>
            <div className='grid grid-flow-row-dense grid-cols-3 grid-rows-1'>
                <img
                src="/images/screenshot.webp"
                alt="App screenshot"
                className="max-w-xs col-span-1"
                />
                <div className="col-span-2 text-justify break-words">
                <p>
                The Citizenly application, which runs on mobile devices, enables
                active citizen participation in the data collecting and
                consumption process while resolving long-standing challenges with
                reliable data collection at scale. Residents are actively
                encouraged to contribute to the continuous development of relevant
                and implicit neighborhood knowledge. Residents of the community
                are the primary users and beneficiaries of this data. Residents
                will be able to view both citizen-generated data and data from
                sources like DataROC through the app. This will assist residents
                in using data to make educated decisions in their community.
                Residents can participate in discussions regarding neighborhood
                initiatives and contribute information by filling out surveys. The
                app is still in its early phases of development.
                
                <br></br>
                <br></br>
                Click below to watch the app demo
                </p>
                <img
                src="/images/video-thumbnail.jpg"
                alt="play button"
                width={150}
                height={110}
                style={{
                    borderRadius: "10px",
                    cursor: "pointer",
                }}
                onClick={() => props.setOpenModal('default')}
                />
                <Modal className='w-xs h-auto' show={props.openModal === 'default'} onClose={() => props.setOpenModal(undefined)}>
                    <Modal.Header>App Demo</Modal.Header>
                    <Modal.Body>
                    <video className='w-xs max-h-xs max-w-xs' controls>
                        <source src="/videos/citizenly-demo.webm" type="video/mp4"/>
                    </video>
                    </Modal.Body>
                </Modal>
                </div>
            </div>
            </Accordion.Content>
            </Accordion.Panel>
            <Accordion.Panel>
                <Accordion.Title className='text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
                    CityKG
                </Accordion.Title>
                <Accordion.Content>
                Encyclopedic knowledge graphs are often used in the training and development of state-of-the-art AI tasks such as question answering, recommendation systems, and language modeling. Due to the rise in AI for Social Good, these tasks are often focused on city and community development. This added focus requires more contextual and city-specific information that generalized knowledge graphs (DBPedia, Yago, Wikidata.org) often lack. The challenge for the development of city-specific AI models is the lack of such data. To fulfill this lack of specificity in city data, we present CityKG - a collection of city-specific knowledge graphs of over 50 cities worldwide. CityKG provides a comprehensive semantic representation of notable entities present in a city and entities defining concepts specific to a city.
                <br></br>
                <a href="https://github.com/towhidabsar/citykg" className='text-blue-500'>Click Here For Github</a>
                </Accordion.Content>
            </Accordion.Panel>
            <Accordion.Panel>
                <Accordion.Title className='text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
                    RocReadAR
                </Accordion.Title>
                <Accordion.Content>
                <img
                src="/images/rocreadar.jpeg"
                alt="RocReadAR poster"
                className="w-full"
                />
                </Accordion.Content>
            </Accordion.Panel>
        </Accordion>

    )
}


