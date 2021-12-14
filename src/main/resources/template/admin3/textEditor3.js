let editor;

ClassicEditor
    .create( document.querySelector( '#editor' ) )
    .then( newEditor => {
        editor = newEditor;
    } )
    .catch( error => {
        console.error( error );
    } );

let editor1;
ClassicEditor
    .create( document.querySelector( '#editor1' ) )
    .then( newEditor => {
        editor1 = newEditor;
    } )
    .catch( error => {
        console.error( error );
    } );