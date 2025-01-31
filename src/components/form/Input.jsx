import { useFormContext } from "react-hook-form";
import { cn } from "../../helpers/common";

function Input({ name = "", placeholder = "", type = "text", className = "" }) {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className="space-y-1">
      <input
        {...register(name)}
        type={type}
        placeholder={placeholder}
        className={cn(
          "inline-block w-full border border-primary-400 bg-transparent py-4 px-2 outline-none text-white",
          className,
          {
            "border-error focus:border-error": errors[name],
          }
        )}
      />
      {errors[name] && (
        <p className="text-error  text-xs">{errors[name].message}</p>
      )}
    </div>
  );
}

export default Input;
