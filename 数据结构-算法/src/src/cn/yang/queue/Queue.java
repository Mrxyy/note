package cn.yang.queue;


import java.util.ArrayList;
import java.util.LinkedList;

public class Queue<T> {

    private LinkedList queue;
    public Queue() {
        queue = new LinkedList<T>();
    }
    public int enqueue(T el){
        queue.addFirst(el);
        return queue.size();
    }
    public T dequeue(){
        return (T) queue.removeLast();
    }

    public T get(int i){
        return (T) queue.get(i);
    }



}
