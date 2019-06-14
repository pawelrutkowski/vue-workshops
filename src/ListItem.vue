<template>
  <div>
    <v-subheader v-if="index === 0">Zadania</v-subheader>
    <v-list-tile v-bind:class="item">
      <v-list-tile-action>
        <v-checkbox v-model="item.checked"></v-checkbox>
      </v-list-tile-action>
      <v-list-tile-content>
        <v-list-tile-title v-text="item.value" v-bind:class="item.checked ? 'done' : 'todo'"></v-list-tile-title>
      </v-list-tile-content>
      <v-list-tile-action>
        <v-btn flat icon v-on:click="delelteItem(index)" color="red">
          <v-icon>delete</v-icon>
        </v-btn>
      </v-list-tile-action>
    </v-list-tile>
  </div>
</template>

<script>
export default {
  props: ["item", "index", "delelteItem"],
  filters: {
    capitalize: function(value) {
      if (!value) return "";
      value = value.toString();
      return value.charAt(0).toUpperCase() + value.slice(1);
    }
  }
};
</script>