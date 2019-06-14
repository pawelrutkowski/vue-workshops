<template>
  <div>
    <h1>{{title}}</h1>
    <input v-model="input" v-on:keyup.enter="addItem" placeholder="Wpisz treść zadania...">
    <button v-on:click="addItem">{{addButtonText}}</button>
    <ul v-for="(task, index) in list" :key="index">
      <li>{{task}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      title: "Moje zadania",
      input: "",
      addButtonText: "Dodaj zadanie",
      list: ["Zadanie 1", "Zadanie 2", "Zadanie 3"]
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
