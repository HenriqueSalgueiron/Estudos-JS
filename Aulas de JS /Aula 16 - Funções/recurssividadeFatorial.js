function fatorial(n) {
    console.log(n)
    if (n==1) {
        return 1
    } else {
        return n * fatorial(n-1)
    }
    
} 

fatorial(5)

