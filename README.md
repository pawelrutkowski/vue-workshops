### Nowoczesne aplikacje PWA w VueJS - Materiały ###

## Przygotowanie środowiska ##

* Zarejestruj się na stronie Github(chyba że posiadasz już tam konto):
https://github.com
* Przejdź na stronę CodeSandbox i zarejestruj się za pomocą swojego konta Github:
https://codesandbox.io/signin
* Otwórz poniższy link, pod którym będziesz mógł edytować online pliki projektu i na bieżąco obserwować wprowadzone zmiany
https://codesandbox.io/s/github/pawelrutkowski/vue-workshops
* Wybierz `Fork` (górny prawy róg strony) - dzięki temu pliki projektu będą zapisane na Twoim koncie i będziesz mógł do nich wrócić po warsztatach.
* W środowisku CodeSandbox wybierz zakładkę `Tests` (po prawej stronie).

## Rozgrzewka z JavaScript ##

* Otwórz zakładkę `Explorer` (po lewej stronie) i otwórz folder `JavaScript - Warmup`. W tym folderze znajdują się pliki z testami, wybierz pierwszy plik, przeanalizuj go i napraw test.
* Po naprawieniu testu z pierwszego pliku przejdź do kolejnego pliku z folderu i napraw znajdujące się w nich testy.

## Wprowadzenie do VueJS ##

<details>
<summary><strong>Zadanie 1. Html w VueJS</strong></summary>

* Odwzoruj w sekcji “template” widok z poniższego zdjęcia, za pomocą tagów html: h1, button, input, ul, li.

