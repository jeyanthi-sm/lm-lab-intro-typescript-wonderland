import { endAdventure } from '..';
import { jobHunt } from './5b_job_hunt';
import { askQuestion, clear, print } from '../console';

const verdicts = ['Guilty', 'Not Guilty'] as const;
type Verdict = typeof verdicts[number];

interface Witness {
	name: string;
	giveEvidence: () => Verdict;
}

export function meetTheQueen(): void {
	clear(true);
	print('The Queen has put you on trial for stealing tarts.');

	let guilty: boolean = false;
	let witnesNames:string[] = ['The March Hare','The Mad Hatter','The White Rabbit','The Cheshire Cat','The Queen', 'The King'];

	let witnesses: Witness[] = getWitnesses(witnesNames); 
	if (!witnesses || witnesses.length === 0) {
		print(`No witnesses have come forward to defend you.`);
		guilty = true;
	}

	let witnessCount = 0;

	witnesses.forEach((witness) => {
		witnessCount++;
		print(
			`${witness.name} gives their evidence: ${witness.giveEvidence()}`
		);
		if (witness.giveEvidence() === 'Guilty') {
			guilty = true;
		}
	});

	if (witnessCount < 4 || guilty) {
		print(`You have been found guilty! "Off with her head!" 😱`);
		return endAdventure();
	} else {
		print(`You have been found NOT GUILTY! Thank goodness. 🥳`);
		print('Time to look for a job...');
		return askQuestion('Press ENTER to continue! ', jobHunt);
	}
}

function getWitnesses(witnessNames: string[]) : Witness[] {
	let retWitness : Array<Witness> = [];
	let IntWitness :Witness;

	witnessNames.forEach(val =>{
			retWitness.push({name:val,  giveEvidence:()=> 'Not Guilty', });
	}
	);
	return retWitness;
}
