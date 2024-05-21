export default function createLinearGradient(context: { chart: any; }, color1: any, color2: any) {
    const chart = context.chart;
    const { ctx, chartArea } = chart;
    if (!chartArea) {
        // This case happens on initial chart load
        return;
    }
    const gradient = ctx.createLinearGradient(0, 0, 0, 500);
    gradient.addColorStop(0, color1);
    gradient.addColorStop(1, color2);
    gradient.opacity = 0.5;
    return gradient;
}