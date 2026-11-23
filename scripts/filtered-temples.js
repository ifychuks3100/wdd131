// ======================================
// 1. HAMBURGER MENU
// ======================================

const mainnav = document.querySelector(".navigation");
const hambutton = document.querySelector("#menu");

if (mainnav && hambutton) {
    hambutton.addEventListener("click", () => {
        mainnav.classList.toggle("show");
        hambutton.classList.toggle("show");
    });
}


// ======================================
// 2. FOOTER INFORMATION
// ======================================

const currentYear = new Date().getFullYear();

const yearElement = document.getElementById("currentyear");
const lastModifiedElement = document.getElementById("lastModified");

if (yearElement) {
    yearElement.textContent = currentYear;
}

if (lastModifiedElement) {
    lastModifiedElement.textContent = document.lastModified;
}


// ======================================
// 3. TEMPLE ARRAY
// ======================================

const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "Aba Nigeria Temple",
        location: "Aba, Abia State, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/aba-nigeria-temple/aba-nigeria-temple-5087-main.jpg"
    },
    {
        templeName: "Newport Beach California Temple",
        location: "Newport Beach, California 92660-9118, United States",
        dedicated: "2005, August, 28",
        area: 17800,
        imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/newport-beach-california-temple/newport-beach-california-temple-46818-main.jpg"
    },
    {
        templeName: "Sacramento California Temple",
        location: "Rancho Cordova, California 95742-6415, United States",
        dedicated: "2006, September, 3",
        area: 19500,
        imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/sacramento-california-temple/sacramento-california-temple-8098-main.jpg"
    },
    {
        templeName: "Helsinki Finland Temple",
        location: "Leppäsillantie 3, FI-02620  Espoo, Finland",
        dedicated: "2006, October, 22",
        area: 16350,
        imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/helsinki-finland-temple/helsinki-finland-temple-22169-main.jpg"
    },
    {
        templeName: "Curitiba Brazil Temple",
        location: "Rua Deputado Heitor Alencar Furtado, 3641, Mossunguê",
        dedicated: "2008, June, 1",
        area: 27850,
        imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/curitiba-brazil-temple/curitiba-brazil-temple-1078-main.jpg"
    }
];


// ======================================
// 4. SELECT HTML ELEMENTS
// ======================================

const templesContainer = document.querySelector("#temples-container");
const pageTitle = document.querySelector("#page-title");


// ======================================
// 5. FUNCTION TO DISPLAY TEMPLES
// ======================================

function displayTemples(templeList) {

    // Clear previous cards
    templesContainer.innerHTML = "";

    // Loop through the temples
    templeList.forEach((temple) => {

        // Create card
        const card = document.createElement("section");
        card.classList.add("temple-card");

        // Temple name
        const name = document.createElement("h2");
        name.textContent = temple.templeName;

        // Location
        const location = document.createElement("p");
        location.textContent = `Location: ${temple.location}`;

        // Dedication date
        const dedicated = document.createElement("p");
        dedicated.textContent = `Dedicated: ${temple.dedicated}`;

        // Temple area
        const area = document.createElement("p");
        area.textContent = `Size: ${temple.area.toLocaleString()} sq ft`;

        // Temple image
        const image = document.createElement("img");
        image.src = temple.imageUrl;
        image.alt = temple.templeName;
        image.loading = "lazy";

        // Add elements to card
        card.appendChild(name);
        card.appendChild(location);
        card.appendChild(dedicated);
        card.appendChild(area);
        card.appendChild(image);

        // Add card to container
        templesContainer.appendChild(card);
    });
}


// ======================================
// 6. GET TEMPLE DEDICATION YEAR
// ======================================

function getTempleYear(temple) {
    return Number(temple.dedicated.split(",")[0]);
}


// ======================================
// 7. HOME - DISPLAY ALL TEMPLES
// ======================================

document.querySelector("#home").addEventListener("click", (event) => {
    event.preventDefault();

    pageTitle.textContent = "Home";
    displayTemples(temples);
});


// ======================================
// 8. OLD - BEFORE 1900
// ======================================

document.querySelector("#old").addEventListener("click", (event) => {
    event.preventDefault();

    const oldTemples = temples.filter((temple) => {
        return getTempleYear(temple) < 1900;
    });

    pageTitle.textContent = "Old Temples";
    displayTemples(oldTemples);
});


// ======================================
// 9. NEW - AFTER 2000
// ======================================

document.querySelector("#new").addEventListener("click", (event) => {
    event.preventDefault();

    const newTemples = temples.filter((temple) => {
        return getTempleYear(temple) > 2000;
    });

    pageTitle.textContent = "New Temples";
    displayTemples(newTemples);
});


// ======================================
// 10. LARGE - ABOVE 90,000 SQ FT
// ======================================

document.querySelector("#large").addEventListener("click", (event) => {
    event.preventDefault();

    const largeTemples = temples.filter((temple) => {
        return temple.area > 90000;
    });

    pageTitle.textContent = "Large Temples";
    displayTemples(largeTemples);
});


// ======================================
// 11. SMALL - BELOW 10,000 SQ FT
// ======================================

document.querySelector("#small").addEventListener("click", (event) => {
    event.preventDefault();

    const smallTemples = temples.filter((temple) => {
        return temple.area < 10000;
    });

    pageTitle.textContent = "Small Temples";
    displayTemples(smallTemples);
});


// ======================================
// 12. DISPLAY ALL TEMPLES ON PAGE LOAD
// ======================================

displayTemples(temples);