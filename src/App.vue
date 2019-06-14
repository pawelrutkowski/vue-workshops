<template>
  <v-app>
    <v-toolbar color="blue" app>
      <v-toolbar-title class="white--text">{{title}}</v-toolbar-title>
    </v-toolbar>

    <v-content>
      <v-container>
        <v-card>
          <v-card-title primary-title>
            <v-layout row wrap>
              <v-flex xs12>
                <v-text-field v-on:keyup.enter="addItem" v-model="input" label="Wpisz nowe zadanie"></v-text-field>
              </v-flex>
              <v-btn v-on:click="addItem">{{ buttonText }}</v-btn>
            </v-layout>
          </v-card-title>

          <div>
            <h3 v-if="list.length === 0">Brak zadań do wykonania</h3>
            <v-list v-else v-for="(item, index) in list" :key="index">
              <list-item :key="item.value" :item="item" :index="index" :delelteItem="delelteItem"/>
            </v-list>
          </div>
        </v-card>
      </v-container>
    </v-content>
    <v-footer app>
      <v-layout>
        <v-flex>
          <p>Wszystkie zadania {{totalTask}}</p>
        </v-flex>
        <v-flex>
          <p>Zrobione zadania {{doneTask}}</p>
        </v-flex>
      </v-layout>
    </v-footer>
  </v-app>
</template>

<script>
import _ from "lodash";
import saveState from "vue-save-state";
import ListItem from "./ListItem";

export default {
  components: {
    ListItem
  },
  data: function() {
    return {
      title: "Moje Zadania",
      input: "",
      list: [{ value: "zadanie", checked: false }],
      buttonText: "Dodaj zadanie"
    };
  },
  mixins: [saveState],
  methods: {
    addItem: function() {
      const text = this.input.trim();
      if (text.length > 0) {
        this.list.push({ value: text, checked: false });
        this.input = "";
      }
    },
    delelteItem: function(index) {
      this.list.splice(index, 1);
    },
    getSaveStateConfig: function() {
      return {
        cacheKey: "App",
        saveProperties: ["title", "input", "list"]
      };
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
    doneTask: function() {
      return this.list.filter(({ checked }) => checked).length;
    }
  },
  watch: {
    input: _.debounce(function() {
      this.buttonText = this.input !== "" ? "Add " + this.input : "Add Task";
    }, 250)
  }
};
</script>

<style>
.todo {
  font-weight: bold;
}
.done {
  text-decoration: line-through;
}
</style>