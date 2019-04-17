<template>
    <div class="container" > 
        <b-navbar toggleable type="light" variant="light">
            <b-navbar-toggle target="nav_text_collapse" />
            <b-navbar-brand>list bar</b-navbar-brand>
            <b-collapse is-nav id="nav_text_collapse">
                <b-navbar-nav>
                    <b-nav-text>Navbar text</b-nav-text>
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>

        <div>
            <b-card
                title="Card Title"
                img-src="https://picsum.photos/600/300/?image=25"
                img-alt="Image"
                img-top
                tag="article"
                style="max-width: 20rem;"
                class="mb-2"
            >
                <b-card-text>
                    card_text
                    {{krusher}}
                </b-card-text>
                <b-button href="#" variant="primary">Go somewhere</b-button>
            </b-card>
        </div>

        <div>
            <b-button variant="outline-primary" @click.prevent="logoutWithFirebase">로그아웃</b-button>
        </div>
    </div>
</template>

<script>
import dust_list from '../assets/data.json'

export default {
    data(){
        return{
             air_list: [],
             krusher : "범중이222",
        };
    },
    methods:{
        getAir(){
            console.log("GetAir의 값",dust_list);
            this.air_list = dust_list;
        },
        getGeolocation() {
            navigator.geolocation.getCurrentPosition(position =>
                console.log("posistion의 값" ,position)
            );
        },
        logData() {
            console.log("logData의 값 ",dust_list);
        },
        logoutWithFirebase(){
            this.$router.push("/login");
        },   
    },
    created: function() {
        this.getAir();
        this.getGeolocation();
        this.logData();
    }    
}
</script>

<style>

</style>
