import React, { Component } from 'react'

export class DisplayCode extends Component {






    render() {
        return (
            <div className="display">

                <div className="container">

                    <div className="row">
                        <div className="col-md-12">

                            {
                            
                            this.props.getcode

                                .map(e => {
                                    return (

                                        <div className="card p-2 mt-5">
                                            <div className="card-title text-center"> <h3>{e.language}</h3> </div>
                                            <div className="card-title">
                                                <label>Code Topic :</label>
                                                <h5> {e.topic} </h5>
                                            </div>


                                            <div style={{background:"white"}} className="card card-2">
                                                <div style={{padding:"10px"}} className="card_body">
                                                    <span> {e.code} </span>

                                                </div>
                                            </div>

                                        {/* <textarea className="co" >{e.code}</textarea> */}






                                            <p style={{margin:"10px"}} className="card-text"><b>Posted Date:</b> <small>{e.createdOn.slice(0, 10)}</small></p>
                                        </div>)

                                })}


                        </div>
                    </div>

                </div>


            </div>
        )
    }
}

export default DisplayCode
