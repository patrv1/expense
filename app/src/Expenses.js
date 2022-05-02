import React, { Component } from "react";
import AppNav from "./AppNav";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FormGroup, Form, Button, Container, Label, Input, Table } from "reactstrap";
import { Link } from "react-router-dom";
import Moment from "react-moment";
import Footer from "./Footer"
//import nextId from "react-id-generator";
//import {customAlphabet} from '../../nanoid'
//const nanoid = customAlphabet('1234567890', 10);

class Expenses extends Component{
    
    emptyItem = {
        id: "",
        expenseDate: new Date(),
        description: "",
        location: "",
        category: []
    }

    constructor(props){
        super(props)
        this.state = {  
            date: new Date(),
            isLoading: true,
            Expenses: [], 
            Categories: [],
            rows: [],
            item: this.emptyItem
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleOptionChange = this.handleOptionChange.bind(this);
        this.handleDateChange = this.handleDateChange.bind(this);
    }   

    async componentDidMount() {
        const response = await fetch("/api/categories");
        const body = await response.json();
        this.setState({Categories: body, isLoading: false});
        
        const responseExp = await fetch("/api/expenses");
        const bodyExp = await responseExp.json();
        this.setState({Expenses: bodyExp, isLoading: false});
    }

    handleChange(event) {
        const {name, value} = event.target;
        let item = {...this.state.item};
        item[name] = value;
        this.setState({item});
    }
    
    handleOptionChange(event){
        const {Categories} = this.state;
        let cat = (Categories.find(category => category.name === event.target.value));    
        let item = {...this.state.item}
        item.category = cat;
        this.setState({item});    
    }

    handleDateChange(date){
        let item = {...this.state.item};
        item.expenseDate = date; 
        this.setState({item});
    }

    async handleSubmit(event) {
        event.preventDefault();
        const {item} = this.state; 
        console.log(item);
               
        await fetch("/api/expenses", {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(item)
        });
       // console.log(this.state);
        this.props.history.push("/expenses")
    }

    async remove(id) {
        await fetch("/api/expenses/" + id, {
            method: "DELETE",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            }
        }).then(() => {
            let updatedExpenses = [...this.state.Expenses].filter(i => i.id !== id);
            this.setState({Expenses: updatedExpenses});
        });
    }

    render() { 
        const title = <h3>Add Expense</h3>;
        const {Categories, Expenses, isLoading} = this.state;
        if (isLoading) {
            return (<div>Loading...</div>);
        }
        let optionList =
            Categories.map(categories => 
                <option key={categories.id} id={categories.id}>
                    {categories.name}
                </option>
            )
        let rows = 
            Expenses.map(expense => 
                <tr key={expense.id}>
                    <td>{expense.description}</td>
                    <td>{expense.location}</td>
                    <td><Moment date={expense.expenseDate} format="DD/MM/YYYY" /></td>
                    <td>{expense.category.name}</td>
                    <td><Button size="sm" color="danger" onClick={() => this.remove(expense.id)}>Delete</Button></td>
                </tr>
            )
        
    return (
        <div>
            <AppNav />
            <Container>
                {title}
                <Form onSubmit={this.handleSubmit}>
                    <FormGroup>
                        <Label for="description">Description</Label>
                        <Input type="text" name="description" id="description" onChange={this.handleChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="category">Category</Label>
                        <select onChange={this.handleOptionChange}>
                            {optionList}
                        </select>
                    </FormGroup>
                    <FormGroup>
                        <Label for="expenseDate">Expense Date</Label>
                        <DatePicker selected={this.state.item.expenseDate} onChange={this.handleDateChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="location">Location</Label>
                        <Input type="text" name="location" id="location" onChange={this.handleChange} />
                    </FormGroup>
                    <FormGroup>
                        <Button color="primary" type="submit">Save</Button>{" "}
                        <Button color="secondary" tag={Link} to="/categories">Cancel</Button>
                    </FormGroup>
                </Form>
            </Container>

            <Container>
                <h3>Expense List</h3>
                <Table className="mt-4">
                    <thead>
                        <tr>
                            <th width="40%">Description</th>
                            <th width="15%">Location</th>
                            <th>Date</th>
                            <th>Category</th>
                            <th width="10%">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {rows}
                    </tbody>
                </Table>
            </Container>
            <div className="footer">
                    <Footer />
                </div> 
        </div>

    ); 
    }
}


// function Expenses() {
//     const [date, setDate] = useState(new Date());
//     const [isLoading, setLoading] = useState(true);
//     const [expenses, setExpenses] = useState([]);

//     const title = <h3>Add Expense</h3>;

//     function handleChange() {

//     }

//     function handleSubmit() {

//     }

//     return (
//         <div>
//             <AppNav />
//             <Container>
//                 {title}
//                 <Form onSubmit={handleSubmit}>
//                     <FormGroup>
//                         <Label for="title">Title</Label>
//                         <Input type="text" name="title" id="title" onChange={handleChange} />
//                     </FormGroup>
//                     <FormGroup>
//                         <Label for="category">Category</Label>
//                         <Input type="text" name="category" id="category" onChange={handleChange} />
//                     </FormGroup>
//                     <FormGroup>
//                         <Label for="expenseDate">Expense Date</Label>
//                         <DatePicker selected={date} onChange={handleChange} />
//                     </FormGroup>
//                     <FormGroup>
//                         <Label for="location">Location</Label>
//                         <Input type="text" name="location" id="location" onChange={handleChange} />
//                     </FormGroup>
//                     <FormGroup>
//                         <Button color="primary" type="submit">Save</Button>{' '}
//                         <Button color="secondary" tag={Link} to="/categories">Cancel</Button>
//                     </FormGroup>
//                 </Form>
//             </Container>
//         </div>
//     );
// }





export default Expenses;