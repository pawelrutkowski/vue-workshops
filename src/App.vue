<template>
  <div>
    <h1>{{title}}</h1>
    <input v-model="input" v-on:keyup.enter="addItem" placeholder="Wpisz treść zadania...">
    <button v-on:click="addItem">{{addButtonText}}</button>
    <ul v-for="(task, index) in list" :key="index">
      <li>{{task | capitalize}}</li>
    </ul>
    <p>Wszystkie zadania: {{totalTask}}</p>
  </div>
</template>

<script>
export default {
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
  filters: {
    capitalize: function(value) {
      if (!value) return "";
      value = value.toString();
      return value.charAt(0).toUpperCase() + value.slice(1);
    }
  },
    computed: {
    totalTask: function() {
      return this.list.length;
    },
  },
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
