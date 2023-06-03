import React from 'react'
import Pagination from './Pagination'

function News({ news, page, setPage }) {

    const displayNone = (e) => {
        e.target.parentElement.parentElement.style.display = 'none'
        console.log(e.target.parentElement.parentElement.style)
    }

    return (
        <div className='container'>
            <div className="row">
                {news.map((item) => (
                    <React.Fragment key={item.id}>
                        {/* If Image is present */}
                        {item.fields ? (
                            <div className='col-12 col-lg-6 col-xl-4 my-3'>
                                <div className='rounded bg-light pb-4'>
                                    <a href={item.webUrl} className='text-decoration-none text-black' target='_blank'>
                                        <img src={item.fields.thumbnail} className='img img-fluid w-100 rounded' alt={item.webTitle} id='news-img' />
                                        <div className="pt-2 px-3">
                                            <h4>{item.webTitle}</h4>
                                            <div className='d-flex flex-wrap mt-3'>
                                                <div className="bg-info text-white rounded px-2 py-1 text-uppercase" >{item.sectionName}</div>
                                                <div className="bg-info text-white rounded px-2 py-1 text-uppercase ms-2" >{item.pillarName}</div>
                                            </div>
                                        </div>
                                    </a>  
                                </div>
                            </div>
                        ): ''}
                    </React.Fragment>
                ))}
            </div>
            {news.length > 0 ? <Pagination setPage={setPage} page={page} /> : '' }
        </div>
    )
}

export default News
