
<script>
import Results from './Results.vue';

export default {
  name:"SearchBar",
  components:{
    Results
},
data(){
  return{
    search: "",
    dataFetched: []
  }
}
,
methods: {
  submitForm: function (event) {
    if (event) 
    this.search = event.target.elements.searchbar.value

  }
}
,watch:{
  search(){
    // const fetchAPI = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${this.search}`).then(res => res.json())
    // this.dataFetched = fetchAPI

  }
}
}
</script>

<template>
 <div id="application">
   <form  @submit.prevent="submitForm">
  <input class="search-bar" type="text" placeholder="Search a cocktel" name="searchbar">
  <input type="submit" class="sbmit" >
  <div>
  <label for="alcohol">Non Alcoholic</label>
  <input type="checkbox" value="alcohol"></div>
  </form>
 </div>
 <div id="results">
   <Results data={dataFetched}></Results>
 </div>
</template>

<style>
.search-bar {
    border-radius: 20px;
    width: 70%;
    height: 35px
}
.sbmit{
  display: none;
}

</style>