import { useEffect, useState, type ReactNode } from 'react'
import logo from './assets/Logo.svg'
import banqueta from './assets/banqueta.jpeg'
import caixotePersonalizado from './assets/caixote-personalizado.jpeg'
import fotoCasal from './assets/foto-casal.jpeg'
import fotoPerfil from './assets/foto-perfil.jpg'
import placaChurrasqueira from './assets/placa-churrasqueira.jpeg'
import placaLivro from './assets/placa-livro.jpeg'
import placaPensamento from './assets/placa-pensamento.jpeg'
import placaPensamento2 from './assets/placa-pensamento2.jpeg'
import placaPensamento3 from './assets/placa-pensamento3.jpeg'
import placaPensamento4 from './assets/placa-pensamento4.jpeg'
import portaChaves from './assets/porta-chaves.jpeg'
import portaChaves01 from './assets/porta-chaves01.jpeg'
import portaEspelho from './assets/porta-espelho.jpeg'
import portaRetrato from './assets/porta-retrato.jpeg'
import quadroFamilia2 from './assets/quadro-familia-2.jpg'
import quadroFamilia from './assets/quadro-familia.jpg'
import quadroFlamengo from './assets/quadro-flamengo.jpg'
import quadroMensagem from './assets/quadro-mensagem.jpg'
import quadroNomeFilha2 from './assets/quadro-nome-filha-2.jpg'
import quadroNomeFilha3 from './assets/quadro-nome-filha-3.jpg'
import quadroNomeFilha from './assets/quadro-nome-filha.jpg'
import quadroNomeFilho2 from './assets/quadro-nome-filho-2.jpg'
import quadroNomeFilho3 from './assets/quadro-nome-filho-3.jpg'
import quadroNomeFilho4 from './assets/quadro-nome-filho-4.jpg'
import quadroNomeFilho from './assets/quadro-nome-filho.jpg'
import banqueta2 from './assets/banqueta-2.jpeg'
import caixotePersonalizado2 from './assets/caixote-personalizado-2.jpeg'
import placaPensamentos2 from './assets/placa-pensamentos-2.jpeg'
import placaPensamentos from './assets/placa-pensamentos.jpeg'
import portaRetrato2 from './assets/porta-retrato-2.jpeg'
import portaRetrato3 from './assets/porta-retrato-3.jpeg'
import portaRetrato4 from './assets/porta-retrato-4.jpeg'
import portaRetrato5 from './assets/porta-retrato-5.jpeg'
import portaRetratoFamilia from './assets/porta-retrato-familia.jpeg'
import quadroFamilia3 from './assets/quadro-familia-3.jpeg'
import quadroFamilia4 from './assets/quadro-familia-4.jpeg'
import quadroFamilia5 from './assets/quadro-familia5.jpeg'
import quadroFamilia6 from './assets/quadro-familia-6.jpeg'
import quadroFamilia7 from './assets/quadro-familia-7.jpeg'
import quadroNomeFilho5 from './assets/quadro-nome-filho-5.jpeg'
import quadroNomeFilho6 from './assets/quadro-nome-filho-6.jpeg'
import quadroNomeFilho7 from './assets/quadro-nome-filho-7.jpeg'
import quadroNomeFilho8 from './assets/quadro-nome-filho-8.jpeg'
import quadroPensamento from './assets/quadro-pensamento.jpeg'
import quadroPensamento2 from './assets/quadro-pensamento-2.jpeg'
import quadroPet from './assets/quadro-pet.jpeg'
import quadroRelogios from './assets/quadro-relogios.jpeg'
import quadroRetratoFilho from './assets/quadro-retrato-filho.jpeg'
import {
	ArrowRight,
	BrushIcon,
	BrushUnderline,
	CurlyArrow,
	GiftIcon,
	Heart,
	InstagramIcon,
	Monstera,
	Scribble,
	SparkleIcon,
	Sparks,
	Sprig,
	Squiggle,
	WhatsAppIcon,
} from './components/Doodles'
import SiteFooter from './components/SiteFooter'
import SiteHeader, { type NavItem } from './components/SiteHeader'

type AppPage = 'home' | 'galeria'

type GalleryItem = {
	title: string
	subtitle: string
	detail: string
	status: 'Disponível para entrega' | 'Sob encomenda'
	image: string
	category: CategoryId
}

type CategoryId = 'maternidade' | 'retratos' | 'frases' | 'fe' | 'casa'

const whatsappLink =
	'https://wa.me/5535999838671?text=Ol%C3%A1!%20Quero%20solicitar%20uma%20arte%20personalizada%20da%20Decor%C3%AA%20Arts.'

const galleryRoute = '#/galeria'

const getPageFromHash = (): AppPage =>
	window.location.hash === galleryRoute ? 'galeria' : 'home'

