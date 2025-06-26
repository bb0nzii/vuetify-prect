<template>
  <v-container>
    <h1 class="mb-5">자동완성</h1>
    <v-row>
        <v-col cols="12" md="4">
            <v-autocomplete
            label="Autocomplete"
            :items="['캘리포니아','콜로라도','플로리다','조지아','텍사스','세퀘이아']"
            ></v-autocomplete>
        </v-col>
        <v-col cols="12" md="4">
            <v-card class="mx-auto" color="green-lighten-3" max-width="">
                <v-toolbar color="green" flat>
                    <v-btn icon="mdi-account"></v-btn>
                    <v-toolbar-title class="font-weight-light">BBONZI</v-toolbar-title>
                    <v-btn icon @click="isEditing = !isEditing">
                        <v-fade-transition leave-absolute>
                            <v-icon v-if="isEditing">mdi-close</v-icon>
                            <v-icon v-else>mdi-pencil</v-icon>
                        </v-fade-transition>
                    </v-btn>
                </v-toolbar>
                <v-card-text>
                    <v-text-field
                    :disabled="!isEditing"
                    base-color="white"
                    label="name"
                    ></v-text-field>
                    <v-autocomplete
                    :custom-filter="customFilter"
                    :disabled="!isEditing"
                    :items="states"
                    base-color="white"
                    item-title="name"
                    item-value="abbr"
                    label="State"
                    ></v-autocomplete>
                </v-card-text>
                <v-divider/>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn :disabled="!isEditing" @click="save">Save</v-btn>
                </v-card-actions>
                <v-snackbar
                v-model="hasSaved"
                :timeout="2000"
                location="bottom left"
                position="absolute"
                attach
                >프로필이 업데이트되었습니다.</v-snackbar>
            </v-card>
        </v-col>
        <v-col cols="12" md="4">

        </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import {ref} from 'vue';

const states = [
    {name: 'Florida', abbr: 'FL', id: 1},
    {name: 'Georgia', abbr: 'GA', id: 2},
    {name: 'Nebraska', abbr: 'NE', id: 3},
    {name: 'California', abbr: 'CA', id: 4},
    {name: 'New York', abbr: 'NY', id: 5},
]
const hasSaved = ref(false)
const isEditing = ref(null)

function customFilter (itemTitle, queryText, item){
    const textOne = item.raw.name.toLowerCase()
    const textTwo = item.raw.abbr.toLowerCase()
    const searchText = queryText.toLowerCase()
    return textOne.indexOf(searchText) > -1 || textTwo.indexOf(searchText) > -1
}

function save () {
    isEditing.value = !isEditing.value
    hasSaved.value = true
}

</script>

<style>

</style>