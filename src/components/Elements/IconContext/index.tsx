import React from 'react'
import { IconContext } from "react-icons";
import { FCC } from '../../../helpers/FCC';

interface Props {
    className?: string
}

const IconContextContainer: FCC<Props> = ({ className, children }) => {
    return (
        <IconContext.Provider value={{ color: "grey", className: "header-icon " }}>
            <div>
                {children}
            </div>
        </IconContext.Provider>
    )
}

export default IconContextContainer