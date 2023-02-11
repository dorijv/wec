<template>
<header>
  <b-navbar toggleable="lg" type="dark" variant="success">

    <b-navbar-brand href="#">
      <img src="./../assets/umfn_logo.png">
      UMFN Massi - WEC
    </b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-item active-class='active' :to="'home'">Home</b-nav-item>
        <!--<b-nav-item active-class='active' :to="'news'">News</b-nav-item>-->
        <b-nav-item href="https://www.youtube.com/@krafticeland/streams">LIVE!</b-nav-item>
        <!--<b-nav-item active-class='active' :to="'timetable'">Timetable</b-nav-item>-->
        <!--<b-nav-item active-class='active' :to="'contacts'">Contacts</b-nav-item>-->
        <!--<b-nav-item active-class='active' :to="'sponsors'">Sponsors</b-nav-item>-->
        <!--<b-nav-item active-class='active' :to="'venue'">Venue</b-nav-item>-->

        <b-nav-item-dropdown text="Information" right>
          <b-dropdown-item :to="'news'">News</b-dropdown-item>
          <b-dropdown-item :to="'timetable'">Schedule</b-dropdown-item>
          <b-dropdown-item :to="'contacts'">Contacts</b-dropdown-item>
          <b-dropdown-item :to="'sponsors'">Sponsors</b-dropdown-item>
          <b-dropdown-item :to="'venue'">Venue</b-dropdown-item>
          <b-dropdown-item :to="'accommodation'">Accommodation</b-dropdown-item>
          <b-dropdown-item :to="'transportation'">Transportation</b-dropdown-item>
        </b-nav-item-dropdown>

        <b-nav-item-dropdown text="Explore Iceland" right>
          <b-dropdown-item :to="'activities'">Activities</b-dropdown-item>
          <b-dropdown-item :to="'scenery'">Scenery</b-dropdown-item>
          <b-dropdown-item :to="'misc'">Miscellaneous</b-dropdown-item>
        </b-nav-item-dropdown>

        <b-nav-item-dropdown text="Lifters" right>
          <b-dropdown-item href="http://goodlift.info/onecompetition.php?lid=0&cid=708">Men's Classic</b-dropdown-item>
          <b-dropdown-item href="http://goodlift.info/onecompetition.php?lid=0&cid=710">Men's Equipped</b-dropdown-item>
          <b-dropdown-item href="http://goodlift.info/onecompetition.php?lid=0&cid=707">Women's Classic</b-dropdown-item>
          <b-dropdown-item href="http://goodlift.info/onecompetition.php?lid=0&cid=709">Women's Equipped</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</header>
</template>

<script>
export default {
  name: 'NavBar',
  props: {
  }
}
</script>
