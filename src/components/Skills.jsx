import React, { useState } from "react";

function Skills() {

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

    var i = 0;
    function move() {
        if (i == 0) {
            i = 1;
            var elem = document.getElementById("myBar");
            var width = 1;
            var id = setInterval(frame, 10);
            function frame() {
                if (width >= 100) {
                    clearInterval(id);
                    i = 0;
                } else {
                    width++;
                    elem.style.width = width + "%";
                }
            }
        }
    }

    return (
        <div style={{ width: '100%' }}>
            <h2>Skills</h2>
            <div className='content-separator'>
                <div style={{ width: '47%' }}>
                    {skills.map((skill, key) => {
                        if (skill.id % 2 === 0) {
                            return (
                                <div style={{ marginBottom: 20 }} >
                                    <div className="skills-bars">
                                        <span>{skill.name}</span>
                                        <div style={{ width: '100%', background: 'rgba(255,225,225,0.2595413165266106)', borderRadius: 30 }}>
                                            <div className="skill-bar" id={'skill-' + skill.id}></div>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    })}
                </div>
                <div style={{ width: '47%' }}>
                    {skills.map((skill, key) => {
                        if (skill.id % 2 !== 0) {
                            return (
                                <div style={{ marginBottom: 20 }} >
                                    <div className="skills-bars">
                                        <span>{skill.name}</span>
                                        <div style={{ background: 'rgba(255,225,225,0.2595413165266106)', borderRadius: 30 }}>
                                            <div className="skill-bar" id={'skill-' + skill.id}></div>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    })}
                </div>
            </div>
        </div>
    )
}

export default Skills
