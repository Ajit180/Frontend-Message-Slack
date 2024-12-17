export default function combinedContext(...providers){
    
    /**
     * This Combines mutiple context together and return a single Context Provider
     */

    return({children})=>{
        return providers.reduceRight((accumulator,Currentprovider)=>{
            return<Currentprovider>{accumulator}</Currentprovider>;
        },children /**Initial Value */);
    };

}


/**
 *  <A>
 *     <B>
 *       <C>
 *            <D>
 *               {children}
 *            </D>
 *       </C>
 *     </B>
 *  </A>
 */



/**
 * <combined>
 *    {children}
 * </combined>
 */