<template>
    <v-main class="p-1" style="min-height: 300px;">
        <v-container style="min-height: 300px;" class="px-4 elevation-2">

            <h2>Adoption</h2>
            <Line :data="AdoptionChartData" :options="chartOptions" />

        </v-container>
    </v-main>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { Line } from 'vue-chartjs'
import {
    Chart as ChartJS,
    ArcElement,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    BarElement,
    Title,
    Tooltip,
    Legend,
    Filler
} from 'chart.js'

ChartJS.register(
    ArcElement,
    CategoryScale,
    LinearScale,
    BarElement,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
)

import createLinearGradient from '../plugins/chartUtils';

export default defineComponent({
    name: 'CopilotChatViewer',
    props: {
        metrics: {
            type: Object,
            required: true
        }
    },
    components: {
        Line
    },
    setup(props) {

        const chartOptions = {
            responsive: true,
            maintainAspectRatio: true,
            height: 300,
            width: 300,
            layout: {
                padding: {
                    left: 150,
                    right: 150,
                    top: 20,
                    bottom: 40
                }
            },

            elements: {
                point: {
                    radius: 0,
                    hitRadius: 5,
                    hoverRadius: 5
                },
            },
            scales: {
                y: {
                    min: 0,
                    max: 500,
                    /* grid:{
                      display:false
                    } */
                },
                x: {
                    grid: {
                        display: false
                    }
                }
            }
        };

        //Total Number Acceptances And Turns
        const AdoptionChartData = ref<{ labels: string[]; datasets: any[] }>({ labels: [], datasets: [] });

        const data_ind = [
            { m: 'Jan', count: 86 },
            { m: 'Feb', count: 86 },
            { m: 'Mar', count: 86 },
            { m: 'Apr', count: 88 },
            { m: 'May', count: 88 },
            { m: 'Jun', count: 214 },
            { m: 'Jul', count: 214 },
            { m: 'Aug', count: 214 },
            { m: 'Sep', count: 214 },
            { m: 'Oct', count: 214 },
            { m: 'Nov', count: 214 },
            { m: 'Dec', count: 214 },
        ];

        const data_ind2 = [
            { m: 'Jan', count: 86 },
            { m: 'Feb', count: 86 },
            { m: 'Mar', count: 86 },
            { m: 'Apr', count: 88 },
            { m: 'May', count: 88 },
            { m: 'Jun', count: 214 },
            { m: 'Jul', count: 214 },
            { m: 'Aug', count: 214 },
            { m: 'Sep', count: 234 },
            { m: 'Oct', count: 234 },
            { m: 'Nov', count: 234 },
            { m: 'Dec', count: 234 },
        ];

        const data_enel = [
            { m: 'Jan', count: 200 },
            { m: 'Feb', count: 200 },
            { m: 'Mar', count: 200 },
            { m: 'Apr', count: 200 },
            { m: 'May', count: 200 },
            { m: 'Jun', count: 300 },
            { m: 'Jul', count: 350 },
            { m: 'Aug', count: 350 },
            { m: 'Sep', count: 350 },
            { m: 'Oct', count: 400 },
            { m: 'Nov', count: 400 },
            { m: 'Dec', count: 400 },
        ];

        const data_adoption_ict = [
            { m: 'Jan', count: 120 },
            { m: 'Feb', count: 120 },
            { m: 'Mar', count: 120 },
            { m: 'Apr', count: 88 },
            { m: 'May', count: 88 },
            { m: 'Jun', count: 95 },
            { m: 'Jul', count: 116 },
            { m: 'Aug', count: 180 },
            { m: 'Sep', count: 200 },
            { m: 'Oct', count: 200 },
            { m: 'Nov', count: 200 },
            { m: 'Dec', count: 200 },
        ];

        AdoptionChartData.value = {
            labels: data_ind.map(row => row.m),
            datasets: [
                {
                    label: 'IND Copilot Adoption by month (2024)',
                    data: data_adoption_ict.map(row => row.count),
                    fill: true,
                    backgroundColor: (context: any) => createLinearGradient(context, '#2233FF', '#3344FF'),
                    borderColor: 'transparent',
                    pointBackgroundColor: '#FFFFFF',
                    pointBorderColor: '#FFFFFF',
                    lineTension: 0.2,
                },
                {
                    label: 'IND Copilot Invitations by month (2024)',
                    data: data_ind.map(row => row.count),
                    fill: true,
                    backgroundColor: (context: any) => createLinearGradient(context, '#5555FF', '#9787FF'),
                    borderColor: 'transparent',
                    pointBackgroundColor: '#FFFFFF',
                    pointBorderColor: '#FFFFFF',
                    lineTension: 0.2,
                },
                {
                    label: 'Enel Copilot Invitations by month (2024)',
                    data: data_enel.map(row => row.count),
                    fill: true,
                    backgroundColor: (context: any) => createLinearGradient(context, '#FF55B8', '#FF8787'),
                    borderColor: 'transparent',
                    pointBackgroundColor: '#FFFFFF',
                    pointBorderColor: '#FFFFFF',
                    lineTension: 0.2,
                }]
        };

        return { AdoptionChartData, chartOptions };
    }
});

</script>

<style scoped>
.tiles-container {
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
}
</style>