const galleryItems: GalleryItem[] = [
	{
		title: 'Placa de Pensamento',
		subtitle: 'Estilo afetivo',
		detail:
			'Peça personalizada com acabamento delicado para decorar com leveza e identidade.',
		status: 'Disponível para entrega',
		image: placaPensamento2,
		category: 'frases',
	},
	{
		title: 'Placa Churrasqueira',
		subtitle: 'Tema especial',
		detail:
			'Peça artesanal pensada para áreas gourmet, presentes criativos e momentos de confraternização.',
		status: 'Disponível para entrega',
		image: placaChurrasqueira,
		category: 'frases',
	},
	{
		title: 'Porta-Retrato',
		subtitle: 'Memórias em destaque',
		detail:
			'Peça artesanal pensada para eternizar momentos especiais com delicadeza.',
		status: 'Disponível para entrega',
		image: portaRetrato,
		category: 'casa',
	},
	{
		title: 'Porta Pensamento Sonho',
		subtitle: 'Colorida e artesanal',
		detail:
			'Placa com pintura manual e lettering para trazer personalidade ao ambiente.',
		status: 'Disponível para entrega',
		image: quadroMensagem,
		category: 'frases',
	},
	{
		title: 'Porta Recordações Família',
		subtitle: 'Linha minimalista',
		detail:
			'Arte afetiva em madeira com traço delicado para eternizar a família e os pets.',
		status: 'Sob encomenda',
		image: quadroFamilia,
		category: 'retratos',
	},
	{
		title: 'Porta Recordações Família',
		subtitle: 'Presente personalizado',
		detail:
			'Composição ilustrada com frase especial para decorar com memória e carinho.',
		status: 'Sob encomenda',
		image: quadroFamilia2,
		category: 'retratos',
	},
	{
		title: 'Placa Temática Flamengo',
		subtitle: 'Paixão em destaque',
		detail:
			'Peça personalizada para presentear quem ama futebol e identidade visual marcante.',
		status: 'Sob encomenda',
		image: quadroFlamengo,
		category: 'frases',
	},
	{
		title: 'Porta Maternidade Analua',
		subtitle: 'Lua e borboletas',
		detail:
			'Decoração infantil delicada com pintura suave e toque lúdico em madeira.',
		status: 'Sob encomenda',
		image: quadroNomeFilha,
		category: 'maternidade',
	},
	{
		title: 'Porta Maternidade Ísis',
		subtitle: 'Arco-íris delicado',
		detail:
			'Peça personalizada com nome e elementos leves para quartos cheios de encanto.',
		status: 'Sob encomenda',
		image: quadroNomeFilha2,
		category: 'maternidade',
	},
	{
		title: 'Porta Maternidade Alice',
		subtitle: 'Jardim personalizado',
		detail:
			'Com flores e borboletas, essa arte combina doçura, cor e acabamento artesanal.',
		status: 'Sob encomenda',
		image: quadroNomeFilha3,
		category: 'maternidade',
	},
	{
		title: 'Porta Maternidade José Marcos',
		subtitle: 'Tema infantil',
		detail:
			'Modelo com corda e personagens ilustrados para portas e espaços infantis.',
		status: 'Sob encomenda',
		image: quadroNomeFilho,
		category: 'maternidade',
	},
	{
		title: 'Porta Maternidade Samuel',
		subtitle: 'Universo divertido',
		detail:
			'Arte em madeira com ilustração lúdica para compor uma decoração alegre.',
		status: 'Sob encomenda',
		image: quadroNomeFilho2,
		category: 'maternidade',
	},
	{
		title: 'Porta Maternidade Heitor',
		subtitle: 'Visual contemporâneo',
		detail:
			'Composição moderna em tons suaves para um resultado minimalista e elegante.',
		status: 'Sob encomenda',
		image: quadroNomeFilho3,
		category: 'maternidade',
	},
	{
		title: 'Porta Maternidade Benício',
		subtitle: 'Safari delicado',
		detail:
			'Peça personalizada com animais fofos e acabamento feito à mão com carinho.',
		status: 'Sob encomenda',
		image: quadroNomeFilho4,
		category: 'maternidade',
	},
	{
		title: 'Banqueta Personalizada',
		subtitle: 'Peça decorativa',
		detail:
			'Acabamento artesanal em madeira para compor ambientes com personalidade.',
		status: 'Sob encomenda',
		image: banqueta,
		category: 'casa',
	},
	{
		title: 'Porta Espelho',
		subtitle: 'Funcional e elegante',
		detail:
			'Peça feita à mão que une delicadeza, utilidade e identidade visual autoral.',
		status: 'Sob encomenda',
		image: portaEspelho,
		category: 'casa',
	},
	{
		title: 'Caixote Personalizado',
		subtitle: 'Organização com afeto',
		detail:
			'Caixote decorativo em madeira para compor ambientes com charme e personalização.',
		status: 'Sob encomenda',
		image: caixotePersonalizado,
		category: 'casa',
	},
	{
		title: 'Placa Decorativa Livro',
		subtitle: 'Leitura e personalidade',
		detail:
			'Modelo em madeira com composição delicada para cantinhos de leitura e ambientes acolhedores.',
		status: 'Sob encomenda',
		image: placaLivro,
		category: 'frases',
	},
	{
		title: 'Placa de Pensamento',
		subtitle: 'Mensagem inspiradora',
		detail:
			'Letreiro artesanal em madeira para destacar frases cheias de significado.',
		status: 'Sob encomenda',
		image: placaPensamento,
		category: 'frases',
	},
	{
		title: 'Placa de Pensamento',
		subtitle: 'Charme artesanal',
		detail:
			'Composição em madeira criada para valorizar mensagens especiais no ambiente.',
		status: 'Sob encomenda',
		image: placaPensamento3,
		category: 'frases',
	},
	{
		title: 'Placa de Pensamento',
		subtitle: 'Detalhes únicos',
		detail:
			'Modelo autoral com pintura suave e presença acolhedora para vários espaços.',
		status: 'Sob encomenda',
		image: placaPensamento4,
		category: 'frases',
	},
	{
		title: 'Porta-Chaves Decorativo',
		subtitle: 'Organização com estilo',
		detail:
			'Peça funcional em madeira para entrada, cozinha ou área social com toque artesanal.',
		status: 'Sob encomenda',
		image: portaChaves,
		category: 'casa',
	},
	{
		title: 'Porta-Chaves Personalizado',
		subtitle: 'Feito para o seu lar',
		detail:
			'Modelo em madeira ideal para organizar as chaves e valorizar a decoração do ambiente.',
		status: 'Sob encomenda',
		image: portaChaves01,
		category: 'casa',
	},
	{
		title: 'Porta Maternidade Helena',
		subtitle: 'Sol e corações',
		detail:
			'Sol sorridente, nuvens e corações pendurados em uma composição delicada e cheia de luz.',
		status: 'Sob encomenda',
		image: quadroNomeFilho5,
		category: 'maternidade',
	},
	{
		title: 'Porta Maternidade Maria Helena',
		subtitle: 'Abelhinhas e flores',
		detail:
			'Tons de rosa, margaridas e abelhinhas para um quartinho alegre e delicado.',
		status: 'Sob encomenda',
		image: quadroNomeFilho8,
		category: 'maternidade',
	},
	{
		title: 'Porta Maternidade Miguel',
		subtitle: 'Xadrez em tons de azul',
		detail:
			'Monograma pintado à mão sobre fundo xadrez em azul e verde suave.',
		status: 'Sob encomenda',
		image: quadroNomeFilho6,
		category: 'maternidade',
	},
	{
		title: 'Porta Maternidade Ravi Lucca',
		subtitle: 'Céu azul e carrinho',
		detail:
			'Céu azul com nuvens e um carrinho na estrada, pintado à mão com muito carinho.',
		status: 'Sob encomenda',
		image: portaRetrato5,
		category: 'maternidade',
	},
	{
		title: 'Miguel em produção',
		subtitle: 'Bastidores da pintura',
		detail:
			'Um olhar sobre o processo: cada detalhe da peça é pintado à mão, pincelada por pincelada.',
		status: 'Sob encomenda',
		image: quadroNomeFilho7,
		category: 'maternidade',
	},
	{
		title: 'Retrato Lar é Onde o Amor Está',
		subtitle: 'Casal e pets',
		detail:
			'Retrato em traço fino do casal com seus três cachorros, finalizado com fita de couro.',
		status: 'Sob encomenda',
		image: quadroFamilia3,
		category: 'retratos',
	},
	{
		title: 'Retrato Pais & Bebê',
		subtitle: 'O maior e mais intenso amor',
		detail:
			'Retrato detalhado da família com o bebê, com tatuagens e traços fiéis à foto original.',
		status: 'Sob encomenda',
		image: quadroFamilia6,
		category: 'retratos',
	},
	{
		title: 'Retrato Amor de Avós',
		subtitle: 'Família reunida',
		detail:
			'Toda a família em traço minimalista com a frase “Amor de avós é abraço na alma”.',
		status: 'Sob encomenda',
		image: quadroFamilia4,
		category: 'retratos',
	},
	{
		title: 'Retrato Tutora & Pets',
		subtitle: 'Amor de quatro patas',
		detail:
			'Ilustração afetiva da tutora abraçada aos seus pets, com frase escrita ao redor da peça.',
		status: 'Sob encomenda',
		image: quadroFamilia5,
		category: 'retratos',
	},
	{
		title: 'Retrato Pets',
		subtitle: 'Onde há amor, Deus está presente',
		detail:
			'Gatos, cachorro e periquito juntos em uma ilustração com estrelinhas douradas.',
		status: 'Sob encomenda',
		image: quadroPet,
		category: 'retratos',
	},
	{
		title: 'Retrato Família & Pets',
		subtitle: 'Todo mundo junto',
		detail:
			'Casal, cachorros e gato reunidos em um retrato ilustrado com a palavra “família”.',
		status: 'Sob encomenda',
		image: portaRetrato4,
		category: 'retratos',
	},
	{
		title: 'Retrato Feminino',
		subtitle: 'Detalhes em roxo vibrante',
		detail:
			'Esboço à mão livre com detalhes coloridos e a frase “Mulher, você pode ser tudo o que quiser”.',
		status: 'Sob encomenda',
		image: portaRetrato2,
		category: 'retratos',
	},
	{
		title: 'Retrato Família na Caixa',
		subtitle: 'Pronto para presentear',
		detail:
			'Retrato ilustrado entregue na embalagem da Decorê Arts, pronto para emocionar.',
		status: 'Sob encomenda',
		image: quadroFamilia7,
		category: 'retratos',
	},
	{
		title: 'Retrato Família Completa',
		subtitle: 'Pais e filhos',
		detail:
			'Família inteira retratada em traço fino, uma lembrança para ficar na parede por gerações.',
		status: 'Sob encomenda',
		image: portaRetratoFamilia,
		category: 'retratos',
	},
	{
		title: 'Retrato em Família',
		subtitle: 'Traço minimalista',
		detail:
			'Família desenhada em traço fino sobre madeira, com fita de couro para pendurar.',
		status: 'Sob encomenda',
		image: portaRetrato3,
		category: 'retratos',
	},
	{
		title: 'Placa de Fé',
		subtitle: 'O fim era apenas o começo',
		detail:
			'Jesus pintado à mão em tons terrosos, com a frase “O que parecia ser o fim era apenas o começo”.',
		status: 'Sob encomenda',
		image: quadroPensamento,
		category: 'fe',
	},
	{
		title: 'Placa Casamento B | J',
		subtitle: 'Até que Ele venha',
		detail:
			'Monograma do casal com data e ramos delicados, perfeito para celebrar o casamento.',
		status: 'Sob encomenda',
		image: quadroPensamento2,
		category: 'fe',
	},
	{
		title: 'Placa Casamento B | J',
		subtitle: 'Decoração com fé',
		detail:
			'A placa do casal compondo a decoração ao lado da imagem da Sagrada Família.',
		status: 'Sob encomenda',
		image: placaPensamentos,
		category: 'fe',
	},
	{
		title: 'Relógio de Parede',
		subtitle: 'Tons terrosos',
		detail:
			'Relógio artesanal pintado à mão em rosa e terracota, com alça de couro.',
		status: 'Sob encomenda',
		image: quadroRelogios,
		category: 'casa',
	},
	{
		title: 'Porta-Retratos Miguel e João',
		subtitle: 'Varal de fotos',
		detail:
			'Molduras de madeira com folhagens pintadas à mão e prendedor para fotos instantâneas.',
		status: 'Sob encomenda',
		image: quadroRetratoFilho,
		category: 'casa',
	},
	{
		title: 'Banqueta Poá',
		subtitle: 'Vermelho e bolinhas',
		detail:
			'Assento pintado à mão em vermelho com bolinhas coloridas e detalhe nos pés.',
		status: 'Sob encomenda',
		image: banqueta2,
		category: 'casa',
	},
	{
		title: 'Caixote Infantil',
		subtitle: 'Tema de desenho animado',
		detail:
			'Caixote organizador personalizado para guardar os brinquedos com muita alegria.',
		status: 'Sob encomenda',
		image: caixotePersonalizado2,
		category: 'casa',
	},
	{
		title: 'Porta-Chaves Passarinho',
		subtitle: 'Amarelo vibrante',
		detail:
			'Porta-chaves com passarinho no galho, pintado à mão em amarelo e preto.',
		status: 'Sob encomenda',
		image: placaPensamentos2,
		category: 'casa',
	},
]

