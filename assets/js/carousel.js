function moveSlider(direction) {
    const container = document.getElementById("cardsContainer");

    const cardWidth = container.querySelector(".card-item").offsetWidth + 20; 
    // 20 = gap

    container.scrollLeft += direction * cardWidth;
}
