<template>
    <v-app-bar app>
        <v-toolbar-title>Vuetify-Ref</v-toolbar-title>
        <v-spacer></v-spacer>
            <v-btn text :to="'/home'">Home</v-btn>

            <v-menu offset-y>
                <template #activator="{ props }">
                    <v-btn v-bind="props" text>Vue <small>(html용)</small><v-icon end>mdi-menu-down</v-icon></v-btn>
                </template>
                <v-list>
                    <v-list-item v-for="(item, index) in menuItems" :key="index" @click="navigate(item.link)">
                        <v-list-item-title>{{ item.title }}</v-list-item-title>
                    </v-list-item>
                </v-list>
            </v-menu>

            <v-menu offset-y>
                <template #activator="{ props }">
                    <v-btn v-bind="props" text>Vue <small>(설치용)</small><v-icon end>mdi-menu-down</v-icon></v-btn>
                </template>
                <v-list>
                    <v-list-item v-for="(item, index) in menuItems" :key="index" @click="navigate(item.link)">
                        <v-list-item-title>{{ item.title }}</v-list-item-title>
                    </v-list-item>
                </v-list>
            </v-menu>

            <v-menu offset-y>
                <template #activator="{ props }">
                    <v-btn v-bind="props" text>Nav<v-icon end>mdi-menu-down</v-icon></v-btn>
                </template>
                <v-list>
                    <v-list-item v-for="(nav, index) in navItems" :key="index" @click="navigate(nav.link)">
                        <v-list-item-title>{{ nav.title }}</v-list-item-title>
                    </v-list-item>
                </v-list>
            </v-menu>

            <v-menu offset-y>
                <template #activator="{ props }">
                    <v-btn v-bind="props" text>Vuetify<v-icon end>mdi-menu-down</v-icon></v-btn>
                </template>
                <v-list>
                    <v-list-item v-for="(vuetify, index) in vuetifyItems" :key="index" @click="navigate(vuetify.link)">
                        <v-list-item-title>{{ vuetify.title }}</v-list-item-title>
                    </v-list-item>
                </v-list>
            </v-menu>

            <v-menu offset-y>
                <template #activator="{ props }">
                    <v-btn v-bind="props" text>Vuetify3 Form Input & Controls <v-icon end>mdi-menu-down</v-icon></v-btn>
                </template>
                <v-list>
                    <v-list-item v-for="(form, index) in formItems" :key="index" @click="navigate(form.link)">
                        <v-list-item-title>{{ form.title }}</v-list-item-title>
                    </v-list-item>
                </v-list>
            </v-menu>

            <v-menu offset-y>
                <template #activator="{ props }">
                    <v-btn v-bind="props" text>V-Select <v-icon end>mdi-menu-down</v-icon></v-btn>
                </template>
                <v-list>
                    <v-list-item v-for="(select, index) in selectItems" :key="index" @click="navigate(select.link)">
                        <v-list-item-title>{{ select.title }}</v-list-item-title>
                    </v-list-item>
                </v-list>
            </v-menu>

            <v-menu offset-y>
                <template #activator="{ props }">
                    <v-btn v-bind="props" text>V-Feedback <v-icon end>mdi-menu-down</v-icon></v-btn>
                </template>
                <v-list>
                    <v-list-item v-for="(feedback, index) in feedbackItems" :key="index" @click="navigate(feedback.link)">
                        <v-list-item-title>{{ feedback.title }}</v-list-item-title>
                    </v-list-item>
                </v-list>
            </v-menu>

            <v-menu offset-y>
                <template #activator="{ props }">
                    <v-btn v-bind="props" text>V-img & icon <v-icon end>mdi-menu-down</v-icon></v-btn>
                </template>
                <v-list>
                    <v-list-item v-for="(imgicon, index) in imgiconItems" :key="index" @click="navigate(imgicon.link)">
                        <v-list-item-title>{{ imgicon.title }}</v-list-item-title>
                    </v-list-item>
                </v-list>
            </v-menu>
            
            <!-- <v-btn text :to="'/nav1'">Nav1</v-btn>
            <v-btn text :to="'/nav2'">Nav2</v-btn>
            <v-btn text :to="'/nav3'">Nav3</v-btn>
            <v-btn text :to="'/nav4'">Nav4</v-btn>
            <v-btn text :to="'/nav5'">Nav5</v-btn> -->
            
            
            <!-- <v-btn text :to="'/diractive'">Diractive</v-btn>
            <v-btn text :to="'/event'">Event</v-btn> -->

            <!-- <v-btn text :to="'/button'">Button</v-btn>
            <v-btn text :to="'/fbtn'">F-btn</v-btn>
            <v-btn text :to="'/expand'">Expand</v-btn>
            <v-btn text :to="'/tabs'">Tabs</v-btn>
            <v-btn text :to="'/bottom1'">B-nav1</v-btn> 
            <v-btn text :to="'/hello'">HelloWorld</v-btn>
            <v-btn text :to="'/tooltip'">tooltip</v-btn>
            <v-btn text :to="'/breadcrumbs'">Bread</v-btn>
            <v-btn text :to="'/pagenation'">Pagenation</v-btn>
            <v-btn text :to="'/footers'">Footers</v-btn> -->

    </v-app-bar>
    <v-main>
        <router-view/>
    </v-main>
