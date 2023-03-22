import httpCommon from "api/http-common";


const test = () => {
    return httpCommon.get("/test/test");
}


export {test}