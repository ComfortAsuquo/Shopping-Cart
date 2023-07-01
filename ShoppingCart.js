// // const likeBtn = document.getElementsByClassName(".like");
// // const addBtn = document.getElementsByClassName(".add")
// // const minusBtn = document.getElementsByClassName(".minus")
// // const count =document.getElementsByClassName("count")
// const workdress =document.getElementsByClassName("workdress")
// const deleteAll =document.querySelector(".deleteall")
// console.log(workdress)

// const totalAmount = document.querySelector(".totalamount")



// //.map is an array function that loops thru an array, modifies each item in the array and puts it in a new array. like=object, classList=property of like also an object, toggle, add are medthods of classList. ForEac does not return a new array, it acts on the original array


// let sum = 0
// for(let i=0; i<workdress.length; i++){
//     const item = workdress[i]
//     console.log(item)
//     const addBtn = item.querySelector(".add");
//     // console.log(addBtn)
//     const minusBtn = item.querySelector(".minus");
//     const likeBtn = item.querySelector(".like");
//     const count =item.querySelector(".count");
//     const deleteBtn = item.querySelector(".deleteitem");
//     const Amount = item.querySelector(".amount");
//     // console.log(count)

//     // likeBtn.forEach(like => {
    
//         likeBtn.addEventListener("click", function(){
//             likeBtn.classList.add("likebtn");
//             likeBtn.classList.toggle("active");
//         })
//     // })
    
//     // addBtn.forEach(add =>{
//         addBtn.addEventListener("click", function(){
//         increaseQuantity(count)
//         calculateTotal();
//         updateItemPrice(Amount, count)
//         })
//     // })
    
//     // minusBtn.forEach(minus =>{
//         minusBtn.addEventListener("click", function(){
//             decreaseQuantity(count);
//             calculateTotal();
//             updateItemPrice(Amount, count)

//         })
//     // })
//         deleteBtn.addEventListener("click", function(){
//         item.remove();
//         calculateTotal();
//     })

//     //convert count to a number
//     const newCount = Number(count.innerText);
//     //convert string to number
//     const newAmount = parseFloat(Amount.innerText);
//     const totalAmount = newCount*newAmount;
//     //sum = sum+totalAmount
//     sum += totalAmount;
//     // Amount.innerText = sum

// }

// function increaseQuantity(counter){
//     let countItem = Number(counter.innerText);
//     countItem++
//     counter.innerText=countItem
//  }
 
 
//  function decreaseQuantity(counter){
//      let countItem = Number(counter.innerText);
//      if(countItem>1){
//          countItem--
//          counter.innerText=countItem
//      }
     
//  }

// function calculateTotal(){
//     sum = 0
//     for(i=0; i<workdress.length;i++){
//         const itemOne = workdress[i];
//         const quantity= itemOne.querySelector(".count");
//         const Amount = itemOne.querySelector(".amount");
//         const AmountOne = parseFloat(Amount.innerText);
//         const quantityEl = Number(quantity.innerText);
//         const oneSum =AmountOne*quantityEl
//         sum += oneSum
//     }
//     totalAmount.innerText = sum
// }

// function updateItemPrice(amountElement, count) {
//     const newAmount = parseFloat(amountElement.innerText);
//     const quantity = Number(count.innerText);
//     const totalPrice = newAmount * quantity;
//     amountElement.innerText = totalPrice.toFixed(2);
// }

// deleteAll.addEventListener("click", function(){
//     //change html collection(array-like object) to an array
//    const newArray = Array.from(workdress)
//    newArray.forEach(element =>{
//     element.remove()
//     // Amount.innerText = "$" + 0
//    })
// })


// document.addEventListener("DOMContentLoaded", function() {
    const workdress = document.getElementsByClassName("workdress");
    const deleteAll = document.querySelector(".deleteall");
    const totalAmount = document.querySelector(".totalamount");
  
    let sum = 0;
  
    for (let i = 0; i < workdress.length; i++) {
      const item = workdress[i];
      const addBtn = item.querySelector(".add");
      const minusBtn = item.querySelector(".minus");
      const likeBtn = item.querySelector(".like");
      const count = item.querySelector(".count");
      const deleteBtn = item.querySelector(".deleteitem");
      const amountElement = item.querySelector(".amount");
  
      likeBtn.addEventListener("click", function () {
        likeBtn.classList.add("likebtn");
        likeBtn.classList.toggle("active");
      });
  
      addBtn.addEventListener("click", function () {
        increaseQuantity(count);
        updateItemPrice(amountElement, count);
        calculateTotal();
      });

      minusBtn.addEventListener("click", function () {
        decreaseQuantity(count);
        updateItemPrice(amountElement, count);
        calculateTotal();
      });
  
      deleteBtn.addEventListener("click", function () {
        item.remove();
        calculateTotal();
      });
    }
  
    deleteAll.addEventListener("click", function () {
      const newArray = Array.from(workdress);
      newArray.forEach((element) => {
        element.remove();
      });
      calculateTotal();
    });
    function increaseQuantity(counter) {
        let countItem = Number(counter.innerText);
        countItem++;
        counter.innerText = countItem;
        updateTotalQuantity();

      }
    
      function decreaseQuantity(counter) {
        let countItem = Number(counter.innerText);
        if (countItem > 1) {
          countItem--;
          counter.innerText = countItem;
          updateTotalQuantity();
        }
      }
    
      function calculateTotal() {
        sum = 0;
        for (let i = 0; i < workdress.length; i++) {
          const itemOne = workdress[i];
          const quantity = itemOne.querySelector(".count");
          const amountElement = itemOne.querySelector(".amount");
          const AmountOne = parseFloat(amountElement.textContent);
          const quantityEl = Number(quantity.innerText);
          const oneSum = quantityEl * AmountOne;
          sum += oneSum;
        }
        const sumString= sum.toString()
        const sumSlice= sumString.slice(0,-3)+"," + sumString.slice(-3)
        totalAmount.innerText = "₦"+sumSlice+".00";
    }
  
    function updateItemPrice(amountElement, count) {
      const newAmount = parseFloat(amountElement.textContent);
      const quantity = Number(count.innerText);
      const totalPrice = newAmount * quantity;
      amountElement.textContent = newAmount.toFixed(2);
    }

    function updateTotalQuantity(){
        let totalQuantity = 0;
        for (let i = 0; i < workdress.length; i++) {
        const itemNumber = workdress[i];
        const quantity = itemNumber.querySelector(".count");
        const quantityEl = Number(quantity.innerText);
        totalQuantity += quantityEl
        const totalItems= document.querySelector(".totalitems")
        totalItems.innerText = totalQuantity + " Items"

        }
    }
    
  



