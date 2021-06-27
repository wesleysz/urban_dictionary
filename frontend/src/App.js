import './App.css';
import {Typography, Box} from '@material-ui/core';
import {ThumbUp, ThumbDown} from '@material-ui/icons';
import { Space, Input, Button } from 'antd';

function App() {
  return (
    <>
    <div className="root">
      <div className="header">
        <div className="row-title">
          <a className="title">城市辭典</a>
        </div>
        <div className="row-bar" >
          <Space size={50}> 
            <Input.Search
              style={{ width: "44rem" }} 
              placeholder="Type any word..."
              allowClear
              enterButton="Search"
              size="large"
              // onSearch={}
            />
            <a className="circle-button"></a>
          </Space>
        </div>
      </div>

      <div id="content">
        <div className="card">
          <div className="tags">#tag1 #tag2</div>
          <div className="vocab">
            <a className="word">Vocabulary</a>
          </div>
          <div className="meaning">explanation........</div>
          <div className="example">example..........</div>
          <div className="author"> by me. June 21, 2021</div>
          <div className="footer"> 
            <Button >
              <Space size={4}> 
                <ThumbUp color="primary" />
                <Typography variant="button" display="block" gutterBottom >12</Typography>
              </Space>
            </Button>
            <Button >
              <Space size={4}> 
                <ThumbDown color="primary" />
                <Typography variant="button" display="block" gutterBottom >2</Typography>
              </Space>
            </Button>

          {/* 讚: 12  倒讚: 3 按鈕:https://material-ui.com/zh/components/button-group/ */}
            {/* <ButtonGroup disableElevation  color="primary" aria-label="outlined secondary button group"> 
            {/*variant="contained"*/}
              {/*<Button >
                <Space size={2}> 
                  <ThumbUp color="primary" />
                  <Box mr={1} display="inline"><Typography variant="button" display="block" gutterBottom >12</Typography></Box>
                </Space>
              </Button>
              <Button> 
                <ThumbDown color="primary" />
                <Typography variant="button" display="block" gutterBottom>`   {3}`</Typography>
              </Button>
            </ButtonGroup> */}
          </div>
        </div>
      </div>
    </div>

    
    </>
  );
}

export default App;
