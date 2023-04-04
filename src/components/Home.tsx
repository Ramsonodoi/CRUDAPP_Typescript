import { useEffect, useState } from "react";
import "./Home.style.css";
import { IEmployee, PageEnum } from "./employee.type";
import EmployeeList from "./EmployeeList";
import AddEmployee from "./AddEmployee";
import EditEmployee from "./EditEmployee";
import { Button } from "@mui/material";


const Home = () => {
  const [employeeList, setEmployeeList] = useState(
    [] as IEmployee[]
  );
  const [shownPage, setShownPage] = useState(PageEnum.list);
  const [dataToEdit, setDataToEdit] = useState({} as  IEmployee);

  useEffect(() => {
    const listInString = window.localStorage.getItem("EmployeeList");
    if (listInString) {
        _setEmployeeList(JSON.parse(listInString))
    }
  }, [])

  const onAddEmployeeClickHnd = () => {
    setShownPage(PageEnum.add);
  };

  const showListPage = () => {
    setShownPage(PageEnum.list);
  };

  const _setEmployeeList = (list: IEmployee[]) => {
    setEmployeeList(list);
    window.localStorage.setItem("EmployeeList", JSON.stringify(list));
  }

  const addEmployee = (data: IEmployee) => {
    _setEmployeeList([...employeeList, data]);
  };

  const deleteEmployee = (data: IEmployee) => {
    // To Index from array i,e employeeList
    // Splice that array
    // Update new record

    const indexToDelete = employeeList.indexOf(data);
    const tempList = [...employeeList];

    tempList.splice(indexToDelete, 1);
    _setEmployeeList(tempList);
  };

  const editEmployeeData = (data: IEmployee) => {
     setShownPage(PageEnum.edit)
     setDataToEdit(data)
  }

  const updateData = (data: IEmployee) => {
    const filteredData = employeeList.filter(x => x.id === data.id)[0];
    const indexOfRecord = employeeList.indexOf(filteredData);
    const tempData = [...employeeList]
    tempData[indexOfRecord] = data;
    _setEmployeeList(tempData);
  }

  return (
    <>
      <article className="article-header">
        <header>
          <h1>Simple CRUD Application</h1>
        </header>
      </article>
      <section className="section-content">
        {shownPage === PageEnum.list && (
          <>
            <Button color="info" className="employee-formbtn" onClick={onAddEmployeeClickHnd}  variant="contained"
            style={{ background: "#00008b", color: "#fff"}}>
            Add Employee
            </Button>
            <EmployeeList
              list={employeeList}
              onDeleteClickHnd={deleteEmployee}
              onEdit={editEmployeeData}
            />
          </>
        )}

        {shownPage === PageEnum.add && (
          <AddEmployee
            onBackBtnClickHnd={showListPage}
            onsubmitClickHnd={addEmployee}
          />
        )}
        {shownPage === PageEnum.edit && <EditEmployee  data={dataToEdit} onBackBtnClickHnd={showListPage} onUpdateClickHnd={updateData} />}
      </section>
    </>
  );
};

export default Home;
