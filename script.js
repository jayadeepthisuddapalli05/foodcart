document.getElementById('searchForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const query = document.getElementById('searchInput').value.trim();
    if(query) {
        alert('You searched for: ' + query);
    }
});

// Carousel Data (Example, use your own images and data)
const popularItems = [
    {
        img: "images/pizza2.jpeg",
        title: "Home made pizza",
        price: "₹190",
        rating: "4.7",
        time: "50 min"
    },
    {
        img: "images/chicken.jpeg",
        title: "Tandoori Chicken",
        price: "₹184",
        rating: "4.8",
        time: "52 min"
    },
    {
        img: "images/chill.jpeg",
        title: "Chilli Chicken",
        price: "₹110",
        rating: "4.8",
        time: "48 min"
    },
    {
        img: "images/pizza1.jpeg",
        title: "Cheese Pizza",
        price: "₹123",
        rating: "4.7",
        time: "53 min"
    },
    {
        img: "images/pizza4.jpeg",
        title: "Veggie Pizza",
        price: "₹130",
        rating: "4.6",
        time: "51 min"
    }
];

let carouselIndex = 0;
const carouselLength = popularItems.length;
const carouselEl = document.getElementById('popularCarousel');

function renderCarousel() {
    carouselEl.innerHTML = '';
    for (let i = 0; i < carouselLength; i++) {
        // Calculate the visible index (centered)
        let idx = (carouselIndex + i) % carouselLength;
        let card = document.createElement('div');
        card.className = 'food-card';
        if (i === 2) card.classList.add('carousel-center'); // Center card
        card.innerHTML = `
            <div class="food-img">
                <img src="${popularItems[idx].img}" alt="${popularItems[idx].title}">
                <span class="discount">50% OFF</span>
            </div>
            <div class="food-info">
                <div class="food-title">${popularItems[idx].title}</div>
                <div class="food-meta">
                    <span class="food-price">${popularItems[idx].price}</span>
                    <span class="food-rating"><i class="fas fa-star"></i> ${popularItems[idx].rating}</span>
                    <span class="food-time"><i class="fas fa-clock"></i> ${popularItems[idx].time}</span>
                </div>
            </div>
        `;
        carouselEl.appendChild(card);
    }
}
renderCarousel();

document.getElementById('carouselPrev').onclick = function() {
    carouselIndex = (carouselIndex - 1 + carouselLength) % carouselLength;
    renderCarousel();
};
document.getElementById('carouselNext').onclick = function() {
    carouselIndex = (carouselIndex + 1) % carouselLength;
    renderCarousel();
};

document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('requestModal');
    const openModalBtn = document.getElementById('openRequestModal');
    const cancelModalBtn = document.getElementById('cancelRequest');
    const requestForm = document.getElementById('requestDishForm');

    if (openModalBtn) {
        openModalBtn.onclick = function() {
            modal.classList.add('active');
            document.body.classList.add('modal-open');
        };
    }
    if (cancelModalBtn) {
        cancelModalBtn.onclick = function() {
            modal.classList.remove('active');
            document.body.classList.remove('modal-open');
        };
    }
    if (requestForm) {
        requestForm.onsubmit = function(e) {
            e.preventDefault();
            modal.classList.remove('active');
            document.body.classList.remove('modal-open');
        };
    }
});

// Video Play/Pause Functionality
const video = document.getElementById('aboutVideo');
const playBtn = document.getElementById('playPauseBtn');
const videoContainer = document.getElementById('videoContainer');

function updatePlayBtn() {
    if (video.paused) {
        playBtn.classList.remove('hide');
    } else {
        playBtn.classList.add('hide');
    }
}
playBtn.onclick = function(e) {
    e.stopPropagation();
    if (video.paused) {
        video.play();
    } else {
        video.pause();
    }
    updatePlayBtn();
};
videoContainer.onclick = function() {
    if (video.paused) {
        video.play();
    } else {
        video.pause();
    }
    updatePlayBtn();
};
video.onplay = updatePlayBtn;
video.onpause = updatePlayBtn;
updatePlayBtn();