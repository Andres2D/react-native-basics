import { useState } from 'react';

export const useForm = <T extends Object>(form: T) => {
  
    const [state, setState] = useState(form);

    const onChanges = ( value: string, field: keyof T ) => {
        setState({
            ...state,
            [field]: value
        });
    }

    return {
        ...state,
        form: state,
        onChanges
    }
};
