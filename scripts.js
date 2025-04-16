/**
 * Data Catalog Project Starter Code - SEA Stage 2
 *
 * This file is where you should be doing most of your work. You should
 * also make changes to the HTML and CSS files, but we want you to prioritize
 * demonstrating your understanding of data structures, and you'll do that
 * with the JavaScript code you write in this file.
 *
 * The comments in this file are only to help you learn how the starter code
 * works. The instructions for the project are in the README. That said, here
 * are the three things you should do first to learn about the starter code:
 * - 1 - Change something small in index.html or style.css, then reload your
 *    browser and make sure you can see that change.
 * - 2 - On your browser, right click anywhere on the page and select
 *    "Inspect" to open the browser developer tools. Then, go to the "console"
 *    tab in the new window that opened up. This console is where you will see
 *    JavaScript errors and logs, which is extremely helpful for debugging.
 *    (These instructions assume you're using Chrome, opening developer tools
 *    may be different on other browsers. We suggest using Chrome.)
 * - 3 - Add another string to the titles array a few lines down. Reload your
 *    browser and observe what happens. You should see a fourth "card" appear
 *    with the string you added to the array, but a broken image.
 *
 */


const CARDS_PER_PAGE = 3; // card 
let currentPage = 0; // Current page
const FRESH_PRINCE_URL =
  "https://upload.wikimedia.org/wikipedia/en/3/33/Fresh_Prince_S1_DVD.jpg";
const CURB_POSTER_URL =
  "https://m.media-amazon.com/images/M/MV5BZDY1ZGM4OGItMWMyNS00MDAyLWE2Y2MtZTFhMTU0MGI5ZDFlXkEyXkFqcGdeQXVyMDc5ODIzMw@@._V1_FMjpg_UX1000_.jpg";
const EAST_LOS_HIGH_POSTER_URL =
  "https://static.wikia.nocookie.net/hulu/images/6/64/East_Los_High.jpg";
class Monster {
    constructor(name, type, hp, ac, image) {
        this.name = name;
        this.type = type;
        this.hitPoints = hp;
        this.armorClass = ac;
        this.image = image;

    }
}
let currentTypeFilter = "all";
// This is an array of strings (TV show titles)
let monsters = [
    new Monster("Goblin", "Humanoid", 7, 15, "https://th.bing.com/th/id/OIP.dbJcAL84XynbkJB8PpWWQAHaKs?rs=1&pid=ImgDetMain"),
    new Monster("Owlbear", "Monstrosity", 59, 13, "https://www.dndbeyond.com/avatars/thumbnails/30834/185/1000/1000/638063883093825018.png"),
    new Monster("Skeleton", "Undead", 13, 13, "https://www.dndbeyond.com/avatars/thumbnails/30835/849/1000/1000/638063922565505819.png"),
    new Monster("Mimic", "Monstrosity", 58, 12, "https://www.dndbeyond.com/avatars/thumbnails/30833/408/1000/1000/638063863232165584.png"),
    new Monster("Troll", "Giant", 84, 15, "https://www.dndbeyond.com/avatars/thumbnails/30836/144/1000/1000/638063929586218907.png"),
    new Monster("Gelatinous Cube", "Ooze", 84, 6, "https://www.dndbeyond.com/avatars/thumbnails/30834/149/1000/1000/638063882505895317.png"),
    new Monster("Wraith", "Undead", 67, 13, "https://www.dndbeyond.com/avatars/thumbnails/30836/510/1000/1000/638063938653309509.png"),
    new Monster("Beholder", "Aberration", 180, 18, "https://media.nichegamer.com/wp-content/uploads/2024/05/beholder-5-9-2024-cropped.jpg"),
    new Monster("Kobold", "Humanoid", 5, 12, "https://www.dndbeyond.com/avatars/thumbnails/30832/207/1000/1000/638063832924455756.png"),
    new Monster("Gnoll", "Humanoid", 22, 15, "https://www.dndbeyond.com/avatars/thumbnails/30784/505/1000/1000/638062044385041691.png"),
    new Monster("Banshee", "Undead", 58, 12, "https://www.dndbeyond.com/avatars/thumbnails/30761/972/1000/1000/638061101973584758.png"),
    new Monster("Anceint Dragon", "Dragon", 546, 22, "https://www.dndbeyond.com/avatars/thumbnails/30782/405/1000/1000/638061961232915183.png"),
    new Monster("Dire Wolf", "Beast", 37, 14, "https://www.dndbeyond.com/avatars/thumbnails/16/484/1000/1000/636376300478361995.jpeg"),
    new Monster("Shadow", "Undead", 16, 12, "https://www.dndbeyond.com/avatars/thumbnails/30835/825/1000/1000/638063922274815873.png"),
    new Monster("Mind Flayer", "Aberration", 71, 15, "https://media-waterdeep.cursecdn.com/attachments/thumbnails/3/505/952/952/mind-flayer-mm.png")
];

// Your final submission should have much more data than this, and
// you should use more than just an array of strings to store it all.

