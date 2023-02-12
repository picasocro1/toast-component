import React from 'react'

export const useKeyListener = (code, callback) => {
    React.useEffect(() => {
        const onKeyDown = (event) => {
            if (event.code !== code) return

            callback()
        }

        window.addEventListener('keydown', onKeyDown)

        return () => window.removeEventListener('keydown', onKeyDown)
    }, [code, callback])
}
