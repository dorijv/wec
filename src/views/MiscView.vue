<template>
<div>
  <b-container fluid style="margin-top: 5px; margin-bottom: 5px;">
    <b-row cols="1">
      <ActivityElement
        v-for="element in elements"
        :key="element.id"
        :name="element.name"
        :imgSrc="element.imgSrc"
        :distance="element.distance"
        :description="element.description"
        :additional="element.additional"
        :website="element.website"
      />
    </b-row>
  </b-container>
</div>
</template>

<script>
// @ is an alias to /src
import ActivityElement from "@/components/ActivityElement.vue";

export default {
  name: 'MiscView',
  components: {
    ActivityElement
  },
  data() {
    return {
      elements: [
        { id: 1, name: 'Waterworld', distance: '5 minute drive from Njarðvík Sporthall',
        imgSrc: require('@/assets/vatnaverold.jpg'), description: "The Vatnaveröld water park is a covered water park for the whole family. It offers a variety of play equipment for the youngest generation. The water is heated and comfortable.\
          The Swimming Center also has a 25-meter outdoor pool, a shallow children's pool, 4 wading pools, a steam bath and a cold tub. There is also one of the most impressive 50 meter indoor pools in the country.", website:"https://www.reykjanesbaer.is/is/mannlif/afthreying-utivist/sundlaugar/vatnaverold-waterworld",},
        { id: 2, name: 'Langbest Restaurant', distance: '5 minute drive from Njarðvík Sporthall',
        imgSrc: require('@/assets/langbest.jpg'), description: 'Family friendly restaurant located in Ásbrú, a short distance from the venue.\
        Wide variety of options, such as hamburgers, steak, pizzas, salad, etc.',
        website: 'https://langbest.is/', additional: 'Best pizza Iceland has to offer!'}
      ]
    }
  }
}
</script>