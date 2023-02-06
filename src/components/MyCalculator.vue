<template>
  <div>
    <div>{{ title }}</div>
<!--    <form @submit.prevent="calculate">
      <div>
        <button type="button" @click.stop="expression += '7'">7</button>
        <button type="button" @click.stop="expression += '8'">8</button>
        <button type="button" @click.stop="expression += '9'">9</button>
        <button type="button" @click.stop="expression += '*'">*</button>
      </div>
      <div>
        <button type="button" @click.stop="expression += '4'">4</button>
        <button type="button" @click.stop="expression += '5'">5</button>
        <button type="button" @click.stop="expression += '6'">6</button>
        <button type="button" @click.stop="expression += '-'">-</button>
      </div>
      <div>
        <button type="button" @click.stop="expression += '1'">1</button>
        <button type="button" @click.stop="expression += '2'">2</button>
        <button type="button" @click.stop="expression += '3'">3</button>
        <button type="button" @click.stop="expression += '+'">+</button>
      </div>
      <div>
        <button type="button" @click.stop="expression += '+/-'">+/-</button>
        <button type="button" @click.stop="expression += '0'">0</button>
        <button type="button" @click.stop="expression += '.'">.</button>
        <button type="submit">=</button>
      </div>
      <div>
        <button type="button" @click.stop="expression = ''">Clear</button>
      </div>
    </form>-->
<!--    <form @submit.prevent="calculate">-->
      <div class='calculator'>
        <figure>
          <ul>
            <div class = 'speaker'> </div>
            <div class = 'camera'> </div>
          </ul>
          <ul>
            <li> <p class='display'>  </p> </li>
          </ul>
          <ul>
            <li> <button class='ac' value="ac" @click="clickButton('ac', $event)">AC</button> </li>
            <li> <button class='operator' value="operator" @click="clickButton('operator', $event)">÷</button> </li>
          </ul>
          <ul>
            <li> <button class='number' @click="clickButton('7', $event)">7</button> </li>
            <li> <button class='number' @click="clickButton('8', $event)">8</button> </li>
            <li> <button class='number' @click="clickButton('9', $event)">9</button> </li>
            <li> <button class='operator' value="operator" @click="clickButton('operator', $event)">x</button> </li>
          </ul>
          <ul>
            <li> <button class='number' @click="clickButton('4', $event)">4</button> </li>
            <li> <button class='number' @click="clickButton('5', $event)">5</button> </li>
            <li> <button class='number' @click="clickButton('6', $event)">6</button> </li>
            <li> <button class='operator' value="operator" @click="clickButton('operator', $event)">-</button> </li>
          </ul>
          <ul>
            <li> <button class='number' @click="clickButton('1', $event)">1</button> </li>
            <li> <button class='number' @click="clickButton('2', $event)">2</button> </li>
            <li> <button class='number' @click="clickButton('3', $event)">3</button> </li>
            <li> <button class='operator' value="operator" @click="clickButton('operator', $event)">+</button> </li>
          </ul>
          <ul>
            <li> <button class='number0' @click="clickButton('0', $event)">0</button> </li>
            <li> <button class='dot' @click="clickButton('.', $event)">.</button> </li>
            <li> <button class='equals' value="equals" @click="clickButton('equals', $event)">=</button> </li>
          </ul>
        </figure>
      </div>
<!--    </form>-->
  </div>
</template>

<script setup>
let display;
let displayContent = '';

function clickButton(type, e) {
  /*let display = document.querySelector('.display');
  let displayContent = '';*/
  //let buttons = document.querySelectorAll('button');
  display = document.querySelector('.display');

  switch(type){
    case 'operator' :
      displayContent += e.target.textContent;
      display.innerHTML = displayContent;
      break;
    case 'ac' :
      displayContent = '';
      display.innerHTML = displayContent;
      break;
    case 'equals' :                                         // 추가된 부분
      displayContent = eval(displayContent
          .replace('÷','/')
          .replace('x','*'));
      display.innerHTML = displayContent;
      break;
    default :
      displayContent += e.target.textContent;
      display.innerHTML = displayContent;
      break;
  }
}