const instagramLink = 'https://www.instagram.com/decoreart.s/'

type Category = {
	id: CategoryId
	label: string
	description: string
	image: string
	color: string
}

const categories: Category[] = [
	{
		id: 'maternidade',
		label: 'Maternidade',
		description:
			'Placas com o nome do bebê, cores e personagens escolhidos por você.',
		image: quadroNomeFilho8,
		color: 'bg-blush',
	},
	{
		id: 'retratos',
		label: 'Retratos ilustrados',
		description:
			'Família, casal ou pets desenhados em traço fino a partir da sua foto.',
		image: quadroFamilia3,
		color: 'bg-sage',
	},
	{
		id: 'frases',
		label: 'Placas & frases',
		description:
			'Frases, temas e paixões pintados à mão para dar personalidade ao ambiente.',
		image: placaPensamento2,
		color: 'bg-honey/45',
	},
	{
		id: 'fe',
		label: 'Fé & celebrações',
		description:
			'Peças de fé, monogramas e datas especiais para momentos marcantes.',
		image: quadroPensamento,
		color: 'bg-[#e6dcef]',
	},
	{
		id: 'casa',
		label: 'Casa & utilidades',
		description:
			'Banquetas, relógios, porta-chaves, porta-retratos e caixotes cheios de afeto.',
		image: banqueta,
		color: 'bg-clay/25',
	},
]

