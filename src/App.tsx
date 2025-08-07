import { useForm } from "react-hook-form";
import { Input } from "./Components/Input";

interface InputFieldProps {
  label?: string;
  id?: keyof FormData;
  type?: string;
  wrapper?: string;
  additionalClassName?: {
    label?: string;
    input?: string;
    feedback?: string;
  };
}

interface FormData {
  first_name: string;
  last_name: string;
  birth_date: string;
  password: string;
  confirm_password: string;
}

export default function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log(data);
  };

  const fields: InputFieldProps[] = [
    { label: "First Name", id: "first_name" },
    { label: "Last Name", id: "last_name" },
    { label: "Birth Date", id: "birth_date", type: "date", wrapper: "lg:col-span-2" },
    { label: "Password", id: "password", type: "password" },
    { label: "Confirm Password", id: "confirm_password", type: "password" },
  ];

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-4xl m-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-4"
    >
      {fields.map((field, index) => (
        <div key={index} className={field.wrapper ?? ""}>
          <Input
            label={field.label}
            id={field.id}
            type={field.type}
            register={register(field.id!, { required: `${field.label} is required` })}
            errorMessage={errors[field.id!]?.message}
            additionalClassName={field.additionalClassName}
          />
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
  );
}
