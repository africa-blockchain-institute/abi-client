import Vue from 'vue'
// import VueQuillEditor from 'vue-quill-editor/dist/ssr'

// require styles
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
 
// Vue.use(VueQuillEditor)
if (process.browser) {
    const VueQuillEditor = require('vue-quill-editor/dist/ssr')
    Vue.use(VueQuillEditor, ['bold', 'italic', 'underline', 'strike'])
}