const countByCategory = (id: CategoryId) =>
	galleryItems.filter((item) => item.category === id).length

const sortedGalleryItems = [...galleryItems].sort(
	(a, b) =>
		categories.findIndex((category) => category.id === a.category) -
		categories.findIndex((category) => category.id === b.category),
)

const featuredImages = [placaChurrasqueira, quadroFamilia6, quadroNomeFilho8, portaChaves01]

const featuredItems = featuredImages
	.map((image) => galleryItems.find((item) => item.image === image))
	.filter((item): item is GalleryItem => Boolean(item))

const tilts = ['-rotate-[1.6deg]', 'rotate-[1.2deg]', '-rotate-[0.8deg]', 'rotate-[1.8deg]']

/* ---------- Pequenos blocos reutilizáveis ---------- */

function HandEyebrow({ children, className = '' }: { children: ReactNode; className?: string }) {
	return (
		<p className={`font-hand text-2xl font-semibold text-clay ${className}`}>
			{children}
		</p>
	)
}

function SectionTitle({
	eyebrow,
	title,
	centered = false,
	light = false,
}: {
	eyebrow: string
	title: ReactNode
	centered?: boolean
	light?: boolean
}) {
	return (
		<div className={centered ? 'text-center' : ''}>
			<HandEyebrow className={light ? 'text-blush' : ''}>{eyebrow}</HandEyebrow>
			<h2
				className={`mt-1 flex items-center gap-3 font-serif text-[2.2rem] font-semibold leading-[1.08] sm:text-5xl ${
					centered ? 'justify-center' : ''
				} ${light ? 'text-cream' : 'text-ink'}`}
			>
				{centered ? <Sparks className="hidden h-7 w-7 shrink-0 text-clay sm:block" flip /> : null}
				<span>{title}</span>
				{centered ? <Sparks className="hidden h-7 w-7 shrink-0 text-clay sm:block" /> : null}
			</h2>
		</div>
	)
}

const primaryButton =
	'group inline-flex min-h-12 cursor-pointer items-center justify-center gap-2.5 rounded-xl bg-ink px-6 py-3 text-[0.95rem] font-bold text-cream shadow-[4px_4px_0_#e2775c] transition hover:-translate-y-0.5 hover:shadow-[6px_6px_0_#e2775c]'

const secondaryButton =
	'inline-flex min-h-12 cursor-pointer items-center justify-center gap-2 rounded-xl border-[1.5px] border-ink/80 bg-cream/60 px-6 py-3 text-[0.95rem] font-bold text-ink transition hover:-translate-y-0.5 hover:bg-cream'

