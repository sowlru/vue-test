<template>
  <div class="ckeditorCustom">
    <p>Vue2</p>
    <ol>
      <li>npm install --save @ckeditor/ckeditor5-vue2</li>
      <li>https://ckeditor.com/ckeditor-5/online-builder/</li>
      <li>create Custom ckeditor.zip and unpack it to ckeditor5</li>
      <li>ckeditor5-> RC-> Open in Integrated Terminal</li>
      <li>npm install -> npm run build</li>
    </ol>
    <p>xxx.vue</p>
    <ol>
      <li>
        &lt;ckeditor :editor="editor" v-model="msg" :config="editorConfig"
        &gt;&lt;/ckeditor&gt;
      </li>
      <li>import CKEditor from '@ckeditor/ckeditor5-vue2'</li>
      <li>import Editor from '../../../ckeditor5/build/ckeditor'</li>
      <li>components: { ckeditor: CKEditor.component }</li>
      <li>
        return { editor: Editor, editorData: ' &lt;p&gt;editor.&lt;/p&gt; ',
        editorConfig: { } }
      </li>
    </ol>
  </div>
</template>
