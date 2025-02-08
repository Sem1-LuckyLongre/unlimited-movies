import React from 'react';

export const About = () => {
    return (
        <div className="about">
            <section className="introduction">
                <h1>About Us</h1>
                <p>We are a leading e-commerce platform dedicated to providing the best products and services, creating a seamless experience for our customers.</p>
            </section>

            <section className="mission">
                <h2>Our Mission</h2>
                <p>To deliver quality products at unbeatable prices while ensuring customer satisfaction through innovation and personalized service.</p>
            </section>

            <section className="team">
                <h2>Meet Our Team</h2>
                <div className="team-members">
                    <div className="team-member">
                        <img src="https://via.placeholder.com/150" alt="Team Member 1" className="team-member-img" />
                        <p>Member 1</p>
                    </div>
                    <div className="team-member">
                        <img src="https://via.placeholder.com/150" alt="Team Member 2" className="team-member-img" />
                        <p>Member 2</p>
                    </div>
                    <div className="team-member">
                        <img src="https://via.placeholder.com/150" alt="Team Member 3" className="team-member-img" />
                        <p>Member 3</p>
                    </div>
                </div>
            </section>
        </div>
    );
};
