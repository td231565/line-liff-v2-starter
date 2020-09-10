const shareMessage = document.getElementById('shareMessage')

const templates = {
  qr: {
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
  },
  advise: {
    type: 'flex',
    altText: 'Flex Msg',
    contents: {
      "type": "bubble",
      "header": {
        "type": "box",
        "layout": "vertical",
        "contents": [
          {
            "type": "box",
            "layout": "horizontal",
            "contents": [
              {
                "type": "image",
                "url": "https://scdn.line-apps.com/n/channel_devcenter/img/flexsnapshot/clip/clip4.jpg",
                "size": "full",
                "aspectMode": "cover",
                "aspectRatio": "150:196",
                "gravity": "center",
                "flex": 1
              },
              {
                "type": "box",
                "layout": "vertical",
                "contents": [
                  {
                    "type": "image",
                    "url": "https://scdn.line-apps.com/n/channel_devcenter/img/flexsnapshot/clip/clip5.jpg",
                    "size": "full",
                    "aspectMode": "cover",
                    "aspectRatio": "150:98",
                    "gravity": "center"
                  },
                  {
                    "type": "image",
                    "url": "https://scdn.line-apps.com/n/channel_devcenter/img/flexsnapshot/clip/clip6.jpg",
                    "size": "full",
                    "aspectMode": "cover",
                    "aspectRatio": "150:98",
                    "gravity": "center"
                  }
                ],
                "flex": 1
              },
              {
                "type": "box",
                "layout": "horizontal",
                "contents": [
                  {
                    "type": "text",
                    "text": "NEW",
                    "size": "xs",
                    "color": "#ffffff",
                    "align": "center",
                    "gravity": "center"
                  }
                ],
                "backgroundColor": "#EC3D44",
                "paddingAll": "2px",
                "paddingStart": "4px",
                "paddingEnd": "4px",
                "flex": 0,
                "position": "absolute",
                "offsetStart": "18px",
                "offsetTop": "18px",
                "cornerRadius": "100px",
                "width": "48px",
                "height": "25px"
              }
            ]
          }
        ],
        "paddingAll": "0px"
      },
      "body": {
        "type": "box",
        "layout": "vertical",
        "contents": [
          {
            "type": "box",
            "layout": "vertical",
            "contents": [
              {
                "type": "box",
                "layout": "vertical",
                "contents": [
                  {
                    "type": "text",
                    "contents": [],
                    "size": "xl",
                    "wrap": true,
                    "text": "ABC 室內設計",
                    "color": "#ffffff",
                    "weight": "bold"
                  },
                  {
                    "type": "text",
                    "text": "小坪數也能有大空間",
                    "color": "#ffffffcc",
                    "size": "sm"
                  }
                ],
                "spacing": "sm"
              },
              {
                "type": "box",
                "layout": "vertical",
                "contents": [
                  {
                    "type": "box",
                    "layout": "vertical",
                    "contents": [
                      {
                        "type": "text",
                        "contents": [],
                        "size": "sm",
                        "wrap": true,
                        "margin": "lg",
                        "color": "#ffffffde",
                        "text": "時尚設計師打造 2020 最新款式"
                      }
                    ]
                  }
                ],
                "paddingAll": "13px",
                "backgroundColor": "#ffffff1A",
                "cornerRadius": "2px",
                "margin": "xl"
              }
            ]
          }
        ],
        "paddingAll": "20px",
        "backgroundColor": "#464F69"
      }
    }
  }
}

shareMessage.onclick = () => {
  liff.shareTargetPicker([templates.advise])
}
