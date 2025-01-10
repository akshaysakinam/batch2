
/*  *****
    *****
    *****
    *****
*/

for (let i = 1; i <= 4; i++) {
    for (let j = 1; j <= 4; j++) {
        document.writeln("*")
    }
    document.writeln("<br>")
}

document.writeln("<br>")

for (let i = 1; i <= 4; i++) {
    for (let j = 1; j <= i; j++) {
        document.writeln("*")
    }
    document.writeln("<br>")
}
document.writeln("<br>")
document.writeln("<br>")

for (let i = 1; i <= 5; i++) {
    for (let j = 1; j <= 5; j++) {
        if (i == j || i + j == 6) {
            document.write("*")
        } else {
            document.write("&nbsp;&nbsp;&nbsp;&nbsp;")
        }
    }
    document.writeln("<br>")
}