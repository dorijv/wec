<template>
  <div class="home mt-2">
    <b-container class="bv-example-row">
      <b-row class="text-center">
        <b-col fluid>
          <div>
            <b-img fluid src="https://i.imgur.com/dqzgrel.jpg" fluid-grow alt="Jökulárslón"></b-img>
            <h1>Western European Championships 2023</h1>
            <div>
                <p> We're proud and happy to be hosting the
                <strong>2023 Western European Equipped and Classic Powerlifting Championships, Njarðvík, Iceland, 8th to 10th September, 2023. </strong>
                We're aiming to make this a memorable stay for the teams and guests.</p>

                <p><strong>UMFN Massi</strong> has years of experience hosting international meets such as the <em>2016 European Open & Junior Bench Press Championships</em>,
                and many more! (Bæta við listann kannski)</p>
            </div>
            <div>
                <FlipCountdown />
            </div>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
// @ is an alias to /src
import FlipCountdown from '@/components/FlipCountdown.vue'

export default {
  name: 'HomeView',
  components: {
    FlipCountdown
  }
}
</script>