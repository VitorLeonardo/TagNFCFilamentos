<template>
  <div style="display: flex; flex-direction: column; align-items: center; margin-top: 20px;">
    <span v-for="(atributo, index) in atributos" :key="index">
      <div v-for="(valor, chave) in atributo" :key="chave">
        <strong v-if="chave==='titulo'">{{ upercaseAllWords(replaceUnderscoresWithSpaces(valor)) }}</strong>
        <strong v-if="chave!=='pular' && chave!=='titulo'">{{ upercaseAllWords(replaceUnderscoresWithSpaces(chave)) }}:</strong> <span v-if="chave!=='pular' && chave!=='titulo'">{{ upercaseAllWords(replaceUnderscoresWithSpaces(valor)) }}</span>
      </div>
    </span>
  </div>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      atributos: []
    }
  },
  components: {
  },
  created() {
    const urlParams = new URLSearchParams(window.location.search);
    this.atributos.push(Object.fromEntries(urlParams.entries()))
  },
  methods: {
    replaceUnderscoresWithSpaces(str) {
      return str.replace(/_/g, ' ');
    },
    upercaseAllWords(str) {
      return str.replace(/(^\p{L}|\s\p{L})/gu, char => char.toUpperCase());
    },
  }
}
</script>
