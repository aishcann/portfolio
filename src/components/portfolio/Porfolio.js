import { useState } from 'react'
import './portfolio.css'

const Porfolio = () => {


    return (
			<div className='porfolio'>
				<h2>my work</h2>
				<section className='project-buttons'>
					<div className='button'>
						<h3 onClick={handleClick}>In Your City</h3>
						<p>
							Full Stack app utilizing React, Python, Django, PostgreSQL, and
							Sass
						</p>
					</div>
					<div className='button'>
						<h3>The Future is Clearer</h3>
						<p>A React app using a third party API and CSS</p>
					</div>
					<div className='button'>
						<h3>On Pointe</h3>
						<p>A trivia game created using HTML, CSS, and Javascript</p>
					</div>
				</section>
				<section className='project-details'>
					<div className='each-project'>
						<div>
							<img
								src='in-your-city.png'
								alt='In Your City'
								className='project-image'
							/>
						</div>
						<div>
							<h4>In Your City</h4>
						</div>
						<div>
							<p>Technologies: React, Sass, Python, Django, PostgreSQL</p>
						</div>
						<div className='links'>
							<a href='https://in-your-city.herokuapp.com/'>
								<p>Deployed Site</p>
							</a>
							<a href='https://github.com/aishcann/in-your-city-frontend'>
								<p>Github</p>
							</a>
						</div>
					</div>
					{/* <div className='project'>
						<img
							src='the-future-is-clearer.png'
							alt='The Future is Clearer'
							className='project-image'
						/>
					</div>
					<div className='project'>
						<img
							src='on-pointe.png'
							alt='On Pointe'
							className='project-image'
						/>
					</div> */}
				</section>
			</div>
		);
};

export default Porfolio;