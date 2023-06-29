import React, { Component } from 'react'
import { Multiselect } from 'multiselect-react-dropdown';
import axios from 'axios';
export default class AddClassForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            options: [{ name: 'Srigar', id: 1 }, { name: 'Sam', id: 2 }],
            selected_id : [],
            subject:"",
            year:"",
            price:""
        };
        this.onSelect = this.onSelect.bind(this);
        this.onRemove = this.onRemove.bind(this);
    }

    onSelect(selectedList, selectedItem) {
        var sel = []
        for (let index = 0; index < selectedList.length; index++) {
            sel = [...sel, selectedList[index].SSN]
        }
        this.setState({
            selected_id: sel
        })
    }

    onRemove(selectedList, removedItem) {
        var sel = []
        for (let index = 0; index < selectedList.length; index++) {
            sel = [...sel, selectedList[index].SSN]
        }
        this.setState({
            selected_id: sel
        })
    }

    componentDidMount(){
        this.loadData()
    }

    onsend(){
        var tosend = {
            "teachers": this.state.selected_id,
            "price": this.state.price,
            "year": this.state.year,
            "subject": this.state.subject
        }
        this.postData(tosend)
    } 
    loadData = async () => {
        await axios
            .get("http://127.0.0.1:8000/api/teacher-list/")
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

    postData = async (tosend) => {
        await axios
            .post("http://127.0.0.1:8000/api/class-create/", tosend)
            .then((response) => {
                console.log(response)
                window.location.replace("/");
            })
            .catch((error) => {
                console.log(error)
            })
    }

    render() {
        return (
            <section class="vh-100" style={{ zIndex: "10000", position: "relative" }}>
                <div class="container h-100">
                    <div class="row d-flex justify-content-center align-items-center h-100">
                        <div class="col-lg-12 col-xl-11">
                            <div class="card text-black" style={{ borderRadius: "25px" }}>
                                <div class="card-body">
                                    <div class="row justify-content-center">
                                        <div class="col-12">

                                            <p class="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">افزودن کلاس</p>

                                            <form class="mx-1 mx-md-4">

                                                <div class="d-flex flex-row align-items-center mb-4">
                                                    <i class="fas fa-user fa-lg me-3 fa-fw"></i>
                                                    <div class="form-outline flex-fill mb-0">
                                                        <input type="text" id="form3Example1c" class="form-control" value={this.state.subject} onChange={(e)=>this.setState({subject:e.target.value})} />
                                                        <label class="form-label" for="form3Example1c">موضوع کلاس</label>
                                                    </div>
                                                </div>

                                                <div class="d-flex flex-row align-items-center mb-4">
                                                    <i class="fas fa-envelope fa-lg me-3 fa-fw"></i>
                                                    <div class="form-outline flex-fill mb-0">
                                                        <input type="text" id="form3Example3c" class="form-control" value={this.state.year} onChange={(e)=>this.setState({year:e.target.value})} />
                                                        <label class="form-label" for="form3Example3c">سال کلاس</label>
                                                    </div>
                                                </div>

                                                <div class="d-flex flex-row align-items-center mb-4">
                                                    <i class="fas fa-lock fa-lg me-3 fa-fw"></i>
                                                    <div class="form-outline flex-fill mb-0">
                                                        <input  type="text" id="form3Example4c" class="form-control" value={this.state.price} onChange={(e)=>this.setState({price:e.target.value})}/>
                                                        <label class="form-label" for="form3Example4c">قیمت کلاس</label>
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
                                                        style={{ chips: { background: "rebeccapurple" }, }}
                                                    />
                                                    <label style={{ float: "right" }} class="form-label" for="form3Example4cd">نام معلم ها  </label>
                                                </div>

                                                <div class="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                                                    <button type="button" class="btn btn-secondary btn-lg" onClick={()=>this.onsend()}>افزودن</button>
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
