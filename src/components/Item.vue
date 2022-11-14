<template>
  <div>
    <li>
      <a :href="item.url">{{ item.title }}</a>
      {{ item.url }}
    </li>
  </div>
</template>

<script>
  export default {
    props: ['item']
  }
</script>
