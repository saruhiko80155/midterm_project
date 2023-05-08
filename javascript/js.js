//donation_page閱讀更多
function readmore() {
  let x = window.getComputedStyle(document.getElementById("readmorecontent")).getPropertyValue("display");
  let y = window.getComputedStyle(document.getElementById("readmoredote")).getPropertyValue('display');
  let readmorebotton = document.getElementById("readmorebotton").innerText;
  let mydonategradient = window.getComputedStyle(document.getElementById("mydonategradient")).getPropertyValue('background');
  // let donategradient=window.getComputedStyle(document.getElementById("mydonate2")).getPropertyValue('-webkit-mask-image');
  // console.log(x);
  // console.log(y);
  // console.log(readmorebotton);
  // console.log(donategradient);
  // console.log(mydonategradient);

  if (x === "none") {
    x = "block";
    y = "none";
    readmorebotton = "關閉";
    mydonategradient = "none";
  } else {
    x = "none";
    y = "inline";
    readmorebotton = "閱讀更多";
    mydonategradient = "linear-gradient(0deg, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0.6542857142857144) 10%, rgba(0, 0, 0, 0.39714285714285713) 25%, rgba(255, 255, 255, 0) 50%)"
    // donategradient="linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 40%, rgba(0,0,0,0) 100%)";
  }
  document.getElementById("readmorecontent").style.display = x;
  document.getElementById("readmoredote").style.display = y;
  document.getElementById("readmorebotton").innerText = readmorebotton;
  document.getElementById("mydonategradient").style.background = mydonategradient;
  // document.getElementById("mydonate2").style.-webkit-mask-image = donategradient;


}
//捐款頁面切換1>2
function donatenextstep() {
  let donation = document.getElementsByName("donation");
  // console.log(typeof donation[0].value);
  let checkedmoney = "";
  for (var i = 0; i < donation.length; i++) {
    if (donation[i].checked) {
      checkedmoney = (donation[i].value);
      break;
    }
  }
  // console.log(checkedmoney);

  let donation2 = document.getElementById("btn-check5").value;
  // console.log(donation2);
  if (donation2 == "") {
    document.getElementById("yourdonatechoice").innerText = checkedmoney + '元';
  } else {
    document.getElementById("yourdonatechoice").innerText = donation2 + '元';
  }

  let donateform2 = window.getComputedStyle(document.getElementById("donateform2")).getPropertyValue("display");
  // console.log(donateform2);
  let donateform1 = window.getComputedStyle(document.getElementById("donateform1")).getPropertyValue("display");
  if (donateform2 === "none") {
    donateform2 = "block";
    donateform1 = "none";
  }
  document.getElementById("donateform2").style.display = donateform2;
  document.getElementById("donateform1").style.display = donateform1;
}
//捐款頁面切換1>2
function donateprestep() {
  let donateform2 = window.getComputedStyle(document.getElementById("donateform2")).getPropertyValue("display");
  // console.log(donateform2);
  let donateform1 = window.getComputedStyle(document.getElementById("donateform1")).getPropertyValue("display");
  if (donateform2 === "block") {
    donateform2 = "none";
    donateform1 = "block";
  }
  document.getElementById("donateform2").style.display = donateform2;
  document.getElementById("donateform1").style.display = donateform1;
}
//捐款完成感謝頁面
function submitForm(event) {
  // 阻止表單預設的提交行為
  event.preventDefault();
  // 獲取表單數據，進行提交

  // 在提交成功後，顯示感謝區塊
  let thanks = document.getElementById("donateform3");
  thanks.style.display = "block";
  let donateform2 = window.getComputedStyle(document.getElementById("donateform2")).getPropertyValue("display");
  thanks.style.display = "block";
  document.getElementById("donateform2").style.display = "none";
}


//捐款金額設定單選
function uncheckOthers(checkbox) {
  if (checkbox.checked) {
    let checkboxes = document.getElementsByName("donation");
    for (let i = 0; i < checkboxes.length; i++) {
      if (checkboxes[i] !== checkbox) {
        checkboxes[i].checked = false;
      }
    }
  }
}
//顯示捐款金額
// function donatenextstep() {

//   var userinput = document.getElementById("sales").value;
//   // console.log(userinput);
//   var price=document.getElementById("price").innerText;
//   var x= userinput*price;
//   document.getElementById("total").innerText=parseInt(x);
// }

//活動頁面開關
function openmodel() {
  // console.log("kkk");
  // let eventopen1=document.getElementById("eventopen1");
  // console.log(eventopen1);
  // let eventopenspan1=getComputedStyle(document.getElementById("Modal1")).getPropertyValue("display");
  // console.log(eventopenspan1);
  // getComputedStyle(eventopenspan1).getPropertyValue("display")="block";
  document.getElementById("Modal1").style.display = "block";
}
function closemodal() {
  document.getElementById("Modal1").style.display = "none";
}

function openmodel2() {
  document.getElementById("Modal2").style.display = "block";
}
function closemodal2() {
  document.getElementById("Modal2").style.display = "none";
}

function openmodel3() {
  document.getElementById("Modal3").style.display = "block";
}
function closemodal3() {
  document.getElementById("Modal3").style.display = "none";
}

function openmodel4() {
  document.getElementById("Modal4").style.display = "block";
}
function closemodal4() {
  document.getElementById("Modal4").style.display = "none";
}
// 投稿文章
function story() {
  // console.log("kkk");
  let storytext = window.getComputedStyle(document.getElementById("storytext")).getPropertyValue("display");
  // console.log(donateform2);
  let appreciate = window.getComputedStyle(document.getElementById("appreciate")).getPropertyValue("display");
  if (storytext === "block") {
    storytext = "none";
    appreciate = "block";
  } else {
    storytext = "block";
    appreciate = "none"
  }
  document.getElementById("storytext").style.display = storytext;
  document.getElementById("appreciate").style.display = appreciate;
}