import React from 'react'
import battleship from '../assets/img/battleship.gif'
import snapchat from '../assets/img/snapchat-logo.png'
import quizz from '../assets/img/quizz.png'
import leboncoin from '../assets/img/leboncoin.jpg'

export default function ProjectsData() {

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
            img: quizz,
            link: "#",
        },
        {
            id: 3,
            title: "Free Ads",
            date: "19-04 au 25-04",
            languages: ["Laravel", "MySQL"],
            infos:
                "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas cumque labore suscipit, pariatur laboriosam autem omnis saepe quisquam enim iste.",
            img: leboncoin,
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
        <div className="">
            {datas.map((data, key) => {
                return (
                    <div style={{display: 'flex'}}>
                        <div>
                            <img src={data.img} style={{ width: 140 }}></img>
                        </div>
                        <div>
                            <h2 style={{margin: 0}}>{data.title}</h2>
                            <span>{data.date}</span>
                            <p>{data.infos}</p>
                        </div>
                        {/* <p>{data.languages}</p> */}
                    </div>
                )
            })}
        </div>
    )
}