import { useState } from "react";

export const useCounter = (init: number = 11) => {
  
    const [value, setValue] = useState(init);

    const acum = (num: number) => {
        setValue(value + num);
    }

    return {
        value, 
        acum
    }
};
