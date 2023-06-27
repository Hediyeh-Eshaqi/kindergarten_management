import React, { Component } from 'react';
import classimage from "../../../assets/images/class.png" 


export default class Class extends Component {
    render() {
        return (
            <div className="col-auto text-center">
                <div class="card mb-3 h-100" style={{ width: "18rem" }}>
                    <div class="card-header bg-light">موضوع کلاس</div>
                    <div class="card-body justify-content-center text-black">
                        <img src={classimage} width={100}></img>
                        <h6 class="card-title pt-5">نام کلاس</h6>
                        <h6 className=''>شماره کلاس: ۱</h6>
                        <h6>قیمت کلاس: ۱۰</h6>
                        <h6>سال کلاس: ۲۰۲۱-۰۱-۰۱</h6>
                        <a style={{marginTop:"20px"}} href="#" class="btn btn-light">مشاهده</a>
                    </div>
                </div>
            </div>
        )
    }
}
