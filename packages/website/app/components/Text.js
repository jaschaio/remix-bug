import React, { useCallback } from 'react';

const Text = ( { handleChange, value } ) => {

    const onChange = useCallback( ( event ) => handleChange( event.target.value ), [ handleChange ] );

    return (
        <input
            type="text"
            onChange={ onChange }
            value={ value }
        />
    );

};

export default Text;