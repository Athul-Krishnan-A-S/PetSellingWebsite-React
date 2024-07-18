import './App.css';
import Button from './components/button/Button';
import Header from './components/header/Header';
import heroimg from './assets/hero.png';
import playIcon from './assets/playIcon.png';
import rightArrow from './assets/rightPointingArrow.png';
import PuppyCards from './components/puppyCards/PuppyCards';
import GirlPuppy from './assets/girlKissingPuppy.png';
import blueRectangle from './assets/blueRectangle.png';
import yellowrectangle from './assets/yellowRectangle.png';

import appPetImg9 from './assets/puppies/puppy9.png'
import appPetImg10 from './assets/puppies/puppy10.png'
import appPetImg11 from './assets/puppies/puppy11.png'
import squareBlue from './assets/squareBlue.png'
import squareYellow from './assets/squareYellow.png'

const petDetails = [
	{
		img : appPetImg9,
		question : 'What is a Pomeranian? How to identify Pomeranian Dogs',
		description : 'The Pomeranian,also known as the Pomeranian (Pom dog), is always in the top of the cutest pets.Not only that,the small,lovely,smart,friendly,and skillful circu...'
	},
	{
		img : appPetImg10,
		question : 'Dog Diet You Need To Know',
		description : 'Dividing a dog \'s diet may seem simple at first,but there are some rules you should know so that your dog can easily absorb the nutrients in the diet.For those who are just starting to raise dogs,especially... '
	},
	{
		img : appPetImg11,
		question : 'Why Dogs Bite and Destroy Furniture and How to Prevent it Effectively',
		description : 'Dog bites are common during development.However,no one wants to see their furniture or important items being bitten by a dog.'
	}
]

function App() {
	return (
		<div className="App | container">
			{/* section 1  */}
			<div className='section-1'>
				<div className='container'>
					<div className='header-div'>
						<Header />
					</div>
					<div className='two-cols'>
						<div className='col-1'>
							<div className='text-container'>
								<p>One More Friend</p>
								<p>Thousands More Fun!</p>
								<p>Having a pet means you have more joy, a new friend , a happy person person who will always be with you to have fun. We have 200+ different pets that can meet your needs!</p>
							</div>
							<div className='buttons'>
								<Button
									value="View Intro"
									className="button bg-transparent"
									icon={playIcon}
								/>
								<Button
									value="Explore Now"
									className="button bg-blue"
								/>
							</div>
						</div>
						<div className='col-2'>
							<div className='hero-img-container'>
								<img
									className='heroImg'
									src={heroimg}
									alt='hero'>
								</img>
								<img className='squareBlue' src={squareBlue} alt='squareBlue'></img>
								<img className='squareYellow' src={squareYellow} alt='squareYellow'></img>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* section 2  */}
			<div className='section-2'>
				<div className='container'>
					<div className='section-2-two-cols'>
						<div className='section-2-col-1'>
							<p>Whats new ?</p>
							<p>Take A Look At Some of Our Pets</p>
						</div>
						<div className='section-2-col-2'>
							<Button
								value="View more"
								icon={rightArrow}
								className="viewMorebtn | button bg-transparent"
								reverse="true"
							/>
						</div>
					</div>
					<div className='cards-puppy'>
						<PuppyCards />
					</div>
				</div>
			</div>

			{/* section -3  */}
			<div className='section-3'>
				<div className='section-3-container'>
					<div className='section-3-two-cols'>
						<img src={blueRectangle} className='blueRectangle' alt='rectangle'></img>
						<img src={yellowrectangle} className='yellowRectangle' alt='rectangle'></img>
						<div className='section-3-col-1'>
							<img className='girlpuppy' src={GirlPuppy} alt='Girl Kissing puppy' />
						</div>
						<div className='section-3-col-2'>
							<div className='section-3-col-2-text-container'>
								<p>One More Friend</p>
								<p>Thousands More Fun!</p>
								<p>Having a pet means you have more joy, a new friend, a happy person who will always be with you to have fun. We have 200+ different pets that can meet your needs!</p>
							</div>
							<div className='section-3-buttons'>
								<Button 
									className = 'button bg-transparent' 
									icon = {playIcon} reverse = 'true' 
									value = 'View Intro'
								/>
								<Button 
									className = 'button bg-blue' 	
									value = 'Explore Now'
								/>
							</div>
						</div>
					</div>
					<div className='section-3-two-rows'>
						<div className='section-3-row-1'>
							<div className='section-3-text-container'>
								<p>You already Know ?</p>
								<p>Useful pet Knowledge</p>
							</div>
							<Button 
								className = 'button bg-transparent'
								value = "View more"
								icon = {rightArrow}
								reverse = 'true'
							/>
						</div>
						<div className='section-3-row-2'>
							{petDetails.map((element,index) => (
								<div key={index} className='pet-card-section-three'>
									<div className='section-3-pet-card-img-container'>
										<img src={element.img} alt='dog'></img>
									</div>
									<div className='blue-tag'>
										<p>Pet Knowledge</p>
									</div>
									<p>{element.question}</p>
									<p>{element.description}</p>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>

			{/* footer  */}

		</div>
	);
}

export default App;
