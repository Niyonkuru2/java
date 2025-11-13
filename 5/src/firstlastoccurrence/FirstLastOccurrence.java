
package firstlastoccurrence;
public class FirstLastOccurrence {
    // Method to find the first occurrence of a target
    public static int findFirst(int[] arr, int target) {
        int left = 0, right = arr.length - 1, result = -1;

        while (left <= right) {
            int mid = left + (right - left) / 2;

            if (arr[mid] == target) {
                result = mid;
                right = mid - 1; // Move left to find earlier occurrence
            } else if (arr[mid] < target) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        return result;
    }

    // Method to find the last occurrence of a target
    public static int findLast(int[] arr, int target) {
        int left = 0, right = arr.length - 1, result = -1;

        while (left <= right) {
            int mid = left + (right - left) / 2;

            if (arr[mid] == target) {
                result = mid;
                left = mid + 1; // Move right to find later occurrence
            } else if (arr[mid] < target) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        return result;
    }

    public static void main(String[] args) {
        int[] arr = {4, 8, 11, 12, 13, 14, 15, 16, 19, 21, 21, 21, 22, 23, 26, 31,
                     32, 41, 49, 54, 55, 62, 63, 65, 66, 68, 78, 79, 81, 83, 94, 100};

        int target = 21;

        int firstIndex = findFirst(arr, target);
        int lastIndex = findLast(arr, target);

        if (firstIndex == -1) {
            System.out.println("Element " + target + " not found in the array.");
        } else {
            System.out.println("First occurrence of " + target + " is at index: " + firstIndex);
            System.out.println("Last occurrence of " + target + " is at index: " + lastIndex);
        }
    }
}
