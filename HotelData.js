// Sample hotel data array
const hotels = [
    {
        name: "Raffles Makkah Palace",
        images: ["img/3.jfif", "img/4.jfif", "img/1.jfif"],
        location: "Makkah Abraj Al Bait Complex",
        kaabaDistance: "300 m du haram",
        tags: [
            { name: "Mosqué a -200 m", icon: "fas fa-mosque" },
            { name: "À 7 km de Mina", icon: "fas fa-map-marker-alt" },
            { name: "Salle de prière disponible", icon: "fas fa-praying-hands" },
            { name: "Feet massage", icon: "fas fa-spa" },
            { name: "Navette", icon: "fas fa-bus" },
            { name: "Chambre aux handicapées", icon: "fas fa-wheelchair" },
            { name: "Coiffure", icon: "fas fa-cut" },
            { name: "Garderie d'enfants", icon: "fas fa-child" }
        ],
        breakfastIncluded: [
            "Entièrement remboursable",
            "Aucun prépaiement nécessaire"
        ],
        rating: 5,
        price: "1,500 $",
        description: "1 nuit, 1 adulte, Taxes Compris",
        reviewScore: "8.5",
        reviewCount: "750 avis"
    },
    {
        name: "Hilton Makkah Convention Hotel",
        images: ["img/3.jfif", "img/4.jfif", "img/1.jfif"],
        location: "Makkah, Al Jawhara",
        kaabaDistance: "500 m du haram",
        tags: [
            { name: "Mosqué a -300 m", icon: "fas fa-mosque" },
            { name: "À 5 km de Mina", icon: "fas fa-map-marker-alt" },
            { name: "Salle de prière disponible", icon: "fas fa-praying-hands" },
            { name: "Spa", icon: "fas fa-spa" },
            { name: "Navette", icon: "fas fa-bus" },
            { name: "Chambre aux handicapées", icon: "fas fa-wheelchair" },
            { name: "Coiffure", icon: "fas fa-cut" },
            { name: "Garderie d'enfants", icon: "fas fa-child" }
        ],
        breakfastIncluded: [
            "Entièrement remboursable",
            "Aucun prépaiement nécessaire"
        ],
        rating: 4,
        price: "1,200 $",
        description: "1 nuit, 1 adulte, Taxes Compris",
        reviewScore: "8.0",
        reviewCount: "500 avis"
    },
    {
        name: "Makkah Hotel",
        images: ["img/3.jfif", "img/4.jfif", "img/1.jfif"],
        location: "Makkah Al Haram",
        kaabaDistance: "200 m du haram",
        tags: [
            { name: "Mosqué a -200 m", icon: "fas fa-mosque" },
            { name: "À 10 km de Mina", icon: "fas fa-map-marker-alt" },
            { name: "Salle de prière disponible", icon: "fas fa-praying-hands" },
            { name: "Massage", icon: "fas fa-spa" },
            { name: "Navette", icon: "fas fa-bus" },
            { name: "Chambre aux handicapées", icon: "fas fa-wheelchair" }
        ],
        breakfastIncluded: [
            "Entièrement remboursable",
            "Aucun prépaiement nécessaire"
        ],
        rating: 4,
        price: "1,100 $",
        description: "1 nuit, 1 adulte, Taxes Compris",
        reviewScore: "8.2",
        reviewCount: "600 avis"
    },
    {
        name: "Al Safwa Hotel",
        images: ["img/3.jfif", "img/4.jfif", "img/1.jfif"],
        location: "Makkah, Near Haram",
        kaabaDistance: "400 m du haram",
        tags: [
            { name: "Mosqué a -100 m", icon: "fas fa-mosque" },
            { name: "À 3 km de Mina", icon: "fas fa-map-marker-alt" },
            { name: "Salle de prière disponible", icon: "fas fa-praying-hands" },
            { name: "Spa", icon: "fas fa-spa" },
            { name: "Navette", icon: "fas fa-bus" },
            { name: "Chambre aux handicapées", icon: "fas fa-wheelchair" }
        ],
        breakfastIncluded: [
            "Entièrement remboursable",
            "Aucun prépaiement nécessaire"
        ],
        rating: 5,
        price: "1,800 $",
        description: "1 nuit, 1 adulte, Taxes Compris",
        reviewScore: "9.0",
        reviewCount: "900 avis"
    }
];

