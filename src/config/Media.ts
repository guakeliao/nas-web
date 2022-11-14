// @ts-ignore
export class Media {
    name: string
    ip: string
    description: string

    constructor(name: string, ip: string, description: string) {
        this.name = name
        this.ip = ip
        this.description = description
    }
}

const medias: Media[] = [
    new Media('DSM', 'http://localhost:5000', 'DSM'),
    new Media('EMBY', 'http://localhost:8097', '电影影视'),
    new Media('青龙1', 'http://localhost:5701', '账号池1'),
    new Media('青龙2', 'http://localhost:5702', '账号池2'),
    new Media('青龙_其他', 'http://localhost:5709', '账号池1'),
]
export default medias