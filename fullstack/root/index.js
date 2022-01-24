import { registerMicroApps, start } from 'qiankun';

registerMicroApps([
    {
        name: 'react app', // app name registered
        entry: '//localhost:3002',
        container: '#yourContainer',
        activeRule: '/yourActiveRule',
    },
    // {
    //     name: 'vue app',
    //     entry: { scripts: ['//localhost:7100/main.js'] },
    //     container: '#yourContainer2',
    //     activeRule: '/yourActiveRule2',
    // },
]);

start();