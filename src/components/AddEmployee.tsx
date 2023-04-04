import "./EmployeeForm.style.css";
import { useState } from "react";
import { IEmployee } from "./employee.type";
import { Button, TextField } from "@mui/material";

type Props = {
  onBackBtnClickHnd: () => void;
  onsubmitClickHnd: (data: IEmployee) => void;
};
const AddEmployee = (props: Props) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  const { onBackBtnClickHnd, onsubmitClickHnd } = props;

  const onFirstNameClickHnd = (e: any) => {
    setFirstName(e.target.value);
  };

  const onLastNameClickHnd = (e: any) => {
    setLastName(e.target.value);
  };
  const onEmailClickHnd = (e: any) => {
    setEmail(e.target.value);
  };

  const onSubmitBtnClickHnd = (e: any) => {
    if (
      firstName.trim() === "" ||
      lastName.trim() === "" ||
      email.trim() === ""
    ) {
      alert("Please fill in all fields");
      return;
    }

    if (!isValidEmail(email)) {
      alert("Please enter a valid email address");
    }
    e.preventDefault();
    const data: IEmployee = {
      id: new Date().toJSON().toString(),
      firstName: firstName,
      lastName: lastName,
      email: email,
    };
    onsubmitClickHnd(data);
    onBackBtnClickHnd();
  };

  const isValidEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

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

        <div className="">
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
            Add Employee
          </Button>
        </div>
      </form>
    </div>
  );
};

export default AddEmployee;
