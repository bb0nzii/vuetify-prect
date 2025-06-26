<template>
  <v-container class="text-center">
    <v-row>
        <v-col cols="12" md="6">
            <h2>💛나나💛</h2>
            <v-footer class="text-center d-flex flex-column ga-2 py-4" color="yellow">
                <div class="d-flex ga-3">
                    <v-btn
                    v-for="icon in icons"
                    :key="icon"
                    density="comfortable"
                    variant="text"
                    ><v-icon :icon="icon"/></v-btn>
                </div>
                <v-divider class="my-2" thickness="2" width="50"/>
                <div class="text-caption font-weight-regular opacity-60">
                    Excepteur esse et commodo non eiusmod anim sint proident irure occaecat ad enim esse. Adipisicing ea occaecat occaecat velit in ut amet. Eu dolor laborum proident exercitation dolor dolore esse reprehenderit ad eu non eiusmod in sit. Deserunt aute aute ad commodo voluptate aliqua.
                    Est anim non est nostrud culpa consectetur et aliqua magna minim eiusmod cupidatat. Proident voluptate laborum ipsum mollit. Magna reprehenderit Lorem nostrud velit excepteur ad ullamco proident ad in cupidatat exercitation ipsum ea. Sint voluptate proident ut reprehenderit eiusmod quis dolore id exercitation quis incididunt in. Dolor
                    consectetur officia ipsum laboris nulla elit reprehenderit ullamco velit elit ex. Nisi excepteur deserunt ipsum minim minim deserunt nisi ut do et ad voluptate. Culpa incididunt id velit consectetur adipisicing eu Lorem irure id eu minim ea.
                    Dolore ex exercitation anim Lorem. Qui ad Lorem ad ex ipsum duis nisi. Aliquip dolore pariatur elit ut Lorem aliqua est deserunt ad. Elit minim commodo elit laborum magna aliqua ad deserunt eiusmod ipsum irure aliqua qui tempor.
                    Labore labore do magna sunt non consequat sint qui. Fugiat Lorem deserunt reprehenderit ea non qui enim Lorem amet amet laboris ad aliquip. Aliquip non deserunt proident ex occaecat est fugiat officia laboris esse. Aute in dolore ullamco do adipisicing occaecat ut nulla. Id laborum voluptate nisi ea laboris amet proident aliqua id eu labore et.
                    Cupidatat officia ipsum incididunt sint. Mollit duis consectetur veniam ipsum do eiusmod sit sit culpa id veniam laboris esse magna. Est tempor sunt sit cupidatat elit ad est adipisicing nulla esse pariatur veniam dolor non. Ullamco tempor reprehenderit pariatur sit excepteur tempor ad reprehenderit excepteur irure sit adipisicing duis ex.
                </div>
                <v-divider/>
                <div class="">
                    {{ new Date().getFullYear()}} - <strong>Vuetify</strong>
                </div>
            </v-footer>
        </v-col>
        <v-col cols="12" md="6">
            <h2>💗뽀💗</h2>
            <v-footer class="d-flex align-center justify-center ga-2 flex-wrap flex-grow-1 py-3" color="red-lighten-1">
                <v-btn
                v-for="link in links"
                :key="link"
                :text="link"
                variant="text"
                rounded
                ></v-btn>
                <div class="flex-1-0-100 text-center mt-2">
                    {{ new Date().getFullYear() }} - <strong>Vuetify</strong>
                </div>
            </v-footer>
        </v-col>
    </v-row>
  </v-container>
</template>


<script setup>
const icons = [
    'mdi-facebook', 'mdi-twitter', 'mdi-linkedin', 'mdi-instagram'
]
const links = [
    'Home', 'About Us', 'Team', 'Services', 'Blog', 'Contact Us',
]
</script>