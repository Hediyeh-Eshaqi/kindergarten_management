import React, { Component } from 'react'
import Children from '../childrens/Children'
import Teacher from '../teachers/Teacher'
import Class from '../classes/Class'
import axios from "axios";
import titlepic from "../../../assets/images/titlepic.png"

export default class Mainpage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            teachers: [],
            childs: [],
            classes: []
        }
    }
    componentDidMount() {
        this.loadData();
    }

    loadData = async () => {
        await axios
            .get("http://127.0.0.1:8000/api/teacher-list/")
            .then((response) => {
                this.setState({ teachers: response.data })
            },).then(
                await axios
                    .get("http://127.0.0.1:8000/api/class-list/")
                    .then((response) => {
                        this.setState({ classes: response.data })
                    })
            ).then(
                await axios
                    .get("http://127.0.0.1:8000/api/child-list/")
                    .then((response) => {
                        this.setState({ childs: response.data })
                    }).then(this.setState({ loading: false }))
            )
            .catch((error) => {
                console.log(error)
            })
    }
    render() {
        return (
            this.state.loading ?
                <div></div>
                :
                <div>
                    <div className='container-fluid'>
                        <div className='row'>
                            <div className='col-7' style={{padding:"0px"}}>
                                <img width={"100%"} src={titlepic}></img>

                            </div>
                            <div className='col-5 d-flex align-items-center justify-content-center'>
                                <div className='row'>
                                    <div className='col-12'>
                                    <h1 class="display-3 w-100">کمی بیشتر در مورد ما</h1>
                                    </div>
                                    <div className='col-12'>
                                    <h1 class="h4 w-100 pt-5">بچه های شما آینده ما هستند</h1>
                                    </div>
                                    <div className='col-12 pt-5 text-center'>
                                        <a href='#info' type="button" class="btn btn-secondary mt-5 p-2">مشاهده اطلاعات</a>
                                    </div>
                                </div>
                            
                            
                            </div>

                        </div>
                        <div id='info' className="row" style={{ marginBottom: "50px" }}>

                        </div>
                        <div className='row bg-light p-4 overflow-auto flex-nowrap'>
                            <div class="card text-center" style={{ width: "18rem", backgroundColor: "#f8f9fa", border: "none" }}>
                                <img class="card-img-top p-3" src="https://img.freepik.com/free-vector/school-classroom-interior-university-educational-concept-blackboard-table_1441-2162.jpg" alt="Card image cap" />
                                <div class="card-body">
                                    <h5 class="card-title">کلاس ها</h5>
                                    <p class="card-text">در این مهد کودک بهترین کلاس ها برای آموزش به کودکان عزیز شما وجود دارد</p>
                                    <a href="/add-class" class="btn btn-secondary">اضافه کردن کلاس</a>
                                </div>
                            </div>
                            {
                                this.state.classes.map((row, index) => (
                                    <Class key={index}
                                        subject = {row.subject}
                                        classNumber = {row.classNumber}
                                        price = {row.price}
                                        year = {row.year}
                                    />
                                ))
                            }
                        </div>
                        <div className="row" style={{ marginBottom: "50px", marginTop: "50px" }}>

                        </div>
                        <div className='row bg-light p-4 overflow-auto flex-nowrap'>
                            <div class="card text-center" style={{ width: "18rem", backgroundColor: "#f8f9fa", border: "none" }}>
                                <img class="card-img-top p-3" src="https://img.freepik.com/premium-photo/group-students-with-books-smiling-camera_488220-36255.jpg" alt="Card image cap" />
                                <div class="card-body">
                                    <h5 class="card-title">دانش آموز ها</h5>
                                    <p class="card-text">میتوانید برای هر یک از کودکان مشخصات و پیشرفت های آن ها را مشاهده کنید</p>
                                    <a href="/add-child" class="btn btn-secondary">اضافه کردن کودک</a>
                                </div>
                            </div>
                            {
                                this.state.childs.map((row, index) => (
                                    <Children key={index}
                                        name = {row.name}
                                        familyName = {row.familyName}
                                        birthDate = {row.birthDate.split("T")[0]}
                                        age = {row.age}
                                        hobbies = {row.hobbies}
                                        parents = {row.parents}
                                        classes = {row.classes}
                                    />
                                ))
                            }
                        </div>
                        <div className="row" style={{ marginBottom: "50px", marginTop: "50px" }}>

                        </div>
                        <div className='row bg-light p-4 overflow-auto flex-nowrap'>
                            <div class="card text-center" style={{ width: "18rem", backgroundColor: "#f8f9fa", border: "none" }}>
                                <img class="card-img-top p-3" src="https://marvel-b1-cdn.bc0a.com/f00000000026007/resilienteducator.com/wp-content/uploads/2012/10/elementary-school-teacher.jpg" alt="Card image cap" />
                                <div class="card-body">
                                    <h5 class="card-title">معلم ها</h5>
                                    <p class="card-text">در این مهد کودک بهترین معلم ها قرار دارند که هر یک در زمینه کاری خود متخصص هستند</p>
                                </div>
                            </div>
                            {
                                this.state.teachers.map((row, index) => (
                                    <Teacher key={index}
                                        familyName={row.familyName} 
                                        degree={row.degree}
                                        phoneNumber={row.phoneNumber}
                                        address={row.address}
                                        SSN={row.SSN}
                                        gender={row.gender==0?"خانم":"آقا"}
                                        contract_type={row.contract_type}
                                        contract_number={row.contract_number}
                                        contract_salary={row.contract_salary}
                                    />
                                ))
                            }
                        </div>
                        <br />
                        <br />
                    </div>


                </div>
        )
    }
}
