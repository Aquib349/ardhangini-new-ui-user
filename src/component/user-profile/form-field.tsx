import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";

interface formFieldProps {
  control: any;
  name: string;
  label: string;
  placeholder: string;
  isTextarea: boolean;
}

const FormFieldComponent = ({
  control,
  name,
  label,
  placeholder,
  isTextarea,
}: formFieldProps) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className="space-y-0">
          <FormLabel>{label}</FormLabel>
          <FormControl>
            {isTextarea ? (
              <Textarea placeholder={placeholder} {...field} />
            ) : (
              <Input placeholder={placeholder} {...field} />
            )}
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default FormFieldComponent;
