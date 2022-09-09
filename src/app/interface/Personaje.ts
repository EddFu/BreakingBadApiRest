export interface Personaje {
  char_id:number,
  name: string,
  img:string,
  nickname:string
  occupation: Occupation[];
}

interface Occupation{
  name:string
}
