<template>
  <v-card class="mx-auto" color="gray-lighten-3" max-width="768">
    <v-layout>
        <v-app-bar color="teal-darken-4" image="https://picsum.photos/1920/1080?random">
            <template v-slot:image>
                <v-img gradient="to top right, rgba(19, 84, 122, .8), rgba(128,208,190, .8)"/>
            </template>

        <template v-slot:prepend><v-app-bar-nav-icon></v-app-bar-nav-icon></template>
        <v-app-bar-title>BBONZI</v-app-bar-title>
        <v-btn icon><v-icon>mdi-magnify</v-icon></v-btn>
        <v-btn icon><v-icon>mdi-heart-outline</v-icon></v-btn>
        <v-btn icon><v-icon>mdi-dots-vertical</v-icon></v-btn>
        </v-app-bar>

        <v-main>
            <v-container fluid>
                <v-row dense>
                    <v-col
                    v-for="n in 5"
                    :key="n"
                    cols="12"
                    >
                    <v-card
                    :subtitle="`Subtitle for Content ${n}`"
                    :title="`Content ${n}`"
                    text="Meowwwwww!!!!"></v-card>
                    </v-col>
                </v-row>
            </v-container>
        </v-main>
    </v-layout>
  </v-card>
</template>

<script>
export default {

}
</script>

<style>

</style>