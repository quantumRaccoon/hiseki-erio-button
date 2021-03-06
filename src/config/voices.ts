export interface VoiceInfo {
    /**
     * 标题翻译
     */
    messages: {
        zh: string
        en?: string
        ja?: string
    }
    /**
     * 音声路径。相对于 public/voices 的路径
     */
    path: string
    /**
     * 分类标签，i18n 路径。
     * 会根据这个 tag 进行分类。
     * tag 的翻译在 locales 文件夹下 zh/en/ja 文件中的 tags 字段中设置
     */
    tag: string
    /**
     * 是否播放
     *
     * @type {boolean}
     */
    isPlay?: boolean
}
const voices: VoiceInfo[] = [

    /**
     * -------witticisms-----------public/voices/erio名台词----------
     */
    {
        messages: {
            zh: 'ccll的大家都是我的恋人',
            en: '',
            ja: '',
        },
        path: '/erio名台词/ccll的大家都是我的恋人.mp3',
        tag: 'witticisms',
    },
    {
        messages: {
            zh: '你的胖次啥颜色',
            en: '',
            ja: '',
        },
        path: '/erio名台词/你的胖次啥颜色.mp3',
        tag: 'witticisms',
    },
    {
        messages: {
            zh: '不能惯坏你们这些可爱的小猪',
            en: '',
            ja: '',
        },
        path: '/erio名台词/不能惯坏你们这些可爱的小猪.mp3',
        tag: 'witticisms',
    },
    {
        messages: {
            zh: '你们啊，不要停下来啊1',
            en: '',
            ja: '',
        },
        path: '/erio名台词/你们啊，不要停下来啊 （团长的教诲1）.mp3',
        tag: 'witticisms',
    },
    {
        messages: {
            zh: '你们啊，不要停下来啊2',
            en: '',
            ja: '',
        },
        path: '/erio名台词/所以，你们啊，不要停下来啊！（二）.mp3',
        tag: 'witticisms',
    },
    {
        messages: {
            zh: '不要说乳团 h',
            en: '',
            ja: '',
        },
        path: '/erio名台词/不要说乳团 h.mp3',
        tag: 'witticisms',
    },
    {
        messages: {
            zh: '对面的女粉看过来',
            en: '',
            ja: '',
        },
        path: '/erio名台词/对面的女粉看过来.mp3',
        tag: 'witticisms',
    },
    {
        messages: {
            zh: '虚拟世界不存在重婚罪',
            en: '',
            ja: '',
        },
        path: '/erio名台词/虚拟世界不存在重婚罪.mp3',
        tag: 'witticisms',
    },
    {
        messages: {
            zh: '这个点不会还有人在工作吧？不会吧不会吧',
            en: '',
            ja: '',
        },
        path: '/erio名台词/这个点不会还有人在工作吧？不会吧不会吧.mp3',
        tag: 'witticisms',
    },
    {
        messages: {
            zh: '不要叫我渣男~我也没办法',
            en: '',
            ja: '',
        },
        path: '/erio名台词/不要叫我渣男~我也没办法（20210116 185.3）.mp3',
        tag: 'witticisms',
    },
    /**
 * daily----public/voices/erio日常语音-----------
 */
    {
        messages: {
            zh: '谢谢你爱上我',
            en: '',
            ja: '',
        },
        path: '/erio日常语音/谢谢你爱上我.mp3',
        tag: 'daily',
    },
    {
        messages: {
            zh: '绯赤艾利欧（自我介绍）-ytb1周年',
            en: '',
            ja: '',
        },
        path: '/erio日常语音/绯赤艾利欧（自我介绍）-ytb1周年_01.mp3',
        tag: 'daily',
    },
    {
        messages: {
            zh: '新年快乐',
            en: '',
            ja: '',
        },
        path: '/erio日常语音/新年快乐.mp3',
        tag: 'daily',
    },
    {
        messages: {
            zh: '谢谢礼物，我很可爱，好耶（中文）',
            en: '',
            ja: '',
        },
        path: '/erio日常语音/谢谢礼物，我很可爱，好耶（中文）.mp3',
        tag: 'daily',
    },
    {
        messages: {
            zh: '幸苦了 辛苦你了（中文）',
            en: '',
            ja: '',
        },
        path: '/erio日常语音/幸苦了 辛苦你了（中文）（45W纪念回 1.23.27).mp3',
        tag: 'daily',
    },
    {
        messages: {
            zh: '正常无路赛',
            en: '',
            ja: '',
        },
        path: '/erio日常语音/正常无路赛.mp3',
        tag: 'daily',
    },
    {
        messages: {
            zh: '我系日本人，你是个好人',
            en: '',
            ja: '',
        },
        path: '/erio日常语音/我系日本人，你是个好人-ytb1周年_01.mp3',
        tag: 'daily',
    },
    {
        messages: {
            zh: '老公爱你老公mua',
            en: '',
            ja: '',
        },
        path: '/erio日常语音/老公爱你老公mua.mp3',
        tag: 'daily',
    },
    {
        messages: {
            zh: '我爱你mua~',
            en: '',
            ja: '',
        },
        path: '/erio日常语音/我爱你mua~.mp3',
        tag: 'daily',
    },
    {
        messages: {
            zh: '我是大家的媳妇',
            en: '',
            ja: '',
        },
        path: '/erio日常语音/我是大家的媳妇（20200203 P2 1.05).mp3',
        tag: 'daily',
    },
    {
        messages: {
            zh: '我很快（可爱）',
            en: '',
            ja: '',
        },
        path: '/erio日常语音/我很快（可爱）-ytb1周年_01.mp3',
        tag: 'daily',
    },
    /**
    {
        messages: {
            zh: '团长学鹦鹉叫还挺别致的',
            en: '',
            ja: '',
        },
        path: '/erio日常语音/团长学鹦鹉叫还挺别致的 2021128  28.30.mp3',
        tag: 'daily',
    },
*/
    {
        messages: {
            zh: '我是吉影吉良',
            en: '',
            ja: '',
        },
        path: '/erio日常语音/我是吉影吉良 （20210116  182分）.mp3',
        tag: 'daily',
    },
    {
        messages: {
            zh: '铁咩',
            en: '',
            ja: '',
        },
        path: '/erio日常语音/铁咩（20210117 第五人格）.mp3',
        tag: 'daily',
    },
    {
        messages: {
            zh: '住在一起吧',
            en: '',
            ja: '',
        },
        path: '/erio日常语音/提取音频-住在一起吧.mp3',
        tag: 'daily',
    },
    {
        messages: {
            zh: '清嗓子 噗噗噗噗',
            en: '',
            ja: '',
        },
        path: '/erio日常语音/清嗓子 噗噗噗噗（20201221 21.05）.mp3',
        tag: 'daily',
    },
    {
        messages: {
            zh: '傻团的笑声',
            en: '',
            ja: '',
        },
        path: '/erio日常语音/傻团的笑声.mp3',
        tag: 'daily',
    },
    {
        messages: {
            zh: '桥豆麻袋欧尼桑',
            en: '',
            ja: '',
        },
        path: '/erio日常语音/桥豆麻袋欧尼桑（17live_4084348_20190917_084442.ts_audio_index0_01-40min）.mp3',
        tag: 'daily',
    },
    {
        messages: {
            zh: '噗嘿',
            en: '',
            ja: '',
        },
        path: '/erio日常语音/噗嘿 来自erio19.05-19.mp3',
        tag: 'daily',
    },
    {
        messages: {
            zh: '骗你的呢（萌音）',
            en: '',
            ja: '',
        },
        path: '/erio日常语音/骗你的呢（萌音）-ytb1周年_01.mp3',
        tag: 'daily',
    },
    {
        messages: {
            zh: '喷射战士真好玩嗯~伸懒腰',
            en: '',
            ja: '',
        },
        path: '/erio日常语音/喷射战士真好玩嗯~伸懒腰（20210116 153分）.mp3',
        tag: 'daily',
    },
    {
        messages: {
            zh: '你在看哪里呀~baka baka baka',
            en: '',
            ja: '',
        },
        path: '/erio日常语音/你在看哪里呀~baka baka baka.mp3',
        tag: 'daily',
    },
    {
        messages: {
            zh: '你们好严格 好鬼畜',
            en: '',
            ja: '',
        },
        path: '/erio日常语音/你们好严格 好鬼畜（45W纪念回 28.15).mp3',
        tag: 'daily',
    },
    {
        messages: {
            zh: '可爱，好耶，kksk（中文）',
            en: '',
            ja: '',
        },
        path: '/erio日常语音/可爱，好耶，kksk（中文）.mp3',
        tag: 'daily',
    },
    {
        messages: {
            zh: '老板大气',
            en: '',
            ja: '',
        },
        path: '/erio日常语音/老板大气 (45W纪念回3.40).mp3',
        tag: 'daily',
    },
    {
        messages: {
            zh: '咪啪',
            en: '',
            ja: '',
        },
        path: '/erio日常语音/咪啪-ytb1周年_01.mp3',
        tag: 'daily',
    },
    {
        messages: {
            zh: '卡拉ok 哒哒哒哒',
            en: '',
            ja: '',
        },
        path: '/erio日常语音/卡拉ok 哒哒哒哒（45W纪念回 18.05).mp3',
        tag: 'daily',
    },
    {
        messages: {
            zh: '卡卡卡北北北',
            en: '',
            ja: '',
        },
        path: '/erio日常语音/卡卡卡北北北.mp3',
        tag: 'daily',
    },
    {
        messages: {
            zh: '呼气声（99分的好听）',
            en: '',
            ja: '',
        },
        path: '/erio日常语音/呼气声（99分的好听）.mp3',
        tag: 'daily',
    },
    {
        messages: {
            zh: '喝水',
            en: '',
            ja: '',
        },
        path: '/erio日常语音/喝水.mp3',
        tag: 'daily',
    },
    {
        messages: {
            zh: '把钱交出来',
            en: '',
            ja: '',
        },
        path: '/erio日常语音/把钱交出来-ytb1周年_01.mp3',
        tag: 'daily',
    },
    {
        messages: {
            zh: '拜拜 晚安',
            en: '',
            ja: '',
        },
        path: '/erio日常语音/拜拜 晚安.mp3',
        tag: 'daily',
    },
    {
        messages: {
            zh: '对你的心 love 射击~ mua~mua',
            en: '',
            ja: '',
        },
        path: '/erio日常语音/对你的心 love 射击~ mua~mua (45W纪念回6.28).mp3',
        tag: 'daily',
    },
    {
        messages: {
            zh: '果咩（道歉时请不要笑啊喂）',
            en: '',
            ja: '',
        },
        path: '/erio日常语音/果咩（道歉时请不要笑啊喂）2021128  27.42.mp3',
        tag: 'daily',
    },
    {
        messages: {
            zh: 'erio叫你变态了',
            en: '',
            ja: '',
        },
        path: '/erio日常语音/erio叫你变态了.mp3',
        tag: 'daily',
    },
    {
        messages: {
            zh: 'yihiahiahia',
            en: '',
            ja: '',
        },
        path: '/erio日常语音/yihiahiahia 来自erio19-05-19.mp3',
        tag: 'daily',
    },
    {
        messages: {
            zh: 'pololive',
            en: '',
            ja: '',
        },
        path: '/erio日常语音/pololive-ytb1周年_01.mp3',
        tag: 'daily',
    },
    {
        messages: {
            zh: 'erio喝水憋笑啦~鬼畜笑声',
            en: '',
            ja: '',
        },
        path: '/erio日常语音/erio喝水憋笑啦~鬼畜笑声.mp3',
        tag: 'daily',
    },
    {
        messages: {
            zh: '当当当~呼~呼~呼~麦克风先生坚持住呀~',
            en: '',
            ja: '',
        },
        path: '/erio日常语音/当当当~呼~呼~呼~麦克风先生坚持住呀~.mp3',
        tag: 'daily',
    },
    {
        messages: {
            zh: 'bing↓ bong↓  bang↓  (上课啦）',
            en: '',
            ja: '',
        },
        path: '/erio日常语音/bing↓ bong↓  bang↓  (上课啦）（45W纪念回 1.59.17).mp3',
        tag: 'daily',
    },
    {
        messages: {
            zh: 'bing↑ bong↑  bang↑  (下课啦）',
            en: '',
            ja: '',
        },
        path: '/erio日常语音/bing↑ bong↑  bang↑  (下课啦）（45W纪念回 1.58.34).mp3',
        tag: 'daily',
    },
    {
        messages: {
            zh: '变态3连',
            en: '',
            ja: '',
        },
        path: '/erio日常语音/变态3连（緋赤エリオ_200214_1703_BiliBili_【B限定】「声音好听的大姐姐 2／14—23min）_audio_index0_01.mp3',
        tag: 'daily',
    },

    /**
 * dialogue----public/voices/erio台词回-----------
 */
    {
        messages: {
            zh: '暗黑桃太郎故事',
            en: '',
            ja: '',
        },
        path: '/erio台词回/暗黑桃太郎故事.mp3',
        tag: 'dialogue',
    },
    {
        messages: {
            zh: '先来吃我还是先吃我呢？',
            en: '',
            ja: '',
        },
        path: '/erio台词回/先来吃我还是先吃我呢？.mp3',
        tag: 'dialogue',
    },
    {
        messages: {
            zh: 'erio上司的训斥',
            en: '',
            ja: '',
        },
        path: '/erio台词回/erio上司的训斥.mp3',
        tag: 'dialogue',
    },
    {
        messages: {
            zh: '2020情人节傲娇台词',
            en: '',
            ja: '',
        },
        path: '/erio台词回/2020情人节傲娇台词.mp3',
        tag: 'dialogue',
    },
    {
        messages: {
            zh: '傲娇erio （20210120台词回）',
            en: '',
            ja: '',
        },
        path: '/erio台词回/傲娇erio （20210120台词回）.mp3',
        tag: 'dialogue',
    },
    {
        messages: {
            zh: '病娇可爱妹妹（20210119台词回）',
            en: '',
            ja: '',
        },
        path: '/erio台词回/病娇可爱妹妹（20210119台词回）.mp3',
        tag: 'dialogue',
    },
    {
        messages: {
            zh: '大老婆咬耳朵（20210119台词回）',
            en: '',
            ja: '',
        },
        path: '/erio台词回/大老婆咬耳朵（20210119台词回）.mp3',
        tag: 'dialogue',
    },
    {
        messages: {
            zh: '老婆帮忙（20210119台词回）',
            en: '',
            ja: '',
        },
        path: '/erio台词回/老婆帮忙（20210119台词回）.mp3',
        tag: 'dialogue',
    },
    {
        messages: {
            zh: '老婆探病（20210119台词回）',
            en: '',
            ja: '',
        },
        path: '/erio台词回/老婆探病（20210119台词回）.mp3',
        tag: 'dialogue',
    },
    {
        messages: {
            zh: '老婆我回来了（20210119台词回）',
            en: '',
            ja: '',
        },
        path: '/erio台词回/老婆我回来了（20210119台词回）.mp3',
        tag: 'dialogue',
    },
    {
        messages: {
            zh: '男女朋友（20210119台词回）',
            en: '',
            ja: '',
        },
        path: '/erio台词回/男女朋友（20210119台词回）.mp3',
        tag: 'dialogue',
    },
    {
        messages: {
            zh: '巧克力1（20210119台词回）',
            en: '',
            ja: '',
        },
        path: '/erio台词回/巧克力1（20210119台词回）.mp3',
        tag: 'dialogue',
    },
    {
        messages: {
            zh: '巧克力2（20210119台词回）',
            en: '',
            ja: '',
        },
        path: '/erio台词回/巧克力2（20210119台词回）.mp3',
        tag: 'dialogue',
    },
    {
        messages: {
            zh: '青梅竹马（20210119台词回）',
            en: '',
            ja: '',
        },
        path: '/erio台词回/青梅竹马（20210119台词回）.mp3',
        tag: 'dialogue',
    },
    {
        messages: {
            zh: '软软撒娇老婆（20210119台词回）',
            en: '',
            ja: '',
        },
        path: '/erio台词回/软软撒娇老婆（20210119台词回）.mp3',
        tag: 'dialogue',
    },
    {
        messages: {
            zh: '我要保护你一辈子（20210116 186分）',
            en: '',
            ja: '',
        },
        path: '/erio台词回/我要保护你一辈子（20210116 186分）.mp3',
        tag: 'dialogue',
    },
    {
        messages: {
            zh: '小老婆要闹了（20210119台词回）',
            en: '',
            ja: '',
        },
        path: '/erio台词回/小老婆要闹了（20210119台词回）.mp3',
        tag: 'dialogue',
    },
    {
        messages: {
            zh: '新婚台词 欢迎回来~（20210119 台词回 28.21）',
            en: '',
            ja: '',
        },
        path: '/erio台词回/新婚台词 欢迎回来~（20210119 台词回 28.21）.mp3',
        tag: 'dialogue',
    },
    {
        messages: {
            zh: '中二erio （20210120台词回）',
            en: '',
            ja: '',
        },
        path: '/erio台词回/中二erio （20210120台词回）.mp3',
        tag: 'dialogue',
    },
    /**
 * -acappella------public/voices/清唱库-----------
 */
    {
        messages: {
            zh: '雨が降る清唱',
            en: '',
            ja: '',
        },
        path: '/清唱库/雨が降る清唱  (2021128  65.52).mp3',
        tag: 'acappella',
    },
    {
        messages: {
            zh: '钻石裂痕清唱一段',
            en: '',
            ja: '',
        },
        path: '/清唱库/钻石裂痕清唱一段.mp3',
        tag: 'acappella',
    },
    {
        messages: {
            zh: '清唱aimo~鸟之人',
            en: '',
            ja: '',
        },
        path: '/清唱库/清唱aimo~鸟之人.mp3',
        tag: 'acappella',
    },
    {
        messages: {
            zh: '红莲的弓矢清唱',
            en: '',
            ja: '',
        },
        path: '/清唱库/红莲的弓矢清唱（138647504-1-192-33min）_audio_index0_01.mp3',
        tag: 'acappella',
    },
    {
        messages: {
            zh: 'ユニバーサル  バニー 宇宙黑白兔',
            en: '',
            ja: '',
        },
        path: '/清唱库/ユニバーサル  バニー 清唱.mp3',
        tag: 'acappella',
    },
    {
        messages: {
            zh: '清唱一段~(45W纪念回 17.09)',
            en: '',
            ja: '',
        },
        path: '/清唱库/清唱一段~(45W纪念回 17.09).mp3',
        tag: 'acappella',
    },

    /**
*---hdame------public/voices/不许涩团长----------------
*/
    {
        messages: {
            zh: '镇站片段',
            en: '',
            ja: '',
        },
        path: '/不许涩团长/镇站片段.mp3',
        tag: 'hdame',
    },
    {
        messages: {
            zh: '别的社死都是假的，这个是真的',
            en: '',
            ja: '',
        },
        path: '/不许涩团长/别的社死都是假的，这个是真的.mp3',
        tag: 'hdame',
    },
    {
        messages: {
            zh: '欧湃欧湃nobra',
            en: '',
            ja: '',
        },
        path: '/不许涩团长/欧湃欧湃nobra-ytb1周年_01.mp3',
        tag: 'hdame',
    },
    {
        messages: {
            zh: '涩气投喂',
            en: '',
            ja: '',
        },
        path: '/不许涩团长/涩气投喂.mp3',
        tag: 'hdame',
    },
    {
        messages: {
            zh: '涩涩的深呼吸',
            en: '',
            ja: '',
        },
        path: '/不许涩团长/涩涩的深呼吸.mp3',
        tag: 'hdame',
    },
    {
        messages: {
            zh: '伸懒腰的团长1',
            en: '',
            ja: '',
        },
        path: '/不许涩团长/伸懒腰的团长1（45W纪念回 28.40).mp3',
        tag: 'hdame',
    },
    {
        messages: {
            zh: '伸懒腰的团长2',
            en: '',
            ja: '',
        },
        path: '/不许涩团长/伸懒腰的团长2（45W纪念回 1.09.00).mp3',
        tag: 'hdame',
    },
    {
        messages: {
            zh: '昂',
            en: '',
            ja: '',
        },
        path: '/不许涩团长/昂（媚）-ytb1周年_01.mp3',
        tag: 'hdame',
    },
    {
        messages: {
            zh: '大小姐没穿胖次',
            en: '',
            ja: '',
        },
        path: '/不许涩团长/erio变态发言：大小姐没穿胖次.mp3',
        tag: 'hdame',
    },
    {
        messages: {
            zh: '好听的',
            en: '',
            ja: '',
        },
        path: '/不许涩团长/好听的 19.05-14.mp3',
        tag: 'hdame',
    },
    /**
*----rorio------public/voices/rorio语音库--------------------
*/
    {
        messages: {
            zh: '神萝天征',
            en: '',
            ja: '',
        },
        path: '/rorio语音库/神萝天征.mp3',
        tag: 'rorio',
    },
    {
        messages: {
            zh: 'rorio第一次和你啾',
            en: '',
            ja: '',
        },
        path: '/rorio语音库/rorio第一次和你啾（45W纪念回 58.26).mp3',
        tag: 'rorio',
    },
    {
        messages: {
            zh: 'rorio好好唱歌了~快表扬rorio',
            en: '',
            ja: '',
        },
        path: '/rorio语音库/rorio好好唱歌了~快表扬rorio（45W纪念回 1.42.15).mp3',
        tag: 'rorio',
    },
    {
        messages: {
            zh: 'rorio喜欢大家 muamua',
            en: '',
            ja: '',
        },
        path: '/rorio语音库/rorio喜欢大家 muamua（45W纪念回 2.01.28).mp3',
        tag: 'rorio',
    },
    {
        messages: {
            zh: 'rorio变态不要过来呀',
            en: '',
            ja: '',
        },
        path: '/rorio语音库/rorio变态不要过来呀（20210116 51分30秒）.mp3',
        tag: 'rorio',
    },
    {
        messages: {
            zh: 'rorio只有10岁不能结婚哦',
            en: '',
            ja: '',
        },
        path: '/rorio语音库/rorio只有10岁不能结婚哦（45W纪念回 1.42.51).mp3',
        tag: 'rorio',
    },
    {
        messages: {
            zh: '好可怕，哥哥是个被骂还开心的变态',
            en: '',
            ja: '',
        },
        path: '/rorio语音库/好可怕，哥哥是个被骂还开心的变态.mp3',
        tag: 'rorio',
    },
    {
        messages: {
            zh: '好耶，感谢哥哥的压岁钱，mua~',
            en: '',
            ja: '',
        },
        path: '/rorio语音库/好耶，感谢哥哥的压岁钱，mua.mp3',
        tag: 'rorio',
    },
    {
        messages: {
            zh: 'rorio do not touch me',
            en: '',
            ja: '',
        },
        path: '/rorio语音库/rorio do not touch me.mp3',
        tag: 'rorio',
    },
    {
        messages: {
            zh: '到此为止',
            en: '',
            ja: '',
        },
        path: '/rorio语音库/1-29 到此为止.mp3',
        tag: 'rorio',
    },
    {
        messages: {
            zh: 'rorio一袋哟',
            en: '',
            ja: '',
        },
        path: '/rorio语音库/rorio一袋哟.mp3',
        tag: 'rorio',
    },
    {
        messages: {
            zh: '萝莉欧叫声1 ｛die嘿｝19.05-19',
            en: '',
            ja: '',
        },
        path: '/rorio语音库/萝莉欧叫声1 ｛die嘿｝19.05-19.mp3',
        tag: 'rorio',
    },
    /**
*-------mature------public/voices/姐erio语音库---------------------
*/
    {
        messages: {
            zh: 'erio大姐姐喜欢（中文）大家',
            en: '',
            ja: '',
        },
        path: '/姐erio语音库/erio大姐姐喜欢（中文）大家.mp3',
        tag: 'mature',
    },
    {
        messages: {
            zh: '爱的鞭策（20210116 第五人格）',
            en: '',
            ja: '',
        },
        path: '/姐erio语音库/爱的鞭策.mp3',
        tag: 'mature',
    },
    {
        messages: {
            zh: '病娇邻家大姐姐（20210119台词回）',
            en: '',
            ja: '',
        },
        path: '/姐erio语音库/病娇邻家大姐姐.mp3',
        tag: 'mature',
    },
    {
        messages: {
            zh: '坏心眼的大姐姐',
            en: '',
            ja: '',
        },
        path: '/姐erio语音库/坏心眼的大姐姐.mp3',
        tag: 'mature',
    },
    {
        messages: {
            zh: '就像你这样的人与其想呼吸的话，不如试试看吸入CO2呼出O2如何？',
            en: '',
            ja: '',
        },
        path: '/姐erio语音库/就像你这样的人与其想呼吸的话，不如试试看吸入CO2呼出O2如何.mp3',
        tag: 'mature',
    },
    {
        messages: {
            zh: '女王erio 要给DD一点惩罚呢 ~（20210119 台词回 18.40）',
            en: '',
            ja: '',
        },
        path: '/姐erio语音库/女王erio 要给DD一点惩罚呢.mp3',
        tag: 'mature',
    },
    {
        messages: {
            zh: '女王erio ~（20210119 台词回 17.35）',
            en: '',
            ja: '',
        },
        path: '/姐erio语音库/女王erio.mp3',
        tag: 'mature',
    },
    {
        messages: {
            zh: '女王大人的训斥，舔我的鞋吧(20201230)',
            en: '',
            ja: '',
        },
        path: '/姐erio语音库/女王大人的训斥，舔我的鞋吧.mp3',
        tag: 'mature',
    },
    {
        messages: {
            zh: '是团长哦 团长在哦~',
            en: '',
            ja: '',
        },
        path: '/姐erio语音库/是团长哦 团长在哦.mp3',
        tag: 'mature',
    },
    {
        messages: {
            zh: '喂 那么想被骂的话那就伏地下跪 求你了女王大人',
            en: '',
            ja: '',
        },
        path: '/姐erio语音库/喂 那么想被骂的话那就伏地下跪 求你了女王大人.mp3',
        tag: 'mature',
    },
    {
        messages: {
            zh: '先吃饭还是先吃我',
            en: '',
            ja: '',
        },
        path: '/姐erio语音库/先吃饭还是先吃我.mp3',
        tag: 'mature',
    },
    {
        messages: {
            zh: '这种服务可是很少见的哦',
            en: '',
            ja: '',
        },
        path: '/姐erio语音库/这种服务可是很少见的哦.mp3',
        tag: 'mature',
    },
    /**
  *-------ikeman------public/voices/池面erio语音库---------------------
  */
    {
        messages: {
            zh: '池面的早上好',
            en: '',
            ja: '',
        },
        path: '/池面erio语音库/池面的早上好（45W纪念回 1.12.02).mp3',
        tag: 'ikeman',
    },
    {
        messages: {
            zh: '低音自我介绍',
            en: '',
            ja: '',
        },
        path: '/池面erio语音库/低音自我介绍-【巧克电台】.mp3',
        tag: 'ikeman',
    },
    {
        messages: {
            zh: '池面团长的撩妹台词',
            en: '',
            ja: '',
        },
        path: '/池面erio语音库/池面团长的撩妹台词（45W纪念回 1.12.55).mp3',
        tag: 'ikeman',
    },

    /**
  *-------prprpr------public/voices/prprpr弹药库---------------------
  */
    {
        messages: {
            zh: '坏心眼姐姐的虚假prpr',
            en: '',
            ja: '',
        },
        path: '/prprpr弹药库/坏心眼姐姐的虚假prpr.mp3',
        tag: 'prprpr',
    },
    {
        messages: {
            zh: '坏姐姐的高速prpr（45W纪念回 1.59.48)',
            en: '',
            ja: '',
        },
        path: '/prprpr弹药库/坏姐姐的高速prpr（45W纪念回 1.59.48).mp3',
        tag: 'prprpr',
    },
    {
        messages: {
            zh: '哈喇子直流的prprpr',
            en: '',
            ja: '',
        },
        path: '/prprpr弹药库/哈喇子直流的prprpr.mp3',
        tag: 'prprpr',
    },
    {
        messages: {
            zh: '关西腔开头的prpr',
            en: '',
            ja: '',
        },
        path: '/prprpr弹药库/关西腔开头的prpr （2021128  126.35）.mp3',
        tag: 'prprpr',
    },
    {
        messages: {
            zh: 'rorio的陷阱prpr',
            en: '',
            ja: '',
        },
        path: '/prprpr弹药库/rorio的陷阱prpr  20201230台詞配信尾.mp3',
        tag: 'prprpr',
    },
    {
        messages: {
            zh: 'rorio的欧尼酱prprpr（20201221 66.44）',
            en: '',
            ja: '',
        },
        path: '/prprpr弹药库/rorio的欧尼酱prprpr（20201221 66.44）.mp3',
        tag: 'prprpr',
    },
    {
        messages: {
            zh: '2021第一次prpr回马枪版',
            en: '',
            ja: '',
        },
        path: '/prprpr弹药库/2021第一次prpr回马枪版（20210116）.mp3',
        tag: 'prprpr',
    },
    {
        messages: {
            zh: '2020谢谢 roiro的全力prpr(20201231尾）',
            en: '',
            ja: '',
        },
        path: '/prprpr弹药库/2020谢谢 roiro的全力prpr(20201231尾）.mp3',
        tag: 'prprpr',
    },
    {
        messages: {
            zh: 'pinopino?',
            en: '',
            ja: '',
        },
        path: '/prprpr弹药库/带施法前摇pr pino.mp3',
        tag: 'prprpr',
    },

    /**
    *-------nya------public/voices/nyanyanyanya~---------------------
    */
    {
        messages: {
            zh: 'nyanyanya',
            en: '',
            ja: '',
        },
        path: '/nyanyanyanya~/nyanyanya(20190217 12.20).mp3',
        tag: 'nya',
    },
    {
        messages: {
            zh: 'nyanyanya~',
            en: '',
            ja: '',
        },
        path: '/nyanyanyanya~/nyanyanya~(45W纪念回 16.00).mp3',
        tag: 'nya',
    },
    {
        messages: {
            zh: 'nyaaaaa',
            en: '',
            ja: '',
        },
        path: '/nyanyanyanya~/nyaaaaa（20200203 P2  16.40).mp3',
        tag: 'nya',
    },
    {
        messages: {
            zh: 'nya 1',
            en: '',
            ja: '',
        },
        path: '/nyanyanyanya~/nya 4(20190217 31.40).mp3',
        tag: 'nya',
    },
    {
        messages: {
            zh: 'nya 2',
            en: '',
            ja: '',
        },
        path: '/nyanyanyanya~/nya 2(20190217 20.10).mp3',
        tag: 'nya',
    },
    {
        messages: {
            zh: 'nya 3',
            en: '',
            ja: '',
        },
        path: '/nyanyanyanya~/nya 3(20190217 20.30).mp3',
        tag: 'nya',
    },

]
export default voices