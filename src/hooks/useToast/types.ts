/**
 * Propriedades do provedor de Toast.
 *
 * @interface ToastProviderProps
 * @property {number} [maxToasters] - Número máximo de toasts permitidos simultaneamente. Opcional.
 * @property {number} [dismissTime] - Tempo em milissegundos até que o toast seja descartado automaticamente. Opcional.
 * @property {React.ReactNode} children - Elementos filho a serem renderizados dentro do `ToastProvider`.
 */
export interface ToastProviderProps {
  maxToasters?: number;
  dismissTime?: number;
  children: React.ReactNode;
}

/**
 * Dados do contexto de Toast.
 *
 * @interface ToastContextData
 * @property {function(ToasterMessage): void} addToaster - Função para adicionar uma nova mensagem de toast.
 */
export interface ToastContextData {
  addToaster: (toast: ToasterMessage) => void;
}

/**
 * Estrutura de um Toast.
 *
 * @interface Toast
 * @property {string} id - ID único do toast.
 * @property {string} text - Texto da mensagem do toast.
 * @property {ToastVariant} variant - Variante visual do toast (sucesso, aviso, perigo, informação).
 */
export interface Toast {
  id: string;
  text: string;
  variant: ToastVariant;
}

/**
 * Variantes possíveis para a mensagem de Toast.
 *
 * @typedef ToastVariant
 * @type {'success' | 'warning' | 'danger' | 'info'}
 */

export type ToastVariant = "success" | "danger";

/**
 * Estrutura da mensagem de Toast sem a propriedade de ID.
 *
 * @typedef ToasterMessage
 * @type {Omit<Toast, 'id'>}
 */
type ToasterMessage = Omit<Toast, "id">;
