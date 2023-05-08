function fatorial(n) {
    var res = 1

    for (n; n > 1; n--) {
        res *= n
        }   
    
        return res        
}

console.log(fatorial(5))