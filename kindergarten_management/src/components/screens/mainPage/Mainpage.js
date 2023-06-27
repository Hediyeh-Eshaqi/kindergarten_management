import React, { Component } from 'react'
import mainpagepic from "../../../assets/images/mainpagePic.webp"
import Registration from './Registration'
import Children from '../childrens/Children'
import Teacher from '../teachers/Teacher'
import Class from '../classes/Class'

export default class Mainpage extends Component {
    render() {
        return (
            <div>
                <svg style={{position:"absolute"}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0d6efd" fill-opacity="1" d="M0,192L48,176C96,160,192,128,288,149.3C384,171,480,245,576,250.7C672,256,768,192,864,144C960,96,1056,64,1152,74.7C1248,85,1344,139,1392,165.3L1440,192L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className="d-sm-none col-12 col-sm-6 d-flex align-items-center">
                            <img className='img-fluid' style={{zIndex:"10000", position:"relative"}} src={mainpagepic}></img>
                        </div>
                        <div className="col-12 col-sm-6">
                            <Registration/>
                        </div>
                        <div className="d-none d-sm-flex col-12 col-sm-6 d-flex align-items-center">
                            <img className='img-fluid' style={{zIndex:"10000", position:"relative"}} src={mainpagepic}></img>
                        </div>
                    </div>
                    <div className="row" style={{ marginBottom: "50px" }}>

                    </div>
                    <div className='row p-4 overflow-auto flex-nowrap' style={{border:"0.5px solid gray"}}>
                        <div class="card text-center" style={{ width: "18rem" }}>
                            <img class="card-img-top p-3" src="https://img.freepik.com/free-vector/school-classroom-interior-university-educational-concept-blackboard-table_1441-2162.jpg" alt="Card image cap" />
                            <div class="card-body">
                                <h5 class="card-title">کلاس ها</h5>
                                <p class="card-text">در این مهد کودک بهترین کلاس ها برای آموزش به کودکان عزیز شما وجود دارد</p>
                                <a href="#" class="btn btn-primary">مشاهده همه</a>
                            </div>
                        </div>
                        <Class/>
                        <Class/>
                        <Class/>
                        <Class/>
                    </div>

                    <div className="row" style={{ marginBottom: "50px", marginTop: "50px" }}>

                    </div>
                    <div className='row p-4 overflow-auto flex-nowrap' style={{border:"0.5px solid gray"}}>
                        <div class="card text-center" style={{ width: "18rem" }}>
                            <img class="card-img-top p-3" src="https://marvel-b1-cdn.bc0a.com/f00000000026007/resilienteducator.com/wp-content/uploads/2012/10/elementary-school-teacher.jpg" alt="Card image cap" />
                            <div class="card-body">
                                <h5 class="card-title">معلم ها</h5>
                                <p class="card-text">در این مهد کودک بهترین معلم ها قرار دارند که هر یک در زمینه کاری خود متخصص هستند</p>
                                <a href="#" class="btn btn-primary">مشاهده همه</a>
                            </div>
                        </div>
                        <Teacher/>
                        <Teacher/>
                        <Teacher/>
                        <Teacher/>
                    </div>
                    <div className="row" style={{ marginBottom: "50px", marginTop: "50px" }}>

                    </div>
                    <div className='row p-4 overflow-auto flex-nowrap' style={{border:"0.5px solid gray"}}>
                        <div class="card text-center" style={{ width: "18rem" }}>
                            <img class="card-img-top p-3" src="https://img.freepik.com/premium-photo/group-students-with-books-smiling-camera_488220-36255.jpg" alt="Card image cap" />
                            <div class="card-body">
                                <h5 class="card-title">دانش آموز ها</h5>
                                <p class="card-text">میتوانید برای هر یک از کودکان مشخصات و پیشرفت های آن ها را مشاهده کنید</p>
                                <a href="#" class="btn btn-primary">مشاهده همه</a>
                            </div>
                        </div>
                        <Children/>
                        <Children/>
                        <Children/>
                        <Children/>
                    </div>
                </div>
            </div>
        )
    }
}
