import './App.css';

function App() {
  return (
    <>
    <div className="root">
      <div className="header">
        <div className="row">
          <a className="title">城市辭典</a>
        </div>
        <div className="row">
          <a className="circle-button"></a>
        </div>
      </div>

      {/* <div style={{padding_left: '20px'}}>
        <h1>Responsive Header</h1>
        <p>Resize the browser window to see the effect.</p>
        <p>Some content..</p>
      </div> */}
      <div id="content">
        <div className="card">
          <div className="tags">#tag1 #tag2</div>
          <div className="vocab">
            <a className="word">Vocabulary</a>
          </div>
          <div className="meaning">explanation........</div>
          <div className="example">example..........</div>
          <div className="author"> by me. June 21, 2021</div>
          <div className="footer"> 讚: 12  倒讚: 3 按鈕:https://material-ui.com/zh/components/button-group/</div>
        </div>
      </div>
    </div>

    
    </>
  );
}

export default App;
