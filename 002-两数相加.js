/*
题目：
给你两个 非空 的链表，表示两个非负的整数。它们每位数字都是按照 逆序 的方式存储的，并且每个节点只能存储一位数字。
请你将两个数相加，并以相同形式返回一个表示和的链表。
你可以假设除了数字 0 之外，这两个数都不会以 0 开头。
来源：力扣（LeetCode）
链接：https://leetcode.cn/problems/add-two-numbers
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
输入：l1 = [2,4,3], l2 = [5,6,4]
输出：[7,0,8]
解释：342 + 465 = 807.
*/
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  let temp = 0;
  let head=tail=null;
  while(l1||l2){
    let v1 = l1?l1.val:0;
    let v2 = l2?l2.val:0;
    let sum = v1 + v2 + temp;
    if(!head){
      head = tail = new ListNode(sum%10);
    }
    else{
      tail.next = new ListNode(sum%10);
      tail = tail.next;
    }
    temp = parseInt(sum/10);
    if(l1){
      l1 = l1.next;
    }
    if(l2){
      l2 = l2.next;
    }
  }
  if(temp){
    tail.next = new ListNode(temp);
  }
  return head;
};
