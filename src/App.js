import './App.css';
import { useState } from 'react';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from "chart.js";
import { Chart } from "react-chartjs-2";
import { AppBar, Button, MenuItem, Select } from '@mui/material';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
function download(){
  var canvas = document.getElementById("canvas")
  var link = document.createElement("a");
  link.href = canvas.toDataURL("image/png");
  link.download = "graph.png";
  link.click();
}
function App() {
  const [graphtype,setgraphType] = useState("bar")
  const [data,setdata] = useState([102,92,54,83,132,81,9])
  const [labels,setLabels] = useState(["Jan","Feb","Mar","Apr","May","Jun","Jly",])
  function changedata(e,id){
    var virtualdata = data
    virtualdata[id] = e.target.value
    setdata([...virtualdata])
  }
  /* ラベルを変更する関数 */
  function changelabel(e,id){
    var virtuallabel = labels
    virtuallabel[id] = e.target.value
    setLabels([...virtuallabel])
  }
  /*　グラフのオプション等を表示 */
  var graphData= {
    type: [
      "line",
    ],
    labels: labels,
    options: {
      plugins: {
        customCanvasBackgroundColor: {
          color: 'white',
        }
      }
    },
    datasets: [
      // 表示するデータセット
      {
        data: data,
        label:'cookies sold',
      },
    ],
  };
  
  return (
    <div className="App">
      <body>
        <AppBar><h1>FreeGraphMaker</h1></AppBar>
        <div className='content'>
          <div className='options'>
          <h2>Chart Data</h2>
          <div>
            <h3>Labels</h3>
            <input placeholder={labels[0]} onChange={(e) => changelabel(e,0)}></input>
            <input placeholder={labels[1]} onChange={(e) => changelabel(e,1)}>{}</input>
            <input placeholder={labels[2]} onChange={(e) => changelabel(e,2)}>{}</input>
            <input placeholder={labels[3]} onChange={(e) => changelabel(e,3)}>{}</input>
            <input placeholder={labels[4]} onChange={(e) => changelabel(e,4)}>{}</input>
            <input placeholder={labels[5]} onChange={(e) => changelabel(e,5)}>{}</input>
            <input placeholder={labels[6]} onChange={(e) => changelabel(e,6)}>{}</input>
          </div>
          <div className='datas'>
            <h3>Data</h3>
          <input placeholder={data[0]} onChange={(e) => changedata(e,0)}>{}</input>
            <input placeholder={data[1]} onChange={(e) => changedata(e,1)}></input>
            <input placeholder={data[2]} onChange={(e) => changedata(e,2)}>{}</input>
            <input placeholder={data[3]} onChange={(e) => changedata(e,3)}>{}</input>
            <input placeholder={data[4]} onChange={(e) => changedata(e,4)}>{}</input>
            <input placeholder={data[5]} onChange={(e) => changedata(e,5)}>{}</input>
            <input placeholder={data[6]} onChange={(e) => changedata(e,6)}>{}</input>
          </div>
          <h2>Graphtype</h2>
          <Select id="graphtype" onChange={(e) => {setgraphType(e.target.value)}}>
                  <MenuItem value="bar">bar</MenuItem>
                  <MenuItem value="line">line</MenuItem>
                  <MenuItem value="pie">pie</MenuItem>
                  <MenuItem value="doughnut">Doughnut</MenuItem>
            </Select>
        </div>
        <Chart datasetIdKey='key' className='bar' id="canvas" type={graphtype} data={graphData} redraw ></Chart>
        <Button variant='contained' id="download" onClick={(e) => {download()}}>download</Button></div>
        
      </body>
    </div>
  );
}

export default App;
