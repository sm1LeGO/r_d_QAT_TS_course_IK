function doSomeJob(name: string, age: number, job: { role: string; seniority: string }): void {
    sayName(name);
    sayAge(age);
    sayJob(job);
}

function sayName(name: string): void {
    console.log('   Hello ' + name);
}

function sayAge(age: number): void {
    console.log('   You are ' + age + ' years old');
}

function sayJob(job: { role: string; seniority: string }): void {
    let jobInternal: { role: string; seniority?: string };

    if (!job) {
        jobInternal = { role: 'Unemployed' };
    } else {
        jobInternal = job;
    }

    console.log('   You are a ', jobInternal);
}

doSomeJob('Ilja', 34, { role: 'QA Engineer', seniority: 'Middle' });
console.log('-----------------------------------');
