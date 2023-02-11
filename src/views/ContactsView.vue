<template>
<div>
<b-container fluid style="margin-top: 5px; margin-bottom: 5px;">
  <b-row cols="1" cols-sm="1" cols-md="2" cols-lg="3">
    <ContactCard
    v-for="contact in contacts"
    :key="contact.id"
    :name="contact.name"
    :imgSrc="contact.imgSrc"
    :phoneNr="contact.phoneNr"
    :role="contact.role"
    :email="contact.email"
    />
  </b-row>
</b-container>

</div>
</template>

<script>
// @ is an alias to /src
import ContactCard from "@/components/ContactCard.vue";

export default {
    name: 'ContactsView',
    components: {
      ContactCard
    },
    data() {
      return {
        contacts: [
          { id: 1, name: 'Ellert Björn Ómarsson', phoneNr: '+354 662 6936', imgSrc: require('@/assets/ellert2.jpg'),
            role: 'Meet Director', email: 'ellert94@gmail.com'},
          { id: 2, name: 'Gry Ek', phoneNr: '', imgSrc: require('@/assets/gry.jpg'),
          role: 'Association Contact', email: 'gry@kraft.is'},
          { id: 3, name: 'Sturla Ólafsson', phoneNr: '+354 777 9911', imgSrc: require('@/assets/ellert.jpg'),
          role: 'Transport Manager', email: 'stullitrukkur@hotmail.com'},
          { id: 4, name: 'Gunnlaug Olsen', phoneNr: '+354 777 9922', imgSrc: require('@/assets/gulla.jpg'),
          role: 'Accomodation Manager', email: 'gullaolsen@simnet.is'},
          { id: 5, name: 'Helgi Hauksson', phoneNr: '+354 662 6936', imgSrc: require('@/assets/helgi.jpg'),
          role: 'Head Referee', email: 'helgi@felagsbustadir.is'},
          { id: 6, name: 'Gunnlaug Olsen', phoneNr: '+354 777 9922', imgSrc: require('@/assets/gulla.jpg'),
          role: 'Event Organizer', email: 'gullaolsen@simnet.is'},
          { id: 7, name: 'Halldór Jens Vilhjálmsson', phoneNr: '+354 791 8151', imgSrc: require('@/assets/halldor.png'),
          role: 'Developer', email: 'hjv6@hi.is'}
        ]
      }
    }
}
</script>