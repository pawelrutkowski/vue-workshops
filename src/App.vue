<template>
  <div>
    <h1>{{title}}</h1>
    <input v-model="input" v-on:keyup.enter="addItem" placeholder="Wpisz treść zadania...">
    <button v-on:click="addItem">{{addButtonText}}</button>
    <ul v-for="(task, index) in list" :key="index">
      <list-item task="task"/>
    </ul>
    <p>Wszystkie zadania: {{totalTask}}</p>
  </div>
</template>

<script>
import _ from "lodash";
import ListItem from "./ListItem";

export default {
  components: { ListItem },
  data: function() {
    return {
      title: "Moje zadania",
      input: "",
      addButtonText: "Dodaj zadanie",
      list: ["zadanie 1", "zadanie 2", "zadanie 3"]
    };
  },
  methods: {
    addItem: function() {
      const text = this.input.trim();
      if (text.length > 0) {
        this.list.push(text);
        this.input = "";
      }
    }
  },
  computed: {
    totalTask: function() {
      return this.list.length;
    },
  },
  watch: {
    input: _.debounce(function() {
      this.addButtonText =
        this.input !== "" ? "Dodaj " + this.input : "Dodaj zadanie";
    }, 250)
  }
};
</script>

<style>
button {
  border: 1px solid black;
  padding: 2px;
}
input {
  outline: 0;
  border-bottom: 1px solid black;
  margin-right: 10px;
}
</style>
