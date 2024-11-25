function convert(){
  let input=document.getElementById("number").value;
  let num=Number(input);
  if(input==""){
   let output=document.getElementById("output");
   output.innerText="Please enter a valid number";
  }
  else if(num<1){
    output.innerText="Please enter a number greater than or equal to 1";
  }
  else if(num>3999){
    output.innerText="Please enter a number less than or equal to 3999";
  }

else {
        const map = new Map([
            [1000, "M"],
            [900, "CM"],
            [500, "D"],
            [400, "CD"],
            [100, "C"],
            [90, "XC"],
            [50, "L"],
            [40, "XL"],
            [10, "X"],
            [9, "IX"],
            [5, "V"],
            [4, "IV"],
            [1, "I"]
        ]);

        let ans = "";

        for (const [key, value] of map.entries()) {
            const count = Math.floor(num / key);
            if (count > 0) {
                ans += value.repeat(count);
                num %= key;
            }
        }
        output.innerText = ans; 
    }
}
