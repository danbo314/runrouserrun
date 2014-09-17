$(function() {
    'use strict';
    
    var updates = [
        {
            date: 'August 10th, 2014',
            menuDate: 'Aug 10',
            title: 'Week 17: Bruised Toes',
            isLatest: true,
            isSelected: true,
            img: '../img/OLAUpdate2.jpg',
            imgPos: '25% 65%',
            content: [{p:'Weeks to go: 9'}, {p:'Miles to go: 254 miles'}, {p:'Long Run (This week): 14 miles'}, {p:'Reflection:', cstyle:'cbold'}, {p:'Bruised Toes', cstyle:'citalics'}, {p:'Guess what I discovered his week?'}, {p:'Up until Sunday night as I began my vigorous ritual of icing down my legs after my long run, I was very unaware of an important truth: <i>How important my feet are</i>. Yeah. I had no idea.'}, {p:'It was not until this moment I had taken into consideration how many steps in life I have taken, how many times I’ve jumped, kicked, danced, bounced and most importantly <i>run</i>. It wasn’t until today I realized the weight of my body is supported by my somewhat dainty, awkward looking flat feet and that they carry said weight 12-16 hours a day, every day for the last 23 <i>years</i>.'}, {p:'Crazy right? I know a lot of you are thinking “DUH Colin, where were you in the first grade when they explained all of this?” I am obviously not new to the concept of feet, but NOTHING makes you appreciate them more than bruised toes. NOTHING. Today was my first experience with legitimate training aches and pains, ones that decided to stick around long after my run. I suppose the pavement I have been training on was a bit much, because at the conclusion of my 14 miler this week I found it very difficult to walk. So difficult In fact, had to remove my shoes immediately and found my feet were very swollen and hurt to the touch. Have I really just bruised my toes? My ever so valuable and hardworking toes??'}, {p:'No one told me about that when I signed up to train! But it’s okay; herein lays the important message of the week.'}, {p:'Often times, we take many things for granted. Someone once said, “We classify those without sight as blind, but why don’t we classify ourselves as sighted?”'}, {p:'We wouldn’t consider ourselves such because we don’t think about what a blessing it is to see everyday. Not everyone was given the same blessings, so it is easy to forget what God has granted each and every one of us in our daily lives. In this instance, it took a bad case of bruised toes for me to realize what a blessing it is to walk everyday, let alone run. It has given me a sense of perspective and refocusing as I close in on these final 9 weeks. As much as I want to succeed and accomplish my personal goals in running this marathon, I am painfully reminded now that I am not just doing this for myself, but for countless others less fortunate than I. Not only will I take better care of my feet, but I will remember to thank God for all of the blessings I have, including the opportunity to do this.'}, {p:'More ice it is!'}]
        },
        {
            date: 'August 3rd, 2014',
            menuDate: 'Aug 3',
            title: 'Week 16: Reaching New Heights',
            isLatest: false,
            isSelected: false,
            img: '../img/IMG_0954.jpeg',
            imgPos: '65% 65%',
            content: [{p:'Weeks to go: 10'}, {p:'Miles to go: 282 miles'}, {p:'Long Run: 15 miles!'}, {p:'Donor Thank You’s:', cstyle:'cbold'}, {p:'Here’s my first update (Sorry for the delay...)! First off I would like to thank the following people for donating up to this week. I really appreciate all of your support and prayers, for without you I wouldn’t be able to partake in this experience.', cstyle:'cindent'}, {p:'- Lindsey Marugg', cstyle:'cindent'}, {p:'St Barnabas Choir Members:', cstyle:'cindent citalics'}, {p:'- Mary Harkenrider', cstyle:'dbcindent'}, {p:'- Michelle Loquinte', cstyle:'dbcindent'}, {p:'- Pat Tracy', cstyle:'dbcindent'}, {p:'- Mary and John Kane', cstyle:'dbcindent'}, {p:'- Colleen Mulchrone', cstyle:'dbcindent'}, {p:'- Tom Oloffson', cstyle:'dbcindent'}, {p:'- Sister Ellen Ryan', cstyle:'dbcindent'}, {p:'Reflection:', cstyle:'cbold'}, {p:'At the beginning of this journey, there was NO possible way I could have anticipated all that it would take to train for this marathon! Week in and week out, mile after mile, ice bag after ice bag (boy have there been plenty of those!) the amount of time, energy, mental preparation and physical adjustments that have gone into the last 16 weeks have been taxing, grueling, smelly but overall very rewarding. As I stare at my watch as it tells me I have just completed my longest run thus far (which also happens to be the longest run I’ve EVER done) I can only look to the heavens and thank God for the wonderful opportunity to not only have the ability to train and stay healthy, but to do so while helping others.', cstyle:'cindent'}, {p:'So each week as I will post some of the reflections that I pondered for week while I ran and the different things I thought about along the way. This week, as I have just started reaching new heights in my mileage, I spent a lot of time focusing on why I am doing this and whom it will impact. For those who know me, you know how I feel about helping others. For those who don’t, I am a firm believer that it is our duty to extend a helping hand however we are able, whenever we are able. Regardless of how busy our lives may be or how important things are, there are always others who, for one reason or another, need help. Everyone needs love and care in this world in order to thrive and live out their lives. Some of us are blessed to have it while others are in a constant struggle to find it. If you know someone in need of help, reach out. Offer to listen or to help. The impact that we can each have on one another is truly underrated. With every small mile that I allowed to run, I know that the funds that I am helping to raise will help to make a difference in someone’s life. This motivates me everyday to get back out there and train and advocate for the less fortunate. It’s not much, but a small part that I can play in making a difference for someone else because I am able. With that, another week down, and 10 to go! Check back for more updates, photos and stories!', cstyle:'cindent'}, {p:'Peace and Blessings,'}, {p:'CSR'}]
        }
    ],
    paths = [headerPath, passagePath, updatesPath, footerPath],
    nodes = [$('.header'), $('.passageCont'), $('#updatesCont'), $('.footerCont')],
    argss = [headerArgs, {theme: 'light'}, { posts: updates, item: updates[0] }, null],
    cb = callback,
    newTop = 0;
    
    loadTemplates(paths, nodes, argss, cb);
    
    function callback() {
        $('.uMenuItem:not(.selectedU)').hover(function () {
            $(this).animate({
                width: '175px',
                'background-color': '#ff0636'
            });
        }, function () {
            var color = $(this).hasClass('selectedU') ? '#2867b5' : '#2797f0';
            $(this).animate({
                width: '150px',
                'background-color': color
            });
        }).click(function () {
            var date = $.trim($(this).html()),
                obj = null;
            
            $('.selectedU').removeClass('.selectedU');
            
            $.each(updates, function(i, curr) {
                if (curr.menuDate === date || (date === 'Latest' && curr.isLatest)) {
                    curr.isSelected = true;
                    obj = curr;
                }
                else
                    curr.isSelected = false;
            });
            
            loadTemplate(updatesPath, $('#updatesCont'), { posts: updates, item: obj, top: newTop }, callback);
        });
        
        $('.fancybox').fancybox({
            padding: 0
        });
        
        $(window).scroll(function () {
            var top = $(this).scrollTop();
            
            newTop = (top > 150) ? top-150 : 0;

            $('#uMenu').css({ top: newTop+'px' });
        });
    }
});
