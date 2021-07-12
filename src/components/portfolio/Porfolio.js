import './portfolio.scss';

const Porfolio = () => {


    return (
			<div>
				<div className='porfolio'>
					<h2>my work</h2>
					<section className='project-buttons'>
						<a
							href='https://in-your-city.herokuapp.com/'
							target='_blank'
							rel='noreferrer'>
							<div className='button'>
								<h3>In Your City</h3>
								<p>
									Full Stack app utilizing React, Python, Django, PostgreSQL,
									and Sass
								</p>
							</div>
						</a>
						<a
							href='http://the-future-is-clearer.herokuapp.com/'
							target='_blank'
							rel='noreferrer'>
							<div className='button'>
								<h3>The Future is Clearer</h3>
								<p>A React app using a third party API and CSS</p>
							</div>
						</a>
						<a
							href='https://aishcann.github.io/on-pointe/'
							target='_blank'
							rel='noreferrer'>
							<div className='button'>
								<h3>On Pointe</h3>
								<p>A trivia game created using HTML, CSS, and Javascript</p>
							</div>
						</a>
					</section>
				</div>
			</div>
		);
};

export default Porfolio;