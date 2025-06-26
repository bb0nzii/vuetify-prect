<template>
  <v-container fluid>
    <v-row class="border my-5">
        <v-col cols="12" md="4">
            <h1>뷰 이벤트</h1>
            <p>- 이벤트 처리는 지시문을 통해 이루어지므로 v-on을 사용</p>
            <h1>{{"count : " + count}}</h1>
            <button v-on:click="count++">Count 증가</button><br/>
            <v-btn color="red" v-on:click="count--">Count 감소</v-btn>
            <v-btn color="blue" v-on:click="count++">Count 증가</v-btn>
        </v-col>

        <v-col cols="12" md="4">
            <div id="lightDiv">
                <div v-show="lightOn"></div>
                <img src="../../assets/img/img_lightBulb.svg"/>
                <v-btn color="yellow" v-on:click="lightOn = !lightOn">Switch Light</v-btn>
            </div>
        </v-col>

        <v-col cols="12" md="4">
            <h1>Count input events</h1>
            <input type="text" v-on:input="inputCount++" placeholder="Start Writing..."/>
            <p>{{'Input event occured : ' + inputCount}}</p>
        </v-col>
    </v-row>

    <v-row class="border my-5">
        <v-col cols="12" md="4">
            <div class="color"
            v-on:mousemove="colorVal = Math.floor(Math.random() * 360)"
            v-bind:style="{backgroundColor:'hsl('+colorVal+',60%,60%)'}"
            ></div>
            <p>backgorund-color : hsl(<strong>{{ colorVal }}</strong>)</p>
        </v-col>

        <v-col cols="12" md="4"></v-col>
        <v-col cols="12" md="4"></v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
    data(){
        return{
            count:0,
            lightOn:false,
            inputCount:0,
            colorVal:50,
        }
    }
}
</script>

<style>
#lightDiv{position: relative; width: 150px; height: 150px;}
#lightDiv>img{position: relative; width: 100%; height: 100%;}
#lightDiv>div{position: absolute; top: 10%; left: 10%; width: 80%; height: 80%; border-radius: 50%; background: yellow;}
.color{width: 200px; height: 80px;}
</style>