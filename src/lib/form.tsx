type FormProps = {
  children?: React.ReactNode;
};

export default function Form(props: FormProps) {
  return (
    <form className="grid gap-3 max-w-[30ch] my-8 text-left">
      {props.children}
    </form>
  );
}
