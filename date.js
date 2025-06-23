//1.Add commentMore actions
function is_date(input) {  
     return input instanceof Date && !isNaN(input);  
} 
 
console.log(is_date("October 13, 2014 11:13:00"));  
console.log(is_date(new Date(86400000)));  
console.log(is_date(new Date(99,5,24,11,33,30,0)));  
console.log(is_date([1, 2, 4, 0])); 

//2.

function curday(separator) {  
      let today = new Date();  
      let day = today.getDate();  
      let month = today.getMonth() + 1;  
      let year = today.getFullYear(); 
 
  return `${month < 10 ? '0' + month : month}${separator}${day < 10 ? '0' + day : 
day}${separator}${year}`; 
} 
 
console.log(curday('/'));  
console.log(curday('-'));

//3.

function getDaysInMonth(month, year) {  
    return new Date(year, month, 0).getDate();  
}  
 
console.log(getDaysInMonth(1, 2012)); console.log(getDaysInMonth(2, 2012)); 
console.log(getDaysInMonth(9, 2012)); console.log(getDaysInMonth(12, 2012));  

//4.

function month_name(date) {  
const months = ["January", "February", "March", "April", "May", "June", "July", "August", 
"September", "October", "November", "December"]; 
       return months[date.getMonth()]; 
} 
 
console.log(month_name(new Date("10/11/2009")));  
console.log(month_name(new Date("11/13/2014"))); 
 
//5.  
function compare_dates(date1, date2) {  
     if (date1.getTime() === date2.getTime()) return "Date1 = Date2";  
     if (date1.getTime() > date2.getTime()) return "Date1 > Date2";  
     return "Date2 > Date1"; 
} 
 
console.log(compare_dates(new Date('11/14/2013 00:00'), new Date('11/14/2013 00:00'))); 
console.log(compare_dates(new Date('11/14/2013 00:01'), new Date('11/14/2013 00:00'))); 
console.log(compare_dates(new Date('11/14/2013 00:00'), new Date('11/14/2013 00:01'))); 
 
//6. 
function add_minutes(date, minutes) { 
     date.setMinutes(date.getMinutes() + minutes);  
     return date; 
} 
 
console.log(add_minutes(new Date(2014,10,2), 30).toString());  
//7. 
function is_weekend(date) { 
     const day = new Date(date).getDay();  
     return (day === 0 || day === 6) ? "weekend" : undefined;  
}  
 
console.log(is_weekend('Nov 15, 2014'));  
console.log(is_weekend('Nov 16, 2014'));  
console.log(is_weekend('Nov 17, 2014')); 
 
//8. 
function date_diff_indays(date1, date2) { 
     const oneDay = 24 * 60 * 60 * 1000;  
     const diffDays = Math.round((new Date(date2) - new Date(date1)) / oneDay); 
     return diffDays; 
} 
 
console.log(date_diff_indays('04/02/2014', '11/04/2014')); 
console.log(date_diff_indays('12/02/2014', '11/04/2014')); 
 
//9. 
function lastday(year, month) { 
     return new Date(year, month + 1, 0).getDate(); 
} 
 
console.log(lastday(2014,0));  
console.log(lastday(2014,1));  
console.log(lastday(2014,11)); 
 
 
//10. 
function yesterday(date) { 
     const yesterdayDate = new Date(date); 
     yesterdayDate.setDate(yesterdayDate.getDate() - 1);  
    return yesterdayDate.toString(); 
} 
 
console.log(yesterday('Nov 15, 2014'));  
console.log(yesterday('Nov 16, 2015'));  
console.log(yesterday('Nov 17, 2016')); 
 
 
//11. 
function max_date(dates) { 
     const max = new Date(Math.max(...dates.map(date => new Date(date)))); 
     return max.toISOString().split('T')[0]; 
} 
 
console.log(max_date(['2015/02/01', '2015/02/02', '2015/01/03'])); 
 
 
//12. 
function min_date(dates) { 
     const min = new Date(Math.min(...dates.map(date => new Date(date))));  
     return min.toISOString().split('T')[0]; 
} 
 
console.log(min_date(['2015/02/01', '2015/02/02', '2015/01/03'])); 
 
//13. 
function timeConvert(minutes) { 
      const hours = Math.floor(minutes / 60); 
    const remainingMinutes = minutes % 60;  
    return `${minutes} minutes = ${hours} hour(s) and ${remainingMinutes} minute(s).`;  
} 
 
console.log(timeConvert(200)); 
 
 
//14 
function days_of_a_year(year) { 
     return (new Date(year, 1, 29).getDate() === 29) ? 366 : 365; 
} 
 
console.log(days_of_a_year(2015));  
console.log(days_of_a_year(2016)); 
 
 
//15 
function quarter_of_the_year(date) { 
     const month = date.getMonth() + 1;  
     if (month <= 3) return 1;  
     if (month <= 6) return 2;  
     if (month <= 9) return 3;  
     return 4; 
} 
 
console.log(quarter_of_the_year(new Date(2015, 1, 21))); 
console.log(quarter_of_the_year(new Date(2015, 10, 18))); 
 
 
 
//16 
function days_passed(date) {  
     const start = new Date(date.getFullYear(), 0, 1);  
     const diff = date - start; 
     return Math.floor(diff / (1000 * 60 * 60 * 24)); 
} 
console.log(days_passed(new Date(2015, 0, 15)));  
console.log(days_passed(new Date(2015, 11, 14))); 
 
//17 
Function 
   
    unix_to_time(timestamp) { 
        return new Date(timestamp * 1000).toString(); 
} 
 
console.log(unix_to_time(1428567261)); 
  
//18. 
function calculate_age(birthdate) {  
     const today = new Date();  
     let age = today.getFullYear() - birthdate.getFullYear(); 
      const month = today.getMonth() - birthdate.getMonth();  
     if (month < 0 || (month === 0 && today.getDate() < birthdate.getDate())) { 
         age--; 
   } 
    return age;  
} 
 
console.log(calculate_age(new Date(1982, 11, 4)));  
console.log(calculate_age(new Date(1962, 1, 1))); 
 