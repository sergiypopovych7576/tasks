namespace LeetCodeTests
{
    public class Solution
    {
        public IList<IList<int>> MinimumAbsDifference(int[] arr)
        {
            Array.Sort(arr);
            var result = new List<IList<int>>();
            int minDifference = int.MaxValue;
            for (int i = 0; i < arr.Length - 1; i++)
            {
                int currentDifference = arr[i + 1] - arr[i];
                if (currentDifference < minDifference)
                {
                    minDifference = currentDifference;
                    result.Clear();
                }
                if (currentDifference == minDifference)
                {
                    result.Add(new List<int> { arr[i], arr[i + 1] });
                }
            }
            return result;
        }
    }
}
