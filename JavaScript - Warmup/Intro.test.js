/* global describe, it, expect */

// Testy składają się z bloków :
// "describe"- które służą do opisywania i grupowania testów,
// "it" - w których znajdują się przypadki testowe
// dodatkowo wykorzystana jest metoda "expect", dzięki której możemy sprawdzić czy otrzymane wyniki testów są tożsame z oczekiwanymi  wynikami,
// Dla "expect(1 + 1).toBe(2);" oczekujemy że "1 + 1" jest równe "2"

// ka∂y zestaw testów ma stój opis
// input - opis argumentów wejściowych danej funkcji
// output - opis argumentów wyjściowych danej funkcji
describe("Wprowadzenie do testów", () => {
  it("Test poprawny ", () => {
    expect(1 + 1).toBe(2);
  });

  // Napraw ten test
  it("Test do poprawy", () => {
    expect(1 + 1).toBe(3);
  });
});
