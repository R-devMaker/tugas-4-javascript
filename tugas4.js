function tinggibadan(x,y,z) {
    if (x>y) {
        if (x>z) {
            if (y>z) {
                console.log("X tinggi ke-1, Y tinggi ke-2, Z tinggi ke-3");
            } else {
                console.log("X tinggi ke-1, Y tinggi ke-3, Z tinggi ke-2");
            }
        } else {
            console.log("X tinggi ke-2, Y tinggi ke-3, Z tinggi ke-1");
        }
    } else {
        if (x<z) {
            if (y<z) {
                console.log("X tinggi ke-3, Y tinggi ke-2, Z tinggi ke-1");
            } else {
                console.log("X tinggi ke-3, Y tinggi ke-1, Z tinggi ke-2");
            }
        } else {
            console.log("X tinggi ke-2, Y tinggi ke-1, Z tinggi ke-3");
        }
    }
}

tinggibadan(170,160,150);

// tinggi ke-1 = paling tinggi
// tinggi ke-2 = tinggi sedang
// tinggi ke-3 = paling pendek