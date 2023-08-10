const baseUrl = "https://session-vxj2.onrender.com";

function generateRandomSessionId(length) {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let sessionId = "";

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    sessionId += characters[randomIndex];
  }

  return sessionId;
}

const saveSessionInDb = async (payload) => {
  try {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify(payload);

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow"
    };

    const data = await (
      await fetch(baseUrl + "/session", requestOptions)
    ).json();
    console.log(data);
    if (data.success) {
      const messageContainer = document.getElementById("showmessage");

      // Set the message content inside the div
      messageContainer.textContent = "Session Saved Successfully";
    }
  } catch (error) {
    console.log(error);
  }
};

const getSessionData = async (params) => {
  console.log("Getting params");
  const { ip } = await (
    await fetch("https://api.ipify.org?format=json")
  ).json();
  const timestamp = Date.now();
  const sessionId = generateRandomSessionId(12); // session id
  const url = window.location.href;
  await saveSessionInDb({
    ip,
    timestamp,
    sessionId,
    url
  });
};

const fetchSessionData = async () => {
  try {
    var requestOptions = {
      method: "GET",
      redirect: "follow"
    };

    const data = await (
      await fetch(baseUrl + "/session", requestOptions)
    ).json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};
