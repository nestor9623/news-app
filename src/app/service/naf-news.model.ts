export interface IParamApi {
  country?: string;
  apiKey?: string;
  q?:string;
  from?: string;
  to?: string;
  category?: 'business' | 'entertainment' | 'general' |'health' |'science'|'sports'| 'technology'
}


export enum Category {
  'Negocio' = 'bussines',
  'Entretenimiento' = 'entertainment',
  'General' = 'general',
  'Salud' = 'health',
  'Ciencia' = 'science',
  'Deportes' = 'sports',
  'Tecnologia' = 'technology'
}
