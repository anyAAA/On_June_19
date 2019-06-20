//需求分析

// 默认是0 点1 1 上去了 点2 2 也上去了


// 点击获取1-9 一堆按钮
var btnResult = document.getElementById("txtResult");
// btnResult.value = "";

// 点击数字 累计数字  返回的是一个集合
var btnNums = document.getElementsByClassName("number");

// 清屏功能
var btnClear = document.getElementById("btnClear");

//  btn运算符   返回的也是一个集合 4个
var btnyunsuanfu = document.getElementsByClassName("yunsuanfu");

// 定义输入的第一个值 和 点完运算符号的第二个值
var firstNum, secondNum;

// 绑定等于按钮
var btnCalc = document.getElementById("btnCalc");

//绑定运算符
var yunsuanfu;

// 按钮的个数
// console.log(btnNums.length);

// 存this.value的值  点击数字进行累加
var temp = '';
var geshu = btnNums.length;

for (var i = 0; i < geshu; i++) {
    btnNums[i].onclick = function () {
        temp += this.value;
        // this 当前的点击事件
        btnResult.value = temp;
    }
}
// 清屏功能
btnClear.onclick = function () {
    btnResult.value = "0";
}

// 运算功能  乘以 

// 输入65  点击+ - x /  随后存此时value的值
// 继续输入数字时 清空 || 且可以输入数字；
var l = btnyunsuanfu.length;
for (var j = 0; j < 1; j++) {
    btnyunsuanfu[j].onclick = function () {
        yunsuanfu = this.value;
        // 第一个值=输入数字的值
        firstNum = parseInt(temp, 10); //将字符串转换成数字78
        temp = "";
    }
}
btnCalc.onclick = function () {
    secondNum = parseInt(temp, 10);
    temp = "";
    if (yunsuanfu == "+") {
        btnResult.value = firstNum + secondNum;
    } else if (yunsuanfu == "-") {
        btnResult.value = firstNum - secondNum;
    } else if (yunsuanfu == "X") {
        btnResult.value = firstNum * secondNum;
    }



}

// 退格
// .
// 退格
// 除以