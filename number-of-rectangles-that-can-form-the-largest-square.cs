namespace LeetCodeTests
{
    public class Solution
    {
        public int CountGoodRectangles(int[][] rectangles)
        {
            var rectanglesSides = rectangles.Select(rect =>
                GetSquareFromRectangle(rect[0], rect[1]));
            var max = rectanglesSides.Max();
            return rectanglesSides.Count(c => c == max);
        }

        private int GetSquareFromRectangle(int height, int width)
        {
            if (height < width)
            {
                return height;
            }

            return width;
        }
    }
}
