const roundNumberWithExp = (numberToRound: string): number => {
  const [before, after] = numberToRound.split('e');
  return +`${ Number(before).toFixed(1) }e${ after }`;
};

export default roundNumberWithExp;