import React from 'react'

const education = [
    {
        id: 1,
        name: 'Founder BlaBlaLand',
        years: '2021 - Now',
        location: 'Rochester Institute of Technology, Rochester, NY',
        task1: 'Qui deserunt veniam. Et sed aliquam labore tempore sed quisquam iusto autem sit.',
        task2: 'Qui deserunt veniam. Et sed aliquam labore tempore sed quisquam iusto autem sit.',
        task3: 'Qui deserunt veniam. Et sed aliquam labore tempore sed quisquam iusto autem sit.',
        task4: 'Qui deserunt veniam. Et sed aliquam labore tempore sed quisquam iusto autem sit.'
    },
    {
        id: 2,
        name: 'FullStack Developer',
        years: '2006 - 2010',
        location: 'Rochester Institute of Technology, Rochester, NY',
        task1: 'Qui deserunt veniam. Et sed aliquam labore tempore sed quisquam iusto autem sit.',
        task2: 'Qui deserunt veniam. Et sed aliquam labore tempore sed quisquam iusto autem sit.',
        task3: 'Qui deserunt veniam. Et sed aliquam labore tempore sed quisquam iusto autem sit.',
        task4: 'Qui deserunt veniam. Et sed aliquam labore tempore sed quisquam iusto autem sit.'
    },
]

export default function LeftResume() {

    return (
        <div style={{ marginBottom: 20 }}>
            <div>
                <h2 style={{ marginBottom: 10 }}>Education</h2>
                <div style={{
                    padding: '20px', marginTop: '-2px',
                    borderLeft: '2px solid rgba(255, 57, 57, 1)', position: 'relative'
                }}>
                    {education.map((result, key) => {
                        return (
                            <div style={{}}>
                                <h3>{result.name}</h3>
                                <p>{result.years}</p>
                                <span>{result.location}</span>
                                <span>{result.details}</span>
                                <div>
                                    <div>
                                        <i className='fas fa-chevron-right'></i>
                                        <span>{result.task1}</span>
                                    </div>
                                    <div>
                                        <i className='fas fa-chevron-right'></i>
                                        <span>{result.task2}</span>
                                    </div>
                                    <div>
                                        <i className='fas fa-chevron-right'></i>
                                        <span>{result.task3}</span>
                                    </div>
                                    <div>
                                        <i className='fas fa-chevron-right'></i>
                                        <span>{result.task4}</span>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}