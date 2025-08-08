// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
type User = {
	auth: boolean,
	sessionid: string,
	email: string,
	role: string,
	image: string,
	nombre: string
}

declare namespace svelteHTML {
  interface HTMLAttributes<T> {
    // Extensiones personalizadas aquí, si las necesitás
  }
}

declare global {
	namespace App {
		// interface Error {}
		interface Locals {
			usuarioid: string
			user : User | null
		}

		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}

	type Modos = 'compras' | 'ventas' | 'descarga'
}

export {};
