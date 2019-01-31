import React, { Component } from 'react';
import { Input, Container, Row, Col } from 'reactstrap';
import Title from './components/Title'
import Gif from './components/Gif'
import getGifs from './gif'

// class Storage {
//   constructor(key) {
//     this.key = key
//   }

//   getStorage(){
//     const data =  window.localStorage.getItem(this.key)
//     if(data) return JSON.parse(data)
//     return data
//   }

//   save(data){
//     window.localStorage.setItem(this.key,JSON.stringify(data))
//   }
// }



class App extends Component {
  constructor(props) {
    super(props)  //ignore
    
    this.getStorage = window.localStorage.getItem('app-state')
    console.log(JSON.parse(this.getStorage))
    if(this.getStorage){
      this.state = {
        imgs: JSON.parse(this.getStorage)
      }
    }
    else {
      this.state = {
        imgs: []
      }
    }
    

    
  }

  handleKeyDown(e){
    if(e.keyCode === 13){
      //console.log(typeof e.target.value)
      getGifs(e.target.value)
      .then(gifArray =>{
        window.localStorage.setItem('app-state',JSON.stringify(gifArray))
        this.setState({
          imgs:gifArray,
          isLoading:true,
        })
      })
    }
  }  

  
  gifComponent = () =>{
    return this.state.imgs.map((gifUrl,index)=>{
      return this.render2(gifUrl,index)
    })
  }

  render2 = (gifUrl,index) =>{
    return <Col md="4" key={index}>
        <Gif src={gifUrl} />
      </Col>
  }

  render() {
    return <Container>
      <Title label="Gif Search" />
      <Input  placeholder="Search something here..." onKeyDown={e=>this.handleKeyDown(e)} />
      <Row>
        <this.gifComponent/>
      </Row>

    </Container>
  
  }
  

}

export default App;
