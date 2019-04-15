<template>
    <div>
        main
        <div>
            <b-button variant="outline-primary" @click.prevent="logoutWithFirebase">로그아웃</b-button>
        </div>
    </div>
</template>

<script>
export default {
    methods:{
        logoutWithFirebase(){
            this.$router.push("/login");
        },
    }
}
</script>

<style>

</style>
