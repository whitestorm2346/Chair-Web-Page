const menubtn1 = document.querySelector("#toggler1");

menubtn1.addEventListener("click", function () {
    const menu = document.querySelector('.popup-navbar');

    if(menubtn1.checked) {
        menu.classList.add("show-menu");
        menu.classList.remove("hide-menu");
        // console.log("Show Menu");
    }
    else {
        menu.classList.add("hide-menu");
        menu.classList.remove("show-menu");
        // console.log("Hide Menu");
    }
});


// inner menu part 

// document.addEventListener("DOMContentLoaded", function() {
//     var inner_menus = document.querySelectorAll('.inner-menu2')

//     inner_menus.forEach(function(inner_menu) {
//       var bar = inner_menu.querySelector('.bar')
//       var icon = bar.querySelector('i.fa-angle-down')

//       if (icon) { // 檢查是否找到 i.fa-angle-down 元素
//         icon.addEventListener('click', function() {
//           icon.classList.toggle('fa-angle-down')
//           icon.classList.toggle('fa-angle-up')

//           var ul = inner_menu.querySelector('ul')

//           if (icon.classList.contains('fa-angle-up')) {
//             ul.style.display = 'block'
//           }
//           else {
//             ul.style.display = 'none'
//           }

//           inner_menus.forEach(function(otherInnerMenu) {
//               if (otherInnerMenu !== inner_menu) {
//                 var otherBar = otherInnerMenu.querySelector('.bar')
//                 var otherIcon = otherBar.querySelector('i.fa-angle-up')
//                 var otherUl = otherInnerMenu.querySelector('ul')

//                 if (otherIcon) {
//                   otherInnerMenu.querySelector('.bar > i').classList.remove('fa-angle-up')
//                   otherInnerMenu.querySelector('.bar > i').classList.add('fa-angle-down')

//                   otherUl.style.display = 'none'
//                 }
//               }
//           })
//         }) 
//       }
//     })
// })