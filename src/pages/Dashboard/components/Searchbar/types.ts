export interface SearchValues {
  cpf?: string;
  valid?: boolean;
}

export interface SearchBarProps {
  onRefresh?: () => void;
  onSearch: ({ cpf, valid }: SearchValues) => void;
}
