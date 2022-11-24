<template>
    <div class="">
        <h2>User List</h2>
        <table v-if="loading==false" class="table table-striped table-bordered">
            <tbody>
                <tr v-for="user in users" :key="user.id">
                    <td>
                        {{user.name}}
                    </td>
                    <td>{{user.email}}</td>
                </tr>
            </tbody>
        </table>
        <div v-else>Loading</div>
        <ul>
            <li v-for="page in 10" :key="page"
            @click="changePage(page)"
            >{{page}}</li>
        </ul>
    </div>
</template>
<script>
import { mapActions,mapState } from 'vuex';

export default {
    
    mounted() {
        this.getUsers()
    },
    methods : {
        ...mapActions(['getUsers','changePage'])
    },
    computed : {
        ...mapState(['users','loading','page'])
    },
    watch: {
        page() {
            this.getUsers();
        }
    }
}
</script>
<style scoped></style>