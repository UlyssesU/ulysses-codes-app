import React from 'react'
import Image from 'next/image'
import Mydearestjulia from '../public/assets/mydearestjulia.jpg'
import Ratemylandlord from '../public/assets/ratemylandlord.jpg'

const Projects = () => {
  return (
    <div id='projects' className='w-full min-h-min flex items-center'>
        <div className='max-w-[1240px] w-2/3 h-full py-24 m-auto flex flex-col'>
            <h2 className='tracking-widest text-blue-800 text-left'>Projects</h2>
            <div className='pt-6 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6'>
                <div>
                    <Image src={Mydearestjulia} alt="image of webpage for mydearestjulia.com"></Image>
                    <h3>MyDearestJulia</h3>
                    <p>A YouTubers homepage, built with React </p>
                    <a href="https://mydearestjulia.com/"><h4 className='hover:font-bold hover:scale-105 ease-in duration-100'>Visit project {'>'}</h4> </a>
                </div>
                <div>
                    <Image src={Ratemylandlord} alt="image of webpage for ratemylandlord.com"></Image>
                    <h3>RateMyLandlord</h3>
                    <p>A mock review website, where people can review and rate landlords they&apos;ve rented from, similar to ratemyprofessor.com. Built using Py4web, Bulma, and Vue.js.</p>
                    <a href="https://github.com/UlyssesU/rateMyLandlord/tree/main"><h4 className='hover:font-bold hover:scale-105 hover: ease-in duration-100'>Visit Github repo {'>'}</h4> </a>
                </div>
                <div>
                    
                    <h3>Incident Reporting</h3>
                    <p>A mobile app that helps locate and alert people of fires through crowdsourcing and geolocation. Built using Flutter and Firebase.</p>
                    <a href="https://github.com/rivatadutta/Report-Wildfires/tree/main"><h4 className='hover:font-bold hover:scale-105 hover: ease-in duration-100'>Visit Github repo {'>'}</h4> </a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Projects