import React from 'react'
import { Link } from 'react-router-dom';

function NewsCategory({ setCategory, setPage }) {

    const date = new Date();
    const options = { month: 'long', day: 'numeric' };
    const formattedDate = date.toLocaleString('en-US', options);
    // console.log(date); // Output: May 29

    function handleCategory(e) {

        if(e.target.textContent == formattedDate){
            setCategory('')
        } else {
            setCategory(`&q=${e.target.textContent}`)
        }

        setPage(1)

        // const categoryArray = Array.from(e.target.parentElement.parentElement.children)

        // for(const x in categoryArray) {
        //     if(categoryArray[x].children[0].classList.contains('btn-outline-info')){
        //         categoryArray[x].children[0].classList.remove('btn-outline-info')
        //     }
        // }

        // e.target.classList.add('btn-outline-info')
    }


    return (
        <div className='container-fluid avoidNav pt-4'>
            <div className="row justify-content-center">
                <div className="col text-center" style={{minWidth: 'max-content'}}>
                    <Link to={`/category/Today's News`} className="btn btn-outline-info fw-semibold text-uppercase" onClick={handleCategory}>
                        <div id="daily"></div>
                        {formattedDate}
                    </Link>
                </div>

                <div className="col text-center" style={{minWidth: 'max-content'}}>
                    <Link to={`/category/World News`} className="btn fw-semibold" type="Link" onClick={handleCategory}>World News</Link>
                    {/* setCategory('&q=') */}
                </div>

                <div className="col text-center" style={{minWidth: 'max-content'}}>
                    <Link to={`/category/Politics`} className="btn fw-semibold" type="Link" onClick={handleCategory}>Politics</Link>
                </div>

                <div className="col text-center" style={{minWidth: 'max-content'}}>
                    <Link to={`/category/Business`} className="btn fw-semibold" type="Link" onClick={handleCategory}>Business</Link>
                </div>

                <div className="col text-center" style={{minWidth: 'max-content'}}>
                    <Link to={`/category/Technology`} className="btn fw-semibold" type="Link" onClick={handleCategory}>Technology</Link>
                </div>

                <div className="col text-center" style={{minWidth: 'max-content'}}>
                    <Link to={`/category/Entertainment`} className="btn fw-semibold" type="Link" onClick={handleCategory}>Entertainment</Link>
                </div>

                <div className="col text-center" style={{minWidth: 'max-content'}}>
                    <Link to={`/category/Sport`} className="btn fw-semibold" type="Link" onClick={handleCategory}>Sport</Link>
                </div>

                <div className="col text-center" style={{minWidth: 'max-content'}}>
                    <Link to={`/category/Health`} className="btn fw-semibold" type="Link" onClick={handleCategory}>Health</Link>
                </div>

                <div className="col text-center" style={{minWidth: 'max-content'}}>
                    <Link to={`/category/Science`} className="btn fw-semibold" type="Link" onClick={handleCategory}>Science</Link>
                </div>

                <div className="col text-center" style={{minWidth: 'max-content'}}>
                    <Link to={`/category/Lifestyle`} className="btn fw-semibold" type="Link" onClick={handleCategory}>Lifecycle</Link>
                </div>

                <div className="col text-center" style={{minWidth: 'max-content'}}>
                    <Link to={`/category/Opinion%20%2F%20Editorial`} className="btn fw-semibold" type="Link" onClick={handleCategory}>Opinion / Editorial</Link>
                </div>

                <div className="col text-center">
                    <Link to={`/category/Article`} className="btn fw-semibold" onClick={handleCategory}>Article</Link>
                </div>
                <div className="col text-center">
                    <Link to={`/category/Archive`} className="btn fw-semibold" onClick={handleCategory}>Archive</Link>
                </div>
            </div>
            <hr className='text-info mt-2' />
        </div>
    )
}

export default NewsCategory
