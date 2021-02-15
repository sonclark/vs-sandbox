import React from 'react';


const CSSTrick = (props) => {
    const { testProps } = props;
    console.log(testProps)
    return (
        <div>
            {testProps}
        </div>
    )
}

export default CSSTrick;