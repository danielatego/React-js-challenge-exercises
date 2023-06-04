/* challenge 1:
Given an array of numbers, return an array of each number, squared
const nums= [1,2,3,4,5]

*/
const nums= [1,2,3,4,5];
var squaredNums=[];
for( i =0;i<nums.length;i++){
     squaredNums[i]=nums[i]*nums[i];
}
//console.log(squaredNums);
//using a mapping function

var mapped_nums =[];

mapped_nums = nums.map(myFunction)

function myFunction(num){
    return (num*num);
    
}
//console.log(mapped_nums);

/*Challenge 2:
Given an array of strings, return an array where the first letter of each string is capitalized

const names = ['alice','bob','charlie','danielle']
*/

const names = ['alice','bob','charlie','danielle']

const sentenceCase = names.map(function (item){
     newp = item.charAt(0).toUpperCase()+item.slice(1);
     return newp;
     
})
//console.log(sentenceCase)

/* Challenge 3:
Given an array of strings,return an array of strings that wraps  of thr original strings in HTML-like<p></p> tag.
e.g given: ['Bulbasaur', 'Charmander','Squirtle']

return: ['<p>Bulbasaur</p>', '<p>Charmander</p>','<p>Squirtle</p>'] 
*/
const pokemon = ['Bulbasaur', 'Charmander','Squirtle'];
const tag1 = '<p>';
const tag2 = '</p>';
const lipoke = pokemon.map(item =>{
     newString = tag1+item.slice(0)+tag2
     return newString;
})
console.log(lipoke);

/* Challenge: complete the function below\
Given a name, return "Good <timeOfDay>,name <name>"depending on the current time of day.

4 am - 11:59 am, timeOfDay = "morning"
12 pm - 4:59 pm: timeOfDay = "afternoon"
5 pm - 7:59 pm: timeOfDay = "evening"
8 pm - 3:59 am: timeOfDay = "night"

E.g. if it's currently 1 pm, greeting ("Jane")==> "Good afternoon, Jane!"
Hint: you can get the current time of day by using:

const date = new Date()
const hours = date.getHours()
*/

function greeting(name){
     const date = new Date().getHours()
     console.log(date)
     switch (date) {
          case 4:case 5:case 6:case 7:case 8:case 9:case 10:case 11:
               console.log(`Good morning, ${name}`)
               break;
          case 12:case 13:case 14:case 15:case 16:
               console.log(`Good afternoon, ${name}`)
               break;
          case 17:case 18:case 19:
               console.log(`Good evening, ${name}`)
                    break;
          default:
               console.log(`Good night, ${name}`)
               break;
     }
}
greeting('dan');