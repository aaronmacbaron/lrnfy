<template>
    <div class='lyrics-component-root'>
        <iframe :src="completeSearchUrl" frameborder="0"></iframe>
    </div>
</template>

<script>
    export default {
        props : ['song', 'artist'],
        data : () => {
            return {
                songTitle : "",
                songArtist : "",
                baseSearchUrl : "https://search.azlyrics.com/search.php?q=",
                completeSearchUrl : "",
            }
        },
        mounted : function() {
            let self = this;
            this.songTitle = self.processString(this.song);
            this.songArtist = self.processString(this.artist);
            this.completeSearchUrl = self.baseSearchUrl + self.songArtist.concat("+",self.songTitle);
        },
        methods : {
            processString : function(title) {
                title = title.toLowerCase();
                let titleArray = title.split(' ');
                titleArray.forEach(function(item){item.trim()});
                title = titleArray.join('+');
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
    .lyrics-component-root{
        height:100vw;
    }
</style>