import { getAllProposesPending } from "@/data/metrics";



  export const getCountAllProposes = async () => {
  
    const proposes = await getAllProposesPending();

    return proposes.length
  };