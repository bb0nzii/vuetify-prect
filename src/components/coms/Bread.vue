<template>
  <v-container class="text-center">
    <v-row>
        <v-col cols="12" md="4">
            <h3>One</h3>
            <v-breadcrumbs bg-color="success" :items="['what', 'happening', '?']"/>
        </v-col>

        <v-col cols="12" md="4">
            <h3>Two</h3>
            <div>
                <v-breadcrumbs
                :items="items"
                divider="-"
                ></v-breadcrumbs>

                <v-breadcrumbs
                :items="items"
                divider="."
                ></v-breadcrumbs>
            </div>
        </v-col>

        <v-col cols="12" md="4">
            <h3>Three</h3>
            <div>
                <v-breadcrumbs
                :items="items"
                divider="-"
                ></v-breadcrumbs>

                <v-breadcrumbs
                :items="items"
                divider="."
                ></v-breadcrumbs>
            </div>
        </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
  const items = [
    {
      title: 'Dashboard',
      disabled: false,
      href: 'breadcrumbs_dashboard',
    },
    {
      title: 'Link 1',
      disabled: false,
      href: 'breadcrumbs_link_1',
    },
    {
      title: 'Link 2',
      disabled: true,
      href: 'breadcrumbs_link_2',
    },
  ]
</script>

<style>

</style>