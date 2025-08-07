import { Input } from "./Components/Input";

export default function App() {
    return (
      <form className="max-w-4xl m-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div>
          <Input label="First Name" id="first_name" />
        </div>
        <div>
          <Input label="Last Name" id="last_name" />
        </div>
        <div>
          <Input label="Birth Date" type="date" id="birth_date" />
        </div>
      </form>
    );
}
