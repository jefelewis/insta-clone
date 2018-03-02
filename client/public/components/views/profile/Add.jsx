import React from 'react';
import axios from 'axios';
class Add extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      selectedFile: null
    }
    this.fileUploadHandler = this.fileUploadHandler.bind(this);
    this.fileSelectedHandler = this.fileSelectedHandler.bind(this);
  }
  fileSelectedHandler(e) {
    console.log('fileselectedhandler: ', e.target.files[0])
    this.setState({
      selectedFile: e.target.files[0]
  })
} 
  fileUploadHandler(e) {
    const fd = new FormData();
    console.log('fileupdloadhandler: ', fd)
    fd.append('image', this.state.selectedFile, this.state.selectedFile.name);
    axios.post('https://us-central1-top-shelf-708be.cloudfunctions.net/uploadFile', fd, {
      onUploadProgress: progressEvent => {
        console.log('Upload progress: ' + Math.round(progressEvent.loaded / progressEvent.total * 100) + '%')
      }
    })
      .then(res => {
        console.log(res);
      });
    
    
  }
  render() {
    return (
      <div>
        <input 
          style={{display: 'none'}} //remove this style to display selected file name
          type="file" 
          onChange={this.fileSelectedHandler} 
          ref={fileInput => this.fileInput = fileInput} />
        <button onClick={() => this.fileInput.click()}>Pick File</button>
        <button onClick={this.fileUploadHandler}>Upload</button>
      </div>
    );
  }
}
export default Add;