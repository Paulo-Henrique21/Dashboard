import Column from '../../components/Graficos/Column'
import Donut from '../../components/Graficos/Donut'
import Line from '../../components/Graficos/Line'
import Radial from '../../components/Graficos/Radial'
import Table from '../../components/Tabelas'
import './Analytics.css'
import PersonIcon from '@mui/icons-material/Person';
import LocalPostOfficeIcon from '@mui/icons-material/LocalPostOffice';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import Candlestick from '../../components/Graficos/Candlestick'
import Radar from '../../components/Graficos/Radar'

export default function Analytics() {
    return (
        
            <div className='analytics'>
                <h1>Analytics</h1>
                <div className='camp-container'>

                    {/* Linha 1 */}
                    <div className='container'>
                        <div className='child-l1-c12'>
                            <div className='text-l1-c12'>
                                <h1>Welcome back</h1>
                                <p>If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything.
                                </p>
                                <button>Go Now</button>
                            </div>
                            <div className='imagem'>
                                <img src='../csv.png' />
                            </div>
                        </div>
                        <div className='child'>
                        </div>
                    </div>

                    {/* Linha 2 */}
                    <div className='container'>
                        <div className='child-l2-c123'>
                            <div className='full-child-l2-c123'>
                                <div className='text-child-l2-c123'>
                                    <h5>Total Active Users</h5>
                                    <div className='child-l2-c123-icon-porcent'>
                                        <div className='child-l2-c123-icon'><TrendingUpIcon /></div>
                                        <p>+2,6%</p>
                                    </div>
                                    <div className='text-number'>18,765</div>
                                </div>
                                <div className='chart-child-l2-c123'>
                                    <div className='chart-colu'>
                                        <Column />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='child-l2-c123'>
                            <div className='full-child-l2-c123'>
                                <div className='text-child-l2-c123'>
                                    <h5>Total Active Users</h5>
                                    <div className='child-l2-c123-icon-porcent'>
                                        <div className='child-l2-c123-icon'><TrendingUpIcon /></div>
                                        <p>+0.2%</p>
                                    </div>
                                    <div className='text-number'>4,876</div>
                                </div>
                                <div className='chart-child-l2-c123'>
                                    <div className='chart-colu'>
                                        <Column />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='child-l2-c123'>
                            <div className='full-child-l2-c123'>
                                <div className='text-child-l2-c123'>
                                    <h5>Total Active Users</h5>
                                    <div className='child-l2-c123-icon-porcent'>
                                        <div className='child-l2-c123-icon'><TrendingDownIcon /></div>
                                        <p>-0.6%</p>
                                    </div>
                                    <div className='text-number'>765</div>
                                </div>
                                <div className='chart-child-l2-c123'>
                                    <div className='chart-colu'>
                                        <Column />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Linha 3 */}
                    <div className='container'>
                        <div className='child-l3-c1'>
                            <h2>Current dowload</h2>
                            <br />
                            <Donut />
                        </div>
                        <div className='child-l3-c23'>
                            <Line />
                        </div>
                    </div>
                    <div className='container'>
                        <div className='child-l4-c12'><Table /></div>
                        <div className='child-l4-c3'><Radar /></div>
                    </div>
                    <div className='container'>
                        <div className='child-l5-c1'><Candlestick /></div>

                        <div className='child-container'>

                            <div className='child-l51-3'>
                                <div className='child-container-porcent'>
                                    <Radial />
                                </div>
                                <div className='child-l51-3-text'>
                                    <h2>38,550</h2>
                                    <p>Conversion</p>
                                </div>
                                <div className='child-l51-3-icon'><PersonIcon style={{ fontSize: "100px", color: '#5935A9' }} /></div>
                            </div>
                            <div className='child-l51-3-b'>
                                <div className='child-container-porcent'>
                                    <Radial />
                                </div>
                                <div className='child-l51-3-text'>
                                    <h2>55,566</h2>
                                    <p>Aplications</p>
                                </div>
                                <div className='child-l51-3-icon'><LocalPostOfficeIcon style={{ fontSize: "100px", color: '#1E7DA8' }} /></div>
                            </div>
                        </div>
                    </div>
                </div>
                <footer><h1>Analytics</h1></footer>
            </div>

        

    )
}
