import React, { Component } from 'react'
import { joueur2 } from '../store/action-type'

 class Etat extends Component {
  state={
    joueur1:0 ,
    joueur2:0 ,
    playing: true,
    restarted: null,
    winner:15,
    score:12,
    hero: 39
  }

  handleChange(){
    return this.setState ({joueur1:this.state.joueur1+3})
  }


 nodleChange(){
    return this.setState ({joueur2:this.state.joueur2+3})
  }


  continuePlay(){
    return this.setState ({
        playing: !this.state.playing})
        
  }

  restartPlay(){
    return this.setState ({
        joueur1:this.state.joueur1 = 0 ,
        joueur2:this.state.joueur2 = 0 
        })
  }


    
    render() {
    return (
      <div style={{marginLeft:"40%",marginTop:"8%"}}>
         <p>{this.state.playing ? "le jeu est en cours" : "c'est la pause"}</p>

         <p>{this.state.score === this.state.joueur1  ? "reprendre le jeu à nouveau"  : ""}</p>

         <p>{ this.state.joueur1 === this.state.hero && this.state.joueur2!==this.state.hero ? 

         "le hero est le joueur1" : ""}</p>

         <p>{ this.state.winner === this.state.joueur1  ? "Felicitations au joueur 1" : ""}</p>

         <p>{this.state.winner === this.state.joueur2 ? "Felicitations au joueur 2" : ""}</p>

        <p style={{fontSize:"30px",textAlign:"center",backgroundColor:"#ADD8E6",width:"30%",color:"white"}}>

        le score est : {this.state.joueur1}-{this.state.joueur2}</p>

        <button style={{fontSize:"23px",backgroundColor:"black",color:"white",marginLeft:"5%",}}
        
        onClick={() => this.handleChange()}>Joueur1</button>

        <button style={{marginLeft:"2%",fontSize:"23px",backgroundColor:"black",color:"white"}} 

        onClick={() => this.nodleChange()}>Joueur2</button>

        <div style={{display:"flex",marginTop:"2%",marginLeft:"5%",fontSize:"130%"}}>

        <button onClick={()=>this.continuePlay()}style={{marginLeft:"5px",fontSize:"25px",backgroundColor:"black",color:"white"}}>play</button>
        
        <button  onClick={()=>this.restartPlay()} style={{marginLeft:"6%",fontSize:"23px",backgroundColor:"black",color:"white"}}>restart</button>
        </div>
      </div>
    )
  }
}

export default Etat