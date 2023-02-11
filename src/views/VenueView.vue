<template>
  <div class="home mt-2">
    <b-container class="bv-example-row">
      <b-row class="text-center">
        <b-col fluid>
          <div>
            <!--<b-img fluid src="https://i.imgur.com/dqzgrel.jpg" fluid-grow alt="Jökulárslón"></b-img>-->
            <h1>Njarðvík's Sportshall</h1>
            <div>
                <p>
                  The venue for the European Championships is located only few minutes from the
                  hotel. We will offer transport between the hotel and the venue and we strive to
                  keep the fee very low. The Sportshall in Njardvik is Massi ́s “home ground” and
                  many powerlifting competitions have been held there since Massi was founded
                  in 1995. At the sportshall there is also a swimming pool, hot tubs, massage
                  room and a sauna for you to use during the competition days so you can shower, 
                  swim and relax after competing if you want. 
                </p>
                <p>
                  You will be able to buy some food and drinks at the
                  sportshall during the competition. Referees and staff will have a special chill out
                  area located on the third floor overseeing the competition area so they will not
                  miss a thing. They will be well taken care off with food and drinks.
                </p>
            </div>
          </div>
          <div class="mb-2">
            <b-carousel
              id="carousel-fade"
              style="text-shadow: 0px 0px 2px #000"
              fade
              indicators
              interval=5000
            >
              <b-carousel-slide
                v-for="pic in pictures"
                :key="pic.key"
                :imgSrc="pic.imgSrc"
              ></b-carousel-slide>
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
      pictures: [
        { id:1, imgSrc: require('@/assets/m2.jpg')},
        { id:2, imgSrc: require('@/assets/m1.jpg')},
        { id:3, imgSrc: require('@/assets/m5.jpg')},
        { id:4, imgSrc: require('@/assets/m4.jpg')}
      ]
    }
  }
}
</script>