<template>
    <div>
      <div class="tab">
        <div id="app">
          <musicplayer></musicplayer>
          <backbutton></backbutton>
          <div>
            <programContent></programContent>
          </div>
          <div>
            <timer></timer>
          </div>
          <div id="footer">
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import Timer from './Timer.vue';
import programContent from './programContent.vue';
import backbutton from './backbutton.vue';
import musicplayer from './musicPlayer.vue';


export default {
  components: {
    Timer, 
    programContent,
    backbutton,
    musicplayer,
  },
  
}
</script>