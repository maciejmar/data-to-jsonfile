export interface Dialog {
    _id?:string;
    dialogName: string;
    segment:[
      {
        fileName: Array<String>,
        textDuration: Array<Number>,
        characterName: Array<String>,
        characterSprite: string,
        pl: string,
        en: string,
        de: string
      }
    ]

  }
