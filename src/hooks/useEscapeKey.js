import React from 'react'

export const useEscapeKey = (callback) => {
    React.useEffect(() => {
        const onKeyDown = (event) => {
            if (event.code !== 'Escape') return

            callback()
        }

        window.addEventListener('keydown', onKeyDown)

        return () => window.removeEventListener('keydown', onKeyDown)
    }, [callback])
}
