// @ts-ignore
export enum SYS_CODE {
    dsm = 'dsm',
    emby = 'emby',
    tr = 'tr',
    ql_1 = 'ql_1',
    ql_2 = 'ql_2',
    ql_9 = 'ql_9',
    update_jd = 'update_jd',
    format_jd = 'format_jd',
}

interface NAS {
    code: SYS_CODE
    name: string,
    port: string,
    description: string
}

export class Media implements NAS {
    constructor(code: SYS_CODE, name: string, port: string, description: string) {
        this.code = code
        this.name = name
        this.port = port
        this.description = description
    }

    code: SYS_CODE;
    description: string;
    name: string;
    port: string;

}

const medias: Array<Media> = [
    new Media(SYS_CODE.dsm, 'DSM', '2928', 'DSM'),
    new Media(SYS_CODE.emby, 'EMBY', '8097', '电影影视'),
    new Media(SYS_CODE.ql_1, '青龙1', '5701', '账号池1'),
    new Media(SYS_CODE.ql_2, '青龙2', '5702', '账号池2'),
    new Media(SYS_CODE.ql_9, '青龙_其他', '5709', '账号池9'),
    new Media(SYS_CODE.tr, '下载器', '9091', 'tr下载器'),
    new Media(SYS_CODE.update_jd, '更新jd', '--', '更新ck'),
    new Media(SYS_CODE.format_jd, '格式化CK', '--', '格式化CK'),
]
export default medias