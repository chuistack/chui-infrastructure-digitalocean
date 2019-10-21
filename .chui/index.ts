import * as cluster from "./cluster";
import {Config} from "@chuistack/chui-lib";


(async () => {
    const config = await Config.loadCurrentConfig();
    console.log("CONFIGUUURATION: ", config);
})();


const clusterOutput = cluster.install();

export const clusterName = clusterOutput.cluster.name;
