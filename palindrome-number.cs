namespace LeetCodeTests
{
    public class Solution
    {
        public bool IsPalindrome(int x)
        {
            var source = x.ToString();
            var j = source.Length - 1;
            for (var i = 0; i < source.Length; i++)
            {
                if (i == j)
                {
                    break;
                }

                if (source[i] != source[j])
                {
                    return false;
                }
                j--;
            }
            return true;
        }
    }
}
