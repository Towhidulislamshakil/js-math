// kilometerToMeter...
// using simple formula to find meter to kilometer...
function kilometerToMeter(kilometer){
    if (kilometer > 0)
    {
      const meter = (kilometer * 1000);
      return meter;
    }
    else {
      console.log("Please give the right input") ;
    }
} 
console.log(kilometerToMeter(6));



// bugetCalculator... 
// Caculate the totall cost of different iteam...
function bugetCalculator(watch,mobile,laptop){
  if (watch,mobile,laptop > 0){
      var iteamOne = (watch * 50);
      var iteamTwo = (mobile * 100);
      var iteamThree = (laptop * 500);   
    var totallCost = iteamOne + iteamTwo + iteamThree;
    return totallCost; 
  }
    else{
      console.log("Please give the right input") ;
    }
}
console.log(bugetCalculator(1,4,7)); 



// hotelCost...
//using conditional (if,else if,else) to find hotelCost with two times discount...
function hotelCost(day){
  if (day > 0){
    if(day<=10){
       var totallCost = day*100;
    }                                  
    else if(day<=20){
       var  first = 10*100;
       var  firstDiscount = (day-10)*80;
       var  totallCost = first + result2;
    }
    else{
       var first  = 10*100;
       var firstDiscount = 10*80;
       var secondDiscount  = (day-20)*50;
       var totallCost = first + firstDiscount + secondDiscount;
    }
      return totallCost; 
  }
  else{
    console.log("Please give the right input") ;
  }
}
console.log(hotelCost(36));



// megaFriend...
//using for loop and length method to find big-string of an array...
function megaFriend(array) {
 var word = 0;
 var longest;
 for (var i = 0; i < array.length; i++){    
   if (array[i].length > word) {
     word = array[i].length;
     longest = array[i];
   }
 }
   return longest;
 }
 var friend = megaFriend(["rishab","abuBakar","simi", "faiza", "jax"]);
 console.log(friend); 
 