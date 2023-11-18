interface Theme {
    light: string,
    dark: string
}

interface ThemeContextValue {
    theme: string,
    changeTheme: (theme: string) => void
}