//criando um tipo que represente o dado da Loja para chamar la no loja.ts
export interface Loja {
    id: string,
    name: string,
    category: string,
    deliveryEstimate: string,
    rating: number,
    imagePath: string,
    about?: string,
    hours?: string

}