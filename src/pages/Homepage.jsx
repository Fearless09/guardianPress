import Carousel from '../component/Carousel'
import HomeNews from '../component/HomeNews'

function Homepage({ news, breakingNews, politicsNews, sportNews, businessNews, techNews, setCategory }) {

    return (
        <>
            <Carousel news={breakingNews} />
            <HomeNews news={news} topic={`today's news`} setCategory={setCategory} />
            <HomeNews news={politicsNews} topic={`politics`} setCategory={setCategory} />
            <HomeNews news={sportNews} topic={`sport`} setCategory={setCategory} />
            <HomeNews news={businessNews} topic={`business`} setCategory={setCategory} />
            <HomeNews news={techNews} topic={`tech`} setCategory={setCategory} />
        </>
    )
}

export default Homepage
