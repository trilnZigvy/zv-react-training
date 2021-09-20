import React, { Component } from 'react'

export default class banner extends Component {
    render() {
        return (
          <div>
            <div className="full_size" style={{ position: "relative" }}>
              <div
                className="_ussrz76"
                style={{
                  height: "100%",
                  width: "100%",
                  backgroundSize: "cover",
                }}
              >
                <picture c>
                  <source
                    srcset="https://a0.muscache.com/im/pictures/57b9f708-bb12-498c-bc33-769f8fc43e63.jpg?im_w=2560 1x, https://a0.muscache.com/im/pictures/57b9f708-bb12-498c-bc33-769f8fc43e63.jpg?im_w=2560 2x"
                    media="(min-width: 1440px)"
                  />
                  <source
                    srcset="https://a0.muscache.com/im/pictures/57b9f708-bb12-498c-bc33-769f8fc43e63.jpg?im_w=960 1x, https://a0.muscache.com/im/pictures/57b9f708-bb12-498c-bc33-769f8fc43e63.jpg?im_w=1920 2x"
                    media="(min-width: 950px)"
                  />
                  <source
                    srcset="https://a0.muscache.com/im/pictures/e09893fc-1d02-49b2-befa-c4be7a57ed18.jpg?im_w=720 1x, https://a0.muscache.com/im/pictures/e09893fc-1d02-49b2-befa-c4be7a57ed18.jpg?im_w=1440 2x"
                    media="(min-width: 744px)"
                  />
                  <source srcset="https://a0.muscache.com/im/pictures/0c38042b-8685-4180-8d9b-12a6892ac6d8.jpg?im_w=320 1x, https://a0.muscache.com/im/pictures/0c38042b-8685-4180-8d9b-12a6892ac6d8.jpg?im_w=720 2x" />
                  <img
                    style={{ width: "100%" }}
                    className="img_banner"
                    aria-hidden="true"
                    alt=""
                    src="https://a0.muscache.com/im/pictures/0c38042b-8685-4180-8d9b-12a6892ac6d8.jpg?im_q=highq&amp;im_w=720"
                  />
                </picture>
              </div>
              {/* <div style={{ color: "white", position: "absolute" }}>
                Not Sure where to go
              </div> */}
            </div>
          </div>
        );
    }
}
