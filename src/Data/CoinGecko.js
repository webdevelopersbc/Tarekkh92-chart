//https://api.bscscan.com/api?module=token&action=tokeninfo&contractaddress=0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82&apikey=PZR8CJ6VK6PRKVHGJCUW47YFJ8YCSTFUVE

function GetEndPoint(tokenAddress) {
  let bscscanEndPoint =
    "https://api.bscscan.com/api?module=token&action=tokeninfo&contractaddress=" +
    tokenAddress +
    "&apikey=PZR8CJ6VK6PRKVHGJCUW47YFJ8YCSTFUVE";

  return bscscanEndPoint;
}

export const GetSocials = async (tokenAddress) => {
  await fetch(GetEndPoint(tokenAddress))
    .then((result) => result.json())
    .then((result) => ParseResult(result));
};

function ParseResult(result) {
  let description = result.result[0].description;
  let discord = result.result[0].discord;
  let email = result.result[0].email;
  let facebook = result.result[0].facebook;
  let github = result.result[0].github;
  let linkedin = result.result[0].linkedin;
  let reddit = result.result[0].reddit;
  let slack = result.result[0].slack;
  let telegram = result.result[0].telegram;
  let twitter = result.result[0].twitter;
  let website = result.result[0].website;
  let weChat = result.result[0].weChat;
  let whitepaper = result.result[0].whitepaper;

  // console.log(description);
  // console.log(discord);
  // console.log(email);
  // console.log(facebook);
  // console.log(github);
  // console.log(linkedin);
  // console.log(reddit);
  // console.log(slack);
  // console.log(telegram);
  // console.log(twitter);
  // console.log(website);
  // console.log(weChat);
  // console.log(whitepaper);
}
