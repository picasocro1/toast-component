import React from "react";
import {useEscapeKey} from '../../hooks/useEscapeKey'

const VARIANT_OPTIONS = ['notice', 'warning', 'success', 'error'];

const defaultVariant = VARIANT_OPTIONS[0]
export const ToastContext = React.createContext()
function ToastProvider({ children }) {
  const [data, setData] = React.useState([])

  useEscapeKey(() => setData([]))

  const createToastData = ({ variant, message }) => {
    const id = window.crypto.randomUUID()
    const dismiss = () => setData((data) => data.filter(
        (record) => record.id !== id
    ))
    return {
      id,
      variant,
      message,
      dismiss
    }
  }

  const addToastData = ({ variant = defaultVariant, message }) => {
    setData([...data, createToastData({ variant, message })])
  }

  return <ToastContext.Provider value={{
    data,
    variants: VARIANT_OPTIONS,
    defaultVariant,
    addToastData
  }}>
    {children}
  </ToastContext.Provider>;
}

export default ToastProvider;
