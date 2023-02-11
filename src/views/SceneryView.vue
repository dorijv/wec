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
  name: 'SceneryView',
  components: {
    ActivityElement
  },
  data() {
    return {
      elements: [
        { id: 1, name: 'Gunnuhver', distance: '20 minute drive from Njarðvík Sporthall',
        imgSrc: require('@/assets/gunnuhver.jpg'), description: "The area is close to Reykjanes lighthouse and is collectively named Gunnuhver after a female ghost that was laid there. She had caused great disturbance until a priest set a trap for her and she fell into the spring. This happened about 400 years ago. The mud pools take form where steam from boiling geothermal reservoir water emanates and condenses and mixes with surface water. Accompanying gases such as carbon dioxide and hydrogen sulphide make the water acid. This causes alteration of the fresh lava rock to clay.", website:"https://www.visitreykjanes.is/en/place/gunnuhver"},
        { id: 2, name: 'Reykjanes Lighthouse', distance: '20 minute drive from Njarðvík Sporthall',
        imgSrc: require('@/assets/reykjaneslighthouse.webp'), description: 'A new lighthouse was therefore built in 1907-1908 on Bæjarfell hill in\
        Reykjanes and the old one was demolished with an explosion on april 16th 1908. A survey which Rögnvaldur Guðmundsson supervised in 2007 for\
        the Icelandic Maritime Administration led to the conclusion that Reykjanes lighthouse was the most popular lighthouse among Icelanders.\
        The lightsignal height is 69 meters above sealevel but the actual height of the lighthouse is 26 metres. Reykjanes lighthouse also has\
        a radio beacon with a correction signal. There is carved rock and concrete in the lighthouse. Architect Frederik Kjørboe and engineer\
        Thorvald Krabbe designed the lighthouse. The operation of Reykjanes Lighthouse is under the supervision of the Icelandic Maritime \
        Administration.',
        website: 'https://www.visitreykjanes.is/en/place/reykjanes-lighthouse'},
        { id: 3, name: 'Þorbjörn', distance: '15 minute drive from Njarðvík Sporthall',
        imgSrc: require('@/assets/thorb.jpg'), description: 'A free standing, hyaloclastite mountain north of Grindavik.\
          It offers great panoramic view over most of the Reykjanes Peninsula on fine days. The northeastern part of the mountain depicts thermal\
          activity an to its north and northeast is an extensive high temperature area.',
        website: 'https://www.visitreykjanes.is/en/place/mt-thorbjorn'}
      ]
    }
  }
}
</script>