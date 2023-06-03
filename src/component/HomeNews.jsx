import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function HomeNews({ news, topic, setCategory }) {

    return (
        <div className='container border rounded border-info pt-2 my-3'>
            <h5 className='text-capitalize mb-0'>{topic}</h5>
            <div>
                {news === undefined || news.length < 1 ? 'No News':
                <div className="row">
                    {/* 1 */}
                    {news[0].fields ? (
                        <div className='col-12 col-lg-6 col-xl-4 my-3'>
                            <div className='rounded bg-light pb-4'>
                                <a href={news[0].webUrl} className='text-decoration-none text-black' target='_blank'>
                                    <img src={news[0].fields.thumbnail} className='img img-fluid w-100 rounded' alt={news[0].webTitle} id='news-img' />
                                    <div className="pt-2 px-3">
                                        <h4>{news[0].webTitle}</h4>
                                        <h6 className='mt-3'>
                                            <span className="bg-info text-white rounded px-2 py-1 text-uppercase" >{news[0].sectionName}</span>
                                            <span className="bg-info text-white rounded px-2 py-1 text-uppercase ms-2" >{news[0].pillarName}</span>
                                        </h6>
                                    </div>
                                </a>  
                            </div>
                        </div>
                    ): ''}
                    {/* 2 */}
                    {news[1].fields ? (
                        <div className='col-12 col-lg-6 col-xl-4 my-3'>
                            <div className='rounded bg-light pb-4'>
                                <a href={news[1].webUrl} className='text-decoration-none text-black' target='_blank'>
                                    <img src={news[1].fields.thumbnail} className='img img-fluid w-100 rounded' alt={news[1].webTitle} id='news-img' />
                                    <div className="pt-2 px-3">
                                        <h4>{news[1].webTitle}</h4>
                                        <h6 className='mt-3'>
                                            <span className="bg-info text-white rounded px-2 py-1 text-uppercase" >{news[1].sectionName}</span>
                                            <span className="bg-info text-white rounded px-2 py-1 text-uppercase ms-2" >{news[1].pillarName}</span>
                                        </h6>
                                    </div>
                                </a>  
                            </div>
                        </div>
                    ): ''}
                    {/* 1 */}
                    {news[2].fields ? (
                        <div className='col-12 col-lg-6 col-xl-4 my-3'>
                            <div className='rounded bg-light pb-4'>
                                <a href={news[2].webUrl} className='text-decoration-none text-black' target='_blank'>
                                    <img src={news[2].fields.thumbnail} className='img img-fluid w-100 rounded' alt={news[2].webTitle} id='news-img' />
                                    <div className="pt-2 px-3">
                                        <h4>{news[2].webTitle}</h4>
                                        <h6 className='mt-3'>
                                            <span className="bg-info text-white rounded px-2 py-1 text-uppercase" >{news[2].sectionName}</span>
                                            <span className="bg-info text-white rounded px-2 py-1 text-uppercase ms-2" >{news[2].pillarName}</span>
                                        </h6>
                                    </div>
                                </a>  
                            </div>
                        </div>
                    ): ''}

                    <div className="col-12 text-center">
                        <Link to={`/category/${topic}`} className="btn btn-info text-white fw-bold my-2" onClick={() => setCategory(`&q=${topic}`)}>SEE MORE</Link>
                    </div>

                </div>
                }
            </div>            
        </div>
    )
}

export default HomeNews
