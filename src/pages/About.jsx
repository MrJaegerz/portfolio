import React, { useState, useEffect } from "react";
import Infos from '../components/InfosUser'
import Skills from '../components/Skills'
import Aos from 'aos'
import 'aos/dist/aos.css'

function About() {

    const [skillAnimation, setSkillAnimation] = useState(false)

    const skills = [
        { id: 1, name: 'HTML/CSS', value: 90 },
        { id: 2, name: 'JavaScript', value: 80 },
        { id: 3, name: 'PHP', value: 85 },
        { id: 4, name: 'MYSQL', value: 80 },
        { id: 5, name: 'React', value: 75 },
        { id: 6, name: 'Laravel', value: 60 },
        { id: 7, name: 'Symfony', value: 60 },
        { id: 8, name: 'NodeJs', value: 60 },
    ]

    function move() {
        skills.map((skill) => {
            var i = 0;
            if (i === 0) {
                i = 1;
                var elem = document.getElementById(`skill-${skill.id}`);
                var width = 1;
                var id = setInterval(frame, 10);
                function frame() {
                    if (width >= skill.value) {
                        clearInterval(id);
                        i = 0;
                    } else {
                        width++;
                        elem.style.width = width + "%";
                    }
                }
            }
        })
        setSkillAnimation(true)
    }

    useEffect(() => {
        Aos.init({
            duration: 2000
        })
    }, [])

    return (
        <section id='about' className='container' data-aos='fade'
            onMouseEnter={()=>{
                if (!skillAnimation) {
                    move()
                }
            }}
        >
            <div className='content'>
                <div className='row'>
                    <div>
                        <h1>About</h1>
                        <p>
                            Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid
                            fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate.
                            Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi
                            quidem hic quas.
                        </p>
                    </div>
                    <Infos />
                    <Skills />
                    <a href='https://drive.google.com/file/d/1qUxven5O6Pl5MtTUe0Cs-ycoAZL45TUF/view?usp=sharing' target="_blank" download>Click for watch my CV</a>
                </div>
            </div>
        </section>
        // <div>
        //     <Infos />
        // </div>
    )
}

export default About
