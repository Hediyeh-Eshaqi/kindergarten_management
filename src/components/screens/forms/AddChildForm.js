import React, { Component } from 'react'
import { Multiselect } from 'multiselect-react-dropdown';
import axios from "axios";

export default class AddChildForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            options: [],
            name:"",
            lastname:"",
            hobbies:"",
            birthdate:""
        };
    }

    onsend(){
        var tosend = {
            "'parents": this.state.options,
            "hobbies": this.state.hobbies,
            "familyName": this.state.lastname,
            "birthDate": this.state.birthdate+"T12:32:41Z",
            "name" : this.state.name,
        }
        this.postData(tosend)
    }  
    postData = async (tosend) => {
        await axios
            .post("http://127.0.0.1:8000/api/child-create/", tosend)
            .then((response) => {
                console.log(response)
                window.location.replace("/");
            })
            .catch((error) => {
                console.log(error)
            })
    }
    onSelect(selectedList, selectedItem) {

    }

    onRemove(selectedList, removedItem) {

    }

    componentDidMount(){
        this.loadData()
    }

    loadData = async () => {
        await axios
            .get("http://127.0.0.1:8000/api/person-list/")
            .then((response) => {
                for (let index = 0; index < response.data.length; index++) {
                    response.data[index]["toShow"] = response.data[index]["name"]+" "+response.data[index]["familyName"]
                }
                console.log(response.data)
                this.setState({ options: response.data })
            })
            .catch((error) => {
                console.log(error)
            })
    }


    render() {
        return (
            <section class="vh-100">
                <div class="container h-100">
                    <div class="row d-flex justify-content-center align-items-center h-100">
                        <div class="col-lg-12 col-xl-11">
                            <div class="card text-black" style={{ borderRadius: "25px" }}>
                                <div class="card-body">
                                    <div class="row justify-content-center">
                                        <div class="col-12">

                                            <p class="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">افزودن کودک</p>

                                            <form class="mx-1 mx-md-4">

                                                <div class="d-flex flex-row align-items-center mb-4">
                                                    <i class="fas fa-user fa-lg me-3 fa-fw"></i>
                                                    <div class="form-outline flex-fill mb-0">
                                                        <input type="text" id="form3Example1c" class="form-control" value={this.state.name} onChange={(e)=>this.setState({name:e.target.value})}/>
                                                        <label class="form-label" for="form3Example1c">نام کودک</label>
                                                    </div>
                                                </div>

                                                <div class="d-flex flex-row align-items-center mb-4">
                                                    <i class="fas fa-envelope fa-lg me-3 fa-fw"></i>
                                                    <div class="form-outline flex-fill mb-0">
                                                        <input type="email" id="form3Example3c" class="form-control" value={this.state.lastname} onChange={(e)=>this.setState({lastname:e.target.value})}/>
                                                        <label class="form-label" for="form3Example3c">نام خانوادگی کودک</label>
                                                    </div>
                                                </div>

                                                <div class="d-flex flex-row align-items-center mb-4">
                                                    <i class="fas fa-lock fa-lg me-3 fa-fw"></i>
                                                    <div class="form-outline flex-fill mb-0">
                                                        <input type="text" id="form3Example4c" class="form-control" value={this.state.hobbies} onChange={(e)=>this.setState({hobbies:e.target.value})}/>
                                                        <label class="form-label" for="form3Example4c">سرگرمی کودک</label>
                                                    </div>
                                                </div>

                                                <div class="d-flex flex-row align-items-center mb-4">
                                                    <i class="fas fa-key fa-lg me-3 fa-fw"></i>
                                                    <div class="form-outline flex-fill mb-0">
                                                        <input placeholder='yyyy-mm-dd' type="text" id="form3Example4cd" class="form-control" value={this.state.birthdate} onChange={(e)=>this.setState({birthdate:e.target.value})}/>
                                                        <label class="form-label" for="form3Example4cd">تاریخ تولد</label>
                                                    </div>
                                                </div>
                                                <div class="mb-4 justify-content-center m-2" dir='ltr'>
                                                <Multiselect
                                                    options={this.state.options} // Options to display in the dropdown
                                                    selectedValues={this.state.selectedValue} // Preselected value to persist in dropdown
                                                    onSelect={this.onSelect} // Function will trigger on select event
                                                    onRemove={this.onRemove} // Function will trigger on remove event
                                                    displayValue="toShow" // Property name to display in the dropdown options
                                                    placeholder=""
                                                    style={{ chips: { background: "rebeccapurple" }, } }
                                                />
                                                <label style={{float:"right"}} class="form-label" for="form3Example4cd">نام سرپرست ها  </label>
                                                </div>
                                                <div class="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                                                    <button onClick={()=>this.onsend()} type="button" class="btn btn-secondary btn-lg">افزودن</button>
                                                </div>

                                            </form>

                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
