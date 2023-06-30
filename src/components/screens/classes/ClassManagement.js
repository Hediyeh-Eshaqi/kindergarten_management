import React, { Component } from 'react'
import Children1 from '../childrens/Children1'
import Teacher1 from '../teachers/Teacher1'
import classtop from "../../../assets/images/classtop.png"
import axios from 'axios'
import { Multiselect } from 'multiselect-react-dropdown';

export default class ClassManagement extends Component {
    constructor(props) {
        super(props);
        this.state = {
            options: [],
            children_list : [],
            classnumber: "",
            price:"",
            subject:"",
            teacher_list:[],
            year:"",
            selected_id:[]
        }
        this.onSelect = this.onSelect.bind(this);
        this.onRemove = this.onRemove.bind(this);
    }
    componentDidMount() {
        this.loadData();
        this.loadDatachilds();
    }

    onSelect(selectedList, selectedItem) {
        var sel = []
        for (let index = 0; index < selectedList.length; index++) {
            sel = [...sel, selectedList[index].childID]
        }
        this.setState({
            selected_id: sel
        })
    }

    onRemove(selectedList, removedItem) {
        var sel = []
        for (let index = 0; index < selectedList.length; index++) {
            sel = [...sel, selectedList[index].childID]
        }
        this.setState({
            selected_id: sel
        })
    }

    onsend(){
        var tosend = {
            "child_list": this.state.selected_id
        }
        this.postData(tosend)
    }  
    postData = async (tosend) => {
        await axios
            .post("http://127.0.0.1:8000/api/class-update/"+this.state.classnumber+"/", tosend)
            .then((response) => {
                console.log(response)
                window.location.reload();
            })
            .catch((error) => {
                console.log(error)
            })
    }

    loadDatachilds = async () => {
        await axios
            .get("http://127.0.0.1:8000/api/child-list/")
            .then((response) => {
                for (let index = 0; index < response.data.length; index++) {
                    response.data[index]["toShow"] = response.data[index]["name"]+" "+response.data[index]["familyName"]
                }
                this.setState({ options: response.data })
            })
            .catch((error) => {
                console.log(error)
            })
    }

    loadData = async () => {
        let id = window.location.pathname.split("/").pop()
        await axios
            .get("http://127.0.0.1:8000/api/class-information/" + id + "/")
            .then((response) => {
                this.setState({
                    teacher_list: response.data.teacher_list,
                    children_list: response.data.children_list,
                    classnumber: response.data.classNumber,
                    price: response.data.price,
                    year : response.data.year,
                    subject: response.data.subject
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
                        <h6>موضوع کلاس: {this.state.subject}</h6>
                        <h6>شماره کلاس:{this.state.classnumber}</h6>
                        <h6>قیمت کلاس: {this.state.price}</h6>
                        <h6>سال کلاس: {this.state.year}</h6>
                    </div>
                    <div className="row p-4">
                        <h3>لیست معلم ها:</h3>
                    </div>
                    <div className="col-lg-12">
                        <div className="row">
                            {
                                this.state.teacher_list.map((row, index) => (
                                    <Teacher1 key={index}
                                        name = {row.name}
                                        familyName = {row.familyName}
                                    />
                                ))
                            }
                        </div>
                    </div>
                    <div className="row p-4">
                        <h3>لیست دانش آموزان:</h3>
                    </div>
                    <div className="col-lg-12">
                        <div className="row">
                        {
                                this.state.children_list.map((row, index) => (
                                    <Teacher1 key={index}
                                        name = {row.name}
                                        familyName = {row.familyName}
                                    />
                                ))
                            }
                            <div className="col-auto text-center">
                                <div class="card  mb-3 h-100" style={{ width: "18rem" }}>
                                    <div class="card-header bg-light">افزودن دانش آموز</div>
                                    <div class="card-body d-flex justify-content-center align-items-center text-black">
                                    <Multiselect
                                                    options={this.state.options} // Options to display in the dropdown
                                                    selectedValues={this.state.selectedValue} // Preselected value to persist in dropdown
                                                    onSelect={this.onSelect} // Function will trigger on select event
                                                    onRemove={this.onRemove} // Function will trigger on remove event
                                                    displayValue="toShow" // Property name to display in the dropdown options
                                                    placeholder=""
                                                    style={{ chips: { background: "rebeccapurple" }, } }
                                                />
                                    </div>
                                    <button type="button" class="btn m-5 btn-secondary btn-lg" onClick={()=>this.onsend()}>افزودن</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
