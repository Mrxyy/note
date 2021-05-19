package cn.yang.queue;

import java.util.Arrays;

public class ArrayQueue<T> {
    private T[] elements;
    private int front = 0;
    private int end = 9;
    private int size = 0;
    public ArrayQueue(){
        elements = (T[]) new Object[end+1];
    }
    public int push(T el) {
        Expansion(end);
        elements[end] = el;
        end = getRealIndex(end - 1);
        return  ++size;
    };
    public T pop() {
        end = getRealIndex(end + 1);
        T tem = elements[end];
        elements[end] = null;
        size--;
        return tem;
    };
    public int unshift(T el){
        Expansion(front);
        elements[front] = el;
        front = getRealIndex(front + 1);
        return  ++size;
    };
    public T shift(){
        front = getRealIndex(front - 1);
        T tem = elements[front];
        elements[front] = null;
        size--;
        return tem;
    };
    private void Expansion(int i){
        if(elements[i] != null){
            System.out.println(elements[i]);
            T[] soruce = elements;
            int len =size + Math.max(size>>1,1);
            elements = (T[]) new Object[len];
            int point = 1;
            while (size - point >= front){
                elements[len - point] = soruce[size - point];
                point ++;
            }
            end = elements.length - point;

            point = 0;
            while (point < front){
                elements[point] = soruce[point];
                point ++;
            }
        }
    }
    private int getRealIndex(int i){
        return  i < 0 ? elements.length - 1 : i > elements.length - 1 ? 0 : i;
    }
    public String toString() {
        String str = "";
        for (T v:elements) {
            str += v == null? "null " : v.toString()+" ";
        }
        return  str;
    }
}
