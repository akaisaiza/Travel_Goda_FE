import React from 'react';
import './dist/home.css'
import bacgroud from '../../Assets/backgroud.jpg'
const Home = () => {
    return(
        <>
            <section>
                <div className="overlay"></div>
                <img src={bacgroud} alt="" />
            </section>
        </>
    )
}
export default Home