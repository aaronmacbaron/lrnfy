<template>
    <div class="tablature-component-root">
        <iframe :src="fullSearchURL" frameborder="0"></iframe>
    </div>
</template>

<script>
    export default {
        props : ['song', 'artist'],
        data : () => {
            return {
                songTitle : "",
                songArtist : "",
                baseSearchURL : "https://www.ultimate-guitar.com/search.php?search_type=title&value=",
                fullSearchURL : "",
            }
        },
        mounted : function() {
            let self = this;
            this.songTitle = self.processString(this.song);
            this.songArtist = self.processString(this.artist);
            this.fullSearchURL = self.baseSearchURL+self.songArtist.concat('-',self.songTitle);
        },
        methods : {
            processString : function(title) {
                title = title.toLowerCase();
                let titleArray = title.split(' ');
                titleArray.forEach(function(item){item.trim()});
                title = titleArray.join('-');
                return title;
            },
        },
    }
</script>

<style scoped>
    iframe{
        width:100%;
        height:100%;
    }
    .tablature-component-root{
        height:100vw;
    }
</style>