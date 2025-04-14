
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			fontFamily: {
				sans: ['Inter', 'sans-serif'],
				display: ['Poppins', 'sans-serif'],
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				// AiBizzApps custom colors
				aiba: {
					bg: {
						dark: '#0F0A1A',
						light: '#221F26',
					},
					purple: {
						light: '#9b87f5',
						DEFAULT: '#7E69AB',
						dark: '#6E59A5',
					},
					accent: {
						blue: '#4169E1',
						cyan: '#3CEFFF',
						green: '#4ADE80',
						red: '#FF4D4D',
						yellow: '#FFD700',
					},
				},
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' },
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' },
				},
				'glow': {
					'0%, 100%': { 
						opacity: '1',
						filter: 'brightness(1)'
					},
					'50%': { 
						opacity: '0.8',
						filter: 'brightness(1.2)'
					},
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-10px)' },
				},
				'gradient-shift': {
					'0%': { backgroundPosition: '0% 50%' },
					'50%': { backgroundPosition: '100% 50%' },
					'100%': { backgroundPosition: '0% 50%' },
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'glow': 'glow 3s ease-in-out infinite',
				'float': 'float 6s ease-in-out infinite',
				'gradient-shift': 'gradient-shift 15s ease infinite',
			},
			backgroundImage: {
				'hero-gradient': 'linear-gradient(to bottom right, #221F26, #1A1F2C, #0F0A1A)',
				'card-gradient': 'linear-gradient(to bottom right, rgba(126, 105, 171, 0.1), rgba(155, 135, 245, 0.05))',
				'card-header-blue': 'linear-gradient(135deg, rgba(40, 82, 175, 0.8), rgba(86, 125, 244, 0.6))',
				'card-header-purple': 'linear-gradient(135deg, rgba(123, 31, 162, 0.8), rgba(176, 105, 251, 0.6))',
				'card-header-teal': 'linear-gradient(135deg, rgba(11, 117, 133, 0.8), rgba(49, 199, 181, 0.6))',
				'card-header-orange': 'linear-gradient(135deg, rgba(194, 65, 12, 0.8), rgba(249, 115, 22, 0.6))',
				'mesh-pattern': 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'100\' height=\'100\' viewBox=\'0 0 100 100\'%3E%3Crect width=\'100\' height=\'100\' fill=\'%23000000\' fill-opacity=\'0.15\'/%3E%3Cpath d=\'M0 0L100 100ZM100 0L0 100Z\' stroke=\'%23FFFFFF\' stroke-width=\'0.2\' stroke-opacity=\'0.05\'/%3E%3C/svg%3E")',
			},
		},
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
