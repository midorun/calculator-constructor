export enum EMods {
  Runtime = 'Runtime',
  Constructor = 'Constructor'
}

export type TMode = keyof typeof EMods

export enum EComponents {
  display = 'display',
  operations = 'operations',
  operands = 'operands',
  equalBtn = 'equalBtn'
}

export type TTab = {
  iconId: string
  mode: TMode
}

export type TComponent = keyof typeof EComponents
 
export type TComponentMatcher = {
  [key in TComponent]: JSX.Element;
};