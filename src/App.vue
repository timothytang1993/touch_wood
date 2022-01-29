<template>

<div class="imgbox">
  <img
    class="center-fit"
    :src="require(`${imgResult}`)"
    @touchstart="showComment();changeGfitMessage()"
  />
</div>
<div
  class="backdrop"
  v-if="showModal"
  @touchstart="showComment();changeGfitMessage()"
>
  <div class="modal">
    <pre>{{giftMessage}}</pre>
  </div>
</div>

</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      showModal: false,
      giftMessage: "touch wood is good",
    };
  },
  methods: {
    showComment: function () {
      this.showModal = !this.showModal;
    },
    changeGfitMessage: function () {
      let array = [];
      array[0] = "樹木係有靈性，\ntouch下就會有好運。";
      array[1] = "講錯野要touch wood";
      array[2] = "得閒touch下，\n都會帶黎好運。";
      array[3] = "try try touch wood";

      let number = Math.floor(Math.random() * array.length);
      if (number == 4) number = 0;

      this.giftMessage = array[number];
    },
  },
  computed: {
    imgResult: function () {
      let array = [];
      array[0] = "./assets/images/tree_1.jpg";
      array[1] = "./assets/images/tree_2.jpg";
      array[2] = "./assets/images/tree_3.jpg";
      array[3] = "./assets/images/tree_4.jpg";

      let number = Math.floor(Math.random() * array.length);
      if (number == 4) number = 0;

      return array[number];
    },
  },
}
</script>

<style>
h1 {
  text-align: center;
}
pre {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-sommthing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 30vh;
}
.imgbox {
  display: grid;
  height: 100%;
}
.center-fit {
  max-width: 100%;
  max-height: 100vh;
  margin: auto;
}
.modal {
  width: 50vw;
  padding: 20px;
  margin: 40vh auto;
  background: white;
  border-radius: 10px;
}
.backdrop {
  top: 0;
  position: fixed;
  background: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
}
</style>
