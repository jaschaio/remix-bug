import { useState } from 'react';
import Text from '@local/controls/Text';

export default function Index() {

    const [ value, setValue ] = useState( '' );

    return (
        <div>
            <Text value={ value } handleChange={ setValue } />
        </div>
    );
}
