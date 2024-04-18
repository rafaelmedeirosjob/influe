import { getAllProposes } from "@/data/metrics";

export const getCountAllProposes = async () => {
  
    const proposes = await getAllProposes();
  
    if (proposes) {
        return [{
            month: 'September', 
            revenue: proposes.length
        }];
    }
  
    return null;
  };