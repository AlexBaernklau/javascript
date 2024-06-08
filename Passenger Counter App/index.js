let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0

function increment() {
    count += 1
    countEl.textContent = count
}

function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    // Set the count to 0 after pressing save
    count = 0
    // => Nun wird die Variable count auf 0 gesetzt. Angezeigt wird aber noch der vorherige Count.
        // console.log(count)
    countEl.textContent = 0
    // => Nun wird die Variable countEl auf 0 gesetzt UND gleichzeitig 0 im Frontend angezeigt.
}

