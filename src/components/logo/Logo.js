import React from 'react';
import { withTheme } from 'styled-components';
import Color from '../Color';


const Logo = ({ theme, click }) => {

  const style = {
    height: '100%'
  }
  const cls1 = {
    fill: theme.main.hsl

  }

  const cls2 = {
    fill: 'none',
    strokeWidth: '10px',
    stroke: '#ed0e94'
  }

  const cls3 = {
    fill: 'none',
    strokeWidth: '10px',
    stroke: '#ed0f94'
  }

  const cls4 = {
    stroke: 'none',
    fill: '#ed0e94'
  }

  const cls5 = {
    stroke: 'none',
    fill: '#000000'
  }
  const cls6 = {
    fill: '#ec0e93',
    stroke: 'none'
  }


  const cls7 = {
    fill: '#ed0e94',
    stroke: 'none'
  }

  console.log(theme.main.hsl);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" onClick={() => click(Math.floor(Math.random() * 360))} style={style} width="180" height="511" viewBox="0 0 719 511">
      <g id="Group_1" data-name="Group 1" transform="translate(-333 -169)">
        <g id="Path_11" data-name="Path 11" style={cls1} transform="translate(333 169)">
          <path style={cls5} d="M 417 311 L 5 311 L 5 5 L 417 5 L 417 311 Z" />
          <path style={cls6} d="M 10 10 L 10 306 L 412 306 L 412 10 L 10 10 M 0 0 L 422 0 L 422 316 L 0 316 L 0 0 Z" />
        </g>
        <g id="Path_10" data-name="Path 10" style={cls1} transform="translate(630 364)">
          <path style={cls5} d="M 417 311 L 5 311 L 5 5 L 417 5 L 417 311 Z" />
          <path style={cls7} d="M 10 10 L 10 306 L 412 306 L 412 10 L 10 10 M 0 0 L 422 0 L 422 316 L 0 316 L 0 0 Z" />
        </g>
        <path id="Path_9" data-name="Path 9" style={cls2} d="M0,0H125" transform="translate(630.5 480.5)" />
        <path id="Path_8" data-name="Path 8" style={cls3} d="M0,0V107" transform="translate(751.5 373.5)" />
        <path id="Path_7" data-name="Path 7" style={cls4} d="M50.244,51.359a26.081,26.081,0,0,0-7.4-3.369,29.048,29.048,0,0,0-8.179-1.27,14.411,14.411,0,0,0-6.4,1.294,9.867,9.867,0,0,0-4.028,3.418A8.335,8.335,0,0,0,22.852,56.1,10.246,10.246,0,0,0,24.9,62.37q2.051,2.759,7.861,6.616,7.52,5.029,10.425,9.5a17.924,17.924,0,0,1,2.905,9.985,20.183,20.183,0,0,1-3.1,11.011,18.825,18.825,0,0,1-8.716,7.324A33.423,33.423,0,0,1,21,109.221a42.962,42.962,0,0,1-10.254-1.294,38.048,38.048,0,0,1-9.131-3.394L3.662,93.352A30.912,30.912,0,0,0,12.109,97.7a28.568,28.568,0,0,0,9.229,1.611q5.811,0,8.984-2.515a8.543,8.543,0,0,0,3.174-7.1,9.2,9.2,0,0,0-2.246-6.152Q29,80.9,22.754,76.945q-6.641-4.2-9.644-8.911a19,19,0,0,1-3-10.425,19.586,19.586,0,0,1,3.027-10.693,20.181,20.181,0,0,1,8.594-7.446,30.293,30.293,0,0,1,13.184-2.661,47.555,47.555,0,0,1,17.48,3.516Z" transform="translate(488 150)" />
        <path id="Path_6" data-name="Path 6" style={cls4} d="M48.438,108,45.85,90.422H18.457L8.691,108H-5.029L35.986,37.98H49.707L60.791,108ZM40.967,51.9V50.188l.1-1.709H40.82a33.74,33.74,0,0,1-2.295,5.371L23.486,80.656H44.58L41.162,54.289A11.537,11.537,0,0,1,40.967,51.9Z" transform="translate(669 150)" />
        <path id="Path_5" data-name="Path 5" style={cls4} d="M60.4,55.559a18.924,18.924,0,0,1-5.713,14.16q-5.713,5.566-15.039,6.592v.2q5.518,1.807,7.617,10.205L52.637,108H39.7L35.205,88.566A12.811,12.811,0,0,0,31.86,81.9a8.809,8.809,0,0,0-6.274-2.173H21.191L15.137,108H2.979L17.822,37.98H39.453q9.863,0,15.405,4.639T60.4,55.559Zm-12.7,1.758A9.443,9.443,0,0,0,45,50.261Q42.285,47.6,36.67,47.6H27.979L23.193,70.061H31.25q7.715,0,12.085-3.442A11.218,11.218,0,0,0,47.705,57.316Z" transform="translate(668 360)" />
        <path id="Path_4" data-name="Path 4" style={cls4} d="M48.438,108,45.85,90.422H18.457L8.691,108H-5.029L35.986,37.98H49.707L60.791,108ZM40.967,51.9V50.188l.1-1.709H40.82a33.74,33.74,0,0,1-2.295,5.371L23.486,80.656H44.58L41.162,54.289A11.537,11.537,0,0,1,40.967,51.9Z" transform="translate(669 537)" />
        <path id="Path_3" data-name="Path 3" style={cls4} d="M35.728,33.982,5.493,107.459H-1.23L28.916,33.982Z" transform="translate(922 548)" />
        <path id="Path_2" data-name="Path 2" style={cls4} d="M20.186,133.4V121.147L61.826,102.8v-.317L20.186,82.173V69.795l56.938,29.39v6.982Z" transform="translate(947 516)" />
        <path id="Path_1" data-name="Path 1" style={cls4} d="M14.79,106.294V99.185l56.938-29.39V82.109L30.215,102.485v.254l41.514,18.472V133.4Z" transform="translate(336 124)" />
      </g>
    </svg>

  );
};

export default withTheme(Logo);