export const Functions = () => {

    const summ = (a: number, b:number): number => {
        return a+b;
    }

  return (
      <>
        <h3>Functions</h3>
        <span>The result is: {summ(9, 2)} </span>
      </>
  )
};
