import React from 'react'
import Card from "../components/Card"
import Header from "../components/shared/Header"
import Footer from "../components/shared/Footer"
import "./Home.css"

export default function Home() {
  return (
    <div id="main-box">
      <Header />
      <div id="main-card-box">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <Footer />
    </div>
  )
}
