package cn.yang;

import cn.yang.queue.ArrayQueue;
import cn.yang.queue.Queue;

public class Test {

    public static void main(String[] args) {
        ArrayQueue queue = new ArrayQueue<Integer>();
        queue.push(1);
        queue.push(2);
        queue.push(3);
        queue.push(4);
        queue.push(5);
        queue.unshift(6);
        queue.push(7);
        queue.push(8);
        queue.push(9);
        queue.push(10);
        queue.pop();
        queue.push(11);
        queue.push(13);
        queue.unshift(14);
        queue.push(15);

        queue.unshift(1);
//        queue.shift();
        System.out.println(queue);
    }
}
