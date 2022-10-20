// ①右下ボタン押された時の関数 (作成途中)
function applyOperation(number, name, price, imgUrl){
    
    let opName = document.getElementById("opName");
    let opPrice = document.getElementById("opPrice");
    let opImage = document.getElementById("opImage");
    // 左上へ　画像表示（あとで実装）


    /*
    let container = document.createElement("div");
    container.classList.add("container", "d-flex", "justify-content-center");
    container.innerHTML=`
                <div class="vh-75 p-md-5 p-3 my-5 col-md-8 col-12 d-flex imgBackground" style="background-image: url('${imgUrl}');">`

    opImage.append(container);*/

    return NaN;
} 

// ②pushボタン押したら、アラート、そして、他の表示項目を空にする関数



// 右下のボタンクラス
class chooseButton{
    constructor(number, price, name, imgUrl){
        this.number = number;
        this.price = price;
        this.name = name;
        this.imgUrl = imgUrl;
    }

    //ボタン作成
    generateButton(){
        let domObj = document.getElementById("rightLower");
        let container = document.createElement("button");
        container.classList.add("col-4", "d-flex", "operator-btn");
        container.innerHTML=this.number;
        console.log(container);
        domObj.append(container);
        return domObj;
    }

    // 画像を格納用　数値と紐づける必要がある
    generateImgBox(){
        let domObj = document.getElementById("leftUpper");
        let container = document.createElement("div");
        container.classList.add("img-box", "slider-item");
        container.style.backgroundImage = this.imgUrl;
        
    }

    //画面表示
    showInfo(){
        let domObjName = document.getElementById("Name");
        let domObjPrice = document.getElementById("Price");

    }
}

// helper関数で、ボタン作成, 画像を格納
class helperFuntion{
    static generateStartUp(buttonList){
        for(let i = 0; i<buttonList.length; i++){
            buttonList[i].generateButton();
            buttonList[i].generateImgBox();
        }
    }
}

//右下ボタン作成 
let button1 = new chooseButton(1, 150, "PC", "https://cdn.pixabay.com/photo/2018/02/23/04/38/laptop-3174729_1280.jpg");
let button2 = new chooseButton(2, 200, "Magnifying glasses", "https://cdn.pixabay.com/photo/2020/06/12/03/06/magnifying-glass-5288877__340.jpg");
let button3 = new chooseButton(3, 400, "Robot", "https://cdn.pixabay.com/photo/2017/05/10/19/29/robot-2301646_1280.jpg");
let buttonList = [button1, button2, button3];
helperFuntion.generateStartUp(buttonList);

// 各btnに機能追加していく
const operatorButtons = document.querySelectorAll(".operator-btn");
// ボタン押したときの挙動
// 右上へ名前、値段表示
let opName = document.getElementById("opName");
let opPrice = document.getElementById("opPrice");
let opImage = document.getElementById("opImage");

for(let i = 0; i < operatorButtons.length; i++){
    let opElement = operatorButtons[i];

    // 画面遷移（これから作成）
    opElement.addEventListener("click", function(){
        //要素.innerHTMLで要素の中身を取得可能
        opName.value = buttonList[i].name;
        opPrice.value = buttonList[i].price;
        //画面遷移
        opImage.src = buttonList[i].imgUrl;
    })
}

// 関数メソッド（mapやforEachなど）を使ってリストの反復処理を行い、ラムダ関数を適用します。これらの概念については、上級コースで学びます。
//operatorButtons.forEach(opElement => opElement.addEventListener("click", function(){opName.value = applyOperation(op1.value, op2.value, opElement.innerHTML)}));
//operatorButtons.forEach(opElement => opElement.addEventListener("click", opName = opElement.innerHTML));