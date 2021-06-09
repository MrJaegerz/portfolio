import React from 'react'

const sumary = [
    {
        name: 'Aimé KSMK',
        adress: 'Portland par 127,Orlando, FL',
        number: '+33 6 66 66 66 66',
        email: 'aime.koutsimouka@epitech.eu',
        detail: 'Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit.'
    },
]

const infos = [
    { name: 'Adress', value: 'Portland par 127,Orlando, FL' },
    { name: 'Number', value: '+33 6 66 66 66 66' },
    { name: 'Email', value: 'aime.koutsimouka@epitech.eu' },
]

const education = [
    {
        id: 1,
        name: 'Master of Fine Arts & Graphic Design',
        years: '2010 - 2012',
        institutes: 'Rochester Institute of Technology, Rochester, NY',
        detail: 'Qui deserunt veniam. Et sed aliquam labore tempore sed quisquam iusto autem sit. Ea vero voluptatum qui ut dignissimos deleniti nerada porti sand markend'
    },
    {
        id: 2,
        name: 'Bachelor of Fine Arts & Graphic Design',
        years: '2006 - 2010',
        institutes: 'Rochester Institute of Technology, Rochester, NY',
        detail: 'Qui deserunt veniam. Et sed aliquam labore tempore sed quisquam iusto autem sit. Ea vero voluptatum qui ut dignissimos deleniti nerada porti sand markend'
    },
]

export default function LeftResume() {

    return (
        <div style={{ marginBottom: 20, }}>
            {/* <h2 style={{ marginBottom: 10 }}>Sumary</h2>
            <div style={{ marginBottom: 10 }}>
                <h3 style={{ margin: '0 0' }}>Aimé KSMK</h3>
                <span>Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit.</span>
            </div>
            <div style={{
                padding: '0px 0px 0px 20px', marginTop: '-2px',
                borderLeft: '2px solid rgba(255, 57, 57, 1)', position: 'relative'
            }}>
                {summary.map((result, key) => {
                    return (
                        <div className='details-infos-perso' style={{}}>
                            <i className='fas fa-chevron-right'></i>
                            <span>{result.value}</span>
                        </div>
                    )
                })}
            </div> */}


            <div style={{marginBottom: 35}}>
                <h2 style={{ marginBottom: 10 }}>Sumary</h2>
                <div style={{
                    padding: '0px 0px 0px 20px', marginTop: '-2px',
                    borderLeft: '2px solid rgba(255, 57, 57, 1)', position: 'relative'
                }}>
                    {sumary.map((result, key) => {
                        return (
                            <div style={{}}>
                                <h3>{result.name}</h3>
                                <span>{result.adress}</span>
                                <span>{result.detail}</span>
                                <div>
                                    {infos.map((info, key) => {
                                        return (
                                            <div>
                                                <i className='fas fa-chevron-right'></i>
                                                <span>{info.value}</span>
                                            </div>
                                        )
                                    })}
                                </div>

                            </div>
                        )
                    })}
                </div>
            </div>


            <div>
                <h2 style={{ marginBottom: 10 }}>Education</h2>
                <div style={{
                    padding: '0px 0px 0px 20px', marginTop: '-2px',
                    borderLeft: '2px solid rgba(255, 57, 57, 1)', position: 'relative'
                }}>


                    {education.map((result, key) => {
                        return (
                            <div style={{}}>
                                <h3>{result.name}</h3>
                                <p>{result.years}</p>
                                <span>{result.institutes}</span>
                                <span>{result.detail}</span>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}