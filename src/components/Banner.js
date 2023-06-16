import React from 'react'
import { Button } from './Button';
import '../styles/Banner.css'
import '../App.css'
import BannerVideo from '../videos/video-2.mp4';
const Banner = () => {
    return (
        <>
            <div className='banner'>
                <video src={BannerVideo} autoPlay loop muted />
                <h1> ADVENTURE AWAITS </h1>
                <p>What are you waiting for?</p>
                <div className='banner-btns'>
                    <Button
                        className='btns'
                        buttonStyle='btn--outline'
                        buttonSize='btn--large'>
                        GET STARTED
                    </Button>
                    <Button
                        className='btns'
                        buttonStyle='btn--primary'
                        buttonSize='btn--large'>
                        WATCH TRAILER <i className='far fa-play-circle'></i>
                    </Button>
                </div>
            </div>
        </>
    );
};

export default Banner;