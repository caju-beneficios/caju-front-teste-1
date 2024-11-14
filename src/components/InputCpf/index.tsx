import { useState } from "react";
import { Input } from "./styles";
import { isValidCPF } from "src/utils/validadors";
import { formatCpf } from "src/utils/format";

type CPFInputProps = {
  handleSearch: (cpf: string) => void;
};

const CPFInput: React.FC<CPFInputProps> = ({ handleSearch }) => {
  const [cpf, setCpf] = useState<string>("");
  const [isCpfValid, setIsCpfValid] = useState<boolean | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const rawCpf = e.target.value.replace(/\D/g, "");
    const formattedCpf = formatCpf(rawCpf);
    setCpf(formattedCpf);

    if (rawCpf.length === 11) {
      const isValid = isValidCPF(formattedCpf);
      setIsCpfValid(isValid);
      if (isValid) {
        handleSearch(rawCpf);
      }
    } else {
      setIsCpfValid(null);
    }
  };

  return (
    <div>
      <Input
        type="text"
        value={cpf}
        onChange={handleInputChange}
        maxLength={14}
        placeholder="Digite um CPF válido"
      />
      {isCpfValid === false && (
        <span style={{ color: "red", fontSize: 12 }}>CPF inválido</span>
      )}
    </div>
  );
};

export default CPFInput;
