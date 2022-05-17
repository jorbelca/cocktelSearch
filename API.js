// https://www.thecocktaildb.com/api.php
const fetch = (...args) =>
  import("node-fetch").then(({ default: fetch }) => fetch(...args))

fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita")
  .then((response) => response.json())
  .then((response) => console.log(response))
