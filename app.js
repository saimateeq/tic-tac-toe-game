let tick = document.getElementById("box-00").innerHTML
let cross = document.getElementById("box-01").innerHTML
document.getElementById("box-00").innerHTML = ""
document.getElementById("box-01").innerHTML = ""
let array = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""]
]
let row;
let col;
let computer = false
function turn(row, col) {
    computer = false
    if (array[row][col] == "") {
        array[row][col] = "tick";
        document.getElementById(`box-${row}${col}`).style.color = `blue`;
        document.getElementById(`box-${row}${col}`).innerHTML = tick;
    }
    setTimeout(wincheck, 1000, "tick", "YOU WIN");
    if (computer == false) {
        setTimeout(computerturn, 2000, "cross")
    }
    if (computer == false) {
        setTimeout(computerturn, 2000, "tick")
    }
    if (computer == false) {
        setTimeout(computerturn_random, 2000)
    } if (computer == true) {
        setTimeout(wincheck, 1000, "cross", "YOU LOSE")
    }
}
function wincheck(mark, state) {
    for (i = 0; i < 3; i++) {
        if (array[i][0] == mark && array[i][1] == mark && array[i][2] == mark) {
            computer = true
            gameover(state)
        }
        else if (array[0][i] == mark && array[1][i] == mark && array[2][i] == mark) {
            computer = true
            gameover(state)
        }
    }
    if (array[0][0] == mark && array[1][1] == mark && array[2][2] == mark ||
        array[0][2] == mark && array[1][1] == mark && array[2][0] == mark) {
        computer = true
        gameover(state)
    }
    let row_1 = array[0].some(run)
    let row_2 = array[1].some(run)
    let row_3 = array[2].some(run)
    function run(element) {
        return element == ""
    }
    if (row_1 == false && row_2 == false && row_3 == false) {
        gameover("IT'S DRAW")

    }
}
function computerturn(check) {
    for (i = 0; i < 3; i++) {
        for (j = 0; j < 3; j++) {
            if (computer == false && array[i][j] == check) {
                if (array[i][j + 1] == check || array[i][j - 1] == check ||
                    array[i][j + 2] == check || array[i][j - 2] == check) {
                    for (k = 0; k < 3; k++) {
                        if (array[i][k] == "") {
                            array[i][k] = "cross"
                            document.getElementById(`box-${i}${k}`).innerHTML = cross
                            document.getElementById(`box-${i}${k}`).style.color = `red`
                            computer = true
                        }
                    }
                } if (computer !== true) {
                    if (array[0][i] == check && (array[1][i] == check || array[2][i] == check)) {
                        display(i)
                    } else if (array[1][i] == check && (array[0][i] == check || array[2][i] == check)) {
                        display(i)
                    } else if (array[2][i] == check && (array[0][i] == check || array[1][i] == check)) {
                        display(i)
                    }
                }
            }
        }
    }
}
function display(i) {
    for (p = 0; p < 3; p++) {
        if (computer == false && array[p][i] == "") {
            array[p][i] = "cross"
            document.getElementById(`box-${p}${i}`).innerHTML = cross
            document.getElementById(`box-${p}${i}`).style.color = `red`
            computer = true
        }
    }
}
function computerturn_random() {
    while (computer == false) {
        let i = Math.random() / 4 * 10
        i = Math.round(i)
        let j = Math.random() / 4 * 10
        j = Math.round(j)
        if (array[i][j] == "") {
            console.log(array);
            array[i][j] = "cross"
            document.getElementById(`box-${i}${j}`).innerHTML = cross
            document.getElementById(`box-${i}${j}`).style.color = `red`
            computer = true
        }
    }
}
function gameover(state) {
    // let style = document.getElementById("gameover").style
    document.getElementById("gameover").innerHTML = state
    // document.getElementById("gameover").style = style
    document.getElementById("restart").setAttribute(`style`, `display:flex; flex-direction:column; margin-top:20%;`)
    document.getElementById("main").setAttribute(`style`, `display:none`)
    document.getElementById("top").setAttribute(`style`, `display:none`)
}
function restart() {
    location.reload()
}
