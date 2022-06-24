type checkboxColorType =
  | 'default'
  | 'primary'
  | 'secondary'
  | 'error'
  | 'info'
  | 'success'
  | 'warning';

type checkboxSizeType = 'medium' | 'small';

export default interface CheckboxProps {
  /** If true, the component is checked. */
  checked?: boolean;

  /** Callback fired when the state is changed. */
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  /** The checkbox label text */
  label: string;
  /** The color of the component. */
  color?: checkboxColorType;

  /** The size of the component. small is equivalent to the dense checkbox styling. */
  size?: checkboxSizeType;

  /** If true, the input element is required. */
  required?: boolean;

  /** If true, the ripple effect is disabled. */
  disableRipple?: boolean;
}
