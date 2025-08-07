import { useForm, FormProvider } from "react-hook-form";
import { Input } from "./Components/Input";
import type { HTMLInputTypeAttribute } from "react";

interface FormData {
  first_name: string;
  last_name: string;
  birth_date: string;
  password: string;
  confirm_password: string;
}

interface FieldProps {
  name?: string;
  label?: string;
  type?: HTMLInputTypeAttribute;
  wrapper?: string;
  pattern?: string;
}

export default function App() {
  const methods = useForm<FormData>();
  const { handleSubmit } = methods;

  const onSubmit = (data: FormData) => {
    console.log(data);
  };

  const fields: FieldProps[] = [
    { name: "first_name", label: "First Name" },
    { name: "last_name", label: "Last Name" },
    { name: "email", label: "Email", pattern: "/^[^\s@]+@[^\s@]+\.[^\s@]+$/" },
    { name: "birth_date", label: "Birth Date", type: "date"},
    { name: "password", label: "Password", type: "password" },
    { name: "confirm_password", label: "Confirm Password", type: "password" },
  ];

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-4xl m-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-4"
      >
        {fields.map(field => (
          <div key={field.name} className={field?.wrapper ?? ""}>
            <Input {...field} />
          </div>
        ))}

        <div className="lg:col-span-2 mt-4">
          <Input
            type="submit"
            value="Login"
            additionalClassName={{
              input: "!bg-blue-600 hover:!bg-blue-500 cursor-pointer",
            }}
          />
        </div>
      </form>
    </FormProvider>
  );
}
