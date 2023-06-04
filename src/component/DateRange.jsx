import React, { useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'

function DateRange({ catValue, setCategory, setPage }) {
    const [searchBox, setSearchBox] = useState('')
    const isDisable = searchBox === '' ? 'disabled' : ''

    const navigate = useNavigate()

    const searchFunction = () => {
        setCategory(`&q=${searchBox}`)
        setPage(1)
        setSearchBox('')
    }

    const enterKey = e => {
        if(e.key === 'Enter') {
            // e.preventDefault()
            searchFunction()
            navigate(`/category/${searchBox}`)        
        }
    }

    return (
        <div className='container mt-4'>
            <div className="d-flex flex-column-reverse flex-sm-row justify-content-between align-items-sm-end">
                {/* New Category Displayed */}
                <h5 className='text-uppercase mt-3 mt-sm-0'>{catValue}</h5>

                <div className="hstack align-items-end ms-sm-3">
                    {/* Saerch Title */}
                    <div className="overflow-hidden d-inline">
                        <input className="form-control border-info" type="search" placeholder="Search for your news" id="example-search-input" value={searchBox} onChange={(e) => setSearchBox(e.target.value)} onKeyPress={enterKey} required />
                    </div>
                    <Link to={`/category/${searchBox}`} className={`btn btn-info text-white ms-2 ${isDisable}`} onClick={searchFunction}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                        </svg>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default DateRange
