<table>
    <tr>
        <td>
            <div id='uMenu' style='top:{{top}}px'>
                {{#each posts}}
                    <div class='uMenuItem{{#if isSelected}} selectedU{{/if}}'>{{#if isLatest}}Latest{{else}}{{menuDate}}{{/if}}</div>
                {{/each}}
            </div>
        </td>
        <td>
            <div class='currentU'>
                <div id='uIntro'>
                    <p>Welcome to My Updates Page!</p>
                    <p>Here I will acknowledge and give a heartfelt thanks to all of my donors, as well as share with you my training progress and fun stories along the 26-week long journey. Make yourself at home! I will try and keep my reflections short, relevant and fun!</p>
                </div>
                <hr noshade>
                <div id='topWrapper'>
                    <div class='currentD'>{{item.date}}</div>
                    <div class='currentT'>{{item.title}}</div>
                </div>
                {{#if item.img}}
                    <a class='fancybox' href='{{item.img}}'><div class='currentImg' style='background: url({{item.img}}) {{item.imgPos}} no-repeat;'></div></a>
                {{/if}}
                <div class='currentC'>
                    {{#each item.content}}
                        <p class='{{cstyle}}'>{{{p}}}</p>
                    {{/each}}
                </div>
            </div>
        </td>
    </tr>
</table>
