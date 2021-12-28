<template>
    <v-container>
        <h2>{{ "VR" }}</h2>
        <v-card-title @click="whatIsVr = !whatIsVr" class="title">{{ "What is VR" }}</v-card-title>
        <v-expand-transition>
            <v-card-text
                v-if="whatIsVr"
                class="text"
            >{{ "Virtual reality (VR) is a simulated experience that can be similar to or completely different from the real world. Applications of virtual reality include entertainment (particularly video games), education (such as medical or military training) and business (such as virtual meetings)." }}</v-card-text>
        </v-expand-transition>
        <v-card-title
            @click="playingVr = !playingVr"
            class="title"
        >{{ "How playing VR Games does feel like?" }}</v-card-title>
        <v-card-text
            v-if="playingVr"
            class="text"
        >{{ "Since the world around you turns every time you move your head, you feel like you're “in the game” mentally and physically. In other words, you feel like you're part of another universe." }}</v-card-text>
        <h2>{{ "Our equipment" }}</h2>
        <v-card-title @click="equipment = !equipment" class="title">{{ "Number of stands" }}</v-card-title>
        <v-card-text
            v-if="equipment"
            class="text"
        >{{ "At the moment, we have one stand. In the future, we want to expand our salon with new ones." }}</v-card-text>
        <v-card-title @click="gear = !gear" class="title">{{ "VR Set" }}</v-card-title>
        <v-card-text
            class="text"
            v-if="gear"
        >{{ "Our stand is equipped with Vr Vive because we believe that it is the best available equipment on the market." }}</v-card-text>
    </v-container>
</template>

<script>
export default {
    data() {
        return {
            whatIsVr: false,
            playingVr: false,
            equipment: false,
            gear: false
        }
    }

}
</script>
<style lang="scss" scoped>
.text {
    font-style: italic;
}
.title {
    color: blueviolet;
    margin-bottom: 1rem;
}
.title:hover {
    cursor: pointer;
}
</style>
