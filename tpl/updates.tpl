<table>
    <tr>
        <td>
            <div id='uMenu'>
                {{#each posts}}
                    <div class='uMenuItem{{#if isSelected}} selectedU{{/if}}'>{{#if isLatest}}Latest{{else}}{{date}}{{/if}}</div>
                {{/each}}
            </div>
        </td>
        <td>
            <div class='currentU'>
                <div id='topWrapper'>
                    <div class='currentD'>{{item.date}}</div>
                    <div class='currentT'>{{item.title}}</div>
                </div>
                <a class='fancybox' href='{{item.img}}'><div class='currentImg' style='background: url({{item.img}}) {{item.imgPos}} no-repeat;'></div></a>
                <div class='currentC'>
                    {{#each item.content}}
                        <p class='{{cstyle}}'>{{p}}</p>
                    {{/each}}
                </div>
            </div>
        </td>
    </tr>
</table>