</template>



<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter()

function navigate(link) {
  router.push(link)
}

const menuItems = ref([
    {title:'Diractive', link:'/diractive'},
    {title:'Event', link:'/event'},
    {title:'Method', link:'/met'},
    {title:'Computed', link:'/computed'},
    {title:'V-model', link:'/vmodel'},
    {title:'Watchers', link:'/watchers'},
    {title:'Computed', link:'/computed'},
])

const navItems = ref([
    {title:'Nav1', link:'/nav1'},
    {title:'Nav2', link:'/nav2'},
    {title:'Nav3', link:'/nav3'},
    {title:'Nav4', link:'/nav4'},
    {title:'Nav5', link:'/nav5'},
    
])

const vuetifyItems = ref([
    {title:'B-Nav', link:'/bottom1'},
    {title:'Button', link:'/button'},
    {title:'F-btn', link:'/fbtn'},
    {title:'Pagenation', link:'/pagenation'},
    {title:'Bread', link:'/breadcrumbs'},
    {title:'Expand', link:'/expand'},
    {title:'Tabs', link:'/tabs'},
    {title:'Tooltip', link:'/tooltip'},
    {title:'Footers', link:'/footers'},
    {title:'Hello World', link:'/hello'},
])

const formItems = ref([
    {title:'자동완성', link:'/auto'},
    {title:'체크박스', link:'/check'},
    {title:'콤보박스', link:'/combo'},
    {title:'파일', link:'/file'},
    {title:'양식', link:'/form'},
    {title:'사용자 정의 인풋', link:'/custom'},
    {title:'Number-Input', link:'/numbs'},
    {title:'OTP-Input', link:'/otp'},
    {title:'라디오버튼', link:'/radio'},
    {title:'랜지슬라이더', link:'/range'},
    {title:'스위치', link:'/sw'},
    {title:'텍스트필드', link:'/textf'},
    {title:'TextArea', link:'/texta'},
])


const selectItems = ref([
    {title:'Toggle Button', link:'/togglebtn'},
    {title:'Carousel Slide', link:'/carousel'},
    {title:'Chip Group', link:'/chip'},
    {title:'Item Group', link:'/itemgroup'},
    {title:'Slide Group', link:'/slide'},
    {title:'Stepper', link:'/stepper'},
    {title:'Windows', link:'/windows'},
])

const feedbackItems = ref([
    {title:'alerts', link:'/alerts'},
    {title:'badges', link:'/badges'},
    {title:'banner', link:'/banner'},
    {title:'empty', link:'/empty'},
    {title:'hover', link:'/hover'},
    {title:'progresscircular', link:'/circular'},
    {title:'progresslinear', link:'/linear'},
    {title:'ratings', link:'/ratings'},
    {title:'skeletonloaders', link:'/skloaders'},
    {title:'snackbars', link:'/snack'},
    {title:'snackbarqueue', link:'/snackq'},
    {title:'timelines', link:'/timelines'},
])

const imgiconItems = ref([
    {title:'Ratio', link:'/ratio'},
    {title:'Avata', link:'/ava'},
    {title:'Icons', link:'/icons'},
    {title:'Images', link:'/imgs'},
    {title:'Parallax', link:'/parallax'},
])


</script>