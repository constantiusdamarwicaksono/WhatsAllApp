# WhatsAllApp
Chrome Extension that creates a UI overlay for WhatsApp Web to enumerate phone numbers, profile pics, about texts and online statuses.

Checkout the background information at https://www.lorankloeze.nl/2017/05/07/collecting-huge-amounts-of-data-with-whatsapp/
 
This is a Proof of Concept packed in a Chrome Extension. It's not bug free and you may run into errors. If there was a stage before alpha it would be in that stage. Use it wisely!

![Extension in action](https://www.lorankloeze.nl/wp-content/uploads/2017/05/whatsapp_script_2.png "Extension in action")
 
## Warning
This extension has the permission to read from your WhatsApp Web screen. As you can see in the source code, that permission is not used in a bad way. But, take care if you download this extension from anywhere else but this repo!

## Instructions
1. Open up chrome://extensions/ 
2. Drag and drop [dist/WhatsAllApp.crx](dist/WhatsAllApp.crx) into the Extensions window
3. Goto WhatsApp Web, a green button should appear, click it to open the UI
4. Enter a range of phonenumbers you want to enumerate, more than 500 numbers is probably a little much 
5. After a few seconds you'll see a table of phonenumbers, profile pics, about texts and on/offline statuses
6. Every 10 sec, the script checks if someone is online and places that number at the beginning of the table
7. If someone is currently online, the left border of the profile picture becomes green


## FAQ
* __Why is this extension not available in the Chrome Web Store?__

   Because it's a PoC and because I'll have to pay $5. Since I'm Dutch I don't want to pay unless I have absolutely no other choice. So there you go :)
