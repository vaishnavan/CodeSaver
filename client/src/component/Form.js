import React, { Component } from 'react'

class Form extends Component {


    constructor(props) {
        super(props)
    
        this.state = {
             language:"",
             topic:"",
             code:"",
             createdOn:""
        }
    }

    handleChange = event =>{
        const {name,value} = event.target

        this.setState({
            [name]:value
        })

    }

    handleSubmit = event =>{
        // event.preventDefault();
        const codeData = {
            language:this.state.language,
            topic:this.state.topic,
            code:this.state.code,
            createdOn:this.state.createdOn
        }
        this.props.myData(codeData)
    }
    




    render() {
        return (
            <div className="form">
                <div className="container">
                    <form onSubmit={this.handleSubmit} autoComplete="off">
                        <div className="form-group">
                            <label for="">Programming language</label>
                            <input type="text" className="form-control" name="language" value={this.state.language} onChange={this.handleChange} />
                        </div>
                        <div className="form-group">
                            <label for="">Topic</label>
                            <input type="text" className="form-control" name="topic" value={this.state.topic} onChange={this.handleChange} />
                        </div>
                        <div className="form-group">
                            <label for="">CreatedOn</label>
                            <input type="date" className="form-control" name="createdOn" value={this.state.createdOn} onChange={this.handleChange} />
                        </div>
                        <div className="form-group">
                            <label for="">Worked-Code</label>
                            <textarea className="form-control" placeholder="Paste your code here..." name="code" value={this.state.code} onChange={this.handleChange}  rows="10"></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default Form
