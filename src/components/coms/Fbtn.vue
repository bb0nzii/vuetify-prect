<template>
  <v-container class="text-center">
    <h1>Floating Button</h1>
    <hr class="my-5"/>

    <v-row>
        <v-col cols="12" md="4" sm="4">
            <h3>Small variant</h3>

            <v-card class="mx-auto" max-width="">
                <v-toolbar
                color="light-green"
                extended
                light
                >
                    <v-app-bar-nav-icon color="grey-darken-4"/>
                    <v-toolbar-title>Finder</v-toolbar-title>
                    <v-btn color="grey-darken-4" icon="mdi-magnify"/>
                    <v-btn color="grey-darken-4" icon="mdi-view-module"/>

                    <template v-slot:extension>
                        <v-fab
                        class="ms-4"
                        color="yellow"
                        icon="mdi-plus"
                        location="bottom left"
                        size="40"
                        absolute
                        offset
                        @click="dialog = !dialog"
                        >
                        </v-fab>
                    </template>
                </v-toolbar>
                <v-list lines="two">
                    <v-list-subheader title="Folders" inset/>
                    <v-list-item
                    v-for="item in items"
                    :key="item.title"
                    link
                    >
                        <template v-slot:prepend>
                            <v-avatar :class="[item.iconClass]" :icon="item.icon"/>
                        </template>
                        <v-list-ieem-title>{{ item.title }}</v-list-ieem-title>
                        <v-list-item-subtitle>{{ item.subtitle }}</v-list-item-subtitle>
                        
                        <template v-slot:append>
                            <v-list-item-action>
                                <v-btn color="gray-lighten-1" icon="mdi-information" variant="text"/>
                            </v-list-item-action>
                        </template>
                    </v-list-item>
                </v-list>

                <v-dialog v-model="dialog" max-width="500">
                    <v-card>
                        <v-card-text>
                            <v-text-field label="File name"/>
                            <small class="text-grey">'actually save'</small>
                        </v-card-text>
                        <v-card-actions>
                            <v-spacer/>
                            <v-btn
                            color="primary"
                            variant="text"
                            @click="dialog = false"
                            >
                            Submit
                            </v-btn>
                        </v-card-actions>
                    </v-card>
                </v-dialog>
            </v-card>
        </v-col>

        <v-col cols="12" md="4" sm="4">
            <h3>Display animation</h3>
            <v-card class="mx-auto" max-width="">
                <v-layout>
                    <v-app-bar absolute extended>
                        <v-app-bar-nav-icon/>
                        <template v-slot:extension>
                            <v-fab
                            :active="!hidden"
                            class="ms-4"
                            icon="mdi-plus"
                            location="bottom start"
                            size="small"
                            absolute
                            offset
                            ></v-fab>
                        </template>
                    </v-app-bar>
                    <v-main>
                        <v-sheet class="pa-4 text-center" color="surface-light">
                            <v-btn
                            :text="hidden ? 'Show' : 'Hide'"
                            color="surface-variant"
                            width="80"
                            @click="hidden = !hidden"
                            ></v-btn>
                        </v-sheet>
                        <v-sheet height="125">
                            <v-fab
                            :active="!hidden"
                            class="me-4"
                            icon="mdi-plus"
                            location="top end"
                            absolute
                            offset
                            ></v-fab>
                        </v-sheet>
                    </v-main>
                </v-layout>
            </v-card>
        </v-col>

        <v-col cols="12" md="4" sm="4">
            <h3>Lateral screen</h3>
            <v-card>
                <v-layout>
                    <v-app-bar color="indigo" absolute flat>
                        <v-app-bar-nav-icon/>
                        <v-app-bar-title>Page title</v-app-bar-title>
                        <v-btn icon="mdi-magnify"/>
                        <v-btn icon="mdi-dots-vertical">
                            <v-icon></v-icon>
                        </v-btn>
                        <template v-slot:extension>
                            <v-tabs v-model="tabs" align-tabs="title" slide-color="pink">
                                <v-tab text="item One" value="one"></v-tab>
                                <v-tab text="item Two" value="two"></v-tab>
                                <v-tab text="item Three" value="three"></v-tab>
                                <v-tab text="item Four" value="four"></v-tab>
                                <v-tab text="item Five" value="five"></v-tab>
                                <v-tab text="item Six" value="six"></v-tab>
                            </v-tabs>
                        </template>
                    </v-app-bar>
                        <v-main>
                            <v-sheet height="150"></v-sheet>
                        </v-main>
                        <v-fab
                        :key="activeFab.icon"
                        :color="activeFab.color"
                        :icon="activeFab.icon"
                        class="ms-4 mb-4"
                        location="bottom start"
                        size="64"
                        absolute
                        app
                        appear
                        ></v-fab>
                </v-layout>
            </v-card>
        </v-col>
    </v-row>

  </v-container>
</template>

<script setup>
import {computed, ref} from 'vue';

const dialog = ref(false)
const hidden = ref(false)
const tabs = ref

const items = ref([
    {icon: 'mdi-folder', iconClass:'bg-grey-lighten-1 text-white', title:'Photos', subtitle:'June 3, 2025'},
    {icon: 'mdi-folder', iconClass:'bg-grey-lighten-1 text-white', title:'Photos', subtitle:'May 9, 2025'},
    {icon: 'mdi-folder', iconClass:'bg-grey-lighten-1 text-white', title:'Photos', subtitle:'Feb 6, 2025'}
])

const items2 = ref([
    {icon: 'mdi-clipboard-text', iconClass:'bg-blue text-white', title:'Vacation', subtitle:'May 9, 2025'},
    {icon: 'mdi-gesture-tap-button', iconClass:'bg-amber text-white', title:'Kitchen', subtitle:'Feb 6, 2025'}
])

  const activeFab = computed(() => {
    switch (tabs.value) {
      case 'one': return { color: 'success', icon: 'mdi-share-variant' }
      case 'two': return { color: 'red', icon: 'mdi-pencil' }
      case 'three': return { color: 'green', icon: 'mdi-chevron-up' }
      default: return {}
    }
  })

</script>

<style>

</style>