![screenshot](https://github.com/pawelrutkowski/vue-workshops/blob/master/Screenshot.png "Screenshot")



* Dodaj style css dla:
  * tagów html `button`:
```
  border: 1px solid black;
  padding: 2px;
```
  * tagów html “input”:
```
  outline: 0;
  border-bottom: 1px solid black;
  margin-right: 10px;
```

[Rozwiązanie](https://github.com/pawelrutkowski/vue-workshops/compare/master...01_01?expand=1)

</details>

<details>
<summary><strong>Zadanie 2. Odwzorowanie modelu w widoku</strong></summary>

* W sekcji `script`dodaj:
```
export default {
  data: function() {
  }
};

```
* W sekcji `script` popraw funkcję `data` tak aby zwracała obiek z kluczami:
  * `title` - typu string, w którym będzie znajdować się nazwa nagłówka strony
  * `input` - typu string, w którym będzie znajdować się zawartość tagu html `input`
  * `addButtonText` - typu string, w którym będzie znajdować się treść przycisku do dodawania zadań
  * `list` - tablicę z paroma elementami typu string, które będą odpowiadać liście zadań

* W sekcji `template` zastąp wprowadzony tekst wartościami z modelu danych `data`, użyj:
  * Dla tytułu strony i treści przycisku dodawania zadań zapisu `{{}}`
  * Dla wartości pola input dyrektywy `v-model`
  * Dla listy zadań dyrektywy `v-for`, `v-bind:key` i zapisu `{{}}`

[Rozwiązanie](https://github.com/pawelrutkowski/vue-workshops/compare/01_01...01_02?expand=1)

</details>

<details>
<summary><strong>Zadanie 3. Metody</strong></summary>

* Dodaj metodę `addItem`, która:
  * pobierze wartość z elementu `input`
  * doda wartość do tablicy `list`
  * wyczyści wartość pola `input`
* Dodaj do przycisku dodawania zadania - dyrektywę `v-on:click`, która wywoła funkcję `addItem`
* Dodaj do pola input  dyrektywę `v-on:keyup.enter`, która wywoła funkcję `addItem`
* Sprawdź czy działa dodawanie zadań przy wciśnięciu klawisza Enter przy wprowadzeniu treści zadanie w polu input
* Sprawdź czy działa dodawanie zadań po wciśnięciu przycisku dodania zadania

[Rozwiązanie](https://github.com/pawelrutkowski/vue-workshops/compare/01_02...01_03?expand=1)

</details>

<details>
<summary><strong>Zadanie 4. Filtry</strong></summary>

* Dodaj filtr `capitalize`, który będzie zwracał tekst w którym pierwsza tylko pierwsze słowo będzie zaczynać się z dużej litery.

[Rozwiązanie](https://github.com/pawelrutkowski/vue-workshops/compare/01_03...01_04?expand=1)

</details>

<details>
<summary><strong>Zadanie 5. computed</strong></summary>

* Dodaj w sekcji `template` tekst z liczbą wszystkich zadań, użyj `computed`

[Rozwiązanie](https://github.com/pawelrutkowski/vue-workshops/compare/01_04...01_05?expand=1)

</details>

<details>
<summary><strong>Zadanie 6. biblioteki + watch</strong></summary>

* Dodaj do projektu bibliotekę `lodash`.
* Popraw tak zawartość sekcji `template` aby tekst przycisku do dodawania zadań zmieniał się w zależności od zawartości elementu `input`. W tym celu użyj “watch” w sekcji `script` i napisz funkcję, która:
  * Jeżeli wartość pola input jest pusta to zwraca `Dodaj zadanie`
  * W innym przypadku zwraca `Dodaj` + wartość pola input

[Rozwiązanie](https://github.com/pawelrutkowski/vue-workshops/compare/01_05...01_06?expand=1)

</details>


<details>
<summary><strong>Zadanie 7. podział na komponenty</strong></summary>

* Dodaj nowy plik `ListItem.Vue` w folderze `src`
* Z pliku `App.vue` wyekstrahuj `<li>{{task | capitalize}}</li>` i filtr `capitalize` do nowo utworzonego pliku
* Komponent powinien przyjmować jako `props` pojedyńcze elementy z tablicy z listą zadań, nazwij ten props `task`, do przekazania argumentu użyj `v-bind:task` w `App.vue`

[Rozwiązanie](https://github.com/pawelrutkowski/vue-workshops/compare/01_06...01_07?expand=1)

</details>

<details>
<summary><strong>Zadanie 8. komponent propsy</strong></summary>

* W `App.vue` dodaj metodę `onClick`, która będzie przyjmować jako argument element typu string i wypisywać w konsoli jego zawartość
* przekaż funkcję do komponentu `ListItem.vue`
* zmodyfikuj `ListItem.vue` tak aby po kliknięciu na niego wykonywała się przekazana funkcja. Jeżeli zrobisz poprawnie zadanie, w zakłądce `console` powinien wyświetlać się log

[Rozwiązanie](https://github.com/pawelrutkowski/vue-workshops/compare/01_07...01_08?expand=1)

</details>

## PWA ##

<details>
<summary><strong>Zadanie PWA</strong></summary>

* Otwórz plik `public/manifest.json` i przeanalizuj go
* Z lewej strony wybierz ikonę rakiety `Deployment`, rozwiń zakładkę `netify` i wybierz `deploy`. Budowanie może zająć chwilę, po tym czasie powinien pojawić się przycisk `Visit`, który prowadzi do strony z aplikacją.
* Otwórz aplikację w nowej karcie i dodaj ją do pulpitu na komputerze lub w telefonie.

</details>

## VueJS ##

<details>
<summary><strong>Zadanie 1</strong></summary>

Obecnie w modelu danych pod kluczem `list` powinna być tablica przechowująca obiekty typu string. zmodyfikuj dodawane elementy, aby zamiast dodawania samego stringu był tworzony obiekt z informacją o wartości i statusie(czy zostało wykonane), np.: `{value: “zadanie1”, checked: false}`

</details>

<details>
<summary><strong>Zadanie 2</strong></summary>

Przy każdym zadaniu dodaj checkbox, którego modyfikowanie będzie zmieniać dane w modelu.


</details>

<details>
<summary><strong>Zadanie 3</strong></summary>

Przy każdym zadaniu dodaj przycisk do usuwania zadania, którego wybranie będzie zmieniać dane w modelu.

</details>

<details>
<summary><strong>Zadanie 4</strong></summary>

Dodaj licznik z liczbą zadań zrobionych

</details>

<details>
<summary><strong>Zadanie 5</strong></summary>

Jeżeli nie ma żadnego zadania dodaj tekst z informacją o braku zadań

</details>

<details>
<summary><strong>Zadanie 6</strong></summary>

Dodaj licznik z liczbą zadań zrobionych

</details>

<details>
<summary><strong>Zadanie 7</strong></summary>

Zamień używane tagi html na te z biblioteki `vuetifyjs` z zakładki components
np: https://vuetifyjs.com/en/components/toolbars

</details>

<details>
<summary><strong>Zadanie 8</strong></summary>

Dodaj bibliotekę `vue-save-state` i wykorzystaj ją do zapisywania listy zadań tak by dane były dostępne po odświeżeniu strony

</details>
