<div class='header_menu' id='CRCM'>
    {{#if shortTitle}}
        <span class= 'title'>{{../title}}</span>
    {{else}}
    {{#each ../title}}
        <span class='firstTitleLetter'>{{first}}</span><span class='endTitle'>{{end}}</span>
    {{/each}}
    {{/if}}
</div>

<div class='header_options' id='donate'>Donate</div>
<div class='header_options' id='updates'>Updates</div>
<div class='header_options' id='calendar'>Calendar</div>