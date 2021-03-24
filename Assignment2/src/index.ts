import square from './square';
import sum from './sum';

const sumCausesError = sum('2', 1);

document.writeln('The sum of 5 and 8 is ', sum(5, 8).toString(), '<br>');
document.writeln('The square of 6 is ', square(6).toString(), '<br>');

