
import OperationTablet from 'components/OperationTablet/OperationTablet';
import React from 'react'

const Operations = ({ props }) => {
    console.log(props)
    const columns = ["Today", "", ""];


    return (
        <div style={{ marginTop: "40px" }}>

            <OperationTablet columns={columns} data={props} title={"Income/Expenses"} />
        </div>
    )

}
export default Operations;