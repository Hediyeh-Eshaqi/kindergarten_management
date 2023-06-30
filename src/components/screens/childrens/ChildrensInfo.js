import React, { Component } from 'react'
import Children1 from '../childrens/Children1'
import Teacher1 from '../teachers/Teacher1'
import childtop from "../../../assets/images/childtop.png"
import axios from 'axios'
import { Multiselect } from 'multiselect-react-dropdown';
import Class1 from '../classes/Class1'

export default class ChildrensInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            childID:"",
            hobbies:"",
            class_list:[],
            parent_list:[],
            name:"",
            familyName:"",
            birthDate:"",
            age:"",
        }

    }
    componentDidMount() {
        this.loadData();
    }


    loadData = async () => {
        let id = window.location.pathname.split("/").pop()
        await axios
            .get("http://127.0.0.1:8000/api/child-information/" + id + "/")
            .then((response) => {
                this.setState({
                    childID:response.data.childID,
                    class_list:response.data.class_list,
                    parent_list:response.data.parent_list,
                    hobbies:response.data.hobbies,
                    name:response.data.name,
                    familyName:response.data.familyName,
                    birthDate:response.data.birthDate.split("T")[0],
                    age:response.data.age,
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
                    <div className='col-12 col-md-4 justify-content-center d-flex' style={{ marginRight: "10px" }}>
                        <img className='w-100 p-4' src={childtop}></img>
                    </div>
                    <div className='col-12 col-md-6 card p-5 justify-content-center'>
                        <h6>نام کودک: {this.state.name}</h6>
                        <h6>نام خانوادگی کودک:{this.state.familyName}</h6>
                        <h6>سرگرمی کودک: {this.state.hobbies}</h6>
                        <h6>تاریخ تولد کودک: {this.state.birthDate}</h6>
                        <h6>سن کودک: {this.state.age}</h6>
                        <h6>آیدی کودک: {this.state.childID}</h6>
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
                <br/>
                <br/>
            </div>
        )
    }
}
