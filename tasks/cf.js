// Fetch data from a public API (Example: JSONPlaceholder)
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => {
        const menuItems = document.getElementById('menu-items');
        data.forEach(item => {
            const menuItem = document.createElement('div');
            menuItem.classList.add('menu-item');
            menuItem.innerHTML = `<h3>${item.title}</h3><p>${item.body}</p>`;
            menuItems.appendChild(menuItem);
        });
    })
    .catch(error => console.error('Error fetching data:', error));

// Form validation with animation feedback
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if(name === '' || email === '' || message === '') {
        alert('Please fill in all fields');
        document.querySelector('form').classList.add('error-animation');
        setTimeout(() => document.querySelector('form').classList.remove('error-animation'), 500);
    } else {
        alert('Thank you for your message!');
    }
});
let navbar = document.querySelector('.header .navbar')

document.querySelector('#menu').onclick = () =>{
  navbar.classList.add('active');
}

document.querySelector('#close').onclick = () =>{
  navbar.classList.remove('active');
}


// mousemove home img

document.addEventListener('mousemove', move);
function move(e){
  this.querySelectorAll('.move').forEach(layer =>{
    const speed = layer.getAttribute('data-speed')

    const x = (window.innerWidth - e.pageX*speed)/120
    const y = (window.innerWidth - e.pageY*speed)/120

    layer.style.transform = `translateX(${x}px) translateY(${y}px)`

  })
}



gsap.from('.logo', {opacity: 0, duration: 1, delay: 2, y:10})
gsap.from('.navbar .nav_item', {opacity: 0, duration: 1, delay: 2.1, y:30, stagger: 0.2})

gsap.from('.title', {opacity: 0, duration: 1, delay: 1.6, y:30})
gsap.from('.description', {opacity: 0, duration: 1, delay: 1.8, y:30})
gsap.from('.btn', {opacity: 0, duration: 1, delay: 2.1, y:30})
gsap.from('.image', {opacity: 0, duration: 1, delay: 2.6, y:30})

document.getElementById('change-color-btn').addEventListener('click', function() {
  const orderSection = document.getElementById('order');
  orderSection.classList.toggle('new-background');
});
