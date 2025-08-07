import { Input } from "./Components/Input";

interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  id?: string;
  wrapper?: string;
  additionalClassName?: {
    label?: string;
    input?: string;
    feedback?: string;
  };
}

export default function App() {
  const fields: InputFieldProps[] = [
    { label: "First Name", id: "first_name" },
    { label: "Last Name", id: "last_name" },
    { label: "Birth Date", id: "birth_date", type: "date", wrapper: "lg:col-span-2" },
    { label: "Password", id: "password", type: "password" },
    { label: "Confirm Password", id: "confirm_password", type: "password" },
    {
      type: "submit",
      value: "Login",
      wrapper: "lg:col-span-2 mt-4",
      additionalClassName: {
        input: "!bg-blue-600 hover:!bg-blue-500 cursor-pointer",
      },
    },
  ];

  return (
    <form className="max-w-4xl m-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-4">
      {fields.map((field, index) => (
        <div key={index} className={field.wrapper ?? ""}>
          <Input {...field} />
        </div>
      ))}
    </form>
  );
}
