import Field from './lib/field';
import Form from './lib/form';

function App() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-5xl mb-8">4mbl/components</h1>
      <h2 className="text-2xl">Forms</h2>
      <Form>
        <Field type="text">Name</Field>
        <Field type="email" />
        <Field
          type="password"
          colors={{
            background: 'bg-black-500',
            outline: 'outline-purple-400',
          }}
          disableFieldStateColors={true}
        />
      </Form>
    </main>
  );
}

export default App;
