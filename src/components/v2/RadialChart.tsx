import {
    PolarAngleAxis,
    RadialBar,
    RadialBarChart,
    ResponsiveContainer,
} from "recharts";

type RadialChartProps = {
    value: number;
};

const RadialChart = ({ value }: RadialChartProps) => {
    const getFillColor = (value: number) => {
        if (value >= 75) {
            return "#FF8042";
        } else if (value >= 50) {
            return "#FFBB28";
        } else {
            return "#00C49F";
        }
    };

    const fill = getFillColor(value);

    const data = [
        {
            value,
            fill,
        },
    ];
    const startAngle = 180;
    const endAngle = 0;

    return (
        <ResponsiveContainer height={400} width="100%">
            <>
                <RadialBarChart
                    width={500}
                    height={300}
                    innerRadius={150}
                    outerRadius={140}
                    barSize={40}
                    data={data}
                    startAngle={startAngle}
                    endAngle={endAngle}
                >
                    <PolarAngleAxis
                        tick={false}
                        axisLine={false}
                        type="number"
                        domain={[0, 100]}
                        angleAxisId={0}
                    />
                    <RadialBar
                        cornerRadius={10}
                        animationBegin={50}
                        animationDuration={1000}
                        animationEasing="ease-in"
                        background
                        legendType="circle"
                        dataKey="value"
                    />
                </RadialBarChart>
            </>
        </ResponsiveContainer>
    );
};

export default RadialChart;
