import {Config, getStack} from "@pulumi/pulumi";
import {DropletSlug, Region} from "@pulumi/digitalocean";
import {Chui} from "@chuistack/chui-lib";

const config = new Config();
const stack = getStack();
const chui = Chui.Config.loadCurrentConfig();

/***********************
 * CLUSTER             *
 ***********************/

export const CLUSTER_NAME = `${chui.globalAppName}-${stack}`;
export const CLUSTER_REGION: Region = config.require('clusterRegion');
export const PRIMARY_NODE_POOL_NAME = `${CLUSTER_NAME}-node-pool-1`;
export const PRIMARY_NODE_POOL_SIZE: DropletSlug = config.require('nodeSize');