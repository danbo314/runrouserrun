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
                <div class='currentD'>{{item.date}}</div>
                <div class='currentT'>{{item.title}}</div>
                <div class='currentC'>{{item.content}}</div>
            </div>
        </td>
    </tr>
</table>