function StatusChip({ status }: { status: GalleryItem['status'] }) {
	const available = status === 'Disponível para entrega'
	return (
		<span
			className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-bold ${
				available ? 'bg-sage text-forest' : 'bg-paper text-mauve'
			}`}
		>
			<span
				className={`h-2 w-2 rounded-full ${available ? 'bg-forest' : 'bg-mauve/45'}`}
			/>
			{status}
		</span>
	)
}

function PieceCard({
	item,
	index,
	showDetail = false,
	onOpen,
}: {
	item: GalleryItem
	index: number
	showDetail?: boolean
	onOpen?: () => void
}) {
	const tapeColors = ['', 'tape-pink', 'tape-sage']
	return (
		<article
			className={`polaroid wiggle-hover group relative flex flex-col rounded-[6px] ${tilts[index % tilts.length]}`}
		>
			<span
				className={`tape ${tapeColors[index % tapeColors.length]} -top-3 left-1/2 -translate-x-1/2 rotate-[-3deg]`}
			/>
			<div className="overflow-hidden rounded-[3px] bg-paper">
				<img
					src={item.image}
					alt={item.title}
					loading="lazy"
					className="aspect-[4/5] w-full object-cover transition duration-500 group-hover:scale-[1.04]"
				/>
			</div>
			<div className="flex flex-1 flex-col px-1 pt-4">
				<div className="flex items-start justify-between gap-3">
					<div>
						<h3 className="font-serif text-xl font-semibold leading-tight text-ink">
							{item.title}
						</h3>
						<p className="mt-1 text-sm font-semibold text-mauve/75">
							{item.subtitle}
						</p>
					</div>
					{onOpen ? (
						<button
							type="button"
							onClick={onOpen}
							aria-label={`Ver ${item.title} na galeria`}
							className="mt-0.5 inline-flex h-9 w-9 shrink-0 cursor-pointer items-center justify-center rounded-full border-[1.5px] border-ink/70 text-ink transition hover:bg-ink hover:text-cream"
						>
							<ArrowRight className="h-4 w-4" />
						</button>
					) : null}
				</div>
				{showDetail ? (
					<p className="mt-3 text-sm leading-6 text-mauve/85">{item.detail}</p>
				) : null}
				<div className="mt-4">
					<StatusChip status={item.status} />
				</div>
			</div>
		</article>
	)
}

function ContactBand() {
	return (
		<section id="contato" className="relative px-5 pb-16 pt-6 sm:px-8 lg:px-10">
			<div className="torn-y relative mx-auto max-w-[1440px] overflow-hidden bg-forest px-6 py-20 text-cream sm:px-10 lg:px-16">
				<Monstera className="pointer-events-none absolute -bottom-10 -left-8 hidden h-64 w-48 rotate-[18deg] text-[#3c5844] md:block" />
				<Scribble className="pointer-events-none absolute right-10 top-12 hidden h-16 w-20 text-clay/80 lg:block" />

				<div className="relative grid items-center gap-12 lg:grid-cols-[0.75fr_1.5fr_0.75fr]">
					<div className="relative mx-auto hidden w-48 lg:block">
						<div className="polaroid rotate-[-6deg] rounded-[6px]">
							<span className="tape tape-pink -top-3 left-6 rotate-[-8deg]" />
							<img
								src={quadroMensagem}
								alt="Placa pintada à mão com a frase Tudo aqui vira sonho"
								className="aspect-[4/5] w-full rounded-[3px] object-cover"
							/>
							<p className="absolute bottom-2 left-0 right-0 text-center font-hand text-xl text-ink">
								tudo vira sonho ♥
							</p>
						</div>
					</div>

					<div className="text-center">
						<SectionTitle
							eyebrow="Vamos criar juntos?"
							title="Quer uma arte exclusiva para você?"
							centered
							light
						/>
						<p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-cream/80 sm:text-lg">
							Criamos placas personalizadas em madeira para presentes,
							decoração e momentos especiais. Me conta a sua ideia!
						</p>
						<div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
							<a
								href={whatsappLink}
								target="_blank"
								rel="noreferrer"
								className="group inline-flex min-h-12 cursor-pointer items-center justify-center gap-2.5 rounded-xl bg-blush px-6 py-3 text-[0.95rem] font-bold text-ink shadow-[4px_4px_0_#3f2f31] transition hover:-translate-y-0.5 hover:shadow-[6px_6px_0_#3f2f31]"
							>
								<WhatsAppIcon className="h-5 w-5" />
								Fazer meu pedido no WhatsApp
							</a>
							<a
								href={instagramLink}
								target="_blank"
								rel="noreferrer"
								className="inline-flex min-h-12 cursor-pointer items-center justify-center gap-2.5 rounded-xl border-[1.5px] border-cream/70 px-6 py-3 text-[0.95rem] font-bold text-cream transition hover:-translate-y-0.5 hover:bg-cream/10"
							>
								<InstagramIcon className="h-5 w-5" />
								@decoreart.s
							</a>
						</div>
					</div>

					<div className="relative mx-auto hidden lg:block">
						<div className="sticky-note w-48 rotate-[5deg] bg-blush px-5 py-6 text-ink">
							<span className="tape -top-3 left-1/2 -translate-x-1/2 rotate-[3deg]" />
							<p className="font-hand text-[1.6rem] leading-[1.05]">
								Nomes, frases e ideias são sempre bem-vindos
							</p>
							<Heart className="mt-2 h-5 w-5 text-clay" />
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

/* ---------- App ---------- */

function App() {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
	const [page, setPage] = useState<AppPage>(getPageFromHash)
	const [activeCategory, setActiveCategory] = useState<CategoryId | 'todas'>('todas')

	useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth >= 1024) {
				setMobileMenuOpen(false)
			}
		}

		const handleHashChange = () => {
			setPage(getPageFromHash())
			setMobileMenuOpen(false)
			window.scrollTo({ top: 0, behavior: 'smooth' })
		}

		window.addEventListener('resize', handleResize)
		window.addEventListener('hashchange', handleHashChange)

		return () => {
			window.removeEventListener('resize', handleResize)
			window.removeEventListener('hashchange', handleHashChange)
		}
	}, [])

	const navigateToHome = () => {
		window.location.hash = ''
		window.scrollTo({ top: 0, behavior: 'smooth' })
	}

	const navigateToGallery = (category: CategoryId | 'todas' = 'todas') => {
		setActiveCategory(category)
		if (window.location.hash === galleryRoute) {
			window.scrollTo({ top: 0, behavior: 'smooth' })
		} else {
			window.location.hash = galleryRoute
		}
	}

	const homeNavItems: NavItem[] = [
		{ label: 'Início', action: navigateToHome, active: page === 'home' },
		{ label: 'Sobre', href: '#sobre' },
		{ label: 'Criações', href: '#criacoes' },
		{ label: 'Galeria', action: () => navigateToGallery() },
		{ label: 'Contato', href: '#contato' },
	]

	const galleryNavItems: NavItem[] = [
		{ label: 'Início', action: navigateToHome },
		{ label: 'Galeria', action: () => navigateToGallery(), active: true },
		{ label: 'Contato', href: '#contato' },
	]

	const navItems = page === 'home' ? homeNavItems : galleryNavItems

	const filteredItems =
		activeCategory === 'todas'
			? sortedGalleryItems
			: galleryItems.filter((item) => item.category === activeCategory)

	return (
		<div className="min-h-screen overflow-x-clip text-mauve">
			<SiteHeader
				logo={logo}
				navItems={navItems}
				whatsappLink={whatsappLink}
				instagramLink={instagramLink}
				mobileMenuOpen={mobileMenuOpen}
				setMobileMenuOpen={setMobileMenuOpen}
				navigateToHome={navigateToHome}
			/>

			<main>
				{page === 'home' ? (
					<>
						{/* ---------- HERO ---------- */}
						<section
							id="inicio"
							className="relative px-5 pb-12 pt-28 sm:px-8 lg:px-10 lg:pb-16 lg:pt-32"
						>
							<div className="pointer-events-none absolute left-6 top-40 hidden -rotate-[8deg] 2xl:block">
								<p className="font-hand text-[1.7rem] leading-[1.05] text-mauve/80">
									pintado
									<br />
									à mão,
									<br />
									peça por
									<br />
									peça
								</p>
								<Squiggle className="mt-2 h-4 w-20 text-clay" />
							</div>

							<div className="mx-auto grid max-w-[1440px] items-center gap-16 lg:grid-cols-[1fr_1.05fr] lg:gap-10">
								<div className="relative z-10">
									<p className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.24em] text-mauve">
										Olá, eu sou a Tamíris
										<Heart className="h-3.5 w-3.5 text-clay" />
									</p>
									<h1 className="isolate mt-5 font-serif text-[2.7rem] font-semibold leading-[1.02] tracking-[-0.01em] text-ink sm:text-[3.6rem] xl:text-[4.4rem]">
										Artes em madeira que contam{' '}
										<span className="relative inline-block">
											<BrushUnderline className="absolute bottom-[0.02em] left-[-3%] -z-10 h-[0.42em] w-[106%] text-blush" />
											histórias.
										</span>
									</h1>
									<p className="mt-6 max-w-xl text-lg leading-8 text-mauve">
										Placas e artes personalizadas feitas à mão para tornar seus
										momentos e ambientes ainda mais especiais.
									</p>

									<div className="mt-9 flex flex-col gap-4 sm:flex-row">
										<a
											href={whatsappLink}
											target="_blank"
											rel="noreferrer"
											className={primaryButton}
										>
											Solicitar arte personalizada
											<ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
										</a>
										<button
											type="button"
											onClick={() => navigateToGallery()}
											className={secondaryButton}
										>
											Conheça nossos produtos
										</button>
									</div>

									<dl className="mt-11 flex flex-wrap items-stretch gap-x-5 gap-y-5 sm:gap-x-7">
										{[
											['100%', 'personalizado'],
											['Feito', 'à mão'],
											[`${galleryItems.length}+`, 'peças na galeria'],
										].map(([value, label], index) => (
											<div
												key={label}
												className={`flex flex-col ${
													index > 0 ? 'border-l-[1.5px] border-dashed border-ink/20 pl-5 sm:pl-7' : 'border-l-[3px] border-clay pl-4'
												}`}
											>
												<dt className="font-serif text-[1.65rem] font-semibold text-ink sm:text-3xl">
													{value}
												</dt>
												<dd className="text-sm font-semibold text-mauve/80">
													{label}
												</dd>
											</div>
										))}
									</dl>

									<p className="mt-8 flex items-center gap-2 font-hand text-2xl text-clay">
										~ arte deixa a casa mais afetiva
										<Heart className="h-4 w-4" />
									</p>
								</div>

								{/* Colagem */}
								<div className="relative mx-auto aspect-[1/1.02] w-full max-w-[640px] sm:aspect-[6/5]">
									<div className="blob absolute inset-[6%_4%_4%_8%] bg-rose" />
									<Sprig className="absolute -right-2 top-[2%] h-[38%] w-auto rotate-[14deg] text-forest/85" />
									<Monstera className="absolute -left-4 bottom-[6%] h-[30%] w-auto -rotate-[24deg] text-forest/70" />

									<div className="polaroid absolute left-[24%] top-[4%] w-[46%] rotate-[2.5deg] rounded-[6px] !pb-3">
										<span className="tape -top-3 left-1/2 -translate-x-1/2 -rotate-[4deg]" />
										<img
											src={quadroFamilia}
											alt="Retrato da família ilustrado e pintado à mão em madeira"
											className="aspect-[4/5] w-full rounded-[3px] object-cover"
										/>
									</div>

									<div className="polaroid absolute bottom-[3%] left-[6%] w-[34%] -rotate-[7deg] rounded-[6px] !pb-3">
										<span className="tape tape-pink -top-3 left-4 -rotate-[10deg]" />
										<img
											src={quadroNomeFilha3}
											alt="Placa de porta maternidade com o nome Alice"
											className="aspect-square w-full rounded-[3px] object-cover"
										/>
									</div>

									<div className="polaroid absolute right-[3%] top-[34%] w-[30%] rotate-[6deg] rounded-[6px] !pb-3">
										<span className="tape tape-sage -top-3 right-3 rotate-[8deg]" />
										<img
											src={quadroNomeFilho8}
											alt="Placa de porta maternidade Maria Helena com abelhinhas e flores"
											className="aspect-square w-full rounded-[3px] object-cover"
										/>
									</div>

									<div className="sticky-note absolute left-[2%] top-[10%] w-[24%] -rotate-[6deg] bg-blush px-3 py-4 text-ink sm:px-4">
										<p className="font-hand text-[clamp(1rem,2vw,1.6rem)] leading-[1.02]">
											Feito à mão com carinho
										</p>
										<Heart className="mt-1 h-4 w-4 text-clay" />
									</div>

									<div className="absolute bottom-[4%] right-[4%] flex w-[36%] flex-col items-end gap-1">
										{[
											['Pintar', 'bg-clay text-cream', '-rotate-[2deg]'],
											['Criar', 'bg-sage text-forest', 'rotate-[1deg]'],
											['Presentear', 'bg-blush text-ink', '-rotate-[1deg]'],
											['Decorar', 'bg-honey text-ink', 'rotate-[2deg]'],
										].map(([word, colors, tilt]) => (
											<span
												key={word}
												className={`w-full rounded-[4px] border-[1.5px] border-ink/70 px-3 py-1 font-hand text-[clamp(1rem,1.8vw,1.5rem)] font-bold leading-none shadow-[2px_3px_0_rgba(63,47,49,0.25)] ${colors} ${tilt}`}
											>
												{word}
											</span>
										))}
									</div>
								</div>
							</div>
						</section>

						{/* ---------- SOBRE ---------- */}
						<section id="sobre" className="relative px-5 py-20 sm:px-8 lg:px-10">
							<div className="mx-auto grid max-w-[1440px] items-start gap-16 lg:grid-cols-[0.85fr_1.15fr]">
								<div className="relative mx-auto w-full max-w-[520px] lg:sticky lg:top-28 lg:mt-6">
									<div className="blob absolute inset-[4%_2%_10%_6%] rotate-6 bg-sage" />
									<div className="blob relative ml-[6%] w-[80%] overflow-hidden border-[6px] border-cream shadow-[0_26px_50px_-20px_rgba(63,47,49,0.45)]">
										<img
											src={fotoPerfil}
											alt="Tamíris Paula Bento, fundadora da Decorê Arts"
											className="aspect-[4/5] w-full object-cover object-top"
										/>
									</div>
									<div className="polaroid absolute -bottom-6 right-0 w-[42%] rotate-[5deg] rounded-[6px]">
										<span className="tape tape-pink -top-3 left-1/2 -translate-x-1/2 rotate-[-4deg]" />
										<img
											src={fotoCasal}
											alt="Tamíris Paula Bento em foto ao lado do companheiro"
											className="aspect-square w-full rounded-[3px] object-cover"
										/>
										<p className="absolute bottom-1.5 left-0 right-0 text-center font-hand text-lg text-ink">
											nossa história ♥
										</p>
									</div>
									<p className="absolute -left-2 top-2 -rotate-[10deg] font-hand text-2xl leading-none text-clay sm:-left-6">
										oi! ♥
									</p>
								</div>

								<div>
									<HandEyebrow>Nossa história</HandEyebrow>
									<h2 className="isolate mt-1 font-serif text-[2.4rem] font-semibold leading-[1.05] text-ink sm:text-5xl">
										A arte que deu origem à{' '}
										<span className="relative inline-block">
											<BrushUnderline className="absolute -bottom-1 left-0 -z-10 h-[0.42em] w-full text-blush" />
											Decorê Arts
										</span>
									</h2>
									<p className="mt-4 text-sm font-extrabold uppercase tracking-[0.2em] text-mauve/70">
										Bióloga · Artesã · Fundadora
									</p>

									<div className="mt-6 space-y-5 text-[1.02rem] leading-8 text-mauve">
										<p>
											A Decorê Arts nasceu do encontro entre sensibilidade,
											criatividade e o desejo de transformar sentimentos em peças
											cheias de significado. Mais do que itens decorativos, cada
											trabalho carrega memória, afeto e um cuidado especial em cada
											detalhe.
										</p>
										<p>
											Sua fundadora,{' '}
											<strong className="text-ink">Tamíris Paula Bento</strong>,
											é bióloga e pós-graduada em Análise Clínica. Com um olhar
											atento, delicado e apaixonado pelo fazer manual, encontrou na
											arte em madeira uma forma de unir técnica, emoção e propósito,
											criando peças personalizadas que celebram histórias únicas.
										</p>
										<p>
											O que começou de forma íntima e espontânea foi ganhando
											identidade própria, tornando-se uma marca construída com
											carinho, autenticidade e a vontade de levar beleza para
											momentos especiais, presentes afetivos e ambientes
											acolhedores.
										</p>
									</div>

									<div className="relative mt-9 rotate-[-0.6deg] bg-[#fffdf9] p-6 shadow-[0_18px_35px_-18px_rgba(63,47,49,0.35)] sm:p-8">
										<span className="tape -top-3 left-10 rotate-[-5deg]" />
										<span className="tape tape-sage -top-3 right-10 rotate-[6deg]" />
										<p className="font-hand text-2xl font-semibold text-clay">
											Como tudo começou…
										</p>
										<p className="mt-2 text-[1.02rem] leading-8 text-mauve">
											A Decorê Arts nasceu durante o período da pandemia, quando a
											pausa na rotina trouxe também momentos de ansiedade. Foi nesse
											tempo que descobri na pintura uma forma de me expressar,
											ocupar a mente e transformar sentimentos em arte. O que
											começou como uma maneira de passar o tempo logo se tornou uma
											verdadeira paixão.
										</p>
									</div>

									<div className="mt-10 grid grid-cols-3 gap-4 sm:max-w-lg">
										{[
											[BrushIcon, 'Pintado à mão', 'bg-blush'],
											[SparkleIcon, 'Peça única', 'bg-sage'],
											[GiftIcon, 'Presente com afeto', 'bg-honey/50'],
										].map(([Icon, label, color]) => {
											const IconComponent = Icon as typeof BrushIcon
											return (
												<div key={label as string} className="flex flex-col items-center text-center">
													<span
														className={`blob inline-flex h-16 w-16 items-center justify-center text-ink ${color as string}`}
													>
														<IconComponent className="h-8 w-8" />
													</span>
													<p className="mt-3 font-serif text-base font-semibold leading-tight text-ink">
														{label as string}
													</p>
												</div>
											)
										})}
									</div>
								</div>
							</div>
						</section>

						{/* ---------- CATEGORIAS ---------- */}
						<section id="criacoes" className="relative px-5 py-20 sm:px-8 lg:px-10">
							<div className="mx-auto max-w-[1440px]">
								<div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
									<SectionTitle
										eyebrow="O que eu crio"
										title={
											<>
												Arte para cada
												<br className="hidden sm:block" /> cantinho da casa.
											</>
										}
									/>
									<p className="max-w-md text-base leading-7 text-mauve lg:mb-2">
										Cada peça é pensada a partir da sua história: nomes, frases,
										cores e personagens escolhidos com você.
									</p>
								</div>

								<div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
									{categories.map((category) => (
										<button
											key={category.id}
											type="button"
											onClick={() => navigateToGallery(category.id)}
											className="hand-card group flex cursor-pointer flex-col items-center bg-[#fffdf9]/80 px-6 pb-7 pt-8 text-center transition hover:-translate-y-1.5 hover:bg-[#fffdf9] hover:shadow-[0_22px_40px_-22px_rgba(63,47,49,0.45)]"
										>
											<span
												className={`blob relative inline-flex h-40 w-44 items-center justify-center ${category.color}`}
											>
												<img
													src={category.image}
													alt=""
													className="h-32 w-32 rounded-full border-4 border-cream object-cover shadow-md transition duration-500 group-hover:scale-105 group-hover:rotate-3"
												/>
											</span>
											<h3 className="mt-6 whitespace-nowrap font-serif text-2xl font-semibold text-ink xl:text-[1.4rem] 2xl:text-2xl">
												{category.label}
											</h3>
											<p className="mt-2 text-sm leading-6 text-mauve">
												{category.description}
											</p>
											<span className="mt-5 inline-flex items-center gap-2 border-b-2 border-clay pb-0.5 text-sm font-extrabold text-ink">
												Ver peças ({countByCategory(category.id)})
												<ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
											</span>
										</button>
									))}
								</div>
							</div>
						</section>

						{/* ---------- DESTAQUES ---------- */}
						<section className="px-0 py-6">
							<div className="torn-y bg-rose px-5 py-24 sm:px-8 lg:px-10">
								<div className="mx-auto max-w-[1440px]">
									<div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
										<SectionTitle
											eyebrow="Peças em destaque"
											title="Feitas com carinho, uma a uma"
										/>
										<button
											type="button"
											onClick={() => navigateToGallery()}
											className="group inline-flex cursor-pointer items-center gap-2 self-start font-hand text-2xl font-bold text-ink sm:self-auto"
										>
											<span className="relative">
												Ver galeria completa
												<Squiggle className="absolute -bottom-2 left-0 h-3 w-full text-clay" />
											</span>
											<ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
										</button>
									</div>

									<div className="mt-14 grid gap-10 sm:grid-cols-2 xl:grid-cols-4">
										{featuredItems.map((item, index) => (
											<PieceCard
												key={`${item.title}-${item.image}`}
												item={item}
												index={index}
												onOpen={() => navigateToGallery()}
											/>
										))}
									</div>
								</div>
							</div>
						</section>

						{/* ---------- COMO FUNCIONA ---------- */}
						<section className="relative px-5 py-20 sm:px-8 lg:px-10">
							<div className="mx-auto grid max-w-[1440px] gap-12 lg:grid-cols-[0.8fr_2.2fr] lg:items-center">
								<div>
									<SectionTitle eyebrow="Do recado à entrega" title="Como funciona" />
									<p className="mt-4 max-w-sm text-base leading-7 text-mauve">
										Um processo simples e próximo, do primeiro recado no WhatsApp
										até a peça pronta para presentear.
									</p>
									<a
										href={whatsappLink}
										target="_blank"
										rel="noreferrer"
										className={`${primaryButton} mt-8`}
									>
										Começar meu pedido
										<ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
									</a>
								</div>

								<ol className="relative grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
									{[
										[
											'Conte sua ideia',
											'Me chama no WhatsApp com o nome, a frase ou a foto que você quer eternizar.',
											'bg-blush',
										],
										[
											'Escolhemos juntos',
											'Definimos tamanho, cores e detalhes para a peça ficar do seu jeito.',
											'bg-sage',
										],
										[
											'Pintura à mão',
											'Cada peça é desenhada e pintada à mão, com calma e muito cuidado.',
											'bg-honey/50',
										],
										[
											'Pronta pra presentear',
											'Sua arte fica pronta para decorar a casa ou emocionar alguém especial.',
											'bg-clay/25',
										],
									].map(([title, text, color], index) => (
										<li
											key={title}
											className={`relative bg-[#fffdf9] p-6 shadow-[0_16px_30px_-18px_rgba(63,47,49,0.4)] ${
												index % 2 === 0 ? '-rotate-[1deg]' : 'rotate-[1deg]'
											}`}
										>
											<span
												className={`blob inline-flex h-14 w-14 items-center justify-center font-hand text-4xl font-bold text-ink ${color}`}
											>
												{index + 1}
											</span>
											<h3 className="mt-4 font-serif text-xl font-semibold text-ink">
												{title}
											</h3>
											<p className="mt-2 text-sm leading-6 text-mauve">{text}</p>
											{index < 3 ? (
												<CurlyArrow className="absolute -right-9 top-6 z-10 hidden h-8 w-12 text-clay xl:block" />
											) : null}
										</li>
									))}
								</ol>
							</div>
						</section>
					</>
				) : (
					<>
						{/* ---------- GALERIA ---------- */}
						<section className="relative px-5 pb-16 pt-28 sm:px-8 lg:px-10 lg:pt-32">
							<div className="mx-auto max-w-[1440px]">
								<div className="grid items-end gap-10 lg:grid-cols-[1.4fr_0.6fr]">
									<div>
										<HandEyebrow>Galeria completa</HandEyebrow>
										<h1 className="isolate mt-1 max-w-3xl font-serif text-[2.6rem] font-semibold leading-[1.04] text-ink sm:text-[3.6rem]">
											Todas as{' '}
											<span className="relative inline-block">
												<BrushUnderline className="absolute -bottom-1 left-0 -z-10 h-[0.42em] w-full text-blush" />
												peças
											</span>{' '}
											reunidas em um só lugar
										</h1>
										<p className="mt-5 max-w-2xl text-lg leading-8 text-mauve">
											Aqui você encontra todas as imagens do catálogo atual da
											Decorê Arts, com descrições pensadas para apresentar cada
											peça com carinho, personalidade e riqueza de detalhes.
										</p>
										<div className="mt-8 flex flex-col gap-4 sm:flex-row">
											<a
												href={whatsappLink}
												target="_blank"
												rel="noreferrer"
												className={primaryButton}
											>
												Solicitar arte personalizada
												<ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
											</a>
											<button
												type="button"
												onClick={navigateToHome}
												className={secondaryButton}
											>
												Voltar para a Home
											</button>
										</div>
									</div>

									<div className="relative hidden justify-self-center lg:block">
										<div className="sticky-note w-56 rotate-[4deg] bg-sage px-6 py-7 text-forest">
											<span className="tape tape-pink -top-3 left-1/2 -translate-x-1/2 -rotate-[3deg]" />
											<p className="font-serif text-5xl font-semibold">
												{galleryItems.length}
											</p>
											<p className="mt-1 font-hand text-2xl leading-tight">
												peças feitas à mão, com muito carinho
											</p>
										</div>
										<Sprig className="absolute -right-14 -top-10 h-40 w-auto rotate-[18deg] text-forest/80" />
									</div>
								</div>

								<div className="mt-14 flex flex-wrap gap-3">
									{[{ id: 'todas' as const, label: 'Todas', count: galleryItems.length }, ...categories.map((category) => ({ ...category, count: countByCategory(category.id) }))].map(
										(category) => {
											const isActive = activeCategory === category.id
											return (
												<button
													key={category.id}
													type="button"
													onClick={() => setActiveCategory(category.id)}
													className={`cursor-pointer rounded-full border-[1.5px] px-5 py-2 text-sm font-bold transition ${
														isActive
															? 'border-ink bg-ink text-cream'
															: 'border-ink/20 bg-cream text-mauve hover:border-ink/60 hover:text-ink'
													}`}
												>
													{category.label}
													<span className={isActive ? 'ml-1.5 text-cream/70' : 'ml-1.5 text-mauve/60'}>
														{category.count}
													</span>
												</button>
											)
										},
									)}
								</div>

								<div className="mt-12 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
									{filteredItems.map((item, index) => (
										<PieceCard
											key={`${item.title}-${item.image}`}
											item={item}
											index={index}
											showDetail
										/>
									))}
								</div>
							</div>
						</section>
					</>
				)}

				<ContactBand />
			</main>

			<SiteFooter
				logo={logo}
				navItems={navItems}
				whatsappLink={whatsappLink}
				instagramLink={instagramLink}
			/>

			<a
				href={whatsappLink}
				target="_blank"
				rel="noreferrer"
				aria-label="Falar no WhatsApp"
				className="fixed bottom-5 right-5 z-50 inline-flex h-16 w-16 cursor-pointer items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_22px_45px_rgba(37,211,102,0.35)] transition hover:-translate-y-1 hover:bg-[#1ebe5d]"
			>
				<WhatsAppIcon className="h-7 w-7" />
			</a>
		</div>
	)
}

export default App
