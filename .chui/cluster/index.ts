import * as digitalocean from "@pulumi/digitalocean";
import {CLUSTER_NAME, CLUSTER_REGION, PRIMARY_NODE_POOL_NAME, PRIMARY_NODE_POOL_SIZE} from "../constants";


/**
 * Configure the kubernetes cluster.
 */
const configureCluster = () => {
    return new digitalocean.KubernetesCluster(
        CLUSTER_NAME,
        {
            "name": CLUSTER_NAME,
            "region": CLUSTER_REGION,
            "version": "1.15.3-do.3", // doctl kubernetes options versions
            "nodePool": {
                "name": PRIMARY_NODE_POOL_NAME,
                "size": PRIMARY_NODE_POOL_SIZE,
                "nodeCount": 2,
            }
        }
    );
};


export const install = () => {
    const cluster = configureCluster();

    return {
        cluster,
    };
};