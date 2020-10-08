import axios from '@/helpers/axios'

export default {
    state: {
        product: null,
        products: [],
        currency: 'kr'
    },

    mutations: {
        GET_PRODUCT_BY_ID(state, product) {
            state.product = product
            sessionStorage.setItem('product', state.product)
        },
        GET_PRODUCTS(state, products) {
            state.products = products
            sessionStorage.setItem('products', state.products)
        }
    },

    actions: {
        async getProductById({commit}, id) {
            let res = await axios.get('/products/' + id)

            if(res !== null) {
                commit('GET_PRODUCT_BY_ID', res.data)
            }         
        },
        async getProducts({commit}) {
            let res = await axios.get('/products')

            if(res !== null) {
                commit('GET_PRODUCTS', res.data)
            } 
        },
        async updateProduct({commit}, product) {
            let json = JSON.stringify(product)
            let res = await axios.put(`/products/${product.id}`, json)

            if(res.status === 200)
                this.dispatch('getProducts')       
        },
        async deleteProducts({commit}, id) {
            let res = await axios.delete('/products/' + id)

            if(res.status === 200)
                this.dispatch('getProducts')       
        },        
    },

    getters: {
        product(state) {
            if(state.product == null && sessionStorage.getItem('product') !== null)
                state.product = sessionStorage.getItem('product')    
            return state.product
        },
        products(state) {
            console.log(state.products)
            return state.products
        }
    }
}