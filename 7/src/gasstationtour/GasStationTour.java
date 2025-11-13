
package gasstationtour;
public class GasStationTour {

    public static int canCompleteCircuit(int[] gas, int[] cost) {
        int totalTank = 0;      // Net fuel after visiting all stations
        int currentTank = 0;    // Current fuel in tank
        int startStation = 0;   // Candidate starting station

        for (int i = 0; i < gas.length; i++) {
            int diff = gas[i] - cost[i];
            totalTank += diff;
            currentTank += diff;

            // If current tank goes negative, cannot continue from this start
            if (currentTank < 0) {
                startStation = i + 1;  // Move start to next station
                currentTank = 0;       // Reset current fuel
            }
        }

        // If total fuel is enough, the tour is possible
        return (totalTank >= 0) ? startStation : -1;
    }

    public static void main(String[] args) {
        // Example 1
        int[] gas1 = {4, 5, 7, 4};
        int[] cost1 = {6, 6, 3, 5};
        System.out.println("Starting index: " + canCompleteCircuit(gas1, cost1));  // Output: 2

        // Example 2
        int[] gas2 = {3, 9};
        int[] cost2 = {7, 6};
        System.out.println("Starting index: " + canCompleteCircuit(gas2, cost2));  // Output: -1
    }
}

