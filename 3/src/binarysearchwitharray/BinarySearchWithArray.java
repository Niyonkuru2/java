package binarysearchwitharray;

import java.util.Arrays;
import java.util.Scanner;

public class BinarySearchWithArray {

    // Function to perform binary search
    public static int binarySearch(int[] arr, int target) {
        int left = 0;
        int right = arr.length - 1;

        while (left <= right) {
            int mid = left + (right - left) / 2;

            if (arr[mid] == target) {
                return mid; // Element found
            } else if (arr[mid] < target) {
                left = mid + 1; // Search in the right half
            } else {
                right = mid - 1; // Search in the left half
            }
        }

        return -1; // Element not found
    }

    public static void main(String[] args) {
        int[] numbers = {
            5, 7, 9, 11, 12, 15, 20, 30, 45, 44, 89, 97,
            109, 121, 128, 34, 142, 176, 198, 301, 321, 344, 456
        };

        // Sort the array (required for binary search)
        Arrays.sort(numbers);

        // Display the sorted array
        System.out.println("Sorted Array: " + Arrays.toString(numbers));

        Scanner sc = new Scanner(System.in);
        System.out.print("\nEnter the number to search: ");
        int target = sc.nextInt();

        // Perform binary search
        int index = binarySearch(numbers, target);

        // Display result
        if (index != -1) {
            System.out.println("Element " + target + " found at index: " + index);
        } else {
            System.out.println("Element " + target + " not found in the array.");
        }

        sc.close();
    }
}
