type FormProps = {
  children?: React.ReactNode;
};

function Form(props: FormProps) {
  return (
    <form className="grid gap-3 max-w-[30ch] my-8 text-left">
      {props.children}
    </form>
  );
}

export default Form;
