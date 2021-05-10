package cn.yang.recursion;

/**
 * @descript:递归
 */
public class recursion {
    //递归实现O(2^n) 里面大量重叠计算
    public static long recursion(long num){
        if(num <= 1) return num;
        return recursion(num-1) + recursion(num-2);
    }
    //记录链 O(n)
    public static long Chain(long num){
        if(num <= 1) return num;
        long firstIndex = 0;
        long perviousIndex = 1;
        for (int index = 1; index < num;index++){
            long temp=perviousIndex;// 得到差异位 ^1 得到一定是相反 1^1=0
            perviousIndex=perviousIndex+firstIndex;
            firstIndex = temp;
        };
        return perviousIndex;
    };
}
