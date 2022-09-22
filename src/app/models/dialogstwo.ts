export interface Dialog {
    _id?:string;
    dialogName: string;
    segments:[
      {
        fileName:string[],
        textDuration: number[],
        characterName: string[],
        characterSprite: string,
        pl: string,
        en: string,
        de: string
      }]

  }
