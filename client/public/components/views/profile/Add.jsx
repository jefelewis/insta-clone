import Add from 'react';
import axios from 'axios';

class Add extends React.Component{
  constructor(props){
    super(props);
    state = {
      selectedFile: null
    }
  }

  fileSelectedHandler = event => {
    this.setState({
      selectedFile: event.target.files[0]
  })
} 
  fileUploadHandler = () => {
    const fd = new FormData();
    fd.append('image', this.state.selectedFile, this.state.selectedFile.name, fd, {
      onUploadProgress: progressEvent => {
        console.log('Upload Progress: ' + Math.round(progressEvent.loaded/ progressEvent.total * 100) + '%')
      }
    });
    axios.post('gs://top-shelf-708be.appspot.com/')
    .then(res=> {
      console.log(res);
    })
  }

  render() {
    return (
      <div>
        <input 
          style={{display: 'none'}} 
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