import React from 'react';
import { Button, SimpleDialog } from '@material-ui/core'


const CSSTrick = (props) => {
    const { testProps } = props;
    console.log(testProps)
    return (
        <div>
            <Button variant="outlined" color="primary" onClick={() => {}}>
                Open simple dialog
            </Button>
        </div>
    )
}

export default CSSTrick;