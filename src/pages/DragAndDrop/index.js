import './style.css'
import ReactGridLayout from 'react-grid-layout'
import '/node_modules/react-grid-layout/css/styles.css'
import '/node_modules/react-resizable/css/styles.css'
import Box from '../../components/Box';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import Column from '../../components/Graficos/Column';

const layout = [
    { i: "a", x: 0, y: 0, w: 5, h: 6, static: false, minW: 5, maxW: 12, minH: 6, maxH: 9 },
    { i: "b", x: 0, y: 1, w: 3, h: 4, static: false, minW: 3, maxW: 12, minH: 4, maxH: 9 },
    { i: "c", x: 3, y: 2, w: 3, h: 4, static: false, minW: 3, maxW: 12, minH: 4, maxH: 9 },
    { i: "d", x: 6, y: 3, w: 3, h: 4, static: false, minW: 3, maxW: 12, minH: 4, maxH: 9 },
    { i: "e", x: 5, y: 0, w: 4, h: 6, static: false, minW: 3, maxW: 12, minH: 4, maxH: 15 },
];

export default function DragAndDrop() {
    return (
        <div className='sidebar'>
            <ReactGridLayout
                className="layout border"
                layout={layout}
                cols={12}
                rowHeight={30}
                width={1200}
            >
                {/* Linha 1 */}
                <div key="a" className=''>
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

                {/* Linha 2 */}
                <div key="b" className=''>
                    <Box>
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
                    </Box>
                </div>
                <div key="c" className=''>
                    <Box>
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
                    </Box>
                </div>
                <div key="d" className=''>
                    <Box>
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
                    </Box>
                </div>
                <div key="e" className=''>
                    <Box>
                    <div className='fundo'>
                        </div>
                    </Box>
                </div>

            </ReactGridLayout>
        </div>
    )
}