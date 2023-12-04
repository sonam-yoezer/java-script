const prompt = require("prompt-sync")();
console.log('\nCheck vowels and consonant');
word=prompt('Enter any word: ')
vowels =0;
consonants=0;


for(let i=0; i<word.length;i++)
{
  if(word[i]==='a' ||word[i]==='e' ||word[i]==='i' ||word[i]==='o' ||word[i]==='u')
  {
    vowels++;
  } 
else if(word[i]>='a' && word[i]<='z')
{
  consonants++;
}
}
console.log('Vowels:'+vowels);
console.log('consonants:'+consonants);
console.log(' ')
