var vm = new Vue ({
    el: '#app',
    data: {
        content1: 0,
        content2: 0
    },
    methods: {
        fn1() {
            this.content1++;
        },
        fn2() {
            this.content2++;
        }   
    }
})