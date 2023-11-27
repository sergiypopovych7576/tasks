namespace LeetCodeTests
{
    public class Solution
    {
        public string LongestCommonPrefix(string[] strs)
        {
            return FindPortion(strs, "", 0);
        }

        private string FindPortion(string[] strs, string currentMatch, int indx)
        {
            if (strs[0].Length <= indx)
            {
                return currentMatch;
            }
            var foundPortion = true;
            var proposedMatch = currentMatch + strs[0][indx];
            for (var i = 0; i < strs.Length; i++)
            {
                if (!strs[i].StartsWith(proposedMatch))
                {
                    foundPortion = false;
                    break;
                }
            }
            if (foundPortion)
            {
                return FindPortion(strs, proposedMatch, indx + 1);
            }
            return currentMatch;
        }
    }
}
