<template>
  <v-container>
    <v-row>
        <v-col cols="12">
            <h1>Vue Methods</h1>
            <p>
                - vue 메소드는 '메소드' 속성 아래 Vue 인스턴스에 속하는 함수<br/>
                - 이벤트 처리와 함께 사용하면 더 복잡한 작업을 수행하는 데 유용함<br/>
                - 이벤트 처리 외에도 다른 작업을 수행하는 데 사용할 수 있음
            </p>
            <hr/>

            <p class="text-center">도라에몽의 코를 그려줘!</p>
            <div class="app mx-auto">
                <div v-on:click="changeText"><p>♥ ♥</p>{{text}}<p>ㅅ</p></div>
            </div>
            <hr/>
        </v-col>

        <v-col cols="12" md="4">
            <h1>이벤트 객체를 사용하여 호출</h1>
            <div class="mouse">
                <div v-on:mousemove="mousePos">
                    <span>xPos:{{xPos}}</span><br/>
                    <span>yPos:{{yPos}}</span>
                </div>
            </div>
        </v-col>
        <v-col cols="12" md="4">
            <h1>Vue write</h1>
            <div class="rot">
                <textarea v-on:input="writeText" rows="8" cols="30" placeholder="Start writing"></textarea>
                <div>
                    <span>{{ txt }}</span>
                </div>
            </div>
        </v-col>
    </v-row>
  </v-container>
</template>


<script>
// const app = Vue.createApp → 이건 cdn 걸었을 때
export default{
    data(){
        return{
            text:'',
            xPos: 0,
            yPos: 0,
            txt:'',
        }
    },
    methods:{
        changeText(){
            this.text = "==🔴=="
        },
        mousePos(event){
            this.xPos = event.offsetX,
            this.yPos = event.offsetY
        },
        writeText(event){
            this.txt = event.target.value
        }
    }
}
</script>


<style>
hr{margin-top: 20px; margin-bottom: 20px; opacity: 0.3;}

.app{
    border: black dashed 1px;
    width: 200px;
    padding: 20px 20px 20px 25px;
    background-color: lightskyblue;
    border-radius: 100px;
    text-align: center;
}

.app>div{
    width: 140px;
    height: 140px;
    background-color: white;
    padding: 20px;
    border-radius: 100px;
}

.mouse{
    border: 1px inset;
    width: 100%;
    padding: 0 20px 20px 20px;
    box-sizing: border-box;
}

.mouse div{
    width: 90%;
    height: 80px;
    background-color: gold;
    padding: 20px;
}

.mouse div span{
    font-weight: bold;
}

.rot{
    border: 1px dashed;
    border-radius: 10px;
    width: 300px;
    padding: 20px;
    text-align: center;
}

.rot>div{
    width: 100%;
    position: relative;
    margin-top: 10px;
    aspect-ratio: 1;
    background-image: url(../../assets/img/omg.jfif);
    background-size: 100%;
    background-position: center -120px;
    overflow: hidden;
}

.rot span{
    width: 80%;
    font-family: 'BMkkubulimTTF-Regular';
    font-size: 20px;
    /* font-weight: bold; */
    line-height: 1.2em;
    transform-origin: 0 0;;
    /* rotate: 33deg;
    position: absolute; */
}

.rot textarea{
    width: 100%;
    box-sizing: border-box;
}

@font-face {
    font-family: 'BMkkubulimTTF-Regular';
    src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/2410-1@1.0/BMkkubulimTTF-Regular.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
}
</style>