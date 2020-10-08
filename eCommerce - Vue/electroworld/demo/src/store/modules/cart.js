import axios from '@/helpers/axios'

export default {
    state: {
        cart: []
    },

    mutations: {
        ADD_TO_CART(state, product) {
            state.cart.push(product)
            sessionStorage.setItem('cart', state.cart)
        },
        UPDATE_CART(state, product) {
            let index = state.cart.findIndex((p => p.id == product.id))        
            state.cart[index].quantity = product.quantity
            
            if(state.cart[index].quantity < 1)
                state.cart = state.cart.splice(index, 1)
            
            sessionStorage.setItem('cart', state.cart)
        },
        REMOVE_FROM_CART(state, product) {
            state.cart = state.cart.filter(p => p.id !== product.id)
            sessionStorage.setItem('cart', state.cart)
        },        
    },

    actions: {
      addProductToCart({commit}, product) {
        commit('ADD_TO_CART', product)
      },
      removeProductFromCart({commit}, product) {
        commit('REMOVE_FROM_CART', product)
      }
    },

    getters: {
        shoppingCart(state) {
            if(state.cart.length < 1)
                return "Your shopping cart is empty"

            return state.cart
        }
    }
}