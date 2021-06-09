import React from 'react';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import ramen from '../assets/img/preloader-ramen.gif'
import battleship from '../assets/img/battleship.gif'
import snapchat from '../assets/img/snapchat.gif'



export default function Slideshow() {

    const fadeImages = [
        ramen,
        ramen,
        ramen
    ];
    const datas = [
        {
            id: 1,
            title: "Snapchat",
            date: "24-05 au 28-05",
            languages: ["React", "Php", "Sass"],
            infos:
                "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas cumque labore suscipit, pariatur laboriosam autem omnis saepe quisquam enim iste.",
            img: snapchat,
            link: "#",
        },
        {
            id: 2,
            title: "Quizz",
            date: "03-05 au 15-05",
            languages: ["Symfony", "MySQL"],
            infos:
                "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas cumque labore suscipit, pariatur laboriosam autem omnis saepe quisquam enim iste.",
            img: ramen,
            link: "#",
        },
        {
            id: 3,
            title: "Free Ads",
            date: "19-04 au 25-04",
            languages: ["Laravel", "MySQL"],
            infos:
                "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas cumque labore suscipit, pariatur laboriosam autem omnis saepe quisquam enim iste.",
            img: ramen,
            link: "#",
        },
        {
            id: 4,
            title: "BattleShip",
            date: "22-03 au 28-03",
            languages: ["JavaScript"],
            infos:
                "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas cumque labore suscipit, pariatur laboriosam autem omnis saepe quisquam enim iste.",
            img: battleship,
            link: "#",
        }
    ]
    
    return (
        <section id='portfolio' className='container' data-aos='fade'>
            <div className="slide-container">
                <div style={{ width : 500}}>
                <Fade>
                {datas.map((data, key) => {
                return (
                    <div className="each-fade">
                        <div className="image-container" style={{display: 'inline-block'}}>
                            <img src={data.img} style={{width: '100%', verticalAlign: 'middle'}}/>
                        </div>
                        {/* <h2 style={{margin: 0}}>{data.title}</h2> */}
                    </div>
                )
                })}
                </Fade>
                </div>
            </div>
        </section>
    )
}
