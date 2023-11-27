namespace LeetCodeTests
{
    public class Solution
    {
        public int FindFinalValue(int[] nums, int original)
        {
            var found = false;
            for (var i = 0; i < nums.Length; i++)
            {
                if (nums[i] == original)
                {
                    original = original * 2;
                    found = true;
                    break;
                }
            }
            if (found)
            {
                return FindFinalValue(nums, original);
            }
            return original;
        }
    }
}
