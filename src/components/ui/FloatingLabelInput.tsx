type FloatingLabelInputProps = {
  id: string;
  name: string;
  label: string;
  type?: string;
  value?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  minLength?: number;
  maxLength?: number;
  error?: string;
};

const FloatingLabelInput = ({
  id,
  name,
  label,
  type = "text",
  value = "",
  onChange,
  required,
  minLength,
  maxLength,
  error,
}: FloatingLabelInputProps) => {
  return (
    <div className="relative">
      <input
        className={`peer h-12 w-full border-b-2 text-foreground placeholder-transparent focus:outline-none pt-2.5 ${
          error ? "border-error focus:border-error" : "border-primary focus:border-accent"
        }`}
        id={id}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder=" "
        required={required}
        minLength={minLength}
        maxLength={maxLength}
      />
      <label
        className={`absolute left-0 transition-all peer-focus:top-0 peer-focus:text-sm  ${
          value ? "top-0 text-sm text-accent" : "top-3 text-base"
        } ${error ? "text-error peer-focus:text-error" : "text-muted-foreground peer-focus:text-accent"}`}
        htmlFor={id}
      >
        {label}
      </label>
      {error && <p className="text-error text-sm mt-1">{error}</p>}
    </div>
  );
};

export default FloatingLabelInput;

// peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:top-0 peer-focus:text-sm peer-focus:text-accent