/*export default {
  name: 'MyCalculator',
  props: {
    title: String
  },
  data() {
    return {
      msg
    }
  },
  methods: {
    clickButton(type, e) {
      /!*let display = document.querySelector('.display');
      let displayContent = '';*!/
      //let buttons = document.querySelectorAll('button');

      switch(type){
        case 'operator' :
          displayContent += e.target.textContent;
          display.innerHTML = displayContent;
          break;
        case 'ac' :
          displayContent = '';
          display.innerHTML = displayContent;
          break;
        case 'equals' :                                         // 추가된 부분
          displayContent = eval(displayContent
              .replace('÷','/')
              .replace('x','*'));
          display.innerHTML = displayContent;
          break;
        default :
          displayContent += e.target.textContent;
          display.innerHTML = displayContent;
          break;
      }
    }
  }
}*/
/*import { evaluate } from "mathjs";
export default {
  name: "MyCalculator",
  data() {
    return {
      expression: "",
    };
  },
  methods: {
    calculate() {
      this.expression = evaluate(this.expression);
    },
  },
};*/


/*let display = document.querySelector('.display');
let displayContent = '';
let buttons = document.querySelectorAll('button');

buttons.forEach((button)=>{
  button.addEventListener('click', (e)=>{
    switch(button.value){
      case 'operator' :
        displayContent += e.target.textContent;
        display.innerHTML = displayContent;
        break;
      case 'ac' :
        displayContent = '';
        display.innerHTML = displayContent;
        break;
      case 'equals' :                                         // 추가된 부분
        displayContent = eval(displayContent
            .replace('÷','/')
            .replace('x','*'));
        display.innerHTML = displayContent;
        break;
      default :
        displayContent += e.target.textContent;
        display.innerHTML = displayContent;
        break;
    }
  })
})*/
</script>
<style scoped>

body{
  display: flex;
  justify-content: center;
}

.calculator{
  width : 300px;
  height : 600px;
  border : black 1px solid;
  border-radius : 30px;
  margin : 100px;
  background-color: #000000;
}

figure{
  width : 270px;
  height : 570px;
  margin : 15px;
  border-radius : 30px;
  background-color: #212121;
}

.speaker{
  margin : 10px 3px 3px 3px;
  width : 35px;
  height: 5px;
  background-color: #424242;
  border-radius : 10px;
}

.camera{
  margin : 10px 3px 3px 3px;
  width : 5px;
  height: 5px;
  background-color: #424242;
  border-radius : 50px;
}

.display{
  display: flex;
  overflow: hidden;
  justify-content: flex-end;
  align-items: flex-end;
  font-size : 40px;
  width : 240px;
  height : 180px;
  padding : 5px;
  margin : 15px 5px;
  background-color: #212121;
  color : white;
}

ul{
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  margin : 0;
}

li{
  list-style: none;
}

.ac{
  width : 177px;
  height : 55px;
  background-color: #424242;
  border-radius : 10px;
  border : #424242;
  color : white;
  font-size: 18px;
  margin : 4px;
}
.number{
  width : 55px;
  height : 55px;
  background-color: #424242;
  border-radius : 10px;
  border : #424242;
  color : white;
  margin : 4px;
  font-size: 18px;

}
.number:hover, .operator:hover, .dot:hover, .number0:hover, .equals:hover, .ac:hover{
  cursor: pointer;
  background-color : #212121;
}
.number:focus, .operator:focus, .dot:focus, .number0:focus, .equals:focus, .ac:focus{
  outline : none;
}


.operator{
  width : 55px;
  height : 55px;
  margin : 4px;
  background-color: #424242;
  border-radius : 10px;
  border : #424242;
  color : white;
  font-size: 18px;
}


.dot{
  width : 55px;
  height : 55px;
  background-color: #424242;
  border-radius : 10px;
  border : #424242;
  color : white;
  font-size: 18px;
  margin : 4px;
}

.number0{
  width : 118px;
  height: 55px;
  background-color: #424242;
  border-radius : 10px;
  border : #424242;
  color : white;
  font-size: 18px;
  margin : 4px;
}

.equals{
  width : 55px;
  height: 55px;
  background-color: #424242;
  border-radius : 10px;
  border : #424242;
  color : white;
  font-size: 18px;
  margin : 4px;
}
</style>