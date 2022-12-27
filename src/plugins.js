/* eslint-disable */
export default {
    install(app, options) {
        app.config.globalProperties.$hi = () => { console.log('global function hi') }
    }
}