var counts1 = setInterval(updated1,1);
        let upto1 = 0;
        function updated1() {
            var result1=document.getElementById("counter1");
            result1.innerHTML = ++upto1;
            if (upto1 === 232) {
                clearInterval(counts1);
            }
        }
        
        var counts2 = setInterval(updated2,0.100);
        let upto2 = 0;
        function updated2() {
            var result2=document.getElementById("counter2");
            result2.innerHTML = ++upto2;
            if (upto2 === 520) {
                clearInterval(counts2);
            }
        }
        var counts3 = setInterval(updated3);
        let upto3 = 0;
     
        function updated3() {
            var result3=document.getElementById("counter3");
            result3.innerHTML = ++upto3;
            if (upto3 === 1432) {
                clearInterval(counts3);
            }
        }
        var counts4 = setInterval(updated4);
        let upto4 = 0;
     
        function updated4() {
            var result4=document.getElementById("counter4");
            result4.innerHTML = ++upto4;
            if (upto4 === 15) {
                clearInterval(counts4);
            }
        }
   
        const filterContainer = document.querySelector(".gallery-filter"),
        galleryItems = document.querySelectorAll(".gallery-item");
       
        filterContainer.addEventListener("click", (event) =>{
          if(event.target.classList.contains("filter-item")){
             // deactivate existing active 'filter-item'
             filterContainer.querySelector(".active").classList.remove("active");
             // activate new 'filter-item'
             event.target.classList.add("active");
             const filterValue = event.target.getAttribute("data-filter");
             galleryItems.forEach((item) =>{
              if(item.classList.contains(filterValue) || filterValue === 'all'){
                item.classList.remove("hide");
                 item.classList.add("show");
              }
              else{
                item.classList.remove("show");
                item.classList.add("hide");
              }
             });
          }
        });
















// var all=()=>{
//     var imageSources = [
//         'images/gal1.jpg',
//         'images/gal2.jpg',
//         'images/gal3.jpg',
//         'images/gal4.jpg',
//         'images/gal5.jpg',
//         'images/gal6.jpg',
//         'images/gal7.jpg',
//         'images/gal8.jpg',
//         'images/gal9.jpg',
//       ];
//       function displayImagesInDivs(imageSources) {
//           var container = document.getElementById('dynamicRow');
//           imageSources.forEach(function(source) {
//             var div = document.createElement('div');
//             div.setAttribute('class','col-12 col-md-6 col-lg-4')
//             var img = document.createElement('img');
//             img.setAttribute('class','img w-100 mt-3')
//             img.src = source;
//             div.appendChild(img);
//             container.appendChild(div);
//           });
//         }
//         displayImagesInDivs(imageSources);
// }
// var app=()=>{
//     var imageSources = [
//         'images/gal1.jpg',
//         'images/gal7.jpg',
//         'images/gal8.jpg',
//         'images/gal9.jpg',
//       ];
//       function displayImagesInDivs(imageSources) {
//           var container = document.getElementById('dynamicRow');
//           imageSources.forEach(function(source) {
//             var div = document.createElement('div');
//             div.setAttribute('class','col-12 col-md-6 col-lg-4')
//             var img = document.createElement('img');
//             img.setAttribute('class','img w-100 mt-3')
//             img.src = source;
//             div.appendChild(img);
//             container.appendChild(div);
//           });
//         }
//         displayImagesInDivs(imageSources);
// }
// var card=()=>{
//     var imageSources = [
//         'images/gal8.jpg',
//         'images/gal9.jpg',
//       ];
//       function displayImagesInDivs(imageSources) {
//         var container = document.getElementById('dynamicRow');
//         imageSources.forEach(function(source) {
//           var div = document.createElement('div');
//           div.setAttribute('class','col-12 col-md-6 col-lg-4')
//           var img = document.createElement('img');
//           img.setAttribute('class','img w-100 mt-3')
//           img.src = source;
//           div.appendChild(img);
//           container.appendChild(div);
//         });
//       }
//       displayImagesInDivs(imageSources);
// }
// var web=()=>{
//     var imageSources = [
//         'images/gal1.jpg',
//         'images/gal2.jpg',
//         'images/gal3.jpg',
//         'images/gal4.jpg',
//         'images/gal5.jpg',
//         'images/gal6.jpg',
//         'images/gal7.jpg',
//         'images/gal8.jpg',
//         'images/gal9.jpg',
//       ];
      
//       function displayImagesInDivs(imageSources) {
//         var container = document.getElementById('dynamicRow');
//         imageSources.forEach(function(source) {
//           var div = document.createElement('div');
//           div.setAttribute('class','col-12 col-md-6 col-lg-4')
//           var img = document.createElement('img');
//           img.setAttribute('class','img w-100 mt-3')
//           img.src = source;
//           div.appendChild(img);
//           container.appendChild(div);
//         });
//       }
//       displayImagesInDivs(imageSources);
// }
