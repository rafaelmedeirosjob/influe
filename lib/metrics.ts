import { getAllProposesPending } from "@/data/metrics";

export const getCountAllProposes = async () => {
  
    const proposes = await getAllProposesPending();
  
    if (proposes) {
        return [{
            month: 'September', 
            revenue: proposes.length
        }];
    }
  
    return null;
  };