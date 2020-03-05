![Built With Stencil](https://img.shields.io/badge/-Built%20With%20Stencil-16161d.svg?logo=data%3Aimage%2Fsvg%2Bxml%3Bbase64%2CPD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI%2BCjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI%2BCgkuc3Qwe2ZpbGw6I0ZGRkZGRjt9Cjwvc3R5bGU%2BCjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik00MjQuNywzNzMuOWMwLDM3LjYtNTUuMSw2OC42LTkyLjcsNjguNkgxODAuNGMtMzcuOSwwLTkyLjctMzAuNy05Mi43LTY4LjZ2LTMuNmgzMzYuOVYzNzMuOXoiLz4KPHBhdGggY2xhc3M9InN0MCIgZD0iTTQyNC43LDI5Mi4xSDE4MC40Yy0zNy42LDAtOTIuNy0zMS05Mi43LTY4LjZ2LTMuNkgzMzJjMzcuNiwwLDkyLjcsMzEsOTIuNyw2OC42VjI5Mi4xeiIvPgo8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNDI0LjcsMTQxLjdIODcuN3YtMy42YzAtMzcuNiw1NC44LTY4LjYsOTIuNy02OC42SDMzMmMzNy45LDAsOTIuNywzMC43LDkyLjcsNjguNlYxNDEuN3oiLz4KPC9zdmc%2BCg%3D%3D&colorA=16161d&style=flat-square)

# Mastodon share button

This package is a user friendly web component to share in mastodon.

## Browsers support

| [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt="IE / Edge" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>IE / Edge | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Firefox | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Chrome | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Safari | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari-ios/safari-ios_48x48.png" alt="iOS Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>iOS Safari | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/samsung-internet/samsung-internet_48x48.png" alt="Samsung" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Samsung |
| --------- | --------- | --------- | --------- | --------- | --------- |
| IE11 *([limited](docs/ie.md))*, Edge| last 2 versions| last 2 versions| last 2 versions| last 2 versions| last 2 versions

<br/>

# [View demos 👁](https://codepen.io/bipoza/pen/XWbegOM?editors=1100)
# Preview

![](preview.gif)

# Getting Started
## Installation
### Via CDN
```html
<script src="https://unpkg.com/mastodon-share-button@latest/dist/mastodon-share-button/mastodon-share-button.js"></script>
```
### Via NPM
```bash
$ npm install mastodon-share-button 
```
### Usage

```html
<!-- Basic use -->
<mastodon-share-button share_message="Text to share"></mastodon-share-button>

<!-- Customized -->
<mastodon-share-button
    instances='["https://mastodon.eus", "https://mastodon.jalgi.eus"]'
    share_message="Text to share"
    share_button_text="Custom share button text"
    close_button_text="Custom close text"
    send_button_text="Custom send text"
    modal_title="Custom modal title"
    other_instance_text="Custom other instance select option text"
    dark_mode="true">
</mastodon-share-button>
```

# Documentation
## Properties

| Property              | Attribute             | Required     | Description                                        | Type     | Default                          |
| --------------------- | --------------------- | ------------ | -------------------------------------------------- | -------- | -------------------------------- |
| `share_message`       | `share_message`       | Required     | Text to share in mastodon.                         |`string`  | `undefined`                      |
| `instances`           | `instances`           | Not Required | List of instances to display in the select option. |`string`  | `'["https://mastodon.social"]'`  |
| `dark_mode`           | `dark_mode`           | Not Required | Option to activate dark mode.                      |`boolean` | `false`                          |
| `send_button_text`    | `send_button_text`    | Not Required | Text to show at the bottom of sharing in the modal.|`string`  | `"Send"`                         |
| `icon_url`            | `icon_url`            | Not Required | Icon url. Put it "" to not display any icon.       |`string`  | `mastodon oficial logo`          |
| `modal_title`         | `modal_title`         | Not Required | Title to display in modal.                         |`string`  | `"Share to Mastodon"`            |
| `close_button_text`   | `close_button_text`   | Not Required | Text to display to close modal.                    |`string`  | `"Close"`                        |
| `other_instance_text` | `other_instance_text` | Not Required | Text to display on the form.                       |`string`  | `"Other instance"`               |
| `share_button_text`   | `share_button_text`   | Not Required | Text to show at the bottom of sharing. Put it "" to not display any text. |`string`  | `"Share to Mastodon"`            |
| `open`                | `open`                | Not Required | Variable to display the modal opened.              |`boolean` | `false`                          |

## CSS Custom Properties (Styling)
The component could be styled with the help of CSS3 variables.

Example:

```html
<style type="text/css">
  mastodon-share-button {
    --share-button-background-color:#259FFC;
    --share-button-background-color-hover:#C7E7FE;
  }
</style>
```

* **Important**: If you are using the dark mode, you cannot apply any color variable, because this mode will overlap your css.

### Share button
| Name                                  | Description
| -------------------------------       | --------------------------------------------------------------------|
| --share-button-background-color       | Share button background color. Default to `#cccccc`                 |
| --share-button-background-color-hover | Share button background hover color. Default to `#949292`           |
| --share-button-border-radius          | Default to `5px`                                                    |
| --share-button-padding                | Default to `12px`                                                   |
| --share-button-color                  | Default to `#ffffff`                                                |
| --share-button-font-size              | Default to `16px`                                                   |
| --share-button-font-weight            | Default to `bold`                                                   |
| --share-button-border                 | Defaul to `none`                                                    |

### Modal
| Name                                          | Description
| -------------------------- | -----------------------------------------------------|
| --modal-title-color        | Text color to modal title. Default to `#2c3e50`      |
| --modal-background-color   | Modal background color. Default to `#ffffff`         |


### Modal close button
| Name                                          | Description
| -------------------------------               | --------------------------------------------------------------------|
| --close-modal-button-background-color         | Close button background color. Default to `#cccccc`                 |
| --close-modal-button-background-color-hover   | Share button background hover color. Default to `#949292`           |
| --close-modal-button-border-radius            | Default to `5px`                                                    |
| --close-modal-button-padding                  | Default to `6px`                                                   |
| --close-modal-button-color                    | Default to `#ffffff`                                                |
| --close-modal-button-font-size                | Default to `16px`                                                   |
| --close-modal-button-font-weight              | Default to `bold`                                                   |
| --close-modal-button-border                   | Defaul to `none`                                                    |

### Modal select option and input
| Name                                          | Description
| -------------------------- | -----------------------------------------------------    |
| --select-color             | Select and input font color. Default to `#2c3e50`        |
| --select-background-color  | Select and input background color. Default to `#ffffff`  |
| --select-border            | Select and input border. Default to `2px solid #2c3e50`  |
| --select-font-weight       | Select and input font weight. Default to `bolder`        |
| --select-font-size         | Font size. Default to `18px`                             |
| --select-padding           | Default to `10px`                                        |
| --select-border-radius     | Default to `0.25em`                                      |
| --select-line-height       | Default to `3`                                           |

### Modal send button
| Name                                          | Description
| ------------------------------------ | -------------------------------    |
| --send-modal-button-color            | Default to `#ffffff`               |
| --send-modal-button-background-color | Default to `#2692da`               |
| --send-modal-button-border-radius    | Default to `5px`                   |
| --send-modal-button-width            | Default to `100%`                  |
| --send-modal-button-height           | Default to `6vh`                   |
| --send-modal-button-min-height       | Default to `42px`                  |
| --send-modal-button-font-size        | Default to `4vh`                   |
