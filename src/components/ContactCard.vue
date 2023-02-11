<template>
  <b-col
    col
    no-gutters
    class="mb-2"
  >
    <b-card border-variant="primary" no-body class="overflow-hidden" style="max-width: 540px; min-width: 300px;">
      <b-row no gutters>
        <b-col md="6">
          <b-card-img :src="imgSrc" alt="Avatar" class="rounded-0"></b-card-img>
        </b-col>

        <b-col md="6">
          <b-card-body :title="name">
            <b-card-text>
              <strong>{{ role }}</strong><br>
              <a :href="'mailto:'+email">{{ email }} </a> <br>
              {{ phoneNr }}
            </b-card-text>
          </b-card-body>
        </b-col>
      </b-row>
    </b-card>
</b-col>
</template>

<script>
export default {
name: 'ContactCard',
props: ['name', 'imgSrc', 'phoneNr', 'role', 'email']
}
</script>
