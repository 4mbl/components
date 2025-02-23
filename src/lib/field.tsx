import colors from 'tailwindcss/colors';
import { cn } from './utils';

type AutoCompletable = string & {};

type TailwindColorNames = keyof typeof colors;

type TailwindColorNumbers =
  | '50'
  | '100'
  | '200'
  | '300'
  | '400'
  | '500'
  | '600'
  | '700'
  | '800'
  | '900'
  | '950';
type TailwindColor = `${TailwindColorNames}-${TailwindColorNumbers}`;

type TailwindBackgroundColor = `bg-${TailwindColor}`;
type TailwindOutlineColor = `outline-${TailwindColor}`;

type FieldProps = {
  /** Unique id for the input element. If not provided, a random id will be generated */
  id?: string;
  children?: React.ReactNode;
  required?: boolean;
  placeholder?: string;
  type:
    | ('text' | 'email' | 'password' | 'number' | 'tel' | 'url')
    | AutoCompletable;
  minLength?: number;
  pattern?: string;
  colors?: {
    background?: TailwindBackgroundColor | AutoCompletable;
    outline?: TailwindOutlineColor | AutoCompletable;
  };
  className?: string;

  password?: {
    placeholderChar?: string;
  };

  disableFieldStateColors?: boolean;
};

const MIN_PASSWORD_LENGTH = 12 as const;
const EMAIL_REGEX = '[^@\\s]+@[^@\\s]+\\.[^@\\s]{2,}' as const;

/** Features:
 * - field state colors (valid, invalid, focus)
 * - email address auto-completion
 * - email address basic validation
 * - password length validation
 */
export default function Field(props: FieldProps) {
  const id = props.id ?? 'input-' + Math.random().toString(36).slice(2);
  const minLength = props.type === 'password' ? MIN_PASSWORD_LENGTH : 0;

  const placeholder =
    props.placeholder ??
    (props.type === 'email'
      ? 'jane.doe@example.com'
      : props.type === 'password'
        ? (props.password?.placeholderChar ?? '•').repeat(minLength)
        : 'Type something');

  const label =
    props.children ??
    (props.type === 'email'
      ? 'Email'
      : props.type === 'password'
        ? 'Password'
        : '');

  const fieldState = props.disableFieldStateColors
    ? ''
    : 'not-placeholder-shown:valid:outline-green-400 not-placeholder-shown:invalid:outline-red-400 focus:invalid:outline-yellow-400';

  return (
    <div className={cn('grid gap-1', props.className)}>
      <label htmlFor={id}>{label}</label>
      <input
        className={cn(
          'py-1 px-2 border-0 rounded outline-2 ',
          props.colors?.background ?? 'bg-slate-900',
          props.colors?.outline ?? 'outline-slate-400',
          fieldState,
        )}
        pattern={
          props.pattern || props.type === 'email'
            ? (props.pattern ?? EMAIL_REGEX)
            : undefined
        }
        required={props.required ?? true}
        minLength={minLength}
        placeholder={placeholder}
        id={id}
        type={props.type}
      ></input>
    </div>
  );
}
