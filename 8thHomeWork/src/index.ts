import { User, UserSummary } from './request-json';
import { Coach, Team, Forward, Defenseman, Goalie } from './abstraction';

async function fetchUser(userId: number): Promise<User> {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
    if (!response.ok) {
        throw new Error(`ERROR during fetching user: ${response.status}`);
    }
    return response.json() as Promise<User>;
}

fetchUser(8)
    .then(user => {
        const summary = new UserSummary(user);
        console.log(summary);
    })
    .catch(error => console.error(error));

// Code part for abstraction.ts file display
const coach = new Coach('Use one timer shot if our net is empty');
const team = new Team(coach);

team.addPlayer(new Forward('Barkov', 16));
team.addPlayer(new Defenseman('Larsson', 8));
team.addPlayer(new Goalie('Bobrovskiy', 72));

team.showStrategy();
team.playGame();
