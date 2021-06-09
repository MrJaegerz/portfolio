import React, { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'
import ProjectsData from '../components/ProjectsData'

export default function Portfolio() {
    useEffect(() => {
        Aos.init({
            duration: 2000
        })
    }, [])
    return (
        <section id='portfolio' className='container' data-aos='fade'>
            <div className='content'>
                <div className='row'>
                    <div>
                        <h1>Portfolio</h1>
                        <p>
                        Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. 
                        Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. 
                        Quia fugiat sit in iste officiis commodi quidem hic quas.
                        </p>
                    </div>
                    <div>
                        <ProjectsData/>
                    </div>
                </div>
            </div>
        </section>
    )
}