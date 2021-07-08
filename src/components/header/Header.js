import React from 'react';
import './header.css'

const Header = () => {

    return (
			<div className='header'>
				<section className='intro'>
					<h1> Hi there! </h1>
					<img src='prof photo.jpeg' alt='Aisha' className='prof-photo'/>
					<p>
						I’m a creative problem solver and clear technical communicator
						actively looking for roles within web development / software
						engineering! I have brought my passion and talent into so many
						different sectors, from tech to education to performance art. Driven
						by a mix of intuition and hard won study and application, I strive
						to deliver work that is aesthetically pleasing, intuitive, and
						accessible, with high levels of functionality.
					</p>
				    <h3>my tech stack</h3>
                    <ul>
                        <li>HTML / CSS</li>
                        <li>Javascript</li>
                        <li>React</li>
                        <li>Python</li>
                        <li>Django</li>
                        <br />
                        <li>PostgreSQL</li>
                        <li>Node</li>
                        <li>MongoDB</li>
                        <li>Sass</li>
                        <li>Git / Github</li>
                    </ul>
				</section>
			</div>
		);
};

export default Header;