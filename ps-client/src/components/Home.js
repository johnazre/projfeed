import React from 'react'

const Home = () => {
  return (
    <header className="masthead">
      <div className="container">
        <div className="intro-text">
          <div className="intro-lead-in">Welcome To Projfeed!</div>
          <div className="intro-heading text-uppercase">Give and recieve feedback with ease!</div>
          <a
            className="btn btn-primary btn-xl text-uppercase js-scroll-trigger"
            href="/signup">Create an account now!</a>
        </div>
      </div>
    </header>
  )
}

export default Home
