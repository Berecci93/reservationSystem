<template>
    <v-container class="karta">
        <v-card v-for=" item in games" :key="item.title">
            <!-- :src -->
            <v-img
                :src="item.src"
                class="mr-3 mt-3 md-3 ml-3 white--text align-end"
                gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                max-height="150"
            >
                <v-card-title v-text="item.title"></v-card-title>
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
                    src: "https://picsum.photos/210/300?random"
                }, {
                    title: "Firewall Zero Hour",
                    src: "https://picsum.photos/210/165?random"
                }, {
                    title: "Tetris Effect",
                    src: "https://picsum.photos/210/165?random"
                }, {
                    title: "Resident Evil 7",
                    src: "https://picsum.photos/210/165?random"
                }, {
                    title: "Fairpoint",
                    src: "https://picsum.photos/210/165?random"
                }, {
                    title: "Gran Turismo",
                    src: "https://picsum.photos/210/165?random"
                }, {
                    title: "Moss",
                    src: "https://picsum.photos/210/165?random"
                }, {
                    title: "Superhot",
                    src: "https://picsum.photos/210/165?random"
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
</style>