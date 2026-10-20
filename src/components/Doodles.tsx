type DoodleProps = {
	className?: string
}

const stroke = {
	fill: 'none',
	stroke: 'currentColor',
	strokeLinecap: 'round' as const,
	strokeLinejoin: 'round' as const,
}

/** Três risquinhos de “brilho”, usados ao lado dos títulos. */
export function Sparks({ className = '', flip = false }: DoodleProps & { flip?: boolean }) {
	return (
		<svg
			viewBox="0 0 28 28"
			className={className}
			style={flip ? { transform: 'scaleX(-1)' } : undefined}
			aria-hidden="true"
		>
			<g {...stroke} strokeWidth="2.6">
				<path d="M20 4.5 17.5 10" />
				<path d="M24.5 14.5h-6.5" />
				<path d="M21 23.5l-4.5-4" />
			</g>
		</svg>
	)
}

export function Heart({ className = '' }: DoodleProps) {
	return (
		<svg viewBox="0 0 24 24" className={className} aria-hidden="true">
			<path
				d="M12 20.5c-.4 0-7.8-4.6-8.9-9.6C2.4 7.6 4.5 4.6 7.5 4.6c2 0 3.4 1.2 4.4 2.8 1-1.7 2.6-2.9 4.6-2.9 3.1 0 5 3 4.3 6.2-1.1 5.1-8.4 9.8-8.8 9.8Z"
				fill="currentColor"
			/>
		</svg>
	)
}

export function HeartOutline({ className = '' }: DoodleProps) {
	return (
		<svg viewBox="0 0 24 24" className={className} aria-hidden="true">
			<path
				{...stroke}
				strokeWidth="1.8"
				d="M12 20.5c-.4 0-7.8-4.6-8.9-9.6C2.4 7.6 4.5 4.6 7.5 4.6c2 0 3.4 1.2 4.4 2.8 1-1.7 2.6-2.9 4.6-2.9 3.1 0 5 3 4.3 6.2-1.1 5.1-8.4 9.8-8.8 9.8Z"
			/>
		</svg>
	)
}

/** Pincelada para sublinhar uma palavra do título. */
export function BrushUnderline({ className = '' }: DoodleProps) {
	return (
		<svg
			viewBox="0 0 300 24"
			preserveAspectRatio="none"
			className={className}
			aria-hidden="true"
		>
			<path
				d="M8 6c48-4 112-5 172-4 40 1 80 2 114 5 4 3 3 9-1 12-60 3-130 4-196 4-30 0-62-1-90-2-6-4-6-11 1-15Z"
				fill="currentColor"
			/>
		</svg>
	)
}

/** Raminho de folhas desenhado à mão. */
export function Sprig({ className = '' }: DoodleProps) {
	return (
		<svg viewBox="0 0 120 200" className={className} aria-hidden="true">
			<path
				{...stroke}
				strokeWidth="3"
				d="M62 196C58 150 60 100 70 52 74 34 80 18 88 6"
			/>
			<g fill="currentColor">
				<path d="M63 160c-18-2-34-14-40-30 18 0 34 11 40 30Z" opacity=".85" />
				<path d="M62 130c16-6 34-4 46 8-16 7-34 5-46-8Z" />
				<path d="M64 104c-16-4-28-18-30-34 16 4 28 16 30 34Z" opacity=".85" />
				<path d="M68 78c12-12 30-16 44-10-10 13-28 17-44 10Z" />
				<path d="M72 52c-12-8-18-22-16-36 12 8 18 22 16 36Z" opacity=".85" />
				<path d="M80 30c8-12 20-18 32-16-6 12-18 18-32 16Z" />
			</g>
		</svg>
	)
}

/** Folha grande estilizada para os cantos. */
export function Monstera({ className = '' }: DoodleProps) {
	return (
		<svg viewBox="0 0 160 220" className={className} aria-hidden="true">
			<path
				d="M80 212C30 190 6 140 14 86 20 44 48 12 84 6c40 6 66 44 66 90 0 56-28 100-70 116Z"
				fill="currentColor"
			/>
			<g {...stroke} stroke="#fbf6ee" strokeWidth="5" opacity=".55">
				<path d="M82 208C80 150 82 80 86 12" />
				<path d="M82 160 36 128" />
				<path d="M82 120 30 84" />
				<path d="M84 80 46 48" />
				<path d="M82 150l46-34" />
				<path d="M84 108l50-36" />
				<path d="M85 70l36-30" />
			</g>
		</svg>
	)
}

/** Rabisco de pincel para os cantos das faixas. */
export function Scribble({ className = '' }: DoodleProps) {
	return (
		<svg viewBox="0 0 120 90" className={className} aria-hidden="true">
			<path
				{...stroke}
				strokeWidth="9"
				d="M8 70 40 14M30 80 70 18M56 84l42-60M82 82l30-42"
			/>
		</svg>
	)
}

