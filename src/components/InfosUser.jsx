import React from 'react'
import logo from '../assets/img/Capture.PNG'
import kunai from '../assets/img/kunai.gif'

function InfosUser() {

    const infos = [
        { id: 1, name: 'Birthday', value: '01/01/1994', class: 'fas fa-chevron-right' },
        // { id: 2, name: 'Website', value: 'http://www.google.com', class: 'fas fa-chevron-right' },
        { id: 3, name: 'Phone', value: '+123 456 7890', class: 'fas fa-chevron-right' },
        { id: 4, name: 'City', value: 'Paris, France', class: 'fas fa-chevron-right' },
        // { id: 5, name: 'Age', value: 26, class: 'fas fa-chevron-right' },
        { id: 6, name: 'Degree', value: 'BTEC', class: 'fas fa-chevron-right' },
        { id: 7, name: 'Email', value: 'aime.koutsimouka@epitech.eu', class: 'fas fa-chevron-right' },
        { id: 8, name: 'Freelane', value: 'Not Available', class: 'fas fa-chevron-right' },
    ]
    return (
        <div className='infos-perso'>
            <div>
                <img src={logo} id='about-img-profile'></img>
            </div>
            <div className='content-infos'>
                <div>
                    <h2>Web Developer</h2>
                    <span>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua.
                </span>
                </div>
                <div style={{display: 'flex'}}>
                </div>
                <div className='content-separator'>
                    <div>
                        {infos.map((result, key) => {
                            if (result.id % 2 === 0) {
                                return (
                                    <div className='details-infos-perso' style={{marginTop: '-50px'}}>
                                        <img src={kunai} style={{ width: 75, transform: 'rotate(55deg)' }}></img>
                                        <p style={{ paddingTop: 13 }}>{result.name} : {result.value}</p>
                                        {/* <i className={result.class}></i>
                                        <span>{result.name} : {result.value}</span> */}
                                    </div>
                                )
                            }
                        })}
                    </div>
                    <div>
                        {infos.map((result, key) => {
                            if (result.id % 2 !== 0) {
                                return (
                                    <div className='details-infos-perso' style={{marginTop: '-50px'}}>
                                        <img src={kunai} style={{ width: 75, transform: 'rotate(55deg)' }}></img>
                                        <p style={{ paddingTop: 13 }}>{result.name} : {result.value}</p>
                                        {/* <i className={result.class}></i>
                                        <span>{result.name} : {result.value}</span> */}
                                    </div>
                                )
                            }
                        })}
                    </div>
                </div>
                <span>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua.
                </span>
            </div>
        </div>
    )
}

export default InfosUser
