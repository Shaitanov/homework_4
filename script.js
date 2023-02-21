const student = "Шайтанов Максим"; // Очевидно, что здесь ваши личные Фамилия, Имя и Отчество

document.getElementById("student").innerHTML = student;

// Отсюда и ниже идет ваш код решения домашнего задания
// ...



function getRandomIntInclusive(min, max) {
   min = Math.ceil(min);
   max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  function throwRandomError(errorRate) {
  
    if (getRandomIntInclusive(0 , 100) <= errorRate) {
       throw new Error('Cломалось');
 }
 }
 
 const errorRate = 0.2;
 
 try 
 {
   throwRandomError(errorRate) ;
   
   alert('Всё работает :) ');
   
   } 
   catch (err) 
   {
  alert ('Всё не работает :(');
   
   }
