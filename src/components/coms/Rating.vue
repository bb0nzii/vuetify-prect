<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="4">
        <h1>Date pickers</h1>
        <v-date-picker/>
      </v-col>

      <v-col cols="12" md="4">
        <h1>Color pickers</h1>
        <v-color-picker/>
      </v-col>

      <v-col cols="12" md="4">
        <h1>스켈레톤 로더</h1>
        <v-skeleton-loader type="card"></v-skeleton-loader>
        <h1>스켈레톤 로더</h1>
        <v-skeleton-loader
        :elevation="24"
        boilerplate
        type="card"></v-skeleton-loader>
      </v-col>

        <v-col cols="12" md="4">
          <h1>Wuh, 요즘에는 별별별 (See that?)</h1>
          <v-rating
          v-model="rating"
          color="orange-lighten-1"
          active-color="blue"
          ></v-rating>
        </v-col>

        <v-col cols="12" md="4">
          <h1>이런저런 별별별 (쯧쯧)</h1>
            <v-rating
            v-model="ratingg"
            empty-icon="mdi-circle-outline"
            full-icon="mdi-circle"
            half-increments
            hover
            ></v-rating>
        </v-col>

        <v-col cols="12" md="4">
            <h1>하여튼간 별별 (Twinkle little little star)</h1>
            <v-rating v-model="ratinggg">
              <template v-slot:item="props">
                <v-icon :color="props.isFilled ? colors[props.index] : 'grey-lighten-1'" size="large">
                  {{ props.isFilled ? 'mdi-star-circle' : 'mdi-star-circle-outline' }}
                </v-icon>
              </template>
            </v-rating>
        </v-col>
    </v-row>
  </v-container>
</template>


<script setup>
import { ref } from 'vue';

const rating = ref(3);
const ratingg = ref(3.5);
const ratinggg = ref(4);
const colors = ['green', 'purple', 'orange', 'indigo', 'red'];

</script>