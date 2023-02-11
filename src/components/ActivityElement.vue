<template>
  <b-col
    col
    no-gutters
    class="mb-2"
  >
    <b-card no-body class="mx-auto overflow-hidden" style="max-width: 1000px; min-width: 300px;">
      <b-row no gutters>
        <b-col md="6">
          <b-card-img :src="imgSrc" alt="'Photo of '+name" class="h-100 rounded-0"></b-card-img>
        </b-col>

        <b-col md="6">
          <b-card-body :title="name">
            <b-card-text>
              <strong>{{ distance }}</strong><br>
              <p class="mt-2">{{ description }}</p>
              <p class="mt-2" v-if="additional"> {{ additional }} </p>
              <div class="text-center">
                <b-button variant="outline-primary" class="mx-auto" :href=website>
                  Visit {{ name }}
                </b-button>
              </div>
            </b-card-text>
          </b-card-body>
        </b-col>
      </b-row>
    </b-card>
  </b-col>
</template>

<script>
  export default {
    name: 'ActivityElement',
    props: ['name', 'imgSrc', 'distance', 'description', 'additional', 'website']
  }
</script>