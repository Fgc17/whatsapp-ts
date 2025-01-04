import { settings } from "src/settings";

export async function getCSRFToken(flowID: string) {
  const authenticationString = settings.get(
    "WHATSAPP_UNNOFICIAL_AUTHENTICATION_STRING"
  );

  return await fetch(
    "https://business.facebook.com/latest/whatsapp_manager/flows?flow_id=" +
      flowID,
    {
      headers: {
        accept:
          "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8",
        "accept-language": "en-US,en;q=0.5",
        "cache-control": "no-cache",
        pragma: "no-cache",
        priority: "u=0, i",
        "sec-ch-ua":
          '"Brave";v="131", "Chromium";v="131", "Not_A Brand";v="24"',
        "sec-ch-ua-full-version-list":
          '"Brave";v="131.0.0.0", "Chromium";v="131.0.0.0", "Not_A Brand";v="24.0.0.0"',
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-model": '""',
        "sec-ch-ua-platform": '"Linux"',
        "sec-ch-ua-platform-version": '"6.11.9"',
        "sec-fetch-dest": "document",
        "sec-fetch-mode": "navigate",
        "sec-fetch-site": "same-origin",
        "sec-fetch-user": "?1",
        "sec-gpc": "1",
        "upgrade-insecure-requests": "1",
        cookie: authenticationString,
      },
      referrerPolicy: "strict-origin-when-cross-origin",
      body: null,
      method: "GET",
    }
  )
    .then((response) => response.text())
    .then((data) => {
      const scriptRegex =
        /<script\b[^>]*\bid=["']__eqmc["'][^>]*>(.*?)<\/script>/is;
      const match = scriptRegex.exec(data);

      if (!match) {
        throw "No matching <script> tag found.";
      }

      const { f: fb_dtsg } = JSON.parse(match[1]);

      return fb_dtsg;
    });
}

export async function verifyFlowIntegrity(flowID: string) {
  const authenticationString = settings.get(
    "WHATSAPP_UNNOFICIAL_AUTHENTICATION_STRING"
  );

  const csrfToken = await getCSRFToken(flowID);

  const bodyPayload = {
    __aaid: "0",
    __bid: "250887754468924",
    __user: "100072333227027",
    __a: "1",
    __req: "m",
    dpr: "1",
    __ccg: "EXCELLENT",
    __rev: "1019090278",
    __comet_req: "11",
    fb_dtsg: csrfToken,
    __spin_b: "trunk",
    __jssesw: "1",
    fb_api_caller_class: "RelayModern",
    fb_api_req_friendly_name: "WAMFlowsBuilderDynamicSetupHealthCheckQuery",
    variables: JSON.stringify({ flowID }),
    server_timestamps: "true",
    doc_id: " 7983200618385332",
  };

  const body = new URLSearchParams(bodyPayload).toString();

  return await fetch("https://business.facebook.com/api/graphql", {
    headers: {
      accept: "*/*",
      "accept-language": "en-US,en;q=0.5",
      "cache-control": "no-cache",
      "content-type": "application/x-www-form-urlencoded",
      pragma: "no-cache",
      priority: "u=1, i",
      "sec-ch-ua": '"Brave";v="131", "Chromium";v="131", "Not_A Brand";v="24"',
      "sec-ch-ua-full-version-list":
        '"Brave";v="131.0.0.0", "Chromium";v="131.0.0.0", "Not_A Brand";v="24.0.0.0"',
      "sec-ch-ua-mobile": "?0",
      "sec-ch-ua-model": '""',
      "sec-ch-ua-platform": '"Linux"',
      "sec-ch-ua-platform-version": '"6.11.9"',
      "sec-fetch-dest": "empty",
      "sec-fetch-mode": "cors",
      "sec-fetch-site": "same-origin",
      "sec-gpc": "1",
      "x-fb-friendly-name": "WAMFlowsBuilderDynamicSetupHealthCheckQuery",
      cookie: authenticationString,
      Referer:
        "https://business.facebook.com/latest/whatsapp_manager/flows?flow_id=1137578314629992",
      "Referrer-Policy": "strict-origin-when-cross-origin",
    },
    body,
    method: "POST",
  })
    .then((response) => response.text())
    .then((data) => {
      return data;
    })
    .catch((error) => {
      console.error(error);
    });
}
