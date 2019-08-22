



export interface CssVariable {
  label: string;
  name: string;
  type: 'px' | '%' | 'color' | 'select' | 'number';
  options?: string[];
  step?: number;

  // max?: number;
  // min?: number;
  // tip?: string;
  // step?: number;
  // rgba?: boolean;
}

export interface CssVariableGroup {
  title: string;
  variables: CssVariable[];
}
