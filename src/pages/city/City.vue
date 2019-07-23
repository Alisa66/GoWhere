<template>
  <div>
     <city-header></city-header>
    <city-search :cities="cities"></city-search>
    <city-list
              :citys="cities"
              :hotcitys="hotCities"
              :Letter="letter"
    ></city-list>
    <city-alphabet
                :citys="cities"
                @Alphabetclick="changeAl"
    ></city-alphabet>
  </div>

</template>
<script>
  import axios from 'axios'
  import CityHeader from  './components/Header'
  import CitySearch from  './components/Search'
  import CityList from  './components/List'
  import CityAlphabet from  './components/Alphabet'
  export default {
    name:'city',
    data(){
      return{
        cities:{},
        hotCities:[],
        letter:''
      }
    },
    components:{
      CityHeader,
      CitySearch,
      CityList,
      CityAlphabet
    },
    methods:{
      getCityInfo(){
        axios.get('/api/city.json')
          .then( (res)=>{
            res = res.data;
            if(res.ret && res.data){
              this.cities = res.data.cities;
              this.hotCities = res.data.hotCities;
            }
          })
      },
      changeAl(letter){
        this.letter = letter;
      }
    },
    mounted(){
      this.getCityInfo()
    }
  }
</script>
<style lang="stylus" scoped>

</style>
