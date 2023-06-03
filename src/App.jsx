import { useState, useEffect } from 'react'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Homepage from './pages/Homepage'
import Navbar from './component/Navbar'
import NewsCategory from './component/NewsCategory'
import Category from './pages/Category'
import ScrollToTop from './ScrollToTop'
import Footer from './component/Footer'
import AboutUS from './pages/AboutUS'

function App() {

  const [category, setCategory] = useState('')
  // &q=
  const [page, setPage] = useState(1)
  
  // NEWS
  const [news, setNews] = useState('')
  const [politicsNews, setPoliticsNews] = useState('')
  const [sportNews, setSportNews] = useState('')
  const [businessNews, setBusinessNews] = useState('')
  const [techNews, setTechNews] = useState('')
  const [breakingNews, setBreakingNews] = useState('wordiply')

  // console.log(news)
  // console.log(politicsNews)

  const fetchNews = () => {
    fetch(`https://content.guardianapis.com/search?show-fields=thumbnail&page=${page}&page-size=15${category}&api-key=6b3c485c-856c-4ac4-b214-4067fd162976`)
      .then(res => res.json())
      .then(data => {
        setNews(data.response.results)
        // setBreakingNews(data.response.results)
      }) 
  }

  const fetchPoliticsNews = () => {
    fetch(`https://content.guardianapis.com/search?show-fields=thumbnail&page=${page}&page-size=15&q=politics&api-key=6b3c485c-856c-4ac4-b214-4067fd162976`)
      .then(res => res.json())
      .then(data => setPoliticsNews(data.response.results)) 
  }

  const fetchSportNews = () => {
    fetch(`https://content.guardianapis.com/search?show-fields=thumbnail&page=${page}&page-size=15&q=sport&api-key=6b3c485c-856c-4ac4-b214-4067fd162976`)
      .then(res => res.json())
      .then(data => setSportNews(data.response.results)) 
  }

  const fetchBusinessNews = () => {
    fetch(`https://content.guardianapis.com/search?show-fields=thumbnail&page=${page}&page-size=15&q=business&api-key=6b3c485c-856c-4ac4-b214-4067fd162976`)
      .then(res => res.json())
      .then(data => setBusinessNews(data.response.results)) 
  }

  const fetchTechNews = () => {
    fetch(`https://content.guardianapis.com/search?show-fields=thumbnail&page=${page}&page-size=15&q=technology&api-key=6b3c485c-856c-4ac4-b214-4067fd162976`)
      .then(res => res.json())
      .then(data => setTechNews(data.response.results)) 
  }
  
  const fetchBreakingNews = () => {
    fetch(`https://content.guardianapis.com/search?show-fields=thumbnail&page=${page}&page-size=3&q=${breakingNews}&api-key=6b3c485c-856c-4ac4-b214-4067fd162976`)
      .then(res => res.json())
      .then(data => setBreakingNews(data.response.results)) 
  }

  useEffect(() => {
    fetchNews()
    fetchBreakingNews()
    fetchPoliticsNews()
    fetchSportNews()
    fetchBusinessNews()
    fetchTechNews()
  }, [])

  useEffect(() => {
    fetchNews()
  }, [category, page])

  return (
    <>
      <Router>
        <Navbar setCategory={setCategory} setPage={setPage} />
        <NewsCategory setCategory={setCategory} setPage={setPage} />
        <ScrollToTop />
        <Routes>
          <Route index element={
            <Homepage news={news} breakingNews={breakingNews} politicsNews={politicsNews} sportNews={sportNews} businessNews={businessNews} techNews={techNews} setCategory={setCategory} />
          } />

          <Route path='/category/:category' element={
            <Category news={news} page={page} setPage={setPage} setCategory={setCategory} />
          } />

          <Route path='/aboutus' element={<AboutUS />} />
        </Routes>
        <Footer />
      </Router>  
    </>
  )
}

export default App
