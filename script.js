
const hamMenu = document.querySelector("#open-nav-menu");
const offScreenMenu = document.querySelector(".wrapper");
const closeMenuButton = document.querySelector("#close-nav-menu");

hamMenu.addEventListener("click", () => {
    offScreenMenu.classList.toggle("nav-open");
});

closeMenuButton.addEventListener("click", () => {
    offScreenMenu.classList.remove("nav-open");
});



document.addEventListener("DOMContentLoaded", function() {
    
    function showTime(){
      var date = new Date();
      var h = date.getHours(); 
      var m = date.getMinutes(); 
      var s = date.getSeconds(); 
      var session = "AM";
      
      if(h == 0){
          h = 12;
      }
      
      if(h > 12){
          h = h - 12;
          session = "PM";
      }
      
      h = (h < 10) ? "0" + h : h;
      m = (m < 10) ? "0" + m : m;
      s = (s < 10) ? "0" + s : s;
      
   var time = h + ":" +" hours "  +  m + ": "+"  min " + s + " sec " + session;
  
      document.getElementById("MyClockDisplay").innerText = time; 
      document.getElementById("MyClockDisplay").textContent = time;
      
      setTimeout(showTime, 1000);
      
  }
  
  showTime();
    greetingElement.textContent = greeting;
  
    function fetchWeather() {
     
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve({
            temperature: 25,
            condition: "Sunny"
          });
        }, 1000);
      });
    }
  
    const weatherElement = document.getElementById("weather");
    fetchWeather().then((data) => {
      weatherElement.textContent = `Current temperature: ${data.temperature}°C, Condition: ${data.condition}`;
    });
  
   
    const celsiusRadio = document.getElementById("celsius");
    const fahrRadio = document.getElementById("fahr");
  
    function updateWeatherUnit() {
      const isCelsius = celsiusRadio.checked;
      if (isCelsius) {
        weatherElement.textContent = `Current temperature: 30°C, Condition: Sunny`;
      } else {
        weatherElement.textContent = `Current temperature: ${(30 * 9/5 + 32).toFixed(1)}°F, Condition: Sunny`;
      }
    }
  
    celsiusRadio.addEventListener("change", updateWeatherUnit);
    fahrRadio.addEventListener("change", updateWeatherUnit);
  });




function updateTime() {
    const now = new Date();
  
    
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
  
  
    document.querySelector('[data-time="hours"]').textContent = hours;
    document.querySelector('[data-time="minutes"]').textContent = minutes;
    document.querySelector('[data-time="seconds"]').textContent = seconds;
  }
  
  
  updateTime();
  setInterval(updateTime, 1000);




let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("demo");
  let captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}

document.addEventListener("DOMContentLoaded", function () {
  const allRadio = document.getElementById('all');
  const paidRadio = document.getElementById('paid');
  const freeRadio = document.getElementById('free');
  const products = document.querySelectorAll('.product-item');

  allRadio.addEventListener('change', () => {
    products.forEach(product => {
      product.style.display = 'block';
    });
  });

  paidRadio.addEventListener('change', () => {
    products.forEach(product => {
      if (product.classList.contains('paid')) {
        product.style.display = 'block';
      } else {
        product.style.display = 'none';
      }
    });
  });

  freeRadio.addEventListener('change', () => {
    products.forEach(product => {
      if (product.classList.contains('free')) {
        product.style.display = 'block';
      } else {
        product.style.display = 'none';
      }
    });
  });
});




document.addEventListener("DOMContentLoaded", function() {
  // Set the current year
  const yearSpan = document.getElementById("year");
  const currentYear = new Date().getFullYear();
  yearSpan.textContent = currentYear;

  // Smooth scroll to top
  const scrollToTopButton = document.getElementById("scrollToTop");
  scrollToTopButton.addEventListener("click", function() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
});
