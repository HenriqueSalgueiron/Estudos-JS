for(p = 8; p >= 0;p--) {
    if (p > 1) {
    console.log(`Comi um pedaço! Restam ${p} pedaços`)
    } else if (p == 1){
    console.log('Comi um pedaço! Resta 1 pedaço')    
    } else {
        console.log('Acabou a pizza :(')
    }
}
