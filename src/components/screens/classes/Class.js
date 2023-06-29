import React, { Component } from 'react';
import classimage from "../../../assets/images/class.png" 
import { Link } from 'react-router-dom';


export default class Class extends Component {
    render() {
        return (
            <div className="col-auto text-center">
                <div class="card mb-3 h-100" style={{ width: "18rem" }}>
                    <div class="card-header bg-light">{this.props.subject}</div>
                    <div class="card-body justify-content-center text-black">
                        <img src={classimage} width={100}></img>
                        <h6 class="pt-5">شماره کلاس: {this.props.classNumber}</h6>
                        <h6>قیمت کلاس: {this.props.price}</h6>
                        <h6>سال کلاس: {this.props.year}</h6>
                        <Link to={"/classes/1"}><a style={{marginTop:"20px"}} href="#" class="btn btn-light">مدیریت کلاس</a></Link>
                    </div>
                </div>
            </div>
        )
    }
}
