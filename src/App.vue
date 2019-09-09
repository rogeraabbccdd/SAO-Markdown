<template>
  <div id="app">
    <b-container fluid>
      <b-row class="head">
        <b-col cols="12" class="align-self-center text-center">
          <img src="@/assets/img/title.png" alt="" class="" />
        </b-col>
      </b-row>
      <b-row class="content">
        <b-col cols="12" v-if="editing">
          <textarea v-model="content"> </textarea>
        </b-col>
        <b-col cols="12" class="content" v-else @click="edit">
          <div class="marked" v-html="markdown"></div>
        </b-col>
      </b-row>
      <b-row class="foot">
        <b-col
          cols="6"
          class="align-self-center text-center"
          v-if="editing == true"
          @click="save"
        >
          <img src="@/assets/img/save.png" alt="" class="md-btn" />
        </b-col>
        <b-col
          cols="6"
          class="align-self-center text-center"
          v-if="editing == true"
          @click="discard"
        >
          <img src="@/assets/img/discard.png" alt="" class="md-btn" />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<style>
body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji",
    "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji", "Noto Sans TC",
    "Noto Sans SC" !important;
}

textarea {
  width: 100% !important;
  resize: none !important;
  height: calc(100vh - 162px) !important;
}

.col-12 {
  padding: 15px !important;
}

.head {
  background: #f5f5f5;
  box-shadow: 0px 0px 20px #c9c9c9;
  height: 63px;
  z-index: 1;
  position: relative;
}

.foot {
  background: #f5f5f5;
  box-shadow: 0px 0px 20px #c9c9c9;
  height: 63px;
  z-index: 1;
  position: relative;
}

.content {
  background: #e4e4e4;
  box-sizing: border-box;
  min-height: calc(100vh - 126px);
}

.md-btn:hover {
  filter: brightness(1.5);
}
</style>

<script>
import "highlightjs/styles/vs2015.css";
import marked from "marked";
import highlight from "highlight.js";
marked.setOptions({
  renderer: new marked.Renderer(),
  highlight: function(code) {
    return highlight.highlightAuto(code).value;
  }
});

export default {
  name: "app",
  data() {
    let defContent = `<style>
p {
text-align: center;
}
img {
  margin: 0 auto;
}
</style>
![welcome](./img/welcome.png)  


**Click here to edit notes**
`;
    let content = defContent;
    let local = localStorage.getItem("markdown-note");
    if (local !== null && local.length > 0 && local.trim() !== "") {
      content = localStorage.getItem("markdown-note");
    }
    let editing = false;
    let cached = "";
    return {
      content,
      defContent,
      editing,
      cached
    };
  },
  computed: {
    markdown() {
      return marked(this.content);
    }
  },
  methods: {
    edit() {
      this.cached = this.content;
      this.editing = true;
    },
    save() {
      localStorage.setItem("markdown-note", this.content);
      if (this.content.length === 0) this.content = this.defContent;
      this.editing = false;
      let el = this.$el.querySelectorAll("code");
      for (let i = 0; i < el.length; i++) {
        el[i].classList.add("hljs");
      }
    },
    discard() {
      this.content = this.cached;
      this.editing = false;
    },
    codeClass() {
      setTimeout(() => {
        let el = this.$el.querySelectorAll("code");
        for (let i = 0; i < el.length; i++) {
          if (el[i].getAttribute("class").includes("language-"))
            el[i].classList.add("hljs");
        }
      }, 50);
    }
  },
  watch: {
    editing(val) {
      if (!val) this.codeClass();
    }
  },
  created() {
    this.codeClass();
  }
};
</script>
