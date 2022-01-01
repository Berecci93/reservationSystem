<template >
    <v-container>
        <div>
            <v-timeline dense class="timeline">
                <v-timeline-item v-for="(item, i) in filteredSessions" :key="i">
                    <v-card>
                        <v-btn
                            block
                            v-bind:class="{ active: item.chosen }"
                            @click="item.chosen = !item.chosen"
                        >{{ "od " + item.start.hour + ":" + item.start.minutes + " do " + item.end.hour + ":" + item.end.minutes }}</v-btn>
                    </v-card>
                </v-timeline-item>
            </v-timeline>
        </div>

        <div class="mt-4">
            <v-btn
                color="secondary"
                @click="$emit('hourChosen', filteredChosenSessions), $emit('priceAmount', priceAmount)"
            >Next</v-btn>
        </div>
    </v-container>
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
                    return reservation.start.hour == session.start.hour
                })
            })
        },
        chosenDayReservations() {
            return this.reserved
                .filter(x => x.day == this.chosenDay)
                .flatMap(x => x.hour)
        },
        filteredChosenSessions() {
            return this.sessions.filter(x => x.chosen)
        },
        //ilosc sesji * stawka
        priceAmount() {
            return this.filteredChosenSessions.length * this.config.price
        }

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
        this.policz(this.config.sessionLength, this.config.breakLength, this.config.start, this.config.end)
    },

}
</script>

<style lang="scss" scoped>
.active {
    border: 2px solid var(--v-primary-base);
}
.timeline {
    max-height: 50vh;
    overflow-y: auto;
}
</style>
<style lang="scss">
.v-timeline-item__body > .v-card:after {
    border-right-color: #272727 !important;
}
</style>