import * as cluster from "./cluster";

const clusterOutput = cluster.install();

/***********************
 * OUTPUTS             *
 ***********************/

export const clusterName = clusterOutput.cluster.name;
