<template>
  <div class="grid-container">
    <div class="grid-child purple">
      <img
        src="../assets/images/ThiccDoughCryptoLogo.png"
        alt="thicc-dough-crypto-logo"
      />
    </div>

    <div class="grid-child green">Thicc Dough Crypto</div>
  </div>
</template>

<script>
export default {
  name: "BannerTitle",
  data() {
    return {
      input: "",
    };
  },
};
</script>

<style scoped>
.h1 {
  color: white;
}
.grid-container {
  display: grid;
  grid-template-columns: fit-content(100%) fit-content(100%) 1fr;
  grid-gap: 5px;
}
img {
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 50%;
  border: 5px solid white;
}
</style>
