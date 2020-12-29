import React, { Component } from 'react'
import Form from './component/Form'
import axios from 'axios'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import DisplayCode from './component/DisplayCode'
import './App.css'

import Searchbox from './component/Searchbox'


class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      code: [],
      search: ""
    }
  }



  create = codeData => {
    axios.post('http://localhost:5000', codeData)
      .then(res => {
        console.log(res)
      })

  }

  componentDidMount() {
    this.getCode();
  }


  getCode() {
    axios.get('http://localhost:5000/allcode')
      .then(res => {
        this.setState({ code: res.data })
        // console.log(this.state.code)
      })
  }

  handleInput = e => {
    console.log(e.target.value)
    this.setState({ search: e.target.value })
  }







  render() {
     
    let filtered  = this.state.code.filter(searchdata=>{
      return searchdata.language.toLowerCase().includes(this.state.search.toLowerCase())
    })

    return (
      <div>




        <Router>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link className="navbar-brand" to="/">CodeWala</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                  <Link className="nav-link" to="/">Gitlab</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/codeform">Store Code</Link>
                </li>


              </ul>
              
            </div>
          </nav>

          <Switch>
            <Route exact path="/">
              <div className="main_div">
                <Searchbox  handleInput={this.handleInput} />
                {/* to reverse the post data */}
                <DisplayCode getcode={filtered.reverse()} />
              </div>
            </Route>
            <Route path="/codeform">
              <Form myData={this.create} />
            </Route>
            {/* form */}



            {/* code */}
          </Switch>
        </Router>


      </div>
    )
  }
}

export default App
