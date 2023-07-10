import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import { SimpleUploadAdapter } from '@ckeditor/ckeditor5-upload';


import React, { useEffect, useState } from "react";

interface CK5EditorInterfaces {
    value: string;
    onChange: (evt: any)=>void;

}

const CKEditorWithImage = (props: CK5EditorInterfaces) => {


    const {value, onChange } = props;
    const [editorData, setEditorData] = useState('');
    
    const handleEditorChange = (event: any, editor: any) => {
        const data = editor.getData();
        setEditorData(data);
        onChange(data);
    };


    useEffect(() => {
        if (value) {
            setEditorData(value);
        }
    },[value])

  return (
        <div>
          <h2>Write you blog</h2>
          <div className="m-10">
              <CKEditor
        editor={ClassicEditor}
        data={editorData}
        config={{
          toolbar: [
            'heading',
            '|',
            'bold',
            'italic',
            'link',
            '|',
            // 'imageUpload',
            // 'imageStyle:full',
            // 'imageStyle:side',
            '|',
            'undo',
            'redo',
            ]
        }}
        onChange={handleEditorChange}
              />
              </div>
    </div>
  );
 };

export default CKEditorWithImage;