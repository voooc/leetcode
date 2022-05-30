/*
题目：给定一个字符串 s ，请你找出其中不含有重复字符的 最长子串 的长度。
输入: s = "abcabcbb"
输出: 3 
解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
*/
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  let set = new Set();
  let r = -1, res = 0;
  for(let i = 0;i<s.length;i++){
    while((r+1<s.length)&&!set.has(s[r+1])){
      set.add(s[r+1])
      r++ ;
    }
    set.delete(s[i])
    res = Math.max(res, r-i+1);
  }
  return res
};
