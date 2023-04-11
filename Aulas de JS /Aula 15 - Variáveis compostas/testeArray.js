let num = [5, 8, 2, 9, 3]
num.sort()
num.push(19)

console.log(num) 
for (var pos in num) {
    console.log(num[pos])
}

console.log(num.indexOf(8))
