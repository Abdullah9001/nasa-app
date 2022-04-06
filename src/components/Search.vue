<template>
  <div id="main-container">
    <div class="search-box">
      <h2>Nasa Api Project</h2>
      <form v-on:submit.prevent="getResult(query)">
        <input
          class="search-input"
          type="text"
          placeholder="Type in your search"
          v-model="query"
        />
        <button class="myButton">Submit</button>
      </form>
      <div class="grid-container" v-if="results">
        <div
          class="sub-container"
          v-for="(result, index) in results"
          :key="index"
        >
          <img v-bind:src="result.links[0].href" />
        </div>
      </div>
      <footer class="footer">
        <p>
          Copyright <span class="copy-color">&copy;</span> Abdullah Jubayer
          2021.
        </p>
      </footer>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      msg: "Search",
      query: "",
      results: "",
      show: false,
    };
  },
  mounted() {
    this.getResult("black hole");
  },
  methods: {
    getResult(query) {
      axios
        .get(
          "https://images-api.nasa.gov/search?q=" + query + "&media_type=image"
        )
        .then((response) => {
          console.log(response.data.collection.items);
          this.results = response.data.collection.items;
        });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,600;0,700;0,900;1,100;1,200;1,400;1,500;1,600;1,800&display=swap");
/* Reset */
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
/* Container */
#main-container {
  font-family: "roboto", sans-serif;
  background: black;
}

h2 {
  color: rgb(128, 128, 128);
  font-size: 4rem;
  padding: 1rem;
  margin-bottom: 2rem;
}

img {
  width: 100%;
  height: 100%;
  border-radius: 5px;
}

form {
  margin-bottom: 3rem;
}

/* Search Box */
.search-box {
  max-width: 1280px;
  margin: auto;
  text-align: center;
}

/* Serch Input */
.search-input {
  font-size: 12px;
  width: 200px;
  margin-right: 1rem;
  padding: 15px 10px;
  border: none;
  border-radius: 2px;
  outline: none;
  transition: 0.5s;
}
.search-input::placeholder {
  color: gray;
}
.search-input:focus {
  border: none;
  outline: none;
  color: #fff;
  background-color: rgb(128, 128, 128);
}

/* btn */
.myButton {
  box-shadow: 1px 2px 6px 0px rgb(128, 128, 128);
  background: linear-gradient(
    to bottom,
    rgb(171, 171, 171) 5%,
    rgb(128, 128, 128) 100%
  );
  background-color: rgb(128, 128, 128);
  border-radius: 31px;
  border: 2px solid rgb(50, 50, 50);
  display: inline-block;
  cursor: pointer;
  color: #ffffff;
  font-family: Courier New;
  font-size: 22px;
  font-weight: bold;
  padding: 10px 30px;
  text-decoration: none;
}
.myButton:hover {
  background: linear-gradient(
    to bottom,
    rgb(79, 78, 78) 5%,
    rgb(30, 30, 30) 100%
  );
  background-color: rgb(30, 30, 30);
}
.myButton:active {
  position: relative;
  top: 1px;
}

/* Grid Container */
.grid-container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 10px;
}
.sub-container {
  border: 1px solid rgb(150, 150, 150);
  border-radius: 5px;
}

/* Footer Sections */
.footer {
  margin-top: 20px;
  background-color: black;
}

.footer p {
  text-align: center;
  padding: 1rem;
  color: rgb(128, 128, 128);
}
.copy-color {
  color: red;
}

/*** Responsive Design ****/
@media (max-width: 768px) {
  .serch-input {
    margin-bottom: 2rem;
  }
  h2 {
    font-size: 3rem;
  }
  p {
    text-align: center;
  }

  .grid-container {
    display: grid;
    grid-template-columns: 1fr;
  }
  .sub-container img {
    width: 90%;
  }
}
</style>
