<template>
    <v-card class="karta">
        <v-card v-for=" item in games" :key="item.title" elevation="5">
            <v-img
                :src="item.src"
                class="foto align-end"
                gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,1)"
                height="150"
                width="240"
                @click="about = item.opis; dialog = true; genre = item.genre"
            >
                <v-card-title v-text="item.title" class="game-title"></v-card-title>
                <v-card-subtitle v-text="item.genre" class="game-subtitle"></v-card-subtitle>
            </v-img>
        </v-card>
        <v-dialog v-model="dialog" max-width="500">
            <v-card class="dialog">{{ about }}</v-card>
            <v-btn @click="dialog = false">
                <v-icon @click="dialog = false">mdi-close</v-icon>
            </v-btn>
        </v-dialog>
    </v-card>
</template>

<script>
export default {
    data() {
        return {
            dialog: false,
            games: [
                {
                    title: "Astro Bot: Rescue Mission",
                    src: "/res/astrobot.jpg",
                    genre: "Platform game",
                    opis: "Astro Bot Rescue Mission is a platform video game developed by Japan Studio's Asobi Team division and published by Sony Interactive Entertainment for the PlayStation 4's PlayStation VR (PSVR) headset. It stars a cast of robot characters introduced in The Playroom, where they appeared as robots that lived inside of the DualShock 4 controller. The player teams up with Captain Astro and goes on a quest to rescue his lost crew scattered across 5 worlds and 20 levels. In total, there are 213 Bots to rescue. In a VR space, the player uses their body to lean and see past obstacles or headbutt parts of the scenery. The DualShock 4 controller is used to control Astro, but exists within the VR space as a virtual gadget to help Astro on his way. The game counts 20 stages, 6 bosses, 26 challenge stages, and a collection room on board the Astro Ship."
                }, {
                    title: "Firewall Zero Hour",
                    src: "/res/firewall.jpg",
                    genre: "Fps",
                    opis: "Choose from one of 12 contractors hired by anonymous contract handlers and work as a team to either protect or obtain valuable data, housed on a laptop and located in dangerous locations around the globe."
                }, {
                    title: "Tetris Effect",
                    src: "/res/tetris.jpg",
                    genre: "Puzzle",
                    opis: "Named after a real-world phenomenon where players' brains are so engrossed that images of the iconic falling Tetrimino blocks (i.e. the Tetris playing pieces) linger in their vision, thoughts, and even dreams, Tetris Effect amplifies this magical feeling of total immersion by surrounding you with fantastic, fully three-dimensional worlds that react and evolve based on how you play. Music, backgrounds, sounds, special effects -- everything, down to the Tetris pieces themselves, pulse, dance, shimmer, and explode in perfect sync with how you're playing."
                }, {
                    title: "Resident Evil 7",
                    src: "/res/evil 7.jpg",
                    genre: "Survival horror",
                    opis: "Fear and isolation seep through the walls of an abandoned southern farmhouse. 7 marks a new beginning for survival horror with the Isolated View of the visceral new first-person perspective. Powered by the RE Engine, horror reaches incredible heights of immersion as players enter a terrifyingly new world of fear as they fight to survive"
                }, {
                    title: "Fairpoint",
                    src: "/res/fairpoint.jpg",
                    genre: "FPS",
                    opis: "Set off on a perilous journey into a hostile alien environment in Farpoint, exclusive to PS VR. Having found yourself stranded on an uncharted extra-terrestrial world with only standard issue equipment to keep you alive, youll need to set off in search of a crashed space station The Pilgrim and its survivors to find a way back home. Master an arsenal of primary and secondary weapons as you freely explore your surroundings, uncovering secrets of the strange Anomaly which marooned you. Farpoint is built from the ground-up for PlayStation VR and using the PlayStation VR Aim youll be able to directly interact with the digital world."
                }, {
                    title: "Gran Turismo",
                    src: "/res/gran turismo.jpg",
                    genre: "Simracing",
                    opis: "Drive only the fastest, and most sought after cars in the world 137 of the best cars in the world have made the cut, from Vision Gran Turismo concept vehicles and GT SPORT exclusive prototypes to the best in real world motoring."
                }, {
                    title: "Moss",
                    src: "/res/moss.jpg",
                    genre: "Adventure game",
                    opis: "While in a library, the reader finds an old book. As they flip through pages, the reader is transported to a fantasy land contained within the book. The reader meets Quill, a young mouse, and begins an adventure. The kingdom where Quill lives has been overthrown by Sarffog, a fire-breathing snake. After Quill's uncle is captured, the reader guides Quill on an adventure to defeat Sarffog and save her uncle."
                }, {
                    title: "Superhot",
                    src: "/res/superhot.jpg",
                    genre: "FPS",
                    opis: "After years of experiments and iterations, the team behind the critically acclaimed, violently beautiful time-bending shooter SUPERHOT is ready to unveil it’s newest creation. SUPERHOT VR is a title reimagined and redesigned from the ground up for VR and hand tracking controllers."
                },
                {
                    title: "Pavlov VR",
                    src: "/res/pavlov.jpg",
                    genre: "Fps",
                    opis: "Pavlov vr is a multiplayer shooter in VR with heavy focus on community features. Realistic reloading features and fast paced combat as part of the core experience."
                }

            ],
            about: "Choose the game to see a description"

        };
    },


}
</script>

<style lang="scss" scoped>
.karta {
    display: flex;
    gap: 1rem;
    padding: 1rem;
    flex-wrap: wrap;
    align-items: stretch;
    justify-content: center;
    max-width: fit-content !important;
    font-size: 90%;
}
.dialog {
    padding: 2rem;
}
.foto:hover {
    filter: brightness(1.2);
    cursor: pointer;
}

.game-title {
    font-size: 1.0625rem;
    text-shadow: 0 0 15px #000;
}
.game-subtitle {
    font-size: 0.75rem;
    text-shadow: 0 0 15px #000;
}
</style>