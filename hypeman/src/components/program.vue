<template>
  <div class="tab">

    <musicplayer></musicplayer>
    <div class="back">
      <backbutton></backbutton>
    </div>
    <div class="centerComponent">

      <programContent></programContent>
    </div>
    <div>
      <timer></timer>
    </div>

  </div>
</template>

<script>
import Timer from './timer.vue';
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

<style>
.button {
  background-color: #5CC4FF;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  font-size: 16px;
  border-radius: 12px;
  margin: 4px 2px;
  cursor: pointer;
}
</style>