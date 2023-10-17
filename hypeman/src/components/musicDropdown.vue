<template>
  <div>
    <select v-model="selected" @change="onChange($event)">
      <option disabled value="">Please select one</option>
      <option value="hardcore">Hardcore</option>
      <option value="inspirational">Inspirational</option>
      <option value="national">National</option>
    </select>
   
  </div>
</template>

<script>
export default {
  data() {
    return {
      selected: ""
    
    };
   
  },
  methods: {
        onChange(event) {
            localStorage.setItem("music", event.target.value);
        }
    }
}
</script>
