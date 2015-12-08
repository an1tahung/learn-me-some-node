var total = 0;
for(i = 2, len = (process.argv).length; i < len; i++){
  total += Number(process.argv[i]);
}
console.log(total);