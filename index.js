// find the nearest square number, nearest_sq(n), of a positive integer n.

// describe("Basic tests",() => {
//     Test.assertEquals(nearestSq(1),1)
//     Test.assertEquals(nearestSq(2),1) 
//     Test.assertEquals(nearestSq(10),9)
//     Test.assertEquals(nearestSq(111),121)
//     Test.assertEquals(nearestSq(9999),10000)
    
//   });

function nearestSquareNumber (num) {
    let sqrtOfNumber = Math.sqrt(num)
    let roundedDownNumber = Math.round(sqrtOfNumber)
    let nearestSquareNum = Math.pow(roundedDownNumber, 2)
    return nearestSquareNum
}
