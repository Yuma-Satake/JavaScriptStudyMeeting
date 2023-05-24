function bonnnnnnnn() {
  console.log("bonnnnnnnn");
}

function clickKey(number) {
  // HTML要素のidがdispのHTMLを取得する
  let dispHtml = document.getElementById("disp");

  // dispHTMLの中身を表示する
  console.log(dispHtml);

  // dispHTMLのinnerTextを表示する
  console.log(dispHtml.innerText);

  // dispHTMLのinnerTextをnumberにする
  let dispNum = Number(dispHtml.innerText);

  // dispNumにnumber（入力値）を足す;
  dispNum = dispNum * 10 + number;

  // dispHTMLのinnerTextをdispNumにする
  dispHtml.innerText = dispNum;
}

function clickKey(number) {
  let dispObj = document.getElementById("disp");
  if (number === 999) {
    dispObj.innerText = 0;
    return;
  }
  dispObj.innerText = Number(dispObj.innerText) * 10 + number;
}
