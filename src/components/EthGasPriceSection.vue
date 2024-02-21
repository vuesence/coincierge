<script lang="ts" setup>
defineProps<{ data: IData }>();
</script>

<template>
  <div class="gas">
    Gas: <span>
      {{ data.gas.prices.low }} / {{ data.gas.prices.average }} / {{ data.gas.prices.high }}
    </span>
  </div>
</template>

<style scoped>
.gas {
  padding: 1em 0 0 1em;
}
</style>