export function Squiggle({ className = '' }: DoodleProps) {
	return (
		<svg viewBox="0 0 120 20" className={className} aria-hidden="true">
			<path
				{...stroke}
				strokeWidth="3"
				d="M3 12c8-8 14-8 20 0s12 8 20 0 14-8 20 0 12 8 20 0 14-8 20 0 10 6 14 2"
			/>
		</svg>
	)
}

/** Seta curvinha desenhada à mão. */
export function CurlyArrow({ className = '' }: DoodleProps) {
	return (
		<svg viewBox="0 0 90 60" className={className} aria-hidden="true">
			<g {...stroke} strokeWidth="2.6">
				<path d="M4 8c18 2 30 12 30 24 0 10-10 12-12 4-2-10 14-18 30-10 12 6 20 16 26 26" />
				<path d="M70 42l8 10 3-13" />
			</g>
		</svg>
	)
}

export function ArrowRight({ className = '' }: DoodleProps) {
	return (
		<svg viewBox="0 0 24 24" className={className} aria-hidden="true">
			<g {...stroke} strokeWidth="2.2">
				<path d="M5 12h14" />
				<path d="m13 6 6 6-6 6" />
			</g>
		</svg>
	)
}

export function InstagramIcon({ className = '' }: DoodleProps) {
	return (
		<svg viewBox="0 0 24 24" className={className} aria-hidden="true">
			<g {...stroke} strokeWidth="1.8">
				<rect x="3" y="3" width="18" height="18" rx="5" />
				<circle cx="12" cy="12" r="4" />
			</g>
			<circle cx="17.5" cy="6.5" r="1.1" fill="currentColor" />
		</svg>
	)
}

export function WhatsAppIcon({ className = '' }: DoodleProps) {
	return (
		<svg viewBox="0 0 24 24" className={`fill-current ${className}`} aria-hidden="true">
			<path d="M20.52 3.48A11.82 11.82 0 0 0 12.07 0C5.5 0 .16 5.34.16 11.91c0 2.1.55 4.14 1.6 5.94L0 24l6.32-1.66a11.86 11.86 0 0 0 5.75 1.47h.01c6.57 0 11.91-5.34 11.91-11.91 0-3.18-1.24-6.17-3.47-8.42ZM12.08 21.8h-.01a9.9 9.9 0 0 1-5.05-1.39l-.36-.21-3.75.98 1-3.66-.24-.37a9.88 9.88 0 0 1-1.51-5.24c0-5.47 4.45-9.92 9.92-9.92 2.65 0 5.14 1.03 7.01 2.91a9.86 9.86 0 0 1 2.9 7.01c0 5.47-4.45 9.92-9.91 9.92Zm5.44-7.43c-.3-.15-1.77-.87-2.05-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.38-1.48-.88-.78-1.47-1.75-1.65-2.05-.17-.3-.02-.46.13-.6.14-.14.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.48-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.05 1.02-1.05 2.5 0 1.47 1.07 2.89 1.22 3.09.15.2 2.1 3.2 5.08 4.48.71.31 1.27.5 1.71.64.72.23 1.38.2 1.9.12.58-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35Z" />
		</svg>
	)
}

/* Ícones de linha para os diferenciais */
export function BrushIcon({ className = '' }: DoodleProps) {
	return (
		<svg viewBox="0 0 32 32" className={className} aria-hidden="true">
			<g {...stroke} strokeWidth="2">
				<path d="M26.5 4.5 14 17" />
				<path d="M14 17c-3-1-6 0-7 3-1 2.5-1 4.5-3.5 6.5 4 .5 8-.5 10-3 1.6-2 1.8-4.5.5-6.5Z" />
				<path d="M24 3.5l4.5 4.5" />
			</g>
		</svg>
	)
}

export function SparkleIcon({ className = '' }: DoodleProps) {
	return (
		<svg viewBox="0 0 32 32" className={className} aria-hidden="true">
			<g {...stroke} strokeWidth="2">
				<path d="M16 4c1 6 3.5 9 10 10-6.5 1-9 4-10 12-1-8-3.5-11-10-12 6.5-1 9-4 10-10Z" />
				<path d="M26 22.5v5M23.5 25h5" />
			</g>
		</svg>
	)
}

export function GiftIcon({ className = '' }: DoodleProps) {
	return (
		<svg viewBox="0 0 32 32" className={className} aria-hidden="true">
			<g {...stroke} strokeWidth="2">
				<rect x="5" y="12" width="22" height="15" rx="2" />
				<path d="M3.5 12h25v-4h-25Z" />
				<path d="M16 8v19" />
				<path d="M16 8c-2-4-8-5-8-1.5S13 8 16 8Zm0 0c2-4 8-5 8-1.5S19 8 16 8Z" />
			</g>
		</svg>
	)
}
