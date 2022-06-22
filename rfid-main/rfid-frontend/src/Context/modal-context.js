import * as React from 'react'

const ModalContext = React.createContext()

function modalReducer(state, action) {
    switch (action.type) {
        case 'open': {
            return { isModalOpen: true }
        }
        case 'close': {
            return { isModalOpen: false }
        }
        default: {
            throw new Error(`Unhandled action type: ${action.type}`)
        }
    }
}

function ModalProvider({ children }) {
    const [state, dispatch] = React.useReducer(modalReducer, { isModalOpen: false })
    const value = { state, dispatch }
    return <ModalContext.Provider value={value}>{children}</ModalContext.Provider>
}

function useModal() {
    const context = React.useContext(ModalContext)
    if (context === undefined) {
        throw new Error('useModal must be used within a CountProvider')
    }
    return context
}

export { ModalProvider, useModal }