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
  function changedata(e,id){
    var virtualdata = data
    virtualdata[id] = e.target.value
    setdata(virtualdata)
    console.log(data)
  }
  function ApplyChanges(){
    var graph = graphtype
    console.log(graph)
    setgraphType(graph)
  }
  /*　グラフのオプション等を表示 */
  var graphData= {
    type: [
      "line",
    ],
    labels: [
      // 軸ラベル
      // 各ラベルを配列にすることで軸ラベルが改行されて表示される
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jly",
    ],
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
            <input placeholder={data[0]} onChange={(e) => changedata(e,0)}>{}</input>
            <input placeholder={data[1]} onChange={(e) => changedata(e,1)}></input>
            <input placeholder={data[0]} onChange={(e) => changedata(e,2)}>{}</input>
            <input placeholder={data[1]} onChange={(e) => changedata(e,3)}>{}</input>
            <input placeholder={data[0]} onChange={(e) => changedata(e,4)}>{}</input>
            <input placeholder={data[1]} onChange={(e) => changedata(e,5)}>{}</input>
            <input placeholder={data[0]} onChange={(e) => changedata(e,6)}>{}</input>
            <input placeholder={data[1]} onChange={(e) => changedata(e,7)}>{}</input>
          <h2>Graphtype</h2>
          <Select id="graphtype" onChange={(e) => {setgraphType(e.target.value)}}>
                  <MenuItem value="bar">bar</MenuItem>
                  <MenuItem value="line">line</MenuItem>
                  <MenuItem value="pie">pie</MenuItem>
            </Select>
        </div>
        <Chart datasetIdKey='key' className='bar' id="canvas" type={graphtype} data={graphData} redraw ></Chart>
        <Button variant='contained' id="download" onClick={(e) => {download()}}>download</Button></div>
        
      </body>
    </div>
  );
}

export default App;
