import { Responsive as ResponsiveGridLayout } from "react-grid-layout";
import { withSize } from "react-sizeme";
import './style.css'
import '/node_modules/react-grid-layout/css/styles.css'
import '/node_modules/react-resizable/css/styles.css'
import Box from '../../components/Box';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import Column from '../../components/Graficos/Column';
import Candlestick from "../Graficos/Candlestick";


const layouts = {
    lg: [
        { i: "a", x: 0, y: 0, w: 20, h: 16, minW: 14, maxW: 30, minH: 10, maxH: 26, static: false},
        { i: "b", x: 20, y: 0, w: 10, h: 16, minW: 14, maxW: 30, minH: 10, maxH: 26, static: false},
        { i: "c", x: 0, y: 16, w: 10, h: 8, minW: 5, maxW: 30, minH: 5, maxH: 26,static: false},
        { i: "d", x: 10, y: 16, w: 10, h: 8, minW: 5, maxW: 30, minH: 5, maxH: 26, static: false},
        { i: "e", x: 20, y: 16, w: 10, h: 8, minW: 5, maxW: 30, minH: 5, maxH: 26, static: false},
        { i: "f", x: 15, y: 16, w: 15, h: 20, minW: 5, maxW: 30, minH: 5, maxH: 26, static: false},
    ]
};


function DragAndDrop({ size: { width } }) {

    return (
        <>
            <ResponsiveGridLayout
                className="layout"
                style={{ padding: "0px" }}
                layouts={layouts}
                breakpoints={{ lg: 1200, md: 996, sm: 8, xs: 480, xxs: 0 }}
                cols={{ lg: 30, md: 10, sm: 6, xs: 4, xxs: 2 }}
                rowHeight={12}
                width={width}
            >
                 <div key="a">
                    <Box>
                        <div className='Box-01 '>
                            <div className='Box-01-left'>
                                <div className='Box-01-texts'>
                                    <h1>Welcome back</h1>
                                    <p> If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything.</p>

                                </div>
                                <button>Go Now</button>
                            </div>
                            <div className='Box-01-right'>
                                <img src='../csv.png' />
                            </div>
                        </div>
                    </Box>
                </div>

                <div key="b" className="fundo"></div>

                <div key="c"><Box>
                    <div className='Box-02'>
                        <div className='Box-02-left '>
                            <p className='Box-02-text'>Total Actives Users</p>
                            <div className='Box-02-icon-percent '>
                                <i className=''><TrendingUpIcon /></i>
                                <p className=''>+2,6%</p>
                            </div>
                            <p className='Box-02-number'>18,765</p>
                        </div>
                        <div className='Box-02-right'>
                            <div className='Box-02-chart'>
                                <Column />
                            </div>
                        </div>
                    </div>
                </Box></div>
                <div key="d"><Box>
                    <div className='Box-02'>
                        <div className='Box-02-left '>
                            <p className='Box-02-text'>Total Actives Users</p>
                            <div className='Box-02-icon-percent '>
                                <i className=''><TrendingUpIcon /></i>
                                <p className=''>+2,6%</p>
                            </div>
                            <p className='Box-02-number'>18,765</p>
                        </div>
                        <div className='Box-02-right'>
                            <div className='Box-02-chart'>
                                <Column />
                            </div>
                        </div>
                    </div>
                </Box></div>
                <div key="e"><Box>
                    <div className='Box-02'>
                        <div className='Box-02-left '>
                            <p className='Box-02-text'>Total Actives Users</p>
                            <div className='Box-02-icon-percent '>
                                <i className=''><TrendingUpIcon /></i>
                                <p className=''>+2,6%</p>
                            </div>
                            <p className='Box-02-number'>18,765</p>
                        </div>
                        <div className='Box-02-right'>
                            <div className='Box-02-chart'>
                                <Column />
                            </div>
                        </div>
                    </div>
                </Box></div>
                <div key="f">
                    <Box><div style={{width: "100%", marginRight: "15px", marginBottom: "15px"}}><Candlestick/></div></Box>
                </div>
               
                

            </ResponsiveGridLayout>
        </>
    );
}

export default withSize({ refreshMode: "debounce", refreshRate: 60 })(DragAndDrop);

/* function getFromLS(key) {
  let ls = {};
  if (global.localStorage) {
    try {
      ls = JSON.parse(global.localStorage.getItem("rgl-8")) || {};
    } catch (e) {}
  }
  return ls[key];
}

function saveToLS(key, value) {
  if (global.localStorage) {
    global.localStorage.setItem(
      "rgl-8",
      JSON.stringify({
        [key]: value
      })
    );
  }
} */


