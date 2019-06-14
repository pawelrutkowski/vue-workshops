<template>
  <div>
    <h1>{{title}}</h1>
    <input v-model="input" placeholder="Wpisz treść zadania...">
    <button>{{addButtonText}}</button>
    <ul v-for="task in list" :key="task">
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
