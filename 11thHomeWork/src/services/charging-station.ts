export class ChargingStation {
    public charge(client: any, amount: number): void {
        if (typeof client.charge !== 'function') {
            throw new Error('This vehicle cannot be charged.');
        }
        client.charge(amount);
        console.log(`Transport charged with ${amount}% battery.`);
    }
}
