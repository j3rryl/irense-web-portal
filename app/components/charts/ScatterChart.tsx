import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend, Label } from 'recharts';

const data01 = [
    { category: 'Absent', x: 100, y: 200, z: 200 },
    { category: 'Mild', x: 120, y: 100, z: 260 },
    { category: 'Moderate', x: 170, y: 300, z: 400 },
    { category: 'Severe', x: 140, y: 250, z: 280 },
    { category: 'Proliferative', x: 150, y: 400, z: 500 },
    { category: 'Mild', x: 110, y: 280, z: 200 },
    { category: 'Mild',  x: 300, y: 300, z: 200 },
    { category: 'Mild',  x: 400, y: 500, z: 260 },
    { category: 'Mild',  x: 200, y: 700, z: 400 },
    { category: 'Mild',  x: 340, y: 350, z: 280 },
    { category: 'Mild',  x: 560, y: 500, z: 500 },
    { category: 'Mild',  x: 230, y: 780, z: 200 },
    { category: 'Mild',  x: 500, y: 400, z: 200 },
    { category: 'Mild',  x: 300, y: 500, z: 260 },
    { category: 'Mild',  x: 240, y: 300, z: 400 },
    { category: 'Mild',  x: 320, y: 550, z: 280 },
    { category: 'Mild',  x: 500, y: 400, z: 500 },
    { category: 'Mild',  x: 420, y: 280, z: 200 },
  ];


export default function ScatterChartComponent() {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <ScatterChart
          margin={{
            top: 20,
            right: 20,
            bottom: 20,
            left: 20,
          }}
        >
          <CartesianGrid />
          <XAxis type="number" dataKey="x" name='X-axis' fontSize={13}/>
          <YAxis type="number" 
          fontSize={13}
          dataKey="y" 
          name='Y-axis' 
          label={{ value: 'No. of Cases', angle: -90, position: 'insideLeft', fontSize:12 }}/>
          
          <Tooltip cursor={{ strokeDasharray: '3 3' }} />
          <Scatter name="Cases" data={data01} fill="#32887c" />
          <Legend />
        </ScatterChart>
      </ResponsiveContainer>
    );
}
