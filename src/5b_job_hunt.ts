import { endAdventure } from '..';
import { wakeUp } from './6_wake_up';
import { askQuestion, clear, print } from '../console';

const jobStatus = ['Seeker', 'Working Professional'] as const;
type jobStat = typeof jobStatus[number];

interface knownLanguagesInt {
	name: string;
	status: jobStat;
}

export function jobHunt(): void {
	clear(true);
	print('Alice is looking for a tech job.');

	let jobSearch: boolean = false;
	let knownLanguages:string[] = ['JavaScript','TypeScript'];

	let knownLang: knownLanguagesInt[] = getLanguages(knownLanguages); 
	if (!knownLanguages || knownLanguages.length === 0) {
		print(`Your known Languages does not match our job requirements`);
		jobSearch = true;
	}
    console.log(knownLanguages.length);
	if (knownLanguages.length < 2 || jobSearch) {
		print(`You have not found the job! "Apply for Tech Returners!" 😱`);
		return endAdventure();
	} else {
		print(`You have found Your Dream Job! Thank goodness. 🥳`);
		print('Time to wake up...');
		return askQuestion('Press ENTER to continue! ', wakeUp);
	}
}

function getLanguages(languageNames: string[]) : knownLanguagesInt[] {
	let retLanguages : Array<knownLanguagesInt> = [];

	languageNames.forEach(val =>{
			retLanguages.push({name:val,  status: 'Seeker', });
	}
	);
	return retLanguages;
}
