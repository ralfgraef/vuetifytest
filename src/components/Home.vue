<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs12 sm6 class="text-xs-center text-sm-right">
        <v-btn large router to="/list">Explore List</v-btn>
      </v-flex>
      <v-flex xs12 sm6 class="text-xs-center text-sm-left">
        <v-btn large router to="/list/new">New List entry</v-btn>
      </v-flex>
    </v-layout>
    <br>
    <v-layout row wrap>
      <v-flex xs12>
        <v-carousel>
          <v-carousel-item v-for="(item) in listItems" :src="item.imageUrl" :key="item.id"></v-carousel-item>
        </v-carousel>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
  export default {
    data () {
      return {
        listItems: [
          { imageUrl: 'https://get.pxhere.com/photo/plant-fruit-meal-food-green-produce-vegetable-natural-fresh-market-shopping-groceries-banana-health-carrot-grocery-fresh-fruit-vitamin-eating-nutrition-antioxidant-vegan-vegetarian-raw-diet-floristry-veggie-citrus-balanced-veg-fresh-vegetables-fruits-and-vegetables-soy-grocery-shopping-fruit-haul-1040930.jpg', id: '12345abc', title: 'Kasten Volvic' },
          { imageUrl: 'https://src.discounto.de/pics/Angebote/2017-11/2283978/3426124_Volvic-Naturelle-Leichtperlig-6-x-1-5-Liter-oder-Volvic-Naturelle-8-Liter-jeder-Kasten-jede-Packung_original.jpg', id: '12345abcd', title: 'Gemüse' }
        ]
      }
    }
  }
</script>