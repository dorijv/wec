# Western European Championships 2023 #

UMFN asked me to create a simple information website for the Western European Championships in Powerlifting 2023, which is to be hosted in Njarðvík. The website is meant to replace the information pamphlet handout and thus a simplistic look is what we strived for. 

I decided to use the oppurtunity to brush up on my Vue.JS knowledge. I wanted the website to be optimized for mobile use, as most users will be using it on a mobile device.

The meet director can instantly update any deviations made to the timeplan using the embedded google sheets function located under /timetable
  
## WEC Screenshots

<table>
  <tr>
     <td>Main Screen</td>
     <td>Navigation</td>
     <td>Activities</td>
     <td>Contacts</td>
  </tr>
  <tr>
    <td><img src="https://github.com/dorijv/wec/blob/main/index.png?raw=true" width=270 height=480></td>
    <td><img src="https://github.com/dorijv/wec/blob/main/nav_bar.png?raw=true" width=270 height=480></td>
    <td><img src="https://github.com/dorijv/wec/blob/main/actvities.png?raw=true" width=270 height=480></td>
    <td><img src="https://github.com/dorijv/wec/blob/main/contacts.png?raw=true" width=270 height=480></td>
  </tr>
 </table>

### DISCLAIMER ###

This website is in active development and will continue improving and being updated up until the meet itself takes place. 

## Technical Stack ##

- Vue.JS
- BootStrapVue
- GitHub Pages (Hosting)

## Deployment ##

I made a zsh script to build the project, export the static version to /public and push that version to a sub-branch, gh-pages. Which is then used by GitHub pages for static hosting.

### Improvements ###

See room for improvements? Feel free to submit a pull request or shoot me a message!

### Take-aways ###

Make sure the Bootstrap you found is being kept up to date before using it.


> Version 1.0
