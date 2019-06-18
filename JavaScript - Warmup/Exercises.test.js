/* global describe, it, expect */

// popraw funkcję lengthOfArray, tak aby zwracała liczbę elementów tablicy
// input: array - tablica
// output: liczba elementów w tablicy
describe("lengthOfArray", () => {
  function lengthOfArray(array) {
    return null;
  }
  it("pusta tablica", () => {
    const array = [];
    const result = lengthOfArray(array);
    expect(result).toBe(0);
  });

  it("jeden element", () => {
    const array = [1, 2, 3];
    const result = lengthOfArray(array);
    expect(result).toBe(3);
  });
});

// popraw funkcję getDescription, tak przyjmowała tekst i dadawała do jego początku tekst "Add ", w przypadku gdy podany tekst jest pusty funkcja ma zwrócić tekst "Add Element"
// input: tekst
// output: tekst
describe("getDescription", () => {
  function getDescription(text) {
    return null;
  }

  it("wartość 1", () => {
    const text = "1";
    const result = getDescription(text);
    expect(result).toBe("Add 1");
  });

  it("pusty tekst", () => {
    const text = "";
    const result = getDescription(text);
    expect(result).toBe("Add Element");
  });
});

// popraw funkcję addItem, tak aby zwracała tablicę z nowym elementem, element ma być typu string i w razie potrzeby mają być z niego usówane białe znaki na początku i końcu
// input: array - tablica, item - element do dodania do tablicy, typu string
// output: nowa tablica z nowym dodanym elementem
describe("addItem", () => {
  function addItem(array, item) {
    return null;
  }

  it("prosty tekst", () => {
    const tekst = "tekst";
    const array = ["prosty"];
    const result = addItem(array, tekst);
    expect(result).toEqual(["prosty", "tekst"]);
  });

  it("prosty   tekst  ", () => {
    const tekst = "  tekst  ";
    const array = ["prosty"];
    const result = addItem(array, tekst);
    expect(result).toEqual(["prosty", "tekst"]);
  });
});

// popraw funkcję removeItem, aby usuwa element z tablicy o podanym indeksie
// input: array - tablica, index - index elementu do usunięcia
// output: tablica bez elementu o podanym indeksie
describe("removeItem", () => {
  function removeItem(array, index) {
    return null;
  }

  it("prosty tekst", () => {
    const index = 0;
    const array = [1, 2, 3, 4];
    const result = removeItem(array, index);
    expect(result).toEqual([2, 3, 4]);
  });

  it("prosty tekst", () => {
    const index = 3;
    const array = [1, 2, 3, 4];
    const result = removeItem(array, index);
    expect(result).toEqual([1, 2, 3]);
  });
});

// popraw funkcję capitalize, aby zamieniała podany tekst na taki który rozpoczyna się z wielkiej litery
// input: array - tablica, index - index elementu do usunięcia
// output: tablica bez elementu o podanym indeksie
describe("capitalize", () => {
  function capitalize(text) {
    return null;
  }

  it("text", () => {
    const text = "tekst";
    const result = capitalize(text);
    expect(result).toBe("Tekst");
  });

  it("tEXT", () => {
    const text = "tEXT";
    const result = capitalize(text);
    expect(result).toBe("TEXT");
  });
});

// popraw funkcję countCheckedItems, tak aby zwracała liczbę obiektów, których wartość pola `checked` jest równa `true`
// input: collection - tablica obiektów z polami name i checked
// output: liczba elementów

describe("countCheckedItems", () => {
  function countCheckedItems(collection) {
    return null;
  }

  it("prosty tekst", () => {
    const collection = [
      { name: "1", checked: true },
      { name: "2", checked: false },
      { name: "3", checked: true }
    ];
    const result = countCheckedItems(collection);
    expect(result).toBe(2);
  });

  it("prosty tekst", () => {
    const collection = [
      { name: "1", checked: false },
      { name: "2", checked: true },
      { name: "3", checked: false }
    ];
    const result = countCheckedItems(collection);
    expect(result).toBe(1);
  });
});
