<template>
    <v-timeline dense>
        <v-timeline-item v-for="(item, i) in filteredSessions" :key="i">
            <v-card>
                <div class="py-1 pl-4 pr-2">
                    {{ "od " + item.start.hour + ":" + item.start.minutes + " do " + item.end.hour + ":" + item.end.minutes }}
                    <v-btn
                        icon
                        v-bind:class="{ active: item.chosen }"
                        class="ml-1"
                        @click="item.chosen = !item.chosen"
                    >
                        <v-icon color="primary">mdi-check-circle</v-icon>
                    </v-btn>
                </div>
            </v-card>
        </v-timeline-item>
        <v-btn color="secondary" @click="$emit('hourChosen', filteredChosenSessions)">emit</v-btn>
    </v-timeline>
</template>

<script>
export default {
    name: 'Timeline',
    data() {
        return {
            sessions: [],
        }
    },
    props: {
        config: Object,
        reserved: Array,
        chosenDay: String,
    },
    computed: {
        filteredSessions() {
            return this.sessions.filter(session => {
                return !this.chosenDayReservations.some(reservation => {
                    return reservation.startHour == session.start.hour
                })
            })
        },
        chosenDayReservations() {
            return this.reserved
                .filter(x => x.day == this.chosenDay)
                .map(x => x.hour)
        },
        filteredChosenSessions() {
            return this.sessions.filter(x => x.chosen)
        },
    },
    methods: {
        format(number) {
            return String(number).padStart(2, "0")

        },
        policz(czasSesji, przerwa, start, end) {
            let startMin = start * 60
            let endMin = end * 60

            for (let i = startMin; i + czasSesji <= endMin; i += czasSesji + przerwa) {
                let endOfSession = i + czasSesji
                this.sessions.push({
                    start: {
                        hour: this.format(Math.floor(i / 60)),
                        minutes: this.format(i % 60),
                    },
                    end: {
                        hour: this.format(Math.floor(endOfSession / 60)),
                        minutes: this.format(endOfSession % 60)
                    },
                    chosen: false
                })
            }
            return this.sessions
        },
    },
    created() {
        this.policz(this.config.sesja, this.config.przerwa, this.config.start, this.config.end)
    },

}
</script>

<style lang="scss" scoped>
.active {
    border: 1px solid var(--v-accent-lighten2);
}
.timeline {
    max-height: 50vh;
}
</style>