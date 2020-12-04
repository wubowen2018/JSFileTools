let getCar = 0

let misCar = 0

function setPrize() {
    let prizeArr = ["山羊", "山羊", "汽车"];
    prizeArr.sort(() => Math.random() - 0.5)
    return prizeArr;
}


for (let i = 0; i < 1000; i++) {
    const arr = setPrize()
    const index = parseInt(Math.random() * 3)
    arr.splice(index, 1);

    for (let j = 0; j < arr.length; j++) {
        if (arr[j] === "山羊") {
            arr.splice(j, 1);
        }
    }

    if (arr[0] === "汽车") {
        getCar++
    } else {
        misCar++
    }
}

console.log(getCar, misCar);