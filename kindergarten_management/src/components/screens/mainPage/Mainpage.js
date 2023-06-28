import React, { Component } from 'react'
import Children from '../childrens/Children'
import Teacher from '../teachers/Teacher'
import Class from '../classes/Class'


export default class Mainpage extends Component {
    render() {
        return (
            <div>
                <div className='container-fluid'>
                    <div className='row p-5'>
                        {/* <div className='col-12 text-center'>
                            <img width={"60%"} src={toppic}></img>

                        </div> */}

                    </div>
                    <div className="row" style={{ marginBottom: "50px" }}>

                    </div>
                    <div className='row bg-light p-4 overflow-auto flex-nowrap'>
                        <div class="card text-center" style={{ width: "18rem",backgroundColor:"#f8f9fa", border:"none" }}>
                            <img class="card-img-top p-3" src="https://img.freepik.com/free-vector/school-classroom-interior-university-educational-concept-blackboard-table_1441-2162.jpg" alt="Card image cap" />
                            <div class="card-body">
                                <h5 class="card-title">کلاس ها</h5>
                                <p class="card-text">در این مهد کودک بهترین کلاس ها برای آموزش به کودکان عزیز شما وجود دارد</p>
                                <a href="/add-class" class="btn btn-secondary">اضافه کردن کلاس</a>
                            </div>
                        </div>
                        <Class />
                        <Class />
                        <Class />
                        <Class />
                    </div>
                    <div className="row" style={{ marginBottom: "50px", marginTop: "50px" }}>

                    </div>
                    <div className='row bg-light p-4 overflow-auto flex-nowrap'>
                        <div class="card text-center" style={{ width: "18rem", backgroundColor:"#f8f9fa", border:"none"}}>
                            <img class="card-img-top p-3" src="https://img.freepik.com/premium-photo/group-students-with-books-smiling-camera_488220-36255.jpg" alt="Card image cap" />
                            <div class="card-body">
                                <h5 class="card-title">دانش آموز ها</h5>
                                <p class="card-text">میتوانید برای هر یک از کودکان مشخصات و پیشرفت های آن ها را مشاهده کنید</p>
                                <a href="/add-child" class="btn btn-secondary">اضافه کردن کودک</a>
                            </div>
                        </div>
                        <Children />
                        <Children />
                        <Children />
                        <Children />
                    </div>
                    <div className="row" style={{ marginBottom: "50px", marginTop: "50px" }}>

                    </div>
                    <div className='row bg-light p-4 overflow-auto flex-nowrap'>
                        <div class="card text-center" style={{ width: "18rem" , backgroundColor:"#f8f9fa", border:"none"}}>
                            <img class="card-img-top p-3" src="https://marvel-b1-cdn.bc0a.com/f00000000026007/resilienteducator.com/wp-content/uploads/2012/10/elementary-school-teacher.jpg" alt="Card image cap" />
                            <div class="card-body">
                                <h5 class="card-title">معلم ها</h5>
                                <p class="card-text">در این مهد کودک بهترین معلم ها قرار دارند که هر یک در زمینه کاری خود متخصص هستند</p>
                            </div>
                        </div>
                        <Teacher />
                        <Teacher />
                        <Teacher />
                        <Teacher />
                    </div>
                    <br/>
                    <br/>
                </div>


            </div>
        )
    }
}
