import React, { useEffect, useState } from 'react';
import { withTheme } from 'styled-components';
import { StyledNetworkStatusProps } from '../types';


const SVG = ({
  offline,
  theme
} : StyledNetworkStatusProps) => {
  const fill = offline ? 'none' : theme.colors.tealDark;
  const stroke = offline ? theme.colors.tealDark : 'none';
  const title = offline ? 'Offline' : 'Online';
  const desc = offline ? 'outlines of an up and a down arrow' : 'an up and a down arrow';
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="100%"
      viewBox="0 0 62.015724 100"
    >
      <title>
        {title}
      </title>
      <desc>
        {desc}
      </desc>
      <path
        fill={fill}
        stroke={stroke}
        strokeWidth="2.01016"
        d="M2.05358938 17.83752H6.886002c1.11161571 0 2.010155.90054944 2.010155 2.010155v56.28434h12.06093v-56.28434c0-1.10960556.89853929-2.010155 2.010155-2.010155h4.27157938L14.63916982 1.63768085zM55.129722 82.16248c-1.11161572 0-2.010155-.90054944-2.010155-2.010155v-56.28434h-12.06093v56.28434c0 1.10960556-.89853928 2.010155-2.010155 2.010155h-4.27157937l12.59965154 16.19983914L59.96213462 82.16248z"
      />
    </svg>
  )
}

const StyledSVG = withTheme(SVG)

function NetworkStatus() {
  const getOfflineStatus = function () {
    return typeof navigator === "undefined" ||
      typeof navigator.onLine !== "boolean"
        ? true
        : !navigator.onLine;
  };

  const [offline, setOfflineStatus] = useState(getOfflineStatus());

  const goOnline = () => setOfflineStatus(false);

  const goOffline = () => setOfflineStatus(true);

  useEffect(() => {
    window.addEventListener("online", goOnline);
    window.addEventListener("offline", goOffline);

    return () => {
      window.removeEventListener("online", goOnline);
      window.removeEventListener("offline", goOffline);
    };
  }, []);

  return <StyledSVG offline={offline}/>
};

export default NetworkStatus;
