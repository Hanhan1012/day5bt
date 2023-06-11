//1
const arr1 = Array()

//2
const arr2 = Array(8)
//3
console.log(arr2.length)
//4
const num4=[0,1,2,3,4,5,6,7]
console.log(num4[0],num4[num4.length/2],num4[num4.length -1])
//5
const mixedDataTypes = ['monday',12,true,7,9,6,'tomorrow']
console.log(mixedDataTypes.length)
//6
const itCompanies=['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle' , 'Amazon' ]

//7
console.log(itCompanies)

//8
console.log(itCompanies.length)
//9
console.log(itCompanies[0],itCompanies[(itCompanies.length-1)/2],itCompanies[itCompanies.length -1])
//10
for(company10 of itCompanies ){
    console.log(company10)
}
//11
for(one in itCompanies){
    Companies11 = itCompanies[one].toUpperCase()
   console.log(Companies11.toUpperCase()) 
}

//12
console.log(itCompanies.toString()+ " are big IT companies")
//13
const index = itCompanies.indexOf("Facebook")
if(index === -1){
    console.log(' company is not found')  
 } else {
     console.log(itCompanies[index])
 }
//14
const company14=[]
for(company1 of itCompanies ){
const index14 = company1.indexOf("oo")
if(index14 != -1){ company14.push(company1)}}
    console.log(company14) 

//15
console.log(itCompanies.sort())
//16
console.log(itCompanies.reverse())
//17
const itCompanies17=['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle' , 'Amazon' ]

console.log(itCompanies17.slice(0,3))
//18
const itCompanies18=['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle' , 'Amazon' ]
itCompanies18.splice(0,4)
console.log(itCompanies18)
//19
const itCompanies19=['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle' , 'Amazon' ]
itCompanies19.splice(1,itCompanies19.length -2)
console.log(itCompanies19)
//20
const itCompanies20=['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle' , 'Amazon' ]
itCompanies20.shift()
console.log(itCompanies20)
//21
const itCompanies21=['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle' , 'Amazon' ]
//22
const itCompanies22=['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle' , 'Amazon' ]
itCompanies22.pop()
console.log(itCompanies22)
//23
const itCompanies23=['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle' , 'Amazon' ]
itCompanies23.length=0
console.log(itCompanies23)