var { adjustPath, logWarning, logTime, log} = require('../util')

console.log('===============================');
logTime(new Date().toString().match(/(\d\d:){2}\d{2}/g))


let arr = [
    {
        id:0,
        name:"a",
        money: '12'
    },
    {
        id: 1,
        name: "b",
        money: '244.6'
    },
    {
        id: 2,
        name: "c",
        money: '245.8'
    },
    {
        id: 3,
        name: "d",
        money: '36.05'
    }
]
arr.sort((x, y) => { return x.money - y.money})

for (const mem of arr) {
    console.log(`{id:${mem.id},name:${mem.name},money:${mem.money}}`);
}





console.log('===============================');










