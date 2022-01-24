import React from 'react';

export const BasicTypes = () => {

    const name: string = 'Andres';
    const age: number = 35;
    const isActive: boolean = false;

    const powers: string[] = ['Velocity', 'Fly', 'Breath on weather']

    return (
        <>
            <h3>Basic Types</h3>
            {name}, {age}, {(isActive) ? 'active' : 'not active'}
            <br />
            {powers.join(', ')}
        </>
    );
};
