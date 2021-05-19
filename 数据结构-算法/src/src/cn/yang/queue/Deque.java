package cn.yang.queue;

import java.util.LinkedList;

/**
 * @deprecated double ended queue
 */
public class Deque<T> {
    private LinkedList queue;
    public Deque() {
        queue = new LinkedList<T>();
    }
    public int unshift(T el){
        queue.addFirst(el);
        return queue.size();
    }
    public T pop(){
        return (T) queue.removeLast();
    }
    public T shift(){
        return (T) queue.removeFirst();
    }
    public int push(T el){
        queue.addLast(el);
        return queue.size();
    }
    public T get(int i){
        return (T) queue.get(i);
    }
}
