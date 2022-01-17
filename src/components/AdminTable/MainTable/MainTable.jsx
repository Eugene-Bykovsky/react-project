import React, { useContext } from 'react'
import './MainTable.css'
import { adminContext } from '../../../pages/PrivatePage/PrivatePage'
import { DefaultTable } from '../MainTableComponents/Tables/DefaultTable'
import { ActionCreateTable } from '../MainTableComponents/Tables/ActionCreateTable'


const MainTable = () => {
    const {action} = useContext(adminContext)
    return (
        <div className="table-container">
            {!action && <DefaultTable/>}
            {action === 'create' && <ActionCreateTable/>}
        </div>
    )
}

export default MainTable