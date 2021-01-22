// kilometerToMeter...
function kilometerToMeter(kilometer){

     const meter = (kilometer * 1000);
     return meter;
} 
console.log(kilometerToMeter(7));      //Kilometer is "7000"




// bugetCalculator... 
function bugetCalculator(watch,mobile,laptop){

    var iteamOne = (watch * 50);
    var iteamTwo = (mobile * 100);
    var iteamThree = (laptop * 500);

    var totallCost = iteamOne + iteamTwo + iteamThree;

    return totallCost; 
}

console.log(bugetCalculator(4,7,3));  // Buget Calculate is "2400"




// hotelCost...
function hotelCost(day){
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
      return totallCost;   // Totall cost is "3050"

}

console.log(hotelCost(45));




// megaFriend
function megaFriend(array) {
 var word = 0;
 var longest;
 
 for (var i = 0; i < array.length; i++) {
   if (array[i].length > word) {
     word = array[i].length;
     longest = array[i];
   }
 }
   return longest;
 }
 
 var friend = megaFriend(["rishab","abuBakar","simi", "faiza", "jax"]);
 console.log(friend);  // Mega Friend is "abuBakar"
 