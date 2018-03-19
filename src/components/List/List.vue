<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs12 sm10 md8 offset-sm1 offset-md2>
        <v-card>
          <v-container fluid>
            <v-layout row>
              <v-flex xs5 sm4 md3>
                  <v-card-media src="https://get.pxhere.com/photo/plant-fruit-meal-food-green-produce-vegetable-natural-fresh-market-shopping-groceries-banana-health-carrot-grocery-fresh-fruit-vitamin-eating-nutrition-antioxidant-vegan-vegetarian-raw-diet-floristry-veggie-citrus-balanced-veg-fresh-vegetables-fruits-and-vegetables-soy-grocery-shopping-fruit-haul-1040930.jpg" 
                  height="130px">
                  </v-card-media>
              </v-flex>
              <v-flex xs7 sm8 md9>
                <v-card-title primary-title>
                  <div>
                    <h3 class="headline mb-2">List item1</h3>
                    <div>bla bla bla bla bla bla bla bla
                    </div>
                  </div>
                </v-card-title>
                <v-card-actions>
                  <v-btn flat to="list/show/1">
                    <v-icon left light>arrow_forward</v-icon>  
                    More Info
                  </v-btn>
                </v-card-actions> 
              </v-flex>
            </v-layout>
          </v-container>
        </v-card> 
      </v-flex>
    </v-layout>
  </v-container>
</template>