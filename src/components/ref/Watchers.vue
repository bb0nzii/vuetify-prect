<template>
  <v-container>
    <v-row>
        <v-col cols="12" md="4">
          <h1>Watchers</h1>
          <p>
            - 같은 이름의 데이터 속성을 감시하는 메소드<br>
            - 데이터 속성값이 변경될 때마다 감시자가 실행됨<br>
            - 특정 데이터 속성값에 작업이 필요한 경우 사용
          </p>
        </v-col>
        <hr>

        <v-col cols="12" md="4">
          <h1>Example: Input for e-mail Address</h1>
          <p>A watcher is set up to watch the e-mail input. The user is informed if the current e-mail address input is valid or invalid (missing @).</p>
          <p>The user is also informed if the input just became valid with the last input from the keyboard.</p>
          
          <div class="app3">
            <label for="">
              <p>이메일 주소 유효성 체크</p>
              <input type="email" v-model="inpAddress" class="form-control">
              <h5 v-bind:class="myClass">
                <p>{{ feedbackText }}</p>
              </h5>
            </label>
          </div>
        </v-col>
        <v-col cols="12" md="4"></v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data(){
    return{
      inpAddress:"",
      feedbackText:"",
      myClass:"invalid"
    }
  },
  watch:{
    inpAddress(newVal, oldVal){
      if(!newVal.includes('@')){
        // ^^ 새로운 값에 @를 붙이지 않았다면
        this.feedbackText = '이메일 형식이 올바르지 않습니다.';
        this.myClass = 'invalid'
      }else if(!oldVal.includes('@') && newVal.includes('@')){
        this.feedbackText = '사용 가능한 이메일입니다.';
        this.myClass = 'valid'
      }else{
        this.feedbackText = '이미 가입된 이메일입니다.';
        this.myClass = 'valid'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.app3{
  border: 1px dashed black;
  width: 200px;
  padding: 0 10px 10px 10px;
  div{
    width: 200px;
    height: 50px;
    border: 1px solid;
    background-color: lightgreen;
  }
  p{
    font-size: large;
    font-weight: bold;
  }
  .valid{color: green;}
  .invalid{color: red;}
}
</style>