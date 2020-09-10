const shareMessage = document.getElementById('shareMessage')

shareMessage.onclick = () => {
  liff.shareTargetPicker([
        {
          "type": "flex",
          "altText": "Flex Message",
          "contents": {
            "type": "bubble",
            "body": {
              "type": "box",
              "layout": "vertical",
              "spacing": "md",
              "contents": [
                {
                  "type": "text",
                  "text": "BROWN'S ADVENTURE",
                  "size": "xl",
                  "gravity": "center",
                  "weight": "bold",
                  "wrap": true
                },
                {
                  "type": "box",
                  "layout": "vertical",
                  "spacing": "sm",
                  "margin": "lg",
                  "contents": [
                    {
                      "type": "box",
                      "layout": "baseline",
                      "spacing": "sm",
                      "contents": [
                        {
                          "type": "text",
                          "text": "Date",
                          "flex": 1,
                          "size": "sm",
                          "color": "#AAAAAA"
                        },
                        {
                          "type": "text",
                          "text": "Monday 25, 9:00PM",
                          "flex": 4,
                          "size": "sm",
                          "color": "#666666",
                          "wrap": true
                        }
                      ]
                    },
                    {
                      "type": "box",
                      "layout": "baseline",
                      "spacing": "sm",
                      "contents": [
                        {
                          "type": "text",
                          "text": "Place",
                          "flex": 1,
                          "size": "sm",
                          "color": "#AAAAAA"
                        },
                        {
                          "type": "text",
                          "text": "LINE Thailand",
                          "flex": 4,
                          "size": "sm",
                          "color": "#666666",
                          "wrap": true
                        }
                      ]
                    },
                    {
                      "type": "box",
                      "layout": "vertical",
                      "margin": "xxl",
                      "contents": [
                        {
                          "type": "spacer"
                        },
                        {
                          "type": "image",
                          "url": "https://scdn.line-apps.com/n/channel_devcenter/img/fx/linecorp_code_withborder.png",
                          "size": "xl",
                          "aspectMode": "cover"
                        },
                        {
                          "type": "text",
                          "text": "You can enter the theater by using this code instead of a ticket",
                          "margin": "xxl",
                          "size": "xs",
                          "color": "#AAAAAA",
                          "wrap": true
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          }
        }
      ])
}
