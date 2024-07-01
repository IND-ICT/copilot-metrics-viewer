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
            { m: 'Jun', count: 144 },
            { m: 'Jul', count: 184 },
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
            { m: 'Apr', count: 100 },
            { m: 'May', count: 100 },
            { m: 'Jun', count: 164 },
            { m: 'Jul', count: 184 },
            { m: 'Aug', count: 214 },
            { m: 'Sep', count: 234 },
            { m: 'Oct', count: 234 },
            { m: 'Nov', count: 234 },
            { m: 'Dec', count: 234 },
        ];

        const data_enel = [
            { m: 'Jan', count: 192 },
            { m: 'Feb', count: 192 },
            { m: 'Mar', count: 192 },
            { m: 'Apr', count: 194 },
            { m: 'May', count: 194 },
            { m: 'Jun', count: 230 },
            { m: 'Jul', count: 258 },
            { m: 'Aug', count: 268 },
            { m: 'Sep', count: 268 },
            { m: 'Oct', count: 283 },
            { m: 'Nov', count: 303 },
            { m: 'Dec', count: 323 },
        ];

        const data_adoption_ict = [
            { m: 'Jan', count: 80 },
            { m: 'Feb', count: 80 },
            { m: 'Mar', count: 88 },
            { m: 'Apr', count: 96 },
            { m: 'May', count: 116 },
            { m: 'Jun', count: 130 },
            { m: 'Jul', count: 150 },
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