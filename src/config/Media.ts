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
    new Media('青龙1', '192.168.31.253:5701', '账号池1'),
    new Media('青龙2', '192.168.31.253:5702', '账号池2'),
    new Media('青龙_其他', '192.168.31.253:5709', '账号池1'),
    new Media('emby', '192.168.31.253:8097', '电影影视'),
]
export default medias