// Function to populate hotel data
function populateHotelData(hotel, index) {
    const hotelContainer = document.querySelector('.hotel_container_list');

    // Create hotel HTML structure
    const hotelHTML = `
        <div class="hotel_container">
    <div class="row">
        <div class="col-12 col-sm-4">
            <div id="hotelCarousel${index}" class="carousel slide" data-interval="false">
                <div class="carousel-inner">
                    ${hotel.images.map((image, imgIndex) => `
                    <div class="carousel-item ${imgIndex === 0 ? 'active' : ''}">
                        <img class="hotel_image" src="${image}" alt="${hotel.name}">
                    </div>
                    `).join('')}
                </div>
                <a class="carousel-control-prev" href="#hotelCarousel${index}" role="button" data-slide="prev">
                    <span class="custom-icon" aria-hidden="true">&#10094;</span> <!-- Custom icon -->
                    <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#hotelCarousel${index}" role="button" data-slide="next">
                    <span class="custom-icon" aria-hidden="true">&#10095;</span> <!-- Custom icon -->
                    <span class="sr-only">Next</span>
                </a>
            </div>
        </div>
        
        <div class="col-12 col-sm-8">
            <div class="container-fluid description-hotel">
                <div class="row">
                    <div class="col-12 col-sm-9 left_side">
                        <h4 class="hotel-name">
                            ${hotel.name}
                            <span class="rating">
                                ${Array.from({ length: hotel.rating }).map(() => `<i
                                    class="fas fa-star"></i>`).join('')}
                            </span>
                        </h4>
                        <p class="location">
                            <i class="fas fa-map-marker-alt"></i>
                            <span>${hotel.location}</span>
                        </p>
                        <p class="kaaba_distance">
                            <i class="fa-solid fa-kaaba"></i>
                            <span>${hotel.kaabaDistance}</span>
                        </p>
                        <div class="container px-4">
                            <div class="d-flex flex-wrap gap-2">
                                ${hotel.tags.map(tag => `
                                <div class="tag d-flex align-items-center"><i class="${tag.icon} me-1"></i> ${tag.name}
                                </div>
                                `).join('')}
                            </div>
                        </div>
                        <hr class="solid">
                        <div class="feature-list">
                            <h5>Petit - déjeuner inclus</h5>
                            <ul>
                                ${hotel.breakfastIncluded.map(item => `<li>${item}</li>`).join('')}
                            </ul>
                        </div>
                    </div>
                    <div class="col-12 col-sm-3 right_side d-flex flex-row flex-sm-column">
                        <div class="container p-0">
                            <div class="row no-gutters">
                                <div class="col-3 col-sm-5 p-0">
                                    <div class="rating-badge d-flex align-items-center p-0">
                                        <div class="rating-score">${hotel.reviewScore}</div>
                                    </div>
                                </div>
                                <div class="col-5 col-sm-7 p-0">
                                    <div class="row no-gutters">
                                        <div class="col-8 col-sm-6 p-0">
                                            <div class="rating-label">Très bien</div>
                                            <div class="review-count">${hotel.reviewCount}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="spacer" style="flex-grow:1;"></div>
                        <div class="container p-0">
                            <div class="row no-gutters">
                                <div class="col-sm-12 p-0">
                                    <div class="price-badge d-flex align-items-center p-0">
                                        <div class="price">${hotel.price}</div>
                                        <div class="description">${hotel.description}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
    `;

    hotelContainer.innerHTML += hotelHTML; // Append the new hotel data to the existing container
}

// Populate hotels
hotels.forEach((hotel, index) => populateHotelData(hotel, index));
