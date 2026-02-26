import type { ReactNode } from "react"

type ErrorMessageProp = {
    children: ReactNode
}

function ErrorMessage({children}: ErrorMessageProp) {
  return (
    <p className="bg-red-600 p-2 text-white text-center font-bold rounded-lg">
      {children}
    </p>
  )
}

export default ErrorMessage