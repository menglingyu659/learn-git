import React from "react";
import { Form } from "antd";
// import Form, { Field } from "rc-field-form";

// class Comp extends React.Component {
//   componentDidMount() {
//     console.log("did");
//   }
//   render() {
//     return <div>comp</div>;
//   }
// }

console.log(2);
function App() {
  const [form] = Form.useForm();
  console.log(form, "internal");
  console.log(form.getInternalHooks("RC_FORM_INTERNAL_HOOKS"));
  return (
    <div className="App">
      <Form form={form}></Form>
    </div>
  );
}

export default App;
