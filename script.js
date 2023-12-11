//const selectEl = document.getElementById('select');
//const registrationImage = document.getElementById('planet-img');

//selectEl.addEventListener('change', function () {

   // switch (true) {
      //  case this.value === 'audi R8': registrationImage.src = "C:\Users\Mykola\Desktop\Проект\img\audi R8.jpg";
      //      break;
     //   case this.value === 'audi A6': registrationImage.src = "C:\Users\Mykola\Desktop\Проект\img\Audi A6.jpg";
    //        break;
   // }

//})
//button.addEventListener('click', function () {
 //   console.log(this.className);
 //   this.classList.toggle('form-submit-button');
//})

document.getElementById('kmInput').addEventListener('input', function (e) {
    let km = e.target.value;

    document.getElementById('metresOutput').innerHTML = km * 1000;

    document.getElementById('smOutput').innerHTML = km * 100000;

    document.getElementById('mlOutput').innerHTML = km * 1000000;
