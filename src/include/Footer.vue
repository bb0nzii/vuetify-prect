<template>
  <v-footer class="d-flex flex-column" color="green" rounded="lg">
    <div class="d-flex w-100 align-center px-4 py-2">
        <strong>Lorem ipsum dolor sit amet.</strong>
        <div class="d-flex pa-2 ms-auto">
            <v-btn
            v-for="icon in icons"
            :key="icon"
            :icon="icon"
            size="small"
            variant="plain"
            ></v-btn>
        </div>
    </div>
    <div class="px-4 py-2 bg-surface-variant text-center w-100 rounded-lg">
        {{ new Date().getFullYear() }} - <strong>Vuetify</strong>
    </div>
  </v-footer>
</template>

<script setup>
const icons = [
    'mdi-facebook', 'mdi-twitter', 'mdi-linkedin', 'mdi-instagram',
]
</script>