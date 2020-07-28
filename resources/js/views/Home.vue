<template>
  <div>
    <label for="artist">
      Artist:
      <input type="text" name="artist" id="searchArtist" />
    </label>
    <label for="song">
      Song:
      <input type="text" name="song" id="searchSong" />
    </label>
    <label for="submit">
      <input type="button" name="submit" id="submitSearch" value="Submit" @click="submit" />
    </label>
    <div class="flex-container">
      <div class="main-comp-holder" v-if="!loading && submitted">
        <lyrics :song="searchSong" :artist="searchArtist"></lyrics>
      </div>
      <div class="main-comp-holder" v-if="!loading && submitted">
        <tabs :song="searchSong" :artist="searchArtist"></tabs>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      searchArtist: "",
      searchSong: "",
      loading: false,
      submitted: false
    };
  },
  methods: {
    submit: function() {
      this.loading = true;
      this.searchArtist = document.getElementById("searchArtist").value;
      this.searchSong = document.getElementById("searchSong").value;
      this.submitted = true;
      this.loading = false;
    }
  }
};
</script>

<style scoped>
.flex-container{
    display: grid;
}
.main-comp-holder:nth-of-type(1) {
    grid-column: 1;
}
.main-comp-holder:nth-of-type(2) {
    grid-column: 2;
}
</style>