let h1 = document.querySelector('.matrix');
let text = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
let copy = h1.innerHTML;

let index = 0;
let text_matrix = () => {
    let interval = setInterval(() => {
        console.log(index);
        let newText = copy.split('').map((val, idx) => {
            if (idx < index) return val;
            return text[Math.floor(Math.random() * text.length)];
        })
        newStr = newText.join('');
        h1.innerHTML = newStr;
        index = index + 0.2;
        h1.addEventListener('mouseleave', () => {
            clearInterval(interval);
            h1.innerHTML = copy;
            index = 0;
        });
        if (index > copy.length) {
            clearInterval(interval);
            index = 0;
        }
    }, 50);

}
h1.addEventListener('mouseenter', text_matrix);

let disable_btn = document.querySelector('.disable_btn');
disable_btn.disabled = true;

let navigation_links = document.querySelectorAll('.navigation_links');

navigation_links.forEach((val) => {
    val.addEventListener('click', function (e) {
        e.preventDefault();

        let target_id = this.getAttribute('href');
        let target_section = document.querySelector(target_id);

        target_section.scrollIntoView({
            behavior: 'smooth'
        })
    })
})

let reveals = document.querySelectorAll(".reveal");
function revealOnScroll() {
    reveals.forEach(el => {
        const top = el.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (top < windowHeight - 100) {
            el.classList.add("active");
        }
    });
}
window.addEventListener("scroll", revealOnScroll);