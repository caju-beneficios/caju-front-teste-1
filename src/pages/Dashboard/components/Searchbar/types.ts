interface SearchValues {
  cpf?: string;
  valid?: boolean;
}

export interface SearchBarProps {
  onRefresh?: () => {};
  onSearch: ({ cpf, valid }: SearchValues) => void;
}
