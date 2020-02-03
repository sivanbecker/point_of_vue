<template>
  <div>
    <v-btn v-for="album in getAlbums" :key="album.id">{{album.title}}</v-btn>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "albums",
  methods: {
    ...mapActions(["fetchAlbums"])
  },
  computed: {
    ...mapGetters(["getAlbums"]),
  },
  created() {
      this.fetchAlbums();
  }
};
</script>