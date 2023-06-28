import React, { Component } from 'react'
import Children from '../childrens/Children'
import Teacher from '../teachers/Teacher'

export default class ClassManagement extends Component {
    render() {
        return (
            <div className="container-fluid">

                <div className="row" style={{paddingTop:"100px"}}>
                    <div className='col-3' style={{marginRight:"10px"}}>
                        <Teacher />
                    </div>
                    <div className='col-8 card m-3'>
                        در اینجا اطلاعات کلاس قرار میگیرد
                    </div>
                    <div className="row p-4">
                        <h3>لیست دانش آموزان:</h3>
                    </div>
                    <div className="col-lg-12">
                        <div className="row justify-content-center">
                            <Children />
                            <Children />
                            <Children />
                            <Children />
                            <Children />
                            <Children />
                            <Children />
                            <div className="col-auto text-center">
                                <div class="card  mb-3 h-100" style={{ width: "18rem" }}>
                                    <div class="card-header bg-light">افزودن دانش آموز</div>
                                    <div class="card-body d-flex justify-content-center align-items-center text-black">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-plus-lg" viewBox="0 0 16 16">
                                            <path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
