/* eslint max-len: ["error", { "ignoreStrings": true }] */
import React from 'react';
import bemCn from 'bem-cn-fast';

import './styles.less';

const b = bemCn('tra-logo');

const Logo = () => (
  <div className={b()}>
    <div>
      <svg
        width="18"
        height="23"
        viewBox="0 0 18 23"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 0.879883V4.12259H6.9922C7.20508 4.12259 7.37744 4.29484 7.37744 4.50758V22.6331C7.37744 22.7692 7.4882 22.8799 7.62436 22.8799H10.3754C10.5118 22.8799 10.6226 22.7692 10.6226 22.6331V4.50758C10.6226 4.29484 10.7949 4.12259 11.0078 4.12259H18V0.879883H0Z"
          fill="#3F3F48"
        />
      </svg>
    </div>
    <div className="m-l-5">
      <svg
        width="18"
        height="23"
        viewBox="0 0 18 23"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M3.43149 4.12043C3.4835 4.12043 3.5314 4.14797 3.55686 4.19252L14.0993 22.6574C14.1776 22.7948 14.3252 22.8799 14.485 22.8799H18L7.41263 4.34182C7.35625 4.24273 7.42851 4.12043 7.54375 4.12043L17.7419 4.12259V0.879883H0.25019C0.11223 0.879883 0 0.990304 0 1.12664V22.6331C0 22.7692 0.11223 22.8799 0.25019 22.8799H3.03759C3.17583 22.8799 3.28778 22.7692 3.28778 22.6331V4.26217C3.28778 4.18388 3.35211 4.12043 3.43149 4.12043Z"
          fill="#3F3F48"
        />
      </svg>
    </div>
    <div className="m-l-5">
      <svg
        width="20"
        height="23"
        viewBox="0 0 20 23"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12.3667 0.879883C12.6164 0.879883 12.8375 1.04052 12.9153 1.27783L20 22.8799H16.8282C16.689 22.8799 16.5654 22.7903 16.522 22.6574L10.4908 4.26703C10.4625 4.18091 10.3823 4.12259 10.2915 4.12259H9.70821C9.61773 4.12259 9.53748 4.18091 9.50893 4.26703L3.47772 22.6574C3.43437 22.7903 3.31076 22.8799 3.17153 22.8799H0L7.08444 1.27783C7.16227 1.04052 7.38363 0.879883 7.633 0.879883H12.3667Z"
          fill="#3F3F48"
        />
      </svg>
    </div>
  </div>
);

export default Logo;
