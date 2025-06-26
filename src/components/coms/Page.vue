<template>
  <v-container fluid>
    <v-row class="text-center">
        <v-col cols="12" md="4">
            <h3>Basic</h3>
            <v-pagination :length="20"/>
        </v-col>

        <v-col cols="12" md="4">
            <h3>Round</h3>
            <v-pagination v-model="page" :length="4" rounded="circle"/>
        </v-col>

        <v-col cols="12" md="4">
            <h3>System-bar</h3>
            <v-system-bar>
                <v-icon icon="mdi-wifi-strength-4"/>
                <v-icon icon="mdi-signal" class="ms-2"/>
                <v-icon icon="mdi-battery" class="ms-2"/>
                <span class="ms-2">05:09AM</span>
            </v-system-bar>
        </v-col>
    </v-row>
  </v-container>
</template>


<script>

import {ref} from 'vue';
// ^^ 뷰 라이브러리에서 ref 함수를 가져옴
// ref = reactive function
// 일반적인 값(숫자, 문자열, 객체) 등을 반응형으로 만들어 뷰컴포넌트에 추적할 수 있게 함

const page = ref(1)
/* ^^
page라는 변수를 선언하고 그 값은 (1)
ref(1) : 숫자1을 초기값으로 가지는 반응형 참조객체(ref object)를 만듦
즉 page는 단순히 숫자 1이 아니라 {value:1} 형태의 객체
*/

</script>

<style>

</style>