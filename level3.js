//1
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
//Sort the array and find the min and max age
ages.sort()
console.log('min age: ',ages[0])
console.log('max age: ',ages[ages.length-1])
//Find the median age(one middle item or two middle items divided by two)
const length = ages.length
if(length%2===0){
    console.log((ages[length/2]+ages[length/2+1])/2)
}else{
    console.log(ages[length-1/2])
}
//Find the average age(all items divided by number of items)
var sum=0;
var average=0;
sum= 19+22+19+24+20+25+26+24+25+24;
average=sum/10;
console.log(average)
//Find the range of the ages(max minus min)
console.log('range: ',ages[ages.length-1] - ages[0])
//Compare the value of (min - average) and (max - average), use abs() method
const ages1 = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
ages1.sort()
var sum1=0;
sum1= 19+22+19+24+20+25+26+24+25+24;
console.log(Math.abs(ages1[0]-sum1/ages1.length-1))
//1 Slice the first ten countries from the countries array
console.log(countries.slice(0,11))
//Find the middle country(ies) in the countries array
const length2 = countries.length
if(length%2===0){
    console.log((countries[length/2]+" " +countries[length/2+1]))
}else{
    console.log(countries[length-1/2])}
//Divide the countries array into two equal arrays if it is even. If countries array is not even , one more country for the first half.

if (countries.length % 2 == 0) { 
console.log(countries.slice(0,countries.length/2)) 
console.log(countries.slice(countries.length / 2, countries.length)) 
} else {
 console.log(countries.slice(0, (countries.length+1) / 2)) 
 console.log(countries.slice((countries.length+1) / 2, countries.length)) }



