import React, { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'
import FormContact from '../components/FormContact'
import MapLocation from '../components/MapContainer'

export default function Contact() {
    useEffect(() => {
        Aos.init({
            duration: 2000
        })
    }, [])
    return (
        <section id='contact' className='container' data-aos='fade'
            style={{
                backgroundColor: '#FFF7F7'
                // height: '110vh' 
            }}>
            <div className='content'>
                <div className='row'>
                    <div>
                        <h1>Contact</h1>
                        <p>
                            Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit.
                            Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.
                        </p>
                    </div>

                    <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                        <FormContact />
                    </div>
                </div>
            </div>
        </section>
    )
}