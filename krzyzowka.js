// Lista słów i ich definicji
let words = [
    {word: "creeper20I0", clue: "Hasło do krzyżówki"},
    {word: "prisonlife", clue: "Gra o więzieniu"},
    {word: "meepcity", clue: "Gra o opiece nad zwierzakami"},
    {word: "adoptme", clue: "Gra o adopcji zwierząt"},
    {word: "jailbreak", clue: "Gra o ucieczce z więzienia"},
    {word: "phantomforces", clue: "Gra o strzelaniu"},
    {word: "madcity", clue: "Gra o superbohaterach"},
    {word: "towerofhell", clue: "Gra o przejściu przez wieżę"},
    {word: "naturaldisaster", clue: "Gra o przetrwaniu katastrof naturalnych"}
];

// Tworzenie tablicy z literami krzyżówki
let crossword = [
    ["c", "r", "e", "e", "p", "e", "r", "2", "0", "I"],
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""]
];


let myElement = document.getElementById("myElement");

if (myElement) {
  let newElement = document.createElement("div");
  myElement.appendChild(newElement);
} else {
  console.log("Element o identyfikatorze myElement nie istnieje w dokumencie.");
}



// Tworzenie tabeli z polami krzyżówki
let table = document.getElementById("crossword");
for (let i = 0; i < 10; i++) {
    let row = document.createElement("tr");
    for (let j = 0; j < 10; j++) {
        let cell = document.createElement("td");
        cell.addEventListener("click", function() {
            if (!cell.classList.contains("active")) {
                cell.classList.add("active");
                let input = document.createElement("input");
                input.maxLength = 1;
                cell.appendChild(input);
                input.focus();
            }
        });
        if (crossword[i][j] != "") {
            cell.innerHTML = crossword[i][j];
        }
        row.appendChild(cell);
    }
table.appendChild(row);
}

// Tworzenie listy z definicjami słów
let list = document.createElement("ol");
for (let i = 0; i < words.length; i++) {
    let item = document.createElement("li");
    item.innerHTML = words[i].clue;
    list.appendChild(item);
}
document.body.appendChild(list);

// Sprawdzanie wyniku krzyżówki
function check() {
    let correct = true;
    for (let i = 0; i < words.length; i++) {
        let word = words[i].word;
        let cells = document.querySelectorAll(`td input[data-word="${word}"]`);
        let answer = "";
        for (let j = 0; j < cells.length; j++) {
            let letter = cells[j].value.toLowerCase();
            if (letter == "") {
                correct = false;
                break;
            }
            answer += letter;
        }
        if (!correct) {
            break;
        }
        if (answer != word) {
            correct = false;
            break;
        }
    }
    let result = document.getElementById("result");
    if (correct) {
        result.innerHTML = "Gratulacje! Wypełniłeś/aś krzyżówkę poprawnie!";
    } else {
        result.innerHTML = "Spróbuj jeszcze raz.";
    }
}
