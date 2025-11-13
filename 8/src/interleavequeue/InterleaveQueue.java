
package interleavequeue;
import java.util.*;

public class InterleaveQueue {

    public static void interleaveQueue(Queue<Integer> queue) {
        if (queue.size() % 2 != 0) {
            System.out.println("Queue size must be even.");
            return;
        }

        int halfSize = queue.size() / 2;
        Stack<Integer> stack = new Stack<>();

        // Step 1: Push the first half of the queue into the stack
        for (int i = 0; i < halfSize; i++) {
            stack.push(queue.remove());
        }

        // Step 2: Enqueue back the stack elements to queue
        while (!stack.isEmpty()) {
            queue.add(stack.pop());
        }

        // Step 3: Move the first half to the back of the queue
        for (int i = 0; i < halfSize; i++) {
            queue.add(queue.remove());
        }

        // Step 4: Push the first half into stack again
        for (int i = 0; i < halfSize; i++) {
            stack.push(queue.remove());
        }

        // Step 5: Interleave the elements of stack and queue
        while (!stack.isEmpty()) {
            queue.add(stack.pop());       // element from first half
            queue.add(queue.remove());    // element from second half
        }
    }

    public static void main(String[] args) {
        Queue<Integer> q1 = new LinkedList<>(Arrays.asList(2, 4, 3, 1));
        interleaveQueue(q1);
        System.out.println("Interleaved queue: " + q1); // Output: [2, 3, 4, 1]

        Queue<Integer> q2 = new LinkedList<>(Arrays.asList(3, 5));
        interleaveQueue(q2);
        System.out.println("Interleaved queue: " + q2); // Output: [3, 5]
    }
}

