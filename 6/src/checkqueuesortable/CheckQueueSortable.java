
package checkqueuesortable;
import java.util.*;

public class CheckQueueSortable {
    // Function to check if queue can be sorted using a stack
    public static boolean checkSorted(int[] arr) {
        Queue<Integer> input = new LinkedList<>();
        for (int num : arr)
            input.add(num);

        Stack<Integer> stack = new Stack<>();
        Queue<Integer> output = new LinkedList<>();

        int expected = 1;
        int n = arr.length;

        while (!input.isEmpty()) {
            int front = input.peek();

            // If the front element is what we expect next
            if (front == expected) {
                output.add(front);
                input.remove();
                expected++;
            }
            // If stack top has the expected element
            else if (!stack.isEmpty() && stack.peek() == expected) {
                output.add(stack.pop());
                expected++;
            }
            // If current front is smaller than stack top, push to stack
            else if (stack.isEmpty() || stack.peek() > front) {
                stack.push(input.remove());
            }
            // Otherwise, sorting is not possible
            else {
                return false;
            }
        }

        // Empty remaining stack
        while (!stack.isEmpty() && stack.peek() == expected) {
            output.add(stack.pop());
            expected++;
        }

        // If all numbers are sorted successfully
        return (expected - 1) == n;
    }

    public static void main(String[] args) {
        int[] queue1 = {5, 1, 2, 3, 4};
        int[] queue2 = {5, 1, 2, 6, 3, 4};

        System.out.println("Queue 1: " + Arrays.toString(queue1));
        System.out.println("Can be sorted? " + (checkSorted(queue1) ? "Yes" : "No"));

        System.out.println("\nQueue 2: " + Arrays.toString(queue2));
        System.out.println("Can be sorted? " + (checkSorted(queue2) ? "Yes" : "No"));
    }
}

