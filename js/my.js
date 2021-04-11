let vm = new Vue({
    el: '#app',
    data: {
        searchStr: '',
        isActive: 0,
        sugArray: [],
        searchEngine: [
            {
                name: "百度",
                url: 'https://www.baidu.com/s?wd='
            },
            {
                name: "谷歌",
                url: 'https://www.google.com/search?q='

            },
            {
                name: "必应",
                url: 'https://www.bing.com/search?q='
            },
            {
                name: "bilibili",
                url: "https://search.bilibili.com/all?keyword="
            }
        ]
    },
    computed: {
        encodedStr: function () {
            return encodeURIComponent(this.searchStr)
        }
    },
    watch: {
        encodedStr: function (newVal) {
            baiduSug(newVal)
        }
    },
    methods: {
        swapEngine: function (i) {
            this.isActive = i
        },
        search: function () {
            let url = this.searchEngine[this.isActive].url + this.encodedStr
            window.open(url)
        },
        sugIn: function (event) {
            this.searchStr = event.target.innerText
            this.search()
        }
    }
})
window.baidu = {
    sug: function (json) {
        vm.sugArray = json.s
    }
}
function baiduSug(str) {
    if (str) {
        let sug = document.createElement('script')
        sug.src = `https://suggestion.baidu.com/su?wd=${str}&cb=window.baidu.sug`
        document.getElementsByTagName('body')[0].appendChild(sug)
    }
    else vm.sugArray = []
}
document.getElementsByTagName("input")[0].focus()

//background image
let rdm=Math.floor(Math.random()*26);
document.getElementsByTagName("body")[0].style.background=`url('./img/backgrounds/image_${rdm}.jpg') no-repeat center center fixed`;