<template>
  <div id="test">
    {{ msg }}
    <h2>{{ prop }}</h2>
  </div>
</template>

<script>
export default {
  setup() {},
  name: "test",
  data() {
    return {
      msg: "Test",
    };
  },
  props: ["prop"],
  methods: {
    test() {
      this.$axios.get("/login");
    },
  },
  created() {
    this.test();
  },
};
</script>