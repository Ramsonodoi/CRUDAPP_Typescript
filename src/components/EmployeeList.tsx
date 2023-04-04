import "./EmployeeList.style.css";
import EmployeeModal from "./EmployeeModal";
import { IEmployee } from "./employee.type";
import { useState } from "react";
import { GrFormView } from "react-icons/gr";
import { AiOutlineEdit } from "react-icons/ai";
import { AiOutlineDelete } from "react-icons/ai";

type Props = {
  list: IEmployee[];
  onDeleteClickHnd: (data: IEmployee) => void;
  onEdit: (data: IEmployee) => void;
};
const EmployeeList = (props: Props) => {
  const { list, onDeleteClickHnd, onEdit } = props;
  const [showModal, setShowModal] = useState(false);
  const [dataToShow, setdataToShow] = useState(null as IEmployee | null);

  const viewEmployee = (data: IEmployee) => {
    setdataToShow(data);
    setShowModal(true);
  };

  const onCloseModal = () => setShowModal(false);

  return (
    <div>
      <article>
        <h3 className="list-header">Employee List</h3>
      </article>
      <table>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Action</th>
        </tr>
        {list.map((employee) => {
          return (
            <tr key={employee.id}>
              <td>{`${employee.firstName} ${employee.lastName}`}</td>
              <td>{employee.email} </td>
              <td>
                <div>
                  <GrFormView
                    onClick={() => viewEmployee(employee)}
                    title="View"
                    style={{marginRight:"20px", cursor:"pointer"}}
                  />
                  <AiOutlineEdit
                    onClick={() => onEdit(employee)}
                    title="Edit"
                    style={{marginRight:"20px", cursor:"pointer"}}
                  />
                  <AiOutlineDelete
                    onClick={() => onDeleteClickHnd(employee)}
                    title="Delete"
                    style={{cursor:"pointer"}}
                  />
                </div>
              </td>
            </tr>
          );
        })}
      </table>
      {showModal && dataToShow !== null && (
        <EmployeeModal onClose={onCloseModal} data={dataToShow} />
      )}
      <div></div>
    </div>
  );
};

export default EmployeeList;
