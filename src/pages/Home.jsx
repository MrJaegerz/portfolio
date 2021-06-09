import React, { useEffect } from 'react'
import Typewriter from 'typewriter-effect';
import Aos from 'aos'
import 'aos/dist/aos.css'

export default function Home() {
    useEffect(() => {
        Aos.init({
            duration: 2000
        })
    }, [])
    return (
        <section id="home" data-aos='fade'>
            <div className='home-name'>
                    <h1 style={{ fontSize: 64, margin: 0, width: 360 }}>Aime KSMK</h1>
                    <p style={{ display: 'flex', fontSize: 26, marginTop: 10 }}>I'm‎‎‏‏‎ ‎
                    <Typewriter
                            options={{
                                strings: ['Developper', 'Strong'],
                                autoStart: true,
                                loop: true,
                            }}
                        />
                    </p>
            </div>
        </section>
    )
}