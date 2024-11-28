document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});




const data=[
    {id:1, name:"Home", link: "#home"},
    {id:2, name:"About", link: "#about"},
    {id:3, name:"Projects", link: "#projects"},
    {id:4, name:"Contacts", link: "#contacts"},
];

const searchBar = document.getElementById("search-bar");
searchBar.value = undefined;
const searchBtn = document.getElementById("search-btn");


searchBtn.addEventListener('click', () => {
    const query = searchBar.value.toLowerCase();
    const results = data.filter(item => item.name.toLowerCase().includes(query));
    displayResults(results);
});
document.addEventListener('DOMContentLoaded', () => {
    const currentPath = window.location.pathname.split('/').pop();
    const links = document.querySelectorAll('nav a');

    links.forEach(link => {
        if (link.getAttribute('href') === currentPath) {
            link.style.textDecoration = 'underline';
            link.style.color = 'yellow';
        }
    });
});