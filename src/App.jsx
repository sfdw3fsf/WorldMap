import { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Product from './pages/Product'
import Homepage from './pages/Homepage'
import Pricing from './pages/Pricing'
import PageNotFound from './pages/PageNotFound'
import AppLayout from './pages/AppLayout'
import Login from './pages/Login'
// import { useState, useEffect } from 'react'
import CityList from './components/CityList'
import CountryList from './components/CountryList'
import City from './components/City'
import Form from "./components/Form"
function App() {
  const [cities, setCities] = useState([]);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    async function getCitiesData() {
      try {
        setLoading(true)
        const res = await (fetch('http://localhost:9000/cities'))
        const data = await res.json();
        setCities(data);
      } catch (error) {
        alert("There was an error loading ")
      } finally {
        setLoading(false)
      }

    }
    getCitiesData();
  }, [])
  return (

    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="product" element={<Product />} />
          <Route path="price" element={<Pricing />} />
          <Route path="app" element={<AppLayout />} >
            <Route path="cities" element={<CityList cities={cities} isLoading={isLoading} />} />
            <Route path="countries" element={<CountryList cities={cities} />} />
            <Route path="cities/:id" element={<City />} />
            <Route path="form" element={<Form />} />
          </Route>
          <Route path="login" element={<Login />} />
          <Route path="*" element={<PageNotFound />} />

        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
