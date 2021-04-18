import React, { Fragment } from 'react'

const ListAndkeys = (props) => {
    let {emp_id,emp_name,emp_photo,emp_sal,emp_designation}=props.emp;
    return (
        <Fragment>
            <tr>
                <td>
                    <img src={emp_photo} alt={emp_name}/>
                </td>
                <td>{emp_id}</td>
                <td>{emp_name}</td>
                <td>{emp_sal}</td>
                <td>{emp_designation}</td>
            </tr>
        </Fragment>
    )
}

export default ListAndkeys;