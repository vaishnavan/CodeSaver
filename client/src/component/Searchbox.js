import React, { Component } from 'react'

class Searchbox extends Component {





    render() {
        return (
            <div className="search">
                <div className="container">
                    <div className="row">
                        <div className="col search_input">
                            <input type="search" placeholder="search here" onChange={this.props.handleInput} />


                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Searchbox
