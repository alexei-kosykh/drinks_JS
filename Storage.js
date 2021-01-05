class Storage {
  constructor() {
    this.DrinkStorage = {};
  }

  addValue(key, value) {
    // сохраняет значение под указанным ключом.
    return (this.DrinkStorage[key] = value);
  }

  getValue(key) {
    // возвращает значение по указанному ключу.
    return this.DrinkStorage[key].value;
  }

  getKeys() {
    // возвращает массив состоящий из одних ключей.
    return Object.keys(this.DrinkStorage);
  }

  deleteValue(key) {
    // удаляет значение с ключом, возвращает true если такое есть, либо false если нет.

    if (!(key in this.DrinkStorage)) {
      return false;
    }

    return delete this.DrinkStorage[key];
  }

  reset() {
    // очищает хранящиеся в объекте данные.
    for (var key in this.DrinkStorage) {
      // this check can be safely omitted in modern JS engines
      // if (obj.hasOwnProperty(key))
      delete this.DrinkStorage[key];
    }
    return "Complete reset";
  }
}

const drinks = new Storage();

const addValueBtn = document.querySelector("#addValue");
const getValueBtn = document.querySelector("#getValue");
const getKeysBtn = document.querySelector("#getKeys");
const deleteValueBtn = document.querySelector("#deleteValue");
const resetBtn = document.querySelector("#reset");

addValue.addEventListener("click", () => {
  const key = prompt("Введите код напитка", "");
  const value = prompt("Введите значение напитка", "");
  let add = drinks.addValue(key, { key, value });
  console.log(add);
});

getValue.addEventListener("click", () => {
  const key = prompt("Введите код напитка", "");
  console.log(drinks.getValue(key));
});

getKeys.addEventListener("click", () => {
  console.log(drinks.getKeys());
});

deleteValue.addEventListener("click", () => {
  const key = prompt("Введите код напитка", "");
  console.log(drinks.deleteValue(key));
});

reset.addEventListener("click", () => {
  console.log(drinks.reset());
});
