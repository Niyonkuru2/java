
package binarysearchfirstoccurrence;
public class BinarySearchFirstOccurrence {

    // Method to find first occurrence of k
    public static int binarySearchFirst(int[] arr, int k) {
        int left = 0;
        int right = arr.length - 1;
        int result = -1; // Stores index of first occurrence

        while (left <= right) {
            int mid = left + (right - left) / 2;

            if (arr[mid] == k) {
                result = mid;      // Found k
                right = mid - 1;   // Move left to find smaller index
            } else if (arr[mid] < k) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }

        return result;
    }

    public static void main(String[] args) {
        int[] arr1 = {1, 2, 3, 4, 5};
        int[] arr2 = {11, 22, 33, 44, 55};
        int[] arr3 = {1, 1, 1, 1, 2};

        System.out.println(binarySearchFirst(arr1, 4));   // Output: 3
        System.out.println(binarySearchFirst(arr2, 445)); // Output: -1
        System.out.println(binarySearchFirst(arr3, 1));   // Output: 0
    }
}

