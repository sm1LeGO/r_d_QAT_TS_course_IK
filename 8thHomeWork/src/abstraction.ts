abstract class HockeyPlayer {
    protected name: string;
    protected number: number;

    public constructor(name: string, number: number) {
        this.name = name;
        this.number = number;
    }
    public abstract play(): void;
}

class Forward extends HockeyPlayer {
    public constructor(name: string, number: number) {
        super(name, number);
    }
    public play(): void {
        console.log(`${this.name} (Forward) Stay in front of opponent Goalie`);
    }
}

class Defenseman extends HockeyPlayer {
    public constructor(name: string, number: number) {
        super(name, number);
    }
    public play(): void {
        console.log(`${this.name} (Defenseman) Shot the pack from the blue line`);
    }
}
class Goalie extends HockeyPlayer {
    public constructor(name: string, number: number) {
        super(name, number);
    }
    public play(): void {
        console.log(`${this.name} (Goalie) leave the net if we lose, during last minute!`);
    }
}
class Coach {
    private strategy: string;

    public constructor(strategy: string) {
        this.strategy = strategy;
    }
    public guide(): void {
        console.log(`Coach guides the team: ${this.strategy}`);
    }
}

class Team {
    private players: HockeyPlayer[] = [];
    private coach: Coach;

    public constructor(coach: Coach) {
        this.coach = coach;
    }
    public addPlayer(player: HockeyPlayer): void {
        this.players.push(player);
    }
    public showStrategy(): void {
        this.coach.guide();
    }
    public playGame(): void {
        this.players.forEach(player => player.play());
    }
}

const coach = new Coach('Use one timer shot if our net is empty');
const team = new Team(coach);

team.addPlayer(new Forward('Barkov', 16));
team.addPlayer(new Defenseman('Larsson', 8));
team.addPlayer(new Goalie('Bobrovskiy', 72));
team.showStrategy();
team.playGame();
