<template>
  <li>{{task | capitalize}}</li>
</template>

<script>
export default {
  props: ['task'],
    filters: {
    capitalize: function(value) {
      if (!value) return "";
      value = value.toString();
      return value.charAt(0).toUpperCase() + value.slice(1);
    }
  },
}
</script>