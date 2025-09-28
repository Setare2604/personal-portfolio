// NAV TOGGLE (برای موبایل)
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');
navToggle.addEventListener('click', ()=>{
  const expanded = navLinks.style.display === 'flex';
  navLinks.style.display = expanded ? 'none' : 'flex';
});

// SMOOTH SCROLL 
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click', e=>{
    const href = a.getAttribute('href');
    if(href.startsWith('#')){
      e.preventDefault();
      const el = document.querySelector(href);
      if(el) el.scrollIntoView({behavior:'smooth'});
      // hide mobile nav after click
      if(window.innerWidth <= 768) navLinks.style.display = 'none';
    }
  })
});


const projects = [
  {
    title: 'Data preprocessing',
    desc: 'This project analyzes employee absence data from a company between 2015 and 2018.',
    repo: 'https://github.com/Setare2604/Data-preprocessing'
  },
  {
    title: 'Climate data analysis',
    desc: 'A project to predict daily precipitation using 10 years of climate data',
    repo: 'https://github.com/Setare2604/Climate-data-analysis'
  },
  {
    title: 'Text clustering',
    desc: 'Analysis and clustering of 10,000 research articles related to COVID-19 to extract key topics and facilitate article searches',
    repo: 'https://github.com/Setare2604/Text-clustering'
  }
];


const projectList = document.getElementById('projectList');
function renderProjects(){
  projectList.innerHTML = '';
  projects.forEach(p=>{
    const card = document.createElement('article');
    card.className = 'project-card';
    card.innerHTML = `\n <h3>${p.title}</h3>\n <p>${p.desc}</p>\n <div class="project-links">\n <a href="${p.repo}" target="_blank" rel="noopener">display on GitHub</a>\n </div>`;
    projectList.appendChild(card);
  });
}
renderProjects();