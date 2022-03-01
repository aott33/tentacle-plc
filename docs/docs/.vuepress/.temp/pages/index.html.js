export const data = {
  "key": "v-8daa1a0e",
  "path": "/",
  "title": "Home",
  "lang": "en-US",
  "frontmatter": {
    "title": "Home",
    "home": true,
    "actions": [
      {
        "text": "Getting Started",
        "link": "/guide/getting-started.html",
        "type": "primary"
      },
      {
        "text": "Introduction",
        "link": "/guide/",
        "type": "secondary"
      }
    ],
    "features": [
      {
        "title": "Javascript",
        "details": "Write PLC code in Javascript and get all of the modern tooling that is typically missing in traditional PLC program development."
      },
      {
        "title": "Modern APIs & Protocols",
        "details": "Built-in GraphQL API and variables are automatically published to MQTT (Sparkplug B). Integrate with industrial networks via Modbus/TCP (OPC-UA, REST, Ethernet/IP, and Profinet planned in the future)."
      },
      {
        "title": "Develop with VSCode",
        "details": "Designed to be used with Code-Server, enabling the use of advanced tooling (unit testing, LINTing, Git, etc.) served from the PLC hardware itself. No external IDE required."
      }
    ],
    "footer": "GPL-3.0 Licensed | Copyright © 2021-present JAR Automation"
  },
  "excerpt": "",
  "headers": [],
  "git": {
    "updatedTime": null,
    "contributors": []
  },
  "filePathRelative": "README.md"
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
