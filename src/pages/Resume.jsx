import React, { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'
import LeftResume from '../components/LeftResume'
import RightResume from '../components/RightResume'

export default function Resume() {

    useEffect(() => {
        Aos.init({
            duration: 2000
        })
    }, [])

    return (
        <section id='resume' className='container' data-aos='fade'
            style={{ backgroundColor: '#FFF7F7',
            }}>
            <div className='content'>
                <div className='row'>
                    <div>
                        <h1>Resume</h1>
                        <p>
                            Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid
                            fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate.
                            Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi
                            quidem hic quas.
                        </p>
                    </div>
                    <div className='content-separator'>
                        <div style={{ width: '35%' }}>
                            <LeftResume />
                        </div>
                        <div style={{ width: '60%' }}>
                            <RightResume />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}