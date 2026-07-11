<template>
  <div style="display: flex; flex-direction: column; align-items: center; margin-top: 20px;">
    <span>PLA Premium 1,75mm - F3D</span>
    <span>Filamento de alta qualidade para impressão 3D</span>
    <span>Fabricante: F3D</span>
    <span>Diâmetro: 1,75mm</span>
    <span>Peso: 1kg</span>    
    <span>Cor: {{ cor }}</span>
    <span>Temperatura Do Bico: 205-230°C</span>
    <span>Temperatura Da Mesa: 50-65°C</span>
    <span>Velocidade impressão: 20-70mm/s</span>

    <span>Configuração Aprovada</span>
    <span>Temperatura Do Bico: 210°C</span>
    <span>Temperatura Da Mesa: 60°C</span>
  </div>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      userId: null,
      cor: ''
    }
  },
  components: {
  },
  created() {
    const urlParams = new URLSearchParams(window.location.search);
    this.userId = urlParams.get('id');//?id=123
    if (this.userId === '04:4E:AA:7B:C3:2A:81') {
      this.cor = 'Preto'
    }else {
      this.cor = 'Desconhecida'
    }/* else if (this.userId === '04:4E:AA:7B:C3:2A:81') {
      this.cor = 'Branco'
    } else if (this.userId === '04:4E:AA:7B:C3:2A:81') {
      this.cor = 'Vermelho'
    } else if (this.userId === '04:4E:AA:7B:C3:2A:81') {
      this.cor = 'Azul'
    } else if (this.userId === '04:4E:AA:7B:C3:2A:81') {
      this.cor = 'Verde'
    } else {
      this.cor = 'Desconhecida'
    }*/
    //alert(`ID: ${this.userId}`);
  },
}
</script>
