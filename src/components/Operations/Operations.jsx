
import OperationTablet from 'components/OperationTablet/OperationTablet';
import React from 'react'

const Operations = ({ props }) => {

    const columns = ["Today", "", ""];


    return (
        <div style={{ marginTop: "20px" }}>

            <OperationTablet columns={columns} data={props} title={"Income/Expenses"} />
        </div>
    )

}
export default Operations;