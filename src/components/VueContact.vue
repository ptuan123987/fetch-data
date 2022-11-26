<template>
    <div class="">
        Liên hệ với với Phan Văn Tuấn
        {{name}}
    </div>
    <nav>
        <router-link :to="{name:'service'}">Service</router-link>
     </nav>
     <router-view/>
     <button @click.prevent="login">Login</button>
</template>
<script>
    export default {
        props :['name'],
        mounted() {
            
        },
        methods : {
            login() {
                this.$router.push({name:'user'})
            }
        }
    }
</script>
<style scoped></style>