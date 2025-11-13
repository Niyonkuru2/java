
package selectionsortexample;
import java.util.Arrays;

public class SelectionSortExample {

    // Method to perform selection sort
    public static void selectionSort(int[] arr) {
        int n = arr.length;

        for (int i = 0; i < n - 1; i++) {
            // Assume the current index is the minimum
            int minIndex = i;

            // Find the minimum element in the unsorted part
            for (int j = i + 1; j < n; j++) {
                if (arr[j] < arr[minIndex]) {
                    minIndex = j;
                }
            }

            // Swap the found minimum with the first element of unsorted part
            int temp = arr[minIndex];
            arr[minIndex] = arr[i];
            arr[i] = temp;
        }
    }

    public static void main(String[] args) {
        int[] arr1 = {4, 1, 3, 9, 7};
        int[] arr2 = {10, 9, 8, 7, 6, 5, 4, 3, 2, 1};
        int[] arr3 = {38, 31, 20, 14, 30};

        selectionSort(arr1);
        System.out.println("Sorted arr1: " + Arrays.toString(arr1));

        selectionSort(arr2);
        System.out.println("Sorted arr2: " + Arrays.toString(arr2));

        selectionSort(arr3);
        System.out.println("Sorted arr3: " + Arrays.toString(arr3));
    }
}
