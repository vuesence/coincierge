<script lang="ts" setup>
import { getCurrencySymbol, p2pCollections } from "../utils";

const props = defineProps<{ configSection: IConfigSection, data: IData }>();

const collections = p2pCollections(props.data, props.configSection.provider as string, "sell", "USDT/RUB");
const currencySymbol = getCurrencySymbol("USDT/RUB");
console.log(collections);
</script>

<template>
  <h2>{{ props.configSection.provider }}</h2>
  <div v-for="(collection, i) in collections" :key="i" class="collection">
    <label class="title">{{ collection.pair }} ({{ collection.type }})</label>
    <div v-for="(order, j) in collection.orders" :key="j" class="order">
      <div class="merchant">
        <div class="username">
          {{ order.userName }}
        </div>
        <div class="volume">
          {{ order.tradeMonthTimes }} / {{ order.orderCompleteRate }}%
        </div>
      </div>
      <div class="price">
        {{ order.price }}
        <span class="currency-symbol">{{ currencySymbol }}</span>
      </div>
      <div class="limits">
        <div class="min">
          min: {{ currencySymbol }}{{ order.minTradeLimit }}
        </div>
        <div class="max">
          max: {{ currencySymbol }}{{ order.maxTradeLimit }}
        </div>
      </div>
      <div class="payment-methods">
        {{ order.payMethods[0].name }}
      </div>
    </div>
  </div>
</template>

<style scoped>
h2 {
  text-align: center;
  margin: 0 0 .9em;
  font-size: 1.3rem;
}
.collection {
  /* box-shadow: 0 1px 3px 0 rgba(0,0,0,0.16), 0 2px 10px 0 rgba(0,0,0,0.12); */
  border: 1px solid #ddd;
  padding: 1em;
  position: relative;

  .title {
    position: absolute;
    top: -10px;
    /* left: calc(50% - 50px); */
    left: 10px;
    height: 20px;
    padding: 0 0.5em;
    background-color: white;
    color: #999;
    font-size: 0.9rem;
    /* text-align: center; */
  }

  .order {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.3em 0;
    .merchant {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100px;
      overflow-x: hidden;
      .username {
        font-size: 0.9rem;
      }
      .volume {
        color: #aaa;
        font-size: 0.7rem;
      }
    }
    .price {
      .currency-symbol {
        font-size: 0.8rem;
        color: #aaa;
      }
    }
    .limits {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      color: #ccc;
      font-size: 0.7rem;
    }
  }
}
</style>
