import React, { useState } from 'react'
import '../../App.css';
import '../../styles/about.css'
import Footer from '../Footer';
import '../../styles/Button.css'
// import { Link } from 'react-router-dom';
// import img from "../../images/img-1.jpg";
// import { Button } from '../Button';

const About = () => {
    const [showMore, setShowMore] = useState(false);

    const handleReadMore = () => {
        setShowMore(!showMore);
    };

    const [activeSection, setActiveSection] = useState(null);

    const handleSectionClick = (section) => {
        setActiveSection(section);
    };

    const sectionData = {
        vision:
            'Our vision is to create a better world through innovative solutions.',
        mission:
            'Our mission is to empower individuals and businesses to achieve their full potential.',
        objectives:
            'Our objectives include delivering exceptional products, providing excellent customer service, and fostering a culture of continuous learning.',
    };

    return (
        <>
            <div className="about-us">
                <h2>About Us</h2>
                <p>
                    ANUBHUTI means inner vibes. “ANUBHUTI RASAYA”- Unleashing the Essence of Construction Chemicals. As a trailblazing construction chemical company, we have revolutionized the industry with our unparalleled dedication and visionary approach. At ANUBHUTI , we have etched our name in the annals of India's construction landscape. With awe-inspiring projects that have redefined the nation's progress, we have become synonymous with quality, affordable and economic design and infrastructure work across the country.
                    {showMore && (
                        <>
                            <p>
                                Our passion for creative engineering knows no bounds. With every
                                passing year, we surpass previous milestones and carve new paths of
                                innovation. Fuelled by an unwavering commitment to building world-
                                class infrastructure, we breathe life into dreams and open doors to
                                endless possibilities for all.
                            </p>
                            <br></br>
                            <p>
                                Research and analysis are the pillars that uphold our foundation. We
                                strive to create the perfect blend of cost-effectiveness and regulatory
                                compliance, tailored precisely to meet the unique needs of our
                                customers. Our designs are not just structures; they are masterpieces
                                that blend artistry and functionality seamlessly.
                            </p>
                            <br></br>
                            <p>
                                As we ascend the value chain, we embark on a new chapter in our
                                journey. ANUBHUTI has gracefully entered the construction world,
                                expanding horizons and pushing boundaries. Our expertise shines
                                through in our collaboration with the Government of India, where we are
                                at the forefront of developing premium projects in diverse corners of the
                                state. We are driven by a relentless pursuit of excellence, with a
                                steadfast goal of becoming one of India’s most esteemed companies.
                            </p>
                            <br></br>
                            <p>
                                “ANUBHUTI RASAYA” transcends the realm of construction chemicals.
                                We are creators, visionaries, and agents of change. With cutting-edge
                                technology at our fingertips and sustainability at our core, we shape the
                                landscape of tomorrow. Every project we undertake is an exquisite
                                tapestry woven with precision, aesthetics, and unwavering reliability.
                            </p>
                            <br></br>
                            <p>
                                Come, be a part of “ANUBHUTI RASAYA “, and witness the
                                extraordinary unfold before your eyes. The canvas awaits your touch,
                                and the masterpiece beckons. Join a movement where innovation
                                thrives, where the ordinary is transcended, and where industry
                                standards are redefined. With ANUBHUTI, your aspirations will find
                                wings, and your vision will become a reality. Welcome to the world of
                                limitless possibilities.
                            </p>
                        </>
                    )}
                </p>
                <button className='btn--primary btn--medium' onClick={handleReadMore}>
                    {showMore ? 'Read Less' : 'Read More'}
                </button>
                <div className="sections">
                    <button
                        onClick={() => handleSectionClick('vision')}
                        className={`btn--primary btn--medium ${activeSection === 'vision' ? 'active' : ''}`}
                    >
                        Vision
                    </button>
                    <button
                        onClick={() => handleSectionClick('mission')}
                        className={`btn--primary btn--medium ${activeSection === 'mission' ? 'active' : ''}`}
                    >
                        Mission
                    </button>
                    <button
                        onClick={() => handleSectionClick('objectives')}
                        className={`btn--primary btn--medium ${activeSection === 'objectives' ? 'active' : ''}`}
                    >
                        Objectives
                    </button>
                </div>
                <div className="section-content">
                    {activeSection && <p>{sectionData[activeSection]}</p>}
                </div>
                {/* <div className="social-media-links">
                <Link
                            class='social-icon-link facebook'
                            to='/'
                            target='_blank'
                            aria-label='Facebook'
                        >
                            <i class='fab fa-facebook-f' />
                        </Link>
                        <Link
                            class='social-icon-link instagram'
                            to='/'
                            target='_blank'
                            aria-label='Instagram'
                        >
                            <i class='fab fa-instagram' />
                        </Link>
                        <Link
                            class='social-icon-link youtube'
                            to='/'
                            target='_blank'
                            aria-label='Youtube'
                        >
                            <i class='fab fa-youtube' />
                        </Link>
                        <Link
                            class='social-icon-link twitter'
                            to='/'
                            target='_blank'
                            aria-label='Twitter'
                        >
                            <i class='fab fa-twitter' />
                        </Link>
                        <Link
                            class='social-icon-link twitter'
                            to='/'
                            target='_blank'
                            aria-label='LinkedIn'
                        >
                            <i class='fab fa-linkedin' />
                        </Link>
                </div> */}
                {/* <img
                    src={img}
                    alt="About Us"
                    className="about-us-image"
                /> */}
            </div>
            <Footer></Footer>
        </>
    );
};

export default About;