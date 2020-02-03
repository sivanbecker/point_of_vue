<template>
  <v-app>
    <v-content>
      <router-view :key="$route.fullPath"></router-view>
    </v-content>
  </v-app>
</template>

<script>

export default {
  name: "App",
  components: {},
  data: () => ({
    //
  })
};
</script>
