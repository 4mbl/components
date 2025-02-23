# 4mbl/components

A collection of React components proven useful across various projects

## Usage

1. install

    ```bash
    pnpm add @4mbl/components
    ```

2. import styles in your layout / wrapper component file

    ```tsx
    import '@4mbl/components/.css';
    ```

3. use components

    ```tsx
    import { Form, Field } from '@4mbl/components';

    export default function Page() {
    return (
        <Form>
        <Field type="email"/>
        <Field type="password"/>
        </Form>
    );
    }
    ```

## License

[MIT](./LICENSE)
