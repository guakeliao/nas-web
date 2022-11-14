// @ts-ignore
interface NAS {
    name: string,
    port: string,
    description: string
}

export class Media implements NAS {
    constructor(name: string, port: string, description: string) {
        this.name = name
        this.port = port
        this.description = description
    }

    description: string;
    name: string;
    port: string;
}

const medias: Media[] = [
    new Media('DSM', '5000', 'DSM'),
    new Media('EMBY', '8097', '电影影视'),
    new Media('青龙1', '5701', '账号池1'),
    new Media('青龙2', '5702', '账号池2'),
    new Media('青龙_其他', '5709', '账号池1'),
]
export default medias