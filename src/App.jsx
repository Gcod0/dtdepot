import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import Header from './components/Header'
import Contact from './pages/Contact'
import Blog from './pages/Blog'



function App() {
return (
  <Router>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  </Router>
)}



export default App
