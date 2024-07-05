type ThemeType = {
	body: string;
	text: string;
	toggleBorder: string;
	gradient: string;
	menuColor: string;
}

export const themeConfig: Record<string, ThemeType> = {
	"light": {
		body: '#FFFFFF',
		text: '#363537',
		toggleBorder: '#FFF',
		gradient: 'linear-gradient(#39598A, #79D7ED)',
		menuColor: "#333333"
	},
	"dark": {
		body: '#363537',
		text: '#FAFAFA',
		toggleBorder: '#6B8096',
		gradient: 'linear-gradient(#091236, #1E215D)',
		menuColor: "#ffffff"
	}
}