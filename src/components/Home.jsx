import React, { useState } from 'react'
import Typewriter from 'typewriter-effect';


export default function Home() {

    return (
        <section id="home">
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