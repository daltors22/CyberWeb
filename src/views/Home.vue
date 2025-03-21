<template>
    <div class="container">
      <h1 class="mt-5">Bienvenue sur CyberWeb</h1>
      <p>Ceci est la page d'accueil.</p>
      <router-link to="/standard" class="btn btn-primary me-2">Utilisateur Standard</router-link>
      <router-link to="/pro" class="btn btn-secondary">Pro</router-link>
    </div>
</template>
  
<script>
  export default {
    name: 'Home'
  }
</script>

<style scoped>
</style>