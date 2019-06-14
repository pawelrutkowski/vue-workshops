<template>
  <li v-on:click="onClick(task)">{{task | capitalize}}</li>
</template>

<script>
export default {
  props: ["task", "onClick"],
  filters: {
    capitalize: function(value) {
      if (!value) return "";
      value = value.toString();
      return value.charAt(0).toUpperCase() + value.slice(1);
    }
  }
};
</script>