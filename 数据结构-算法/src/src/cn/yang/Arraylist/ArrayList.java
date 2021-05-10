package cn.yang.Arraylist;

import java.util.Arrays;

public class ArrayList<T> {
    private  T[] elements;
    private int size = 0;
    private int DEFAULT_CAPACITY = 10;
    private static final Object[] EMPTY_ELEMENTDATA = {};
    public ArrayList(int initLength) {
       if(initLength > 0 ){
           DEFAULT_CAPACITY = initLength;
           elements  = (T[]) new Object[initLength];
       }else{
           elements = (T[]) EMPTY_ELEMENTDATA;
       }
    }
    public void add(int index,T value){
        if (size >= this.elements.length){
            int countLen = size+(DEFAULT_CAPACITY>>1);
            elements = Arrays.copyOf(elements, countLen);
        }
        // 解决密度问题，size - index 通常为0
        System.arraycopy(elements, index,
                elements, index + 1,
                size - index);
        this.elements[index] = value;
        size++;
    }
    public int size(){
        return  size;
    };
}
