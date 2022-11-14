// @ts-ignore
interface NAS {
    name: string,
    port: string,
    description: string
    newOpen: boolean
}

export class Media implements NAS {
    constructor(name: string, port: string, description: string, newOpen: boolean = true) {
        this.name = name
        this.port = port
        this.description = description
        this.newOpen = newOpen
    }

    description: string;
    name: string;
    port: string;
    newOpen: boolean = true;
}

const medias: Array<Media> = [
    new Media('DSM', '2928', 'DSM'),
    new Media('EMBY', '8097', '电影影视'),
    new Media('青龙1', '5701', '账号池1'),
    new Media('青龙2', '5702', '账号池2'),
    new Media('青龙_其他', '5709', '账号池9'),
    new Media('更新jd', '--', '更新ck', false),
]
export default medias