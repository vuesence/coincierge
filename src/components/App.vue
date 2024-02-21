<script lang="ts" setup>
import config from "../config.json";
import data from "../data.json";
import CryptoCurrenciesSection from "./CryptoCurrenciesSection.vue";
import PeerToPeerSection from "./PeerToPeerSection.vue";
import EthGasPriceSection from "./EthGasPriceSection.vue";

console.log("config", config);

const sections = config.sections.filter(section => section.enabled);

const sectionMap: Record<string, any> = {
  gas: EthGasPriceSection,
  cc: CryptoCurrenciesSection,
  p2p: PeerToPeerSection,
};
</script>

<template>
  <div class="app">
    <main>
      <section v-for="section in sections" :key="section.type" class="section">
        <label class="title">{{ section.title }}</label>
        <component :is="sectionMap[section.type]" :config-section="section" :data="data" />
      </section>
    </main>
    <footer>
      Coincierge <code>v0.3.1</code>
    </footer>
  </div>
</template>

<style scoped>
.app {
  width: 400px;

  main {
    display: flex;
    flex-direction: column;

    .section {
      border: 1px solid #ddd;
      margin: 8px;
      padding: 0.5em 0.5rem 1.5em ;
      position: relative;
      box-shadow: 0 1px 3px 0 rgba(0,0,0,0.16), 0 2px 10px 0 rgba(0,0,0,0.12);

      .title {
        position: absolute;
        top: -10px;
        left: 20px;
        height: 20px;
        padding: 0 0.5em;
        background-color: white;
        /* text-align: center; */
      }
    }

  }

  footer {
    text-align: right;
  }
}
</style>
