<template>
    <div class="container">
        <section>
            <h2>History</h2>
        </section>
        <footer>
            <h3>Footer</h3>
        </footer>
    </div>
</template>
<script>
export default {
  name: 'Main'  
}
</script>

<style scoped>
    .container {
        margin-left: 356px;
        max-width: 768px;
        min-height: 100vh;    
        display: flex;    
        flex-direction: column;
    }
    section {
        height: 800px;
    }    
</style>