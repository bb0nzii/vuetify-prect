<template>
  <v-carousel hide-delimiters>
    <v-carousel-item
    v-for="(item,i) in imgs"
    :key="i"
    :src="item.src"
    cover
    ></v-carousel-item>
  </v-carousel>

  <!-- start -->
  <v-card class="pa-8 d-flex justify-center flex-wrap" theme="dark">
    <v-container class="text-center">
      <v-row justify="center" dense>

        <v-col cols="12">
          <v-img
          class="mx-auto mt-12 mb-16"
          max-height="140"
          max-width="240"
          src="https://cdn.vuetifyjs.com/docs/images/logos/vuetify-logo-dark-text.svg"
          ></v-img>
        </v-col>

        <v-col cols="12">
          <v-autocomplete
          :items="items"
          append-inner-icon="mdi-microphone"
          class="mx-auto"
          density="comfortable"
          menu-icon=""
          placeholder="구글로 검색하세요."
          prepend-inner-icon="mdi-magnify"
          variant="solo"
          style="max-width:350px;" theme="light" auto-select-first
          item-props rounded
          ></v-autocomplete>
        </v-col>

        <v-col
          v-for="(shortcut, i) in shortcuts"
          :key="i"
          cols="auto"
        >
          <v-card
            :href="shortcut.href"
            class="pa-4"
            rel="noopener noreferrer"
            target="_blank"
            width="112"
            flat
          >
            <v-avatar :icon="shortcut.icon" class="mb-2" color="white" variant="tonal"></v-avatar>

            <div class="text-caption text-truncate" v-text="shortcut.title"></div>
          </v-card>
        </v-col>

        <v-col cols="auto">
          <v-dialog v-model="dialog" max-width="500">
            <template v-slot:activator="{ props }">
              <v-card v-bind="props" class="pa-4" width="112" flat>

                <v-avatar class="mb-2" color="white" icon="mdi-plus" variant="tonal"></v-avatar>

                <div class="text-caption text-truncate">Add shortcut</div>
              </v-card>
            </template>

            <v-card rounded="lg" title="Add shortcut">
              <template v-slot:text>
                <v-label class="text-caption">Name</v-label>

                <v-text-field density="compact" variant="solo-filled" flat></v-text-field>

                <v-label class="text-caption">URL</v-label>

                <v-text-field density="compact" variant="solo-filled" flat></v-text-field>
              </template>

              <div class="py-4 px-5 text-end">
                <v-btn
                  class="text-none me-2"
                  color="blue"
                  text="Cancel"
                  variant="text"
                  border
                  @click="dialog = false"
                ></v-btn>

                <v-btn
                  class="text-none"
                  color="blue"
                  text="Done"
                  variant="flat"
                  @click="dialog = false"
                ></v-btn>
              </div>
            </v-card>
          </v-dialog>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
  <!--end-->

</template>

<script setup>
import {ref} from 'vue';

const imgs = [
  {src: 'https://cdn.pixabay.com/photo/2017/10/16/19/57/cat-2858293_1280.jpg',},
  {src: 'https://cdn.pixabay.com/photo/2017/08/20/20/48/cat-cat-2663108_1280.jpg',},
  {src: 'https://cdn.pixabay.com/photo/2020/05/25/21/06/cat-5220519_1280.jpg',},
  {src: 'https://cdn.pixabay.com/photo/2020/06/07/12/59/cat-5270318_1280.jpg',},
  {src: 'https://cdn.pixabay.com/photo/2019/12/31/18/30/cat-4732518_1280.jpg',},
]

const items = [
    {
      prependIcon: 'mdi-clock-outline',
      title: 'recipe with chicken',
    },
    {
      prependIcon: 'mdi-clock-outline',
      title: 'best hiking trails near me',
    },
    {
      prependIcon: 'mdi-clock-outline',
      title: 'how to learn a new language',
    },
    {
      prependIcon: 'mdi-clock-outline',
      title: 'DIY home organization ideas',
    },
    {
      prependIcon: 'mdi-clock-outline',
      title: 'latest fashion trends',
    },
  ]
  const shortcuts = [
    {
      icon: 'mdi-github',
      title: 'Master ',
      href: 'https://github.com/vuetifyjs/vuetify',
    },
    {
      icon: 'mdi-github',
      title: 'Dev',
      href: 'https://github.com/vuetifyjs/vuetify/tree/dev',
    },
    {
      icon: 'mdi-github',
      title: 'Stable',
      href: 'https://github.com/vuetifyjs/vuetify/tree/v2-stable',
    },
    {
      icon: 'mdi-github',
      title: 'My Pull Requests',
      href: 'https://github.com/vuetifyjs/vuetify/pulls/johnleider',
    },
  ]

  const dialog = ref(false)

</script>

<style>
</style>


<!--
<v-row>
    <v-col
      cols="12"
      offset-sm="3"
      sm="6"
    >
      <v-card>
        <v-card-title class="bg-black d-flex align-center">
          <span class="text-h5">Home</span>

          <v-spacer></v-spacer>

          <v-menu>
            <template v-slot:activator="{ props }">
              <v-btn icon="mdi-dots-vertical" variant="text" v-bind="props"></v-btn>
            </template>

            <v-list>
              <v-list-item
                v-for="(item, i) in items"
                :key="i"
                :value="i"
              >
                <v-list-item-title>{{ item.title }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </v-card-title>

        <v-card-text class="text-center">나도 로열티니핑이야 또너!!</v-card-text>
        <img src="../../assets/img/8.또너핑.png" width="100%"/>
      </v-card>
    </v-col>
  </v-row>
-->