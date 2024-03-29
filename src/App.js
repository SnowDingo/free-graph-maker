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
import { AppBar, Button, IconButton, MenuItem, Select, Toolbar } from '@mui/material';
import { Add, Delete, Help, Menu } from '@mui/icons-material';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import History from "./VersionHistory"

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
  const [datasetlabel,setDatasetLabel] = useState('our sales')
  /*　データを変更したときにグラフにも変更が及ぶよう変える関数 */
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
  /* データセットの名称を変更する*/
  function changedatasetlabel(e){
    var text = e.target.value
    setDatasetLabel('')
    setDatasetLabel(...text)
  }
  function deletedata(id) {
    var virtualdata = data
    virtualdata.splice(id,1)
    var virtualLabel = labels
    virtualLabel.splice(id,1)
    setdata([...virtualdata])
    setLabels([...virtualLabel])
  }

  function deletelabel(id) {
    var virtualdata = data
    virtualdata.splice(id,1)
    var virtualLabel = labels
    virtualLabel.splice(id,1)
    setdata([...virtualdata])
    setLabels([...virtualLabel])
  }

  function addlabel(){
    var virtualdata = data
    var virtualLabel = labels
    virtualLabel.push("data")
    virtualdata.push(0)
    setdata([...virtualdata])
    setLabels([...virtualLabel])
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
        label:datasetlabel,
      },
    ],
  };
  
  return (
    <div className="App">
      <body>
        <AppBar>
          <h1 className='center'>FreeGraphMaker</h1>
          </AppBar>
        <div className='content'>
          <div className='options'>
          <h2>Chart Data</h2>
          <div>
            <div className='row'>
            <h3>DataLabel</h3>
            </div>
            <div className='labelInputs'>
                <input placeholder='' onChange={(e) => changedatasetlabel(e)}></input>
            </div>
            
          </div>
          <div>
            <div className='row'>
            <h3>Labels</h3>
            <IconButton aria-label="delete" onClick={() => addlabel()}>
                <Add />
            </IconButton>
            </div>
            <div className='labelInputs'>
              {labels.map((todo, index) => (
                  <div className='labelinput'>
                    <input placeholder={labels[index]} onChange={(e) => changelabel(e,index)}>{}</input>
                    <IconButton aria-label="delete" onClick={() => deletelabel(index)}>
                        <Delete />
                      </IconButton>
                      </div>
               ))}
            </div>
            
          </div>
          <div className='datas'>
            <h3>Data</h3>
            <div className='dataInputs'>
               {data.map((todo, index) => (
                 <div className='datainput'>
                 <input placeholder={data[index]} onChange={(e) => changedata(e,index)}>{}</input>
                 <IconButton aria-label="delete" onClick={() => deletedata(index)}>
                    <Delete />
                  </IconButton>
                  </div>
              ))}
            </div>
           
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
        <div className="button">
          <Button variant="contained" className="button" aria-label="add">
            <a className="a" href="/history">Version history</a>
          </Button>
        </div>
      </body>
    </div>
  );
}

export default App;
