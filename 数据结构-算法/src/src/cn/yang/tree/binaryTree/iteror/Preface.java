package cn.yang.tree.binaryTree.iteror;


import java.util.ArrayList;
import java.util.LinkedList;
import java.util.List;

public class Preface {
    public class TreeNode {
          int val;
          TreeNode left;
          TreeNode right;
          TreeNode() {}
          TreeNode(int val) { this.val = val; }
          TreeNode(int val, TreeNode left, TreeNode right) {
              this.val = val;
              this.left = left;
              this.right = right;
          }
      }
    public List<Integer> inorderTraversal(TreeNode root) {
       if(root == null){
           return  null;
       }
       List<Integer> list;
       if( root.left != null){
           list = inorderTraversal(root.left);
       } else {
           list = new LinkedList<Integer>();
       }
       list.add(root.val);
       if(root.right != null){
           inorderTraversal(root.right);
       }
       return list;
    }
    public boolean isSymmetric(TreeNode root) {
        LinkedList<TreeNode> listL = new LinkedList<TreeNode>();
        LinkedList<TreeNode> listR = new LinkedList<TreeNode>();
        if(root.left == null && root.right == null){
            return true;
        }

        if(root.left == null || root.right == null || (root.left.val != root.right.val)){
            return false;
        }else {
            listL.add(root.left);
            listR.add(root.right);
            while (listL.size() > 0 && listR.size() >0){

                boolean f = true;
                if(listL.get(0).left != null){
                    listL.add(listL.get(0).left);
                }else {
                    f = false;
                }

                if( f && (listR.get(0).right != null)){
                    listR.add(listR.get(0).right);
                }else {
                    if(f != (listR.get(0).right != null)){
                        return false;
                    }
                }

                boolean t = true;
                if(listL.get(0).right != null){
                    listL.add(listL.get(0).right);
                }else {
                    t = false;
                }

                if(t && (listR.get(0).left != null)){
                    listR.add(listR.get(0).left);
                }else {
                    if(t != (listR.get(0).left != null)){
                        return false;
                    }
                }

                if(listL.pop().val != listR.pop().val || listL.size() != listR.size()){
                    return  false;
                }
            }
        }

        return true;
    }
}
