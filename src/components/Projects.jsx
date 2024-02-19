import React from 'react'
import Image from 'next/image'
import Mydearestjulia from '../public/assets/mydearestjulia.jpg'
import Ratemylandlord from '../public/assets/ratemylandlord.jpg'
import Myportfolio from '../public/assets/myportfolio.jpg'
import Incidentreporting from '../public/assets/incidentreporting.jpg'

const Projects = () => {
  return (
    <div id='projects' className='w-full min-h-min flex items-center'>
        <div className='max-w-[1240px] w-2/3 h-full py-24 m-auto flex flex-col'>
            <h2 className='tracking-widest text-blue-800 text-left'>Projects</h2>
            <div className='pt-6 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 [&:hover>div]:opacity-50'>
                <div className='hover:!opacity-100 shadow-lg rounded'>
                    <a href="https://github.com/UlyssesU/ulysses-codes-app">
                        <h3 className='text-center'>Portfolio Webpage</h3>
                        <Image src={Myportfolio} alt="image of webpage for ulyssescodes.dev"></Image>
                        <div className='hover:scale-105 ease-in duration-100 px-4 py-4'>
                            <p>This is the webpage you are currently vistiting. Built using Javascript, HTML, and Tailwind.</p>
                            <h4>Explore Github repo {'>'}</h4>
                        </div>
                    </a>
                </div>
                <div className='hover:!opacity-100 shadow-lg rounded'>
                    <a href="https://mydearestjulia.com/">
                        <h3 className='text-center'>MyDearestJulia Website</h3>
                        <Image src={Mydearestjulia} alt="image of webpage for mydearestjulia.com"></Image>
                        <div className='hover:scale-105 ease-in duration-100 px-4 py-4'>
                            <p>A YouTubers homepage, built using React, HTML, and CSS</p>
                            <h4>Explore project {'>'}</h4>
                        </div>
                    </a>    
                </div>
                <div className='hover:!opacity-100 shadow-lg rounded'>
                    <a href="https://github.com/UlyssesU/rateMyLandlord/tree/main">
                        <h3 className='text-center'>RateMyLandlord Website</h3>
                        <Image src={Ratemylandlord} alt="image of webpage for ratemylandlord.com"></Image>
                        <div className='hover:scale-105 ease-in duration-100 px-4 py-4'>
                            <p>A mock review website, where people can review and rate landlords they&apos;ve rented from, similar to ratemyprofessor.com. Built using Py4web, Bulma, and Vue.js.</p>
                            <h4>Explore Github repo {'>'}</h4>
                        </div>
                    </a>
                </div>
                <div className='hover:!opacity-100 shadow-lg rounded'>
                    <a href="https://github.com/rivatadutta/Report-Wildfires">
                        <h3 className='text-center'>Incident Reporting Mobile App</h3>
                        <Image src={Incidentreporting} alt="image of mobile app for incident reporting"></Image>
                        <div className='hover:scale-105 ease-in duration-100 px-4 py-4'>
                            <p>A mobile app that helps locate and alert people of fires through crowdsourcing and geolocation. Built using Flutter and Firebase.</p>
                            <h4>Explore Github repo {'>'}</h4>
                        </div>
                    </a>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default Projects