const wrapper = document.querySelector('.tl-wrapper');
const items = document.querySelectorAll('.tl-item');
let index = 0;

document.getElementById('nextBtn').onclick = () => {
  index = (index + 1) % items.length;
  update();
};

document.getElementById('prevBtn').onclick = () => {
  index = (index - 1 + items.length) % items.length;
  update();
};

function update() {
  wrapper.style.transform = `translateX(-${index * 100}%)`;
}

