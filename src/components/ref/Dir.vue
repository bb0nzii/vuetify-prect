<template>
  <v-container fluid>
    <h1>이거 코드 꼭 보세여 나중에</h1>
    <v-row>
        <v-col cols="12" md="12">
            <h3>지시어</h3>
            <div class="" id="msg">{{ message }}</div>
<pre>
- v-bind : 태그의 속성을 vue 인스턴스 내부의 데이터 변수에 연결
- v-if : 조건부 렌더링 <code>v-if, v-else-if, v-else</code>
- v-show : true가 되면 보이고, false가 되면 안 보임
- v-for : 정해진 크기만큼 반복
- Events : 
- v-on : 
</pre>
        </v-col>
        <hr class="my-5"/>

        <v-col cols="12" md="12">
            <h3>v-bind</h3>
            <p>line</p>
            <section v-bind:class="vueClass">이 요소는 pinkBG입니다</section>
            <p v-bind:style="{fontSize:size}">글자 사이즈 업!</p>
            <div v-bind:style="{backgroundColor: isImportant ? 'lightcoral' : 'lightgrey'}">
                조건부 배경색 칠하기 (스크립트에서 true하면 전자, false하면 후자)
            </div>
        </v-col>
        <hr class="my-5"/>
    </v-row>

    <v-row>
        <v-col cols="12" md="6">
            <h3>v-if</h3>
            <div v-if="text.includes('pizza')">
                <p>텍스트에 피자라는 단어가 포함되어 있음</p>
                <img src="../../assets/img/img_pizza.svg" class="mrPizza"/>
            </div>
            <div v-else-if="text.includes('burrito')">
                <p>텍스트에 부리또라는 단어가 포함되어 있음</p>
            </div>
            <div v-else>
                <p>텍스트에 피자/부리또라는 단어가 포함되어 있지 않음</p>
            </div>
        </v-col>

        <v-col cols="12" md="6">
            <h3>v-for</h3>
            <ul>
                <li v-for="x in manyFoods" :key="x">
                    {{x}}
                </li>
            </ul>
        </v-col>
    </v-row>

    <v-row class="border">
        <v-col cols="12" md="12">
            <h3>figure</h3>
            <div class="border w-100 d-flex wrap">
                <figure v-for="x in manyFood" :key="x">
                    <img v-bind:src="x.url"/>
                    <figcaption>{{x.name}}</figcaption>
                </figure>
            </div>
        </v-col>
    </v-row>

    <v-row>
        <v-col cols="12">
            <h1>Basic css Transition</h1>
            <v-btn @click="this.doesRotate = true">Rotate</v-btn>
            <div :class="{rotate:doesRotate}" id="rect">^.^</div>
        </v-col>
    </v-row>
  </v-container>
</template>

<style>
#msg{padding:10px; font-size:x-large; background: lightskyblue; border-radius: 50px;}
pre{margin-top: 10px; background: lightgoldenrodyellow; font-size: small;}
.pinkBG{background: lightpink;}
code{background: black; color: white;}
.mrPizza{width: 200px;}
figure{width: 100px; padding: 10px; margin: 10px; background: lightblue; border-radius: 10px;}
figcaption{text-align: center;}
.wrap{display: flex; flex-wrap: wrap; justify-content: space-around;}
.rotate{rotate: 180deg; transition: all 1s ease-in-out;}
#rect{border: 2px solid; background: lightcoral; width: 60px; height: 60px; text-align: center; line-height: 60px;}
</style>


<script>
//html로 뷰를 학습할 때는 const app = Vue.createApp
// vv 뷰티파이를 설치하고 나서부터는 이거임
export default{
    data(){
        return{
            message:"// 0v0 //",
            vueClass:"pinkBG",
            size:"48px",
            isImportant:true,
            text:'I like burrito, pizza, ...',
            manyFoods: ['Burrito', 'Salad', 'Cake', 'Fish', 'Soup', 'Pizza', 'Rice'],
            manyFood: [
                {name: 'Burrito', url: 'src/assets/img/img_burrito.svg'},
                {name: 'Salad', url: 'src/assets/img/img_salad.svg'},
                {name: 'Cake', url: 'src/assets/img/img_cake.svg'},
                {name: 'Soup', url: 'src/assets/img/img_soup.svg'},
                {name: 'Fish', url: 'src/assets/img/img_fish.svg'},
                {name: 'Pizza', url: 'src/assets/img/img_pizza.svg'},
                {name: 'Rice', url: 'src/assets/img/img_rice.svg'}
            ],
            doesRotate: false,
        };
    }
}
</script>