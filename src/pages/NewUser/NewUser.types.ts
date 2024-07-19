export interface NewUserControllerProps {
  push: (route: string) => void;
}

export interface FormValues {
  name: string;
  email: string;
  document_number: string;
  date: string;
}
