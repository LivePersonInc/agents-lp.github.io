(function (ns) {

    var text = {
        short: {
            title: 'text-short',
            content: 'hiya, which cookie do you like best?'
        },
        long: {
            title: 'text-long',
            content: 'Hi there, we have a huge collection of cookies from around the world. Just pick the cookie you like and we will freshly bake you a pile. And remember, that\'s the way the cookie crumbles ....'
        }
    };

    var quickReplies = {
        qr_2: {
            title: "2 buttons",
            content: {"type":"quickReplies","itemsPerRow":8,"replies":[{"type":"button","tooltip":"yes i do","title":"yes","click":{"actions":[{"type":"publishText","text":"yep"}]}},{"type":"button","tooltip":"no way","title":"no","click":{"actions":[{"type":"publishText","text":"nope"}]}}]}
        },
        qr_8_8_8: {
            title: "8-8-8 buttons",
            content: {"type":"quickReplies","itemsPerRow":8,"replies":[{"type":"button","tooltip":"button-1","title":"button-1","click":{"actions":[{"type":"publishText","text":"button-1"}]}},{"type":"button","tooltip":"button-2","title":"button-2","click":{"actions":[{"type":"publishText","text":"button-2"}]}},{"type":"button","tooltip":"button-3","title":"button-3","click":{"actions":[{"type":"publishText","text":"button-3"}]}},{"type":"button","tooltip":"button-4","title":"button-4","click":{"actions":[{"type":"publishText","text":"button-4"}]}},{"type":"button","tooltip":"button-5","title":"button-5","click":{"actions":[{"type":"publishText","text":"button-5"}]}},{"type":"button","tooltip":"button-6","title":"button-6","click":{"actions":[{"type":"publishText","text":"button-6"}]}},{"type":"button","tooltip":"button-7","title":"button-7","click":{"actions":[{"type":"publishText","text":"button-7"}]}},{"type":"button","tooltip":"button-8","title":"button-8","click":{"actions":[{"type":"publishText","text":"button-8"}]}},{"type":"button","tooltip":"button-9","title":"button-9","click":{"actions":[{"type":"publishText","text":"button-9"}]}},{"type":"button","tooltip":"button-10","title":"button-10","click":{"actions":[{"type":"publishText","text":"button-10"}]}},{"type":"button","tooltip":"button-11","title":"button-11","click":{"actions":[{"type":"publishText","text":"button-11"}]}},{"type":"button","tooltip":"button-12","title":"button-12","click":{"actions":[{"type":"publishText","text":"button-12"}]}},{"type":"button","tooltip":"button-13","title":"button-13","click":{"actions":[{"type":"publishText","text":"button-13"}]}},{"type":"button","tooltip":"button-14","title":"button-14","click":{"actions":[{"type":"publishText","text":"button-14"}]}},{"type":"button","tooltip":"button-15","title":"button-15","click":{"actions":[{"type":"publishText","text":"button-15"}]}},{"type":"button","tooltip":"button-16","title":"button-16","click":{"actions":[{"type":"publishText","text":"button-16"}]}},{"type":"button","tooltip":"button-17","title":"button-17","click":{"actions":[{"type":"publishText","text":"button-17"}]}},{"type":"button","tooltip":"button-18","title":"button-18","click":{"actions":[{"type":"publishText","text":"button-18"}]}},{"type":"button","tooltip":"button-19","title":"button-19","click":{"actions":[{"type":"publishText","text":"button-19"}]}},{"type":"button","tooltip":"button-20","title":"button-20","click":{"actions":[{"type":"publishText","text":"button-20"}]}},{"type":"button","tooltip":"button-21","title":"button-21","click":{"actions":[{"type":"publishText","text":"button-21"}]}},{"type":"button","tooltip":"button-22","title":"button-22","click":{"actions":[{"type":"publishText","text":"button-22"}]}},{"type":"button","tooltip":"button-23","title":"button-23","click":{"actions":[{"type":"publishText","text":"button-23"}]}},{"type":"button","tooltip":"button-24","title":"button-24","click":{"actions":[{"type":"publishText","text":"button-24"}]}}]}
        },
        qr_2_2_8: {
            title: "2-2-20 buttons",
            content: {"type":"quickReplies","itemsPerRow":2,"replies":[{"type":"button","tooltip":"button-1","title":"button-1","click":{"actions":[{"type":"publishText","text":"button-1"}]}},{"type":"button","tooltip":"button-2","title":"button-2","click":{"actions":[{"type":"publishText","text":"button-2"}]}},{"type":"button","tooltip":"button-3","title":"button-3","click":{"actions":[{"type":"publishText","text":"button-3"}]}},{"type":"button","tooltip":"button-4","title":"button-4","click":{"actions":[{"type":"publishText","text":"button-4"}]}},{"type":"button","tooltip":"button-5","title":"button-5","click":{"actions":[{"type":"publishText","text":"button-5"}]}},{"type":"button","tooltip":"button-6","title":"button-6","click":{"actions":[{"type":"publishText","text":"button-6"}]}},{"type":"button","tooltip":"button-7","title":"button-7","click":{"actions":[{"type":"publishText","text":"button-7"}]}},{"type":"button","tooltip":"button-8","title":"button-8","click":{"actions":[{"type":"publishText","text":"button-8"}]}},{"type":"button","tooltip":"button-9","title":"button-9","click":{"actions":[{"type":"publishText","text":"button-9"}]}},{"type":"button","tooltip":"button-10","title":"button-10","click":{"actions":[{"type":"publishText","text":"button-10"}]}},{"type":"button","tooltip":"button-11","title":"button-11","click":{"actions":[{"type":"publishText","text":"button-11"}]}},{"type":"button","tooltip":"button-12","title":"button-12","click":{"actions":[{"type":"publishText","text":"button-12"}]}},{"type":"button","tooltip":"button-13","title":"button-13","click":{"actions":[{"type":"publishText","text":"button-13"}]}},{"type":"button","tooltip":"button-14","title":"button-14","click":{"actions":[{"type":"publishText","text":"button-14"}]}},{"type":"button","tooltip":"button-15","title":"button-15","click":{"actions":[{"type":"publishText","text":"button-15"}]}},{"type":"button","tooltip":"button-16","title":"button-16","click":{"actions":[{"type":"publishText","text":"button-16"}]}},{"type":"button","tooltip":"button-17","title":"button-17","click":{"actions":[{"type":"publishText","text":"button-17"}]}},{"type":"button","tooltip":"button-18","title":"button-18","click":{"actions":[{"type":"publishText","text":"button-18"}]}},{"type":"button","tooltip":"button-19","title":"button-19","click":{"actions":[{"type":"publishText","text":"button-19"}]}},{"type":"button","tooltip":"button-20","title":"button-20","click":{"actions":[{"type":"publishText","text":"button-20"}]}},{"type":"button","tooltip":"button-21","title":"button-21","click":{"actions":[{"type":"publishText","text":"button-21"}]}},{"type":"button","tooltip":"button-22","title":"button-22","click":{"actions":[{"type":"publishText","text":"button-22"}]}},{"type":"button","tooltip":"button-23","title":"button-23","click":{"actions":[{"type":"publishText","text":"button-23"}]}},{"type":"button","tooltip":"button-24","title":"button-24","click":{"actions":[{"type":"publishText","text":"button-24"}]}}]}
        },
        qr_cookies: {
            title: "various cookies",
            content: {"type": "quickReplies","itemsPerRow": 5,"replies": [{"type": "button","tooltip": "Macaron","title": "Macaron","click": {"metadata": [{"type": "ExternalId","id": "Macaron"}],"actions": [{"type": "publishText","text": "Macaron"},{"type": "navigate","lo": 23423423,"la": 2423423423}]},"style": {"color": "#fff","border-color": "lightpink","background-color": "lightpink","bold": true}},{"type": "button","title": "Krumiri"},{"type": "button","tooltip": "Churro","title": "Churro","click": {"metadata": [{"type": "ExternalId","id": "Churro"}],"actions": [{"type": "publishText","text": "Churro"}]},"style": {"color": "#fff","border-color": "gold","background-color": "gold","border-radius": 0,"bold": true}},{"type": "button","tooltip": "Alfajor","title": "Alfajor","click": {"metadata": [{"type": "ExternalId","id": "Alfajor"}],"actions": [{"type": "publishText","text": "Alfajor"}]}},{"type": "button","tooltip": "Pig's ears","title": "Pig's ears","click": {"metadata": [{"type": "ExternalId","id": "Pig's ears"}],"actions": [{"type": "publishText","text": "Pig's ears"}]},"style": {"color": "#fff","border-color": "skyblue","background-color": "skyblue","bold": true}},{"type": "button","tooltip": "Amaretti di Saronno","title": "Amaretti di Saronno","click": {"metadata": [{"type": "ExternalId","id": "Amaretti di Saronno"}],"actions": [{"type": "publishText","text": "Amaretti di Saronno"}]},"style": {"color": "darkgreen","bold": true,"italic": true}},{"type": "button","tooltip": "Stroopwafel","title": "Stroopwafel","click": {"metadata": [{"type": "ExternalId","id": "Stroopwafel"}],"actions": [{"type": "publishText","text": "Stroopwafel"}]},"style": {"color": "#fff","border-color": "#d17813","background-color": "#d17813","italic": true}},{"type": "button","tooltip": "Coyotas","title": "Coyotas","click": {"metadata": [{"type": "ExternalId","id": "Coyotas"}],"actions": [{"type": "publishText","text": "Coyotas"}]},"style": {"size": "large"}},{"type": "button","tooltip": "Gingerbread","title": "Gingerbread","click": {"metadata": [{"type": "ExternalId","id": "Gingerbread"}],"actions": [{"type": "navigate","lo": 23423423,"la": 2423423423}]},"style": {"color": "#fff","border-color": "brown","background-color": "brown","bold": true}},{"type": "button","tooltip": "Ghoriba","title": "Ghoriba","click": {"metadata": [{"type": "ExternalId","id": "Ghoriba"}],"actions": [{"type": "publishText","text": "Ghoriba"}]}},{"type": "button","tooltip": "Snickerdoodle","title": "Snickerdoodle","click": {"metadata": [{"type": "ExternalId","id": "Snickerdoodle"}],"actions": [{"type": "navigate","lo": 23423423,"la": 2423423423}]},"style": {"color": "saddlebrown","border-color": "saddlebrown","border-radius": 4,"size": "small","bold": true}}]}
        },
        all_action: {
            title: "All Actions",
            content: {"type":"quickReplies","itemsPerRow":8,"replies":[{"type":"button","tooltip":"yes i do","title":"navigate to Haifa","click":{"actions":[{"type":"navigate","la":32.7940463,"lo":34.78176759999997}]}},{"type":"button","tooltip":"no way","title":"link to ynet","click":{"actions":[{"type":"link","uri":"http://www.ynet.co.il"}]}},{"type":"button","tooltip":"no way","title":"publishText","click":{"actions":[{"type":"publishText","text":"publishText was clicked"}]}}]}
        }
    };

    ns.data = {
        text: text,
        quickReplies: quickReplies
    };

})(window.quickRepliesWidget = window.quickRepliesWidget || {});
