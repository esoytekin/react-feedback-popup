>## React Feedback Popup

![alt tag](https://github.com/esoytekin/react-feedback-popup/raw/main/images/react-feedback-popup-demo.png)


Feedback popup for react apps.


## Getting Started:

Install react-feedback-popup using npm or yarn.

``npm i github:esoytekin/react-feedback-popup``
``yarn add github:esoytekin/react-feedback-popup``

Install bootstrap-icons.

``yarn add bootstrap-icons``

Import library, and default stylesheet.

``import { ReactFeedbackPopup } from "react-feedback-popup";``   
``import "react-feedback-popup/lib/react-feedback-popup.css"``

## How to use:

Simple Case:

```javascript
import { ReactFeedbackPopup } from 'react-feedback-popup';

    <ReactFeedbackPopup
        onSubmit={data => {
            console.log('data', data);
        }}
    />
}

```
