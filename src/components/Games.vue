<template>
    <v-container class="karta">
        <v-card v-for=" item in games" :key="item.title">
            <v-img
                :src="item.src"
                class="foto"
                gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                max-height="150"
                @click="item.active == !item.active"
            >
                <v-card-title v-text="item.title"></v-card-title>
                <v-card-text v-text="item.active"></v-card-text>
            </v-img>
        </v-card>
    </v-container>
</template>

<script>
export default {
    data() {
        return {
            games: [
                {
                    title: "Astro Bot: Rescue Mission",
                    src: "https://picsum.photos/210/300?random",
                    active: false
                }, {
                    title: "Firewall Zero Hour",
                    src: "https://picsum.photos/210/165?random",
                    active: false
                }, {
                    title: "Tetris Effect",
                    src: "https://picsum.photos/210/165?random",
                    active: false
                }, {
                    title: "Resident Evil 7",
                    src: "https://picsum.photos/210/165?random",
                    active: false
                }, {
                    title: "Fairpoint",
                    src: "https://picsum.photos/210/165?random",
                    active: false
                }, {
                    title: "Gran Turismo",
                    src: "https://picsum.photos/210/165?random",
                    active: false
                }, {
                    title: "Moss",
                    src: "https://picsum.photos/210/165?random",
                    active: false
                }, {
                    title: "Superhot",
                    src: "https://picsum.photos/210/165?random",
                    active: false
                },

            ]

        }
    }

}
</script>

<style lang="scss" scoped>
.karta {
    display: flex;
    flex-wrap: wrap;
    align-items: stretch;
    justify-content: center;
}
.foto:hover {
    opacity: 1;
}
.foto {
    opacity: 0.5;
    margin: 1rem 1rem 1rem 1rem;
}
</style>