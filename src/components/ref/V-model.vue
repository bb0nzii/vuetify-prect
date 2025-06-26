<template>
  <v-container>
    <v-row>
        <v-col cols="12" md="4">
            <h3>동적으로 만드는 모델</h3>
            <form v-on:submit.prevent="addItem" class="app2">
                <p>AESPA Comeback!!!!!<br/>
                    <input type="text" required placeholder="Dirty Work" v-model="itemName">
                </p>
                <p>When?<br/>
                    <input type="number" required placeholder="6월 27일" v-model="itemNumber">
                </p>
                <p>Important?<br/>
                    <input type="checkbox" placeholder="jonna yes..." v-model="itemImportant">
                    {{ itemImportant }}
                    <button type="submit">Happy</button>
                </p>
            </form>
            <hr/>

            <p>Shopping List : </p>
            <ul id="ulToFind">
                <li
                v-for="item in shoppingList"
                :key="item"
                v-bind:class="{impClass: item.important}"
                v-on:click="item.found =! item.found"
                v-show="!item.found"
                >
                {{item.name}},{{item.number}}
                </li>
            </ul>
            
            <ul id="ulToFound">
                <li
                v-for="item in shoppingList"
                :key="item"
                v-bind:class="{impClass: item.important}"
                v-on:click="item.found=!item.found"
                v-show="!item.found"
                >
                {{item.name}},{{item.number}}
                </li>
            </ul>
        </v-col>
        <v-col cols="12" md="4"></v-col>
        <v-col cols="12" md="4"></v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
    data(){
        return{
            itemName: null,
            itemNumber: null,
            itemImportant: false,
            shoppingList:[
                { name: 'Tomatoes', number: 5, important: false, found: false },
                { name: 'Bread', number: 1, important: false, found: false },
                { name: 'Soap', number: 1, important: true, found: true }
            ]
        }
    },
    methods:{
        addItem(){
            let item = {
                name: this.itemName,
                number: this.itemNumber,
                important: this.itemImportant,
                found: false
            }
            this.shoppingList.push(item),
            this.itemName=null,
            this.itemNumber=null,
            this.itemImportant=false
        }
    }
}
</script>

<style>
.app2{
    border: 1px dashed black;
    display: inline-block;
    padding: 0 20px;
}

.app2 label, .app2 li{
    padding: 5px;
    border-radius: 5px;
}

.app2 label:hover, .app2 li:hover{
    cursor: pointer;
    background-color: lightgray;
}

ul,ol,li{list-style-type: none;}
li{margin: 2px; background-color: rgb(211,254,211);}
.impClass{background-color: rgb(255,202,202);}

#ulToFound li{
    text-decoration: line-through;
    background-color: rgb(230,230,230);
}
</style>