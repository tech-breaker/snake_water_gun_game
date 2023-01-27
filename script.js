// let user = prompt(" S, W or G");
// let cpuI = Math.floor(Math.random() * 3);
// let cpu = ["S", "W", "G"][cpuI];

// const match = (user, cpu) => {
//   if (cpu === user) return "nobody wins";
//   else if (cpu === "S" && user === "W") return "user";
//   else if (cpu === "W" && user === "S") return "cpu";
//   else if (cpu === "S" && user === "G") return "user";
//   else if (cpu === "G" && user === "S") return "cpu";
//   else if (cpu === "G" && user === "W") return "user";
//   else cpu === "W" && user === "G";
//   return "cpu";
// };
// let result = match(cpu, user);
// console.log(`CPU:${cpu} <br> USER:${user} <br> The winner is :${result}`);

let user = prompt("S, W OR G");
let cpuI = Math.floor(Math.random() * 3);
let cpu = ["S", "W", "G"][cpuI];

const match = (user, cpu) => {
  if (cpu === user) return "nobody wins";
  else if (cpu === "S" && user === "W") return "cpu";
  else if (cpu === "S" && user === "G") return "user";
  else if (cpu === "G" && user === "W") return "user";
  else if (cpu === "G" && user === "S") return "cpu";
  else if (cpu === "W" && user === "S") return "user";
  else if (cpu === "W" && user === "G") return "cpu";
};
let result = match(cpu, user);
document.write(`CPU:${cpu}<br> USER:${user} <br> The winner is :${result}`);
