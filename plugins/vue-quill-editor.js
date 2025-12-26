import Vue from 'vue'

if (process.client) {
    const { quillEditor } = require('vue-quill-editor')
    
    // Import styles
    require('quill/dist/quill.core.css')
    require('quill/dist/quill.snow.css')
    require('quill/dist/quill.bubble.css')
    
    Vue.component('quill-editor', quillEditor)
}