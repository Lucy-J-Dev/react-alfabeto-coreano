type FloatingLabelInputProps = {
  id: string;
  label: string;
  type?: string;
  value: string;
  onChange: () => void;
};

const FloatingLabelInput = ({ id, label, type = "text", value, onChange }: FloatingLabelInputProps) => {
  return (
    <div className="relative">
      <input
        className="peer h-12 w-full border-b-2 border-primary text-foreground placeholder-transparent focus:outline-none  focus:border-accent pt-2.5"
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        placeholder=" "
      />
      <label
        className={`absolute left-0 text-muted-forground transition-all peer-focus:top-0 peer-focus:text-sm peer-focus:text-accent ${
          value ? "top-0 text-sm text-accent" : "top-3 text-base"
        }`}
        htmlFor={id}
      >
        {label}
      </label>
    </div>
  );
};

export default FloatingLabelInput;

// peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:top-0 peer-focus:text-sm peer-focus:text-accent
