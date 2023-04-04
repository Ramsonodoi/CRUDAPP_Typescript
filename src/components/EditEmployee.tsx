import { Button, TextField } from "@mui/material";
import { IEmployee } from "./employee.type";
import "./EmployeeForm.style.css"
import {useState} from 'react'

type Props = {
  data: IEmployee;
  onBackBtnClickHnd: () => void;
  onUpdateClickHnd: (data: IEmployee) => void;
};

const EditEmployee = (props: Props) => {
  const { data, onBackBtnClickHnd, onUpdateClickHnd } = props;
  const [firstName, setFirstName] = useState(data.firstName);
    const [lastName, setLastName] = useState(data.lastName);
    const [email, setEmail] = useState(data.email);

    const onFirstNameClickHnd = (e: any) => {
        setFirstName(e.target.value)
     
     }
 
     const onLastNameClickHnd = (e: any) => {
        setLastName(e.target.value)
     }
     const onEmailClickHnd = (e: any) => {
        setEmail(e.target.value)
     }
     const onSubmitBtnClickHnd = (e: any ) => {
        if (firstName.trim() === '' || lastName.trim() === '' || email.trim() === '') {
            alert("Please fill in all fields")
            return;
        }

        if (!isValidEmail(email)){
            alert('Please enter a valid email address')
        }
        e.preventDefault()
      const updateData: IEmployee = {
        id: data.id,
        firstName:firstName,
        lastName:lastName,
        email:email
      }
      onUpdateClickHnd(updateData)
      onBackBtnClickHnd()
    }

    
    const isValidEmail = (email:string) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
  return (
    <div className="form-container">
      <div>
        <h3>Add Employee Form</h3>
      </div>
      <form onSubmit={onSubmitBtnClickHnd}>
      <div className="row">
          <div className="fName">
            <TextField
              type="text"
              value={firstName}
              onChange={onFirstNameClickHnd}
              variant="outlined"
              label="First name"
              size="small"
              fullWidth
              required
            />
          </div>
          <div className="fName">
            <TextField
              type="text"
              value={lastName}
              onChange={onLastNameClickHnd}
              variant="outlined"
              label="Last name"
              size="small"
              fullWidth
              required
            />
          </div>
          <div className="fName">
            <TextField
              type="text"
              value={email}
              onChange={onEmailClickHnd}
              variant="outlined"
              label="Email"
              size="small"
              fullWidth
              required
            />
          </div>
        </div>
        <div>
        <Button
            onClick={onBackBtnClickHnd}
            variant="contained"
            style={{ color: "#00008b", marginRight: "10px", width: "15%", backgroundColor:"#fff", border:"none"}}
          >
            Back
          </Button>
          <Button
            type="submit"
            variant="contained"
            style={{ background: "#00008b", color: "#fff", width: "15%" }}
          >
            Update Employee
          </Button>
        </div>
      </form>
    </div>
  );
};

export default EditEmployee;
