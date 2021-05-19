package cn.yang.listnode;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.HashSet;

public class 环形链表_141 {
    class ListNode {
      int val;
      ListNode next;
      ListNode(int x) {
          val = x;
          next = null;
      }
    }
    public boolean hasCycle(ListNode head) {
        HashSet<ListNode> arr = new HashSet<ListNode>();
        boolean flag = false;
        ListNode temNode = head;
        while (temNode != null){
            flag = arr.contains(temNode);
            if(!flag){
                arr.add(temNode);
                temNode = temNode.next;
            }else {
                break;
            }
        }
        return flag;
    }
    public boolean hasCycle2(ListNode head) {
        ListNode slow =  head;
        ListNode fast =  head;
        while (fast != null && fast.next != null){
            slow = slow.next;
            fast = fast.next.next;
            if(slow == fast){
                return  true;
            }
        }
        return false;
    }
}
