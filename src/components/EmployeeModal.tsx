import './EmployeeModal.style.css'
import { IEmployee } from './employee.type';

type Props ={
    onClose: () => void;
    data: IEmployee
}

const EmployeeModal = (props: Props) => {
    const {onClose, data} = props
  return (
    <div>
<div id="myModal" className="modal">
  <div className="modal-content">
    <span className="close" onClick={onClose}>&times;</span>
    <h3>Employee Data</h3>
    <div>
      <div>
        <label>First Name: {data.firstName} </label>
        <br />
        <label>Last Name: {data.lastName} </label>
        <br />
        <label>Email Add.: {data.email} </label>
      </div>
    </div>
  </div>

</div>
    </div>
  )
}

export default EmployeeModal
