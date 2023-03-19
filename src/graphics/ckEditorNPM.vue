<template>
  <div class="ckEditorNPM">
    <p>Подключить библиотеку :</p>
    <ul>
      <li>
        Vue3 : npm install --save @ckeditor/ckeditor5-vue
        @ckeditor/ckeditor5-build-classic
      </li>
      <li>
        Vue2 : npm install --save @ckeditor/ckeditor5-vue2
        @ckeditor/ckeditor5-build-classic
      </li>
    </ul>
    <div id="ckEditor">
      <ckeditor
        :editor="editor"
        v-model="editorData"
        :config="editorConfig"
      ></ckeditor>
    </div>
  </div>
</template>
<script>
import CKEditor from '@ckeditor/ckeditor5-vue'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'

export default {
  props: ['msg'],
  data() {
    return {
      editor: ClassicEditor,
      editorData: '<p>Content of the editor.</p>',
      editorConfig: {}
    }
  },
  components: { ckeditor: CKEditor.component }
}
</script>
