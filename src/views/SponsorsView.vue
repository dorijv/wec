<template>
  <div class="home mt-2">
    <b-container class="bv-example-row">
      <b-row class="text-center">
        <b-col fluid>
          <div>
            <h1>Local Sponsors</h1>
          </div>
          <div class="mb-2">
            <b-carousel
              id="carousel-fade"
              style="text-shadow: 0px 0px 2px #000"
              fade
              indicators
              interval=2000
            >
              <b-carousel-slide
                v-for="pic in sponsors"
                :key="pic.key"
                :imgSrc="pic.imgSrc"
              >
              </b-carousel-slide>
            </b-carousel>
          </div>
        </b-col>
      </b-row>
    </b-container>
    <b-container class="bv-example-row">
      <b-row class="text-center">
        <b-col fluid>
          <div>
            <h1>EPF Sponsors</h1>
          </div>
          <div class="mb-2">
            <b-carousel
              id="carousel-fade"
              style="text-shadow: 0px 0px 2px #000"
              fade
              indicators
              interval=2000
            >
              <b-carousel-slide
                v-for="pic in sponsors"
                :key="pic.key"
                :imgSrc="pic.imgSrc"
              >
              </b-carousel-slide>
            </b-carousel>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'VenueView',
  components: {
  },
  data() {
    return {
      sponsors: [
        { id:1, imgSrc: require('@/assets/rogue-og.jpg')},
        { id:2, imgSrc: require('@/assets/sbdlogo.webp')}
      ]
    }
  }
}
</script>