

const aboutLink = document.getElementById('aboutLink');
const planetsLink = document.getElementById('planetsLink');
const exploreLink = document.getElementById('exploreLink');
const feedbackLink = document.getElementById('feedbackLink');

aboutLink.addEventListener('mouseover', changeColor);
planetsLink.addEventListener('mouseover', changeColor);
exploreLink.addEventListener('mouseover', changeColor);
feedbackLink.addEventListener('mouseover', changeColor);

function changeColor(event) {
    event.target.style.color = '#fffff';
}

aboutLink.addEventListener('mouseout', revertColor);
planetsLink.addEventListener('mouseout', revertColor);
exploreLink.addEventListener('mouseout', revertColor);
feedbackLink.addEventListener('mouseout', revertColor);

function revertColor(event) {
    event.target.style.color = '#EAECEE';
}

