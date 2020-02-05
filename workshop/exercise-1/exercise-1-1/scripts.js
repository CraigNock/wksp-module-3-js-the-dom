console.log('...crickets...');


const mainTitle = document.createElement('h1');
mainTitle.innerText = 'The best How I Met Your Mother episode (according to fans)';
document.querySelector('#main').appendChild(mainTitle);

const leadIn = document.createElement('p');
leadIn.innerText = 'As impossible as it seems to name just 1 of the 208 legendary episodes as the “best”, the fans have spoken and the highest rated episode is… wait for it…';
document.querySelector('#main').appendChild(leadIn);

const subTitle = document.createElement('h2');
subTitle.innerText = 'The Slap Bet (Season 2, Episode 9)';
document.querySelector('#main').appendChild(subTitle);

const srcTag = document.createElement('p');
srcTag.innerText = 'IMBD Rating:9.5';
document.querySelector('#main').appendChild(srcTag);

const mainImage = document.createElement('img');
mainImage.src = './images/robin-sparkles.jpg';
mainImage.alt = 'Robin Sparkles';
mainImage.setAttribute('alt','Robin Sparkles');
document.getElementById('main').appendChild(mainImage);

const paragraph1 = document.createElement('p');
paragraph1.innerText = 'In this episode, Ted is learning a few secrets about Robin, namely that she has an unexplained aversion to the mall. Robin refuses to tell Ted and the others why she won’t go to the mall, so the gang forms their own theories. Marshall believes it’s because she got married in a mall and is still married. Barney believes it has something to do with Robin having performed in a porn video. The two of them make a slap bet with each other: whoever is right gets to slap the other across the face as hard as he can. Lily is named the Slap Bet Commissioner, as long as she promises to be unbiased.';
document.querySelector('#main').appendChild(paragraph1);

const paragraph2 = document.createElement('p');
paragraph2.innerText = 'In the end, Robin’s big secret was revealed- she was a Canadian, teen pop sensation named Robin Sparkles. Barney finds the music video for her hit single “Lets Go To The Mall”. The slap bet takes a few turns throughout the episode, but ends with Marshall having the right to slap Barney 5 times- available for all of eternity (horrible call Barney).';
document.querySelector('#main').appendChild(paragraph2);

const source = document.createElement('a');
source.innerText = 'Source';
source.setAttribute('href', 'https://himym2017.wordpress.com/2017/03/25/the-best-himym-episode-according-to-fans/') ;
document.getElementById('main').appendChild(source);

const styleLink = document.createElement('link');
styleLink.setAttribute('href', './styles.css');
styleLink.rel = 'stylesheet';
styleLink.class = 'css';
document.querySelector('head').appendChild(styleLink);
