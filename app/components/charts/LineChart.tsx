import { LineChart, Line, XAxis, YAxis, CartesianGrid, Legend, ResponsiveContainer, Tooltip } from 'recharts';

const data = [
  {
    name: 'Absent',
    Tests: 4000,
    Cases: 2400,
    amt: 2400,
  },
  {
    name: 'Mild',
    Tests: 3000,
    Cases: 1398,
    amt: 2210,
  },
  {
    name: 'Moderate',
    Tests: 2000,
    Cases: 9800,
    amt: 2290,
  },
  {
    name: 'Severe',
    Tests: 2780,
    Cases: 3908,
    amt: 2000,
  },
  {
    name: 'Proliferative',
    Tests: 1890,
    Cases: 4800,
    amt: 2181,
  },
];

export default function LineChartComponent() {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" fontSize={12} />
          <YAxis 
          label={{ value: 'No. of Cases', angle: -90, position: 'insideLeft', fontSize:12 }} fontSize={13}/>
          <Tooltip/>
          <Legend />
          <Line type="monotone" dataKey="Cases" stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="Tests" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
    );
  }
