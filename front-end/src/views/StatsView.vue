<template>
    <div id="stats">
        <div id="trackers">
            <StatContainer v-for="stat in this.$store.state.stats.trackers" :stat="stat" />
        </div>
        <StatsChart />
    </div>
</template>

<script>
import StatsChart from '@/components/StatsChart.vue';
import StatContainer from '@/components/StatCointainer.vue';

export default {
    components: {
        StatsChart,
        StatContainer,
    },
}
</script>

<style>
    #stats {
        display: flex;
        flex-direction: column;
    }

    #trackers {
        display: flex;
        justify-content: space-between;
        width: 90%;
        margin-left: auto;
        margin-right: auto;
    }
</style>