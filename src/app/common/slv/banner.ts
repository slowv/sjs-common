import {SLVConfig} from "./SlvProvider.tsx";

export const banner = (config: SLVConfig) => {
  console.log(`%c
            __                           ______    _____       __   _____          ___      ____
   _____   / /  ____  _      __ _   __  / ____ \\  / ___/      / /  / ___/         <  /     / __ \\
  / ___/  / /  / __ \\| | /| / /| | / / / / __ \`/  \\__ \\  __  / /   \\__ \\          / /     / / / /
 (__  )  / /  / /_/ /| |/ |/ / | |/ / / / /_/ /  ___/ / / /_/ /   ___/ /         / /   _ / /_/ /
/____/  /_/   \\____/ |__/|__/  |___/  \\ \\__,_/  /____/  \\____/   /____/         /_/   (_)\\____/
                                       \\____/
%c ::  SlowV 😈 :: Running SJS ${config.version} :: ${config.applicationName}
%c
--------------------------------------------------------------------------
    Application '${config.applicationName}' is running! Access URLs:
    Local: http://localhost:${config.port}
    External: http://${config.host}:${config.port}
--------------------------------------------------------------------------
`, 'font-weight: 700; text-shadow: 3px 3px 0 rgb(217,31,38)', 'color: #fff; background: green;', 'color: #213547');
}
