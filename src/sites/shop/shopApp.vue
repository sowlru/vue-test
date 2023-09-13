<template>
  <shop-header />
  <shop-content />
</template>
<script>
import shopHeader from '@/sites/shop/shopHeader.vue'
import shopContent from '@/sites/shop/shopContent.vue'

export default {
  components: { shopHeader, shopContent }
}
</script>
