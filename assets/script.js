const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

	let bannerDiv = document.querySelector('#banner');
	let currentIndex =0;
	
  
	let arrowLeft = document.getElementById('arrow_left');

	arrowLeft.addEventListener('click', function() {
		currentIndex = (currentIndex - 1 + slides.length) % slides.length;
		changeBanner();
		});


	let bannerImg = document.createElement('img');
		bannerImg.className = 'banner-img';
		bannerImg.src = './assets/images/slideshow/' + slides[currentIndex].image;


	let bannerTagline = document.getElementsByTagName('p');
		bannerTagline.innerHTML = slides[currentIndex].tagLine;

	let arrowRight = document.getElementById('arrow_right');

	arrowRight.addEventListener('click', function() {
		currentIndex = (currentIndex + 1 + slides.length) % slides.length;
		changeBanner();
		});

	let dotsImg = document.createElement('div');
	dotsImg.className = 'dots';
	
			
	function changeBanner () {
		bannerImg.src = './assets/images/slideshow/' + slides[currentIndex].image;
			
			
		bannerTagline = document.getElementById('description');
		bannerTagline.innerHTML = slides[currentIndex].tagLine;
	
		dots.forEach((dot, index) => {
			dot.classList.toggle('dot_selected', index === currentIndex);
			});
					
		};
				
	
	let dots = [];
	slides.forEach((slide, index) => {
		let dot = document.createElement('button');
		dot.classList.add('dot');
		dot.addEventListener('click', function() {
			currentIndex = index;
			updateBanner();
			});
	
			dotsImg.appendChild(dot);
			dots.push(dot);
		});
		
	bannerDiv.appendChild(arrowLeft);
	bannerDiv.appendChild(arrowRight);
	bannerDiv.appendChild(bannerImg);
	bannerDiv.appendChild(dotsImg);
	
	
	changeBanner();

