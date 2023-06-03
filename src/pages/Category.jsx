import React from 'react'
import { useParams } from 'react-router'
import News from '../component/News'
import DateRange from '../component/DateRange'

function Category({ news, setPage, page, setCategory }) {

    let categoryPassed = useParams()
    let catValue = categoryPassed.category

    return (
        <>
            <DateRange catValue={catValue} setCategory={setCategory} />
            <News news={news} setPage={setPage} page={page} />
        </>
    )
}

export default Category
