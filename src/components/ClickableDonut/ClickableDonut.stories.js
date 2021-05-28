import React, {useState} from 'react';
import {ClickableDonut} from './ClickableDonut';



export const Primary = () => {
    const [numBites, setNumBites] = useState(0);
    return(
        <ClickableDonut noOfBites={numBites} setNoOfBites={setNumBites} />
    );
}

Primary.storyName = 'default clickable donut';