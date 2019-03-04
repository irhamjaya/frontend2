import React, { Component } from 'react';
import './App.css' 
import axios from 'axios';

class App extends Component {
  constructor(){
    super();
    this.state={
    chelsea:'',klub:[]}
    }
klik(){
  this.setState({nama:this.refs.nama.value});
}
klik2(){
  var input=this.state.nama;
  axios.get('https://www.thesportsdb.com/api/v1/json/1/searchplayers.php?t='+input).then((ambilData)=>{
    console.log(ambilData.data.player);
    this.setState({
      klub:ambilData.data.player,
    })
  })
};
 
 render() {
   
const data =this.state.klub.map((val,index)=>{
    var foto = val.strThumb;
     var deskripsi = val.strDescriptionEN;
     var nama = val.strPlayer;
     var posisi = val.strPosition;
     return <div className="row"> <div className ="col-xs-12 col-lg-12">
     <div className="panel panel-primary">
     <div className="panel-heading">
     <h2><b>{nama}  ({posisi})</b></h2>
     </div>
     <div className="panel-body">
     <div className="col-lg-4">
     <img src={foto} alt="ok"/>
     </div>
     
     </div>
     <div className="col-lg-12 deskrip"><h3>{deskripsi}</h3>
     </div>
     </div>
     </div></div>

    }) 


 return (
  <div className="container">
  <center>
    <h1>Daftar Pemain {this.state.nama}</h1>
    <div className="row">
      <div className="col-md-8">
        <input className="form-control" ref="nama" type="text" onInput={()=>{this.klik();}}/>
      </div>
      <div className="col-md-4">
        <button type="submit" className="btn btn-primary btn-block" onClick={()=>{this.klik2();}}>Lihat Daftar</button>
      </div>
    </div>
  </center>
  <br/>
  {data}
</div>
 
 );
 }
}
export default App;