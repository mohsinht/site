export const pageview = (url) => {
    if (window && window.gtag) {
        window.gtag('config', 'G-RJJ7FBBKY2', {
            page_path: url,
        })
    }
}

export const event = ({ action, params }) => {
    window.gtag('event', action, params)
}