const app = Vue.createApp({
    data() {
        return {
            cart: [],
            premium: true
        }
    },
    methods: {
        updateCart(id) {
            console.log("ctdebug push id" + id)
            this.cart.push(id)
        },
        removeById(id) {
            const index = this.cart.indexOf(id)
            console.log("ctdebug rmv id" + index)
            if (index > -1 )
                this.cart.splice(index, 1)
        }

    }
})
