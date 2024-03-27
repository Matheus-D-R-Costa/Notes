function createWebserver() {
    function start() {
        console.log('> [webserver] Starting...')
        console.log('> [webserver] Waiting for port to be available...')
        console.log('> [webserver] Starting done!')
    }



    return {
        start,
        stop
    }
}

export default createWebserver