const slider = document.querySelector(".items")
let isDown = false
let startX
let scrollLeft

const handleMouseDown = (e) => {
  isDown = true;
  slider.classList.add('active');
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
};

const handleMouseMove = (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  const walk = (x - startX) * 3;
  slider.scrollLeft = (scrollLeft - walk);
};

const main = () => {
  slider.addEventListener("mousedown", handleMouseDown);
  slider.addEventListener("mouseleave", () => {
    isDown = false;
    slider.classList.remove('active');
  });
  slider.addEventListener("mouseup", () => {
    isDown = false;
    slider.classList.remove('active');
  });
  slider.addEventListener("mousemove", handleMouseMove);
};

main();
