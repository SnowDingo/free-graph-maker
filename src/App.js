import { Chart } from 'react-chartjs-2';
import './App.css';
import { useState } from 'react';
function App() {
  const [graphtype,setgraphType] = useState("bar")
  const [data,setdata] = useState([5,5])
  function changedata(e,id){
    var virtualdata = data
    virtualdata[id] = e.target.value
    setdata(virtualdata)
    console.log(data)
  }
  function ApplyChanges(){
    var graph = graphtype
    console.log(graph)
    setgraphType("line")
  }
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
        <h1>FreeGraphMaker</h1>
        <div className='options'>
          <h2>ChartContext</h2>
          <input placeholder={data[0]} onChange={(e) => changedata(e,0)}></input>
          <input placeholder={data[1]} onChange={(e) => changedata(e,1)}>{}</input>
          <button onClick={(e) => {ApplyChanges()}}>Apply Changes</button>
          <h2>Graphtype</h2>
          <select id="graphtype" onChange={(e) => {setgraphType(e.target.value)}}>
                  <option value="bar">bar</option>
                  <option value="line">line</option>
                  <option value="pie">pie</option>
            </select>
        </div>
        <Chart className='bar' type={graphtype} data={graphData} redraw ></Chart>
      </body>
    </div>
  );
}

export default App;
