fetch("https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/usd.json")
  .then(async res => {
    const text = await res.text();
    console.log("Raw response:", text);
    return JSON.parse(text);
  })
  .then(data => {
    console.log("INR Rate:", data.inr);
  })
  .catch(err => {
    console.error("API error:", err);
  });