function sostavChisla(massivChisel, chislo) {
    let result = []
    massivChisel = massivChisel.sort().filter(v => v <= chislo).reverse()
    massivChisel.forEach((v, ind) => {
        let arrVal = []
        let sum = 0
        for (let i = ind; i < massivChisel.length; i++) { // здесь заканчивается счетчик
            console.log(sum, massivChisel[i], chislo)
            if (sum + massivChisel[i] <= chislo) {
                sum = sum + massivChisel[i]
                arrVal.push(massivChisel[i])
                console.log(arrVal)
                if (sum == chislo) {
                    sum = v
                    result.push(arrVal)
                    console.log('res', arrVal, sum)
                    arrVal = [sum]
                }
            }
        }
        if (arrVal.length != 1)
            if (arrVal.reduce((a, b) => a + b) == chislo)
                result.push(arrVal)
    })
    return result;
}
sostavChisla([1, 2, 3, 4, 5, 6, 7, 8], 15)