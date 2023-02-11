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
  name: 'ActivitiesView',
  components: {
    ActivityElement
  },
  data() {
    return {
      elements: [
        { id: 1, name: 'Blue Lagoon', distance: '20 minute drive from Njarðvík Sporthall',
        imgSrc: require('@/assets/bluelagoon.jpg'), description: "Healing waters. A subterranean spa. Gourmet cuisine. Luxurious suites.\
        Otherworldly vistas. A universe of radiant wellbeing. Founded in 1992 to unlock the benefits of geothermal seawater,\
        Blue Lagoon Iceland has evolved into a company encompassing transformative\
        spa experiences, research and development", website:"https://www.bluelagoon.com/",
        additional: 'We highly recommend booking in advance!'},
        { id: 2, name: 'Duus Museum', distance: '10 minute drive from Njarðvík Sporthall',
        imgSrc: require('@/assets/duus.png'), description: 'The museum houses exhibition halls for the Art Museum of Reykjanesbær and Heritage Museum of Reykjanesbær which offer\
        new and exciting exhibitions throughout the year. The Reykjanes Maritime Center displays a collection of over 100 model boats built by the skipper Grímur Karlsson. \
        A Tourist Information and Reykjanes Geopark Visitor Center are also located in the museum.',
        website: 'https://sofn.reykjanesbaer.is/duushus'},
        { id: 3, name: 'Viking World', distance: '10 minute drive from Njarðvík Sporthall',
        imgSrc: require('@/assets/vwbetra.jpg'), description: 'The frame around the Icelander, the exhibition hall itself, was designed by the award winning architect Guðmundur Jónsson.\
        Its modern architecture highlights the beauty of the viking ship the Icelander (Íslendingur).\
        Visitors can look at the ship from all sides and they can even go on board and let the mind take them to explore lands across the sea\
        while they stand on deck of the Icelander. Guðmundur Jónsson has gained over 45 prizes in Scandinavian,\
        Norwegian and Icelandic competitions.',
        website: 'https://www.vikingworld.is/'}
      ]
    }
  }
}
</script>