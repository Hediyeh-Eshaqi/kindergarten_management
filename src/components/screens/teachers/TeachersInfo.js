import React, { Component } from 'react'
import Children1 from '../childrens/Children1'
import Teacher1 from '../teachers/Teacher1'
import classtop from "../../../assets/images/classtop.png"
import axios from 'axios'
import { Multiselect } from 'multiselect-react-dropdown';
import Class1 from '../classes/Class1'

export default class TeachersInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            SSN:"",
            address:"",
            class_list:[],
            contract_number:"",
            contract_salary:"",
            contract_type:"",
            degree:"",
            familyName:"",
            gender:"",
            name:"",
            phoneNumber:""
        }

    }
    componentDidMount() {
        this.loadData();
    }


    loadData = async () => {
        let id = window.location.pathname.split("/").pop()
        await axios
            .get("http://127.0.0.1:8000/api/teacher-information/" + id + "/")
            .then((response) => {
                this.setState({
                    SSN:response.data.SSN,
                    address:response.data.address,
                    class_list:response.data.class_list,
                    contract_number:response.data.contract_number,
                    contract_salary:response.data.contract_salary,
                    contract_type:response.data.contract_type,
                    degree:response.data.degree,
                    familyName:response.data.familyName,
                    gender:response.data.gender,
                    name:response.data.name,
                    phoneNumber:response.data.phoneNumber
                })
                console.log(response.data)
            })
            .catch((error) => {
                console.log(error)
            })
    }

    render() {
        return (
            <div className="container-fluid">

                <div className="row" style={{ paddingTop: "100px" }}>
                    <div className='col-12 col-md-3 justify-content-center d-flex' style={{ marginRight: "10px" }}>
                        <img className='w-100' src={classtop}></img>
                    </div>
                    <div className='col-12 col-md-8 card p-5'>
                        <h6>نام معلم: {this.state.name}</h6>
                        <h6>نام خانوادگی معلم:{this.state.familyName}</h6>
                        <h6>شماره موبایل معلم: {this.state.phoneNumber}</h6>
                        <h6>جنسیت معلم: {this.state.gender==0?"خانم":"آقا"}</h6>
                        <h6>درجه معلم: {this.state.degree}</h6>
                        <h6>نوع معلم: {this.state.contract_type=="a"?"ساعتی":"قراردادی"}</h6>
                        <h6>حقوق معلم: {this.state.contract_salary}</h6>
                        <h6>شماره کارمندی معلم: {this.state.contract_number}</h6>
                        <h6>آدرس معلم: {this.state.address}</h6>
                        <h6>ssn معلم: {this.state.SSN}</h6>
                    </div>
                    <div className="row p-4">
                        <h3>لیست کلاس ها:</h3>
                    </div>
                    <div className="col-lg-12">
                        <div className="row">
                            {
                                this.state.class_list.map((row, index) => (
                                    <Class1 key={index}
                                        subject = {row.subject}
                                        year = {row.year}
                                        classNumber={row.classNumber}
                                    />
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
