import React, { Component } from 'react'
import teacher from "../../../assets/images/teacher.png"
import { Link } from 'react-router-dom'
export default class Teacher1 extends Component {
    render() {
        return (
            <div className="col-auto m-1">
                <div class="card text-center mb-3 h-100" style={{ width: "18rem" }}>
                    <div class="card-body justify-content-center text-black">
                        <div className='text-center'>
                            <img width={100} src={teacher}></img>
                        </div>
                        <h6>{this.props.name} {this.props.familyName}</h6>
                        <Link to={"/childrens/1"}><a style={{marginTop:"20px"}} href="#" class="btn btn-light">مشاهده کارمند</a></Link>
                    </div>
                </div>
            </div>
        )
    }
}
