export default function generateArray(value, count){
    let arr = []
    for (let i = 0; i < count; i++){
        arr.push(value)
    }
    return arr
}


let count = 0;
export function generateName(){
    let border = 26
    let startCode = 'A'.charCodeAt(0)
    let name = ''
    let tmp = count;
    do {
        name += String.fromCharCode(startCode + tmp % border)
        console.log(name)
        tmp = parseInt(tmp / border)
    } while (tmp !== 0)

    count++
    return name
}
