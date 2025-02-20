export abstract class HockeyPlayer {
    protected name: string;
    protected number: number;

    public constructor(name: string, number: number) {
        this.name = name;
        this.number = number;
    }
    public abstract play(): void;
}

export class Forward extends HockeyPlayer {
    public constructor(name: string, number: number) {
        super(name, number);
    }
    public play(): void {
        console.log(`${this.name} (Forward) Stay in front of opponent Goalie`);
    }
}

export class Defenseman extends HockeyPlayer {
    public constructor(name: string, number: number) {
        super(name, number);
    }
    public play(): void {
        console.log(`${this.name} (Defenseman) Shot the pack from the blue line`);
    }
}

export class Goalie extends HockeyPlayer {
    public constructor(name: string, number: number) {
        super(name, number);
    }
    public play(): void {
        console.log(`${this.name} (Goalie) leave the net if we lose, during last minute!`);
    }
}

export class Coach {
    private strategy: string;

    public constructor(strategy: string) {
        this.strategy = strategy;
    }
    public guide(): void {
        console.log(`Coach guides the team: ${this.strategy}`);
    }
}

export class Team {
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