// This function adds cards the page to display the data in the array
function showCards(monsterslist) {
    const cardContainer = document.getElementById("card-container");
    cardContainer.innerHTML = "";
    const templateCard = document.querySelector(".card");

    // PAGINATION: figure out which slice of monsters to show
    const start = currentPage * CARDS_PER_PAGE;
    const end = start + CARDS_PER_PAGE;
    const paginatedMonsters = monsterslist.slice(start, end);

    for (let monster of paginatedMonsters) {
        const imageURL = monster.image;
        const title = monster.name;
        const nextCard = templateCard.cloneNode(true);
        editCardContent(nextCard, title, imageURL, monster);
        cardContainer.appendChild(nextCard);
    }
}

function editCardContent(card, newTitle, newImageURL,monster) {
  card.style.display = "block";

  const cardHeader = card.querySelector("h2");
  cardHeader.textContent = newTitle;

  const cardImage = card.querySelector("img");
  cardImage.src = newImageURL;
  cardImage.alt = newTitle + " Poster";
    const bulletList = card.querySelector("ul");
    bulletList.innerHTML = `
  <li>HP: ${monster.hitPoints}</li>
  <li>AC: ${monster.armorClass}</li>
  <li>Type: ${monster.type}</li>
`;
  // You can use console.log to help you debug!
  // View the output by right clicking on your website,
  // select "Inspect", then click on the "Console" tab
  console.log("new card:", newTitle, "- html: ", card);
}

// This calls the addCards() function when the page is first loaded
document.addEventListener("DOMContentLoaded", () => {
    showCards(monsters); // your original render
    showMonsterNames();
    document.getElementById("type-filter").addEventListener("change", function (e) {
        currentTypeFilter = e.target.value;
        applyFilter();
    });
    


    document.getElementById("next-button").addEventListener("click", () => {
        const totalPages = Math.ceil(getFilteredMonsters().length / CARDS_PER_PAGE);
        if (currentPage < totalPages - 1) {
            currentPage++;
            applyFilter(); // Refresh current filtered view
        }
    });

    document.getElementById("previous-button").addEventListener("click", () => {
        if (currentPage > 0) {
            currentPage--;
            applyFilter(); // Refresh current filtered view
        }
    });

    ; document.getElementById("sort-by").addEventListener("change", function (e) {
        const sortBy = e.target.value;


        
        let sorted = [...monsters]; // copy the array

        if (sortBy === "hp") {
            sorted.sort((a, b) => b.hitPoints - a.hitPoints);
        } else if (sortBy === "ac") {
            sorted.sort((a, b) => b.armorClass - a.armorClass);
        } else if (sortBy === "name") {
            sorted.sort((a, b) => a.name.localeCompare(b.name));
        } else if (sortBy === "hp1") {
            sorted.sort((a, b) => b.hitPoints - a.hitPoints);
            sorted.reverse();
        }
        else if (sortBy === "ac1") {
            sorted.sort((a, b) => b.armorClass - a.armorClass);
            sorted.reverse();
        } else if (sortBy === "name1") {
            sorted.sort((a, b) => a.name.localeCompare(b.name));
            sorted.reverse()
        }

        showCards(sorted);
    });
});


function quoteAlert() {
  console.log("Button Clicked!");
  alert(
    "goblin"
  );
}
function applyFilter() {
    let filteredMonsters = monsters;

    if (currentTypeFilter !== "all") {
        filteredMonsters = monsters.filter(monster => monster.type === currentTypeFilter);
    }

    showCards(filteredMonsters);
}
function getFilteredMonsters() {
    if (currentTypeFilter === "all") {
        return monsters;
    } else {
        return monsters.filter(monster => monster.type === currentTypeFilter);
    }
}
function removeLastCard() {
    monsters.pop(); // Remove last item in titles array
    applyFilter(); // Call showCards again to refresh
}
// Function to display the list of all monster names
function showMonsterNames() {
    const nameListContainer = document.getElementById("name-list");
    nameListContainer.innerHTML = ""; // Clear the existing list

    // Loop through the monsters array and add each monster name to the list
    for (let monster of monsters) {
        const listItem = document.createElement("li");
        listItem.textContent = monster.name; // Set the monster name
        nameListContainer.appendChild(listItem); // Add the name to the list
    }
}

// Call this function when the page loads, or whenever monsters are added




document.getElementById("add-monster-form").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent page refresh

    // Grab form values
    const name = document.getElementById("monster-name").value;
    const type = document.getElementById("monster-type").value;
    const hitPoints = parseInt(document.getElementById("monster-hp").value);
    const armorClass = parseInt(document.getElementById("monster-ac").value);
    const imageURL = document.getElementById("monster-image").value;

    // Create and add new monster
    const newMonster = new Monster(name, type, hitPoints, armorClass, imageURL);
    monsters.unshift(newMonster);

    // Reset filters and page
    currentTypeFilter = "all";
    currentPage = 0;

    // Update UI
    applyFilter();       // Re-renders filtered view
    showMonsterNames();  // Updates list of names
    e.target.reset();    // Clears form

    // Scroll to cards
    window.scrollTo({ top: 0, behavior: "smooth" });
});
