class Element {
    constructor(info) {
        this.type = info.type;
        this.props = (info.props) ? info.props : {};;
        this.attrs = (info.attrs) ? info.attrs : {};;
        this.events = (info.events) ? info.events : {};
        this.element = this.create();
    }
    create() {
        let elem = document.createElement(this.type);
        for (let prop of Object.keys(this.props)) {
            elem.style[prop] = String(this.props[prop]);
        }
        for (let attr of Object.keys(this.attrs)) {
            elem[attr] = this.attrs[attr];
            elem.setAttribute(attr, this.attrs[attr]);
        }
        for (let event of Object.keys(this.events)) {
            elem.addEventListener(event, this.events[event]);
        }
        return elem;
    }
    remove() {
        this.element.parent.removeChild(this.element);
    }
}
class Navbar {
    constructor() {
        this.element = this.create();
    }
    create() {
        let bar = new Element({
            type: 'div',
            attrs: {
                className: 'navbar',
            },
        });


        document.body.prepend(bar.element);
        return bar.element;
    }
} 

class NavbarSection {
    constructor() {
        this.element = this.create();
    }
    create() {
        let section = new Element({
            type: 'ul',
            attrs: {
                className: 'navbarSection',
            },
        });
        navbar.element.appendChild(section.element);
        return section.element;
    }
}

class NavbarLink {
    constructor(info, section) {
        this.text = info.text;
        this.nonClick = info.nonClick;
        this.url = info.url;
        this.active = info.active;
        this.img = info.img;
        this.section = section;
        this.element = this.create();
    }
    create() {
        let div = new Element({
            type: 'li',
            attrs: {
                className: (this.nonClick) ? 'navbarText' : 'navbarLink',
                'data-active': this.active,
            },
        });
        if (!this.nonClick) {
            let a = new Element({
                type: 'a',
                attrs: {
                    href: (this.url) ? this.url : '',
                },
            });
            div.element.appendChild(a.element);
        }
        let span = new Element({
            type: 'span',
            attrs: {
                innerHTML: this.text,
            },
            props: (this.img) ? {
                paddingLeft: '0px',
            }: {},
        });
        if (this.img) {
            let icon = new Element({
                type: 'img',
                attrs: {
                    className: 'navbarIcon',
                    src: this.img.url,
                },
            });
            div.element.prepend(icon.element);
        }
        div.element.appendChild(span.element);
        this.section.element.appendChild(div.element);
        return div.element;
    }
}

navSections = {
    logos: {
        navLinks: {
            logoText: {
                text: 'ADAM THE GOLEM',
                active: 'false',
                nonClick: true,
                img: {
                    url: '/icons/Lightbulbs.png'
                },
            },
        }
    },
    pages: {
        navLinks: {
            '/': {
                text: 'Home',
                url: '/'
            },
            '/music/': {
                text: 'Music',
                url: '/music'
            },
            '/code/': {
                text: 'Code',
                url: '/code'
            },
            '/contact/': {
                text: 'Contact',
                url: '/contact'
            }
        }
    }
}
navLinks = {
    
}
let navbar;
function createNavbar() {
    navbar = new Navbar();
    for (let navSection of Object.keys(navSections)) {
        sec = new NavbarSection();
        for (let navLink of Object.keys(navSections[navSection].navLinks)) {
            new NavbarLink(navSections[navSection].navLinks[navLink], sec);
        }
    }
}

currentUrl = window.location.href;
url = new URL(currentUrl);

console.log(url.pathname);

navSections.pages.navLinks[url.pathname].active = 'true';

createNavbar();

function setTitle(title) {
    document.head.appendChild(new Element({
        type: 'title',
        attrs: {
            innerHTML: title,
        },
    }).element);
}

setTitle(navSections.pages.navLinks[url.pathname].text + ' - Adam The Golem');

class BandcampPlayer {
    constructor(track) {
        this.iframe = '<iframe style="border: 0; width: 280px; height: 400px;" src="https://bandcamp.com/EmbeddedPlayer/track='+track.number+'/size=large/bgcol=333333/linkcol=4ec5ec/tracklist=false/transparent=true/" seamless><a href="'+track.url+'">'+track.title+'</a></iframe>';
        this.track = track;
        this.element = this.create();
    }
    create() {
        let div = new Element({
            type: 'div',
            attrs: {
                className: (this.track.published) ? 'bandcampPlayer' : 'bandcampTeaser',
                innerHTML: (this.track.published) ? this.iframe : this.track.title,
            },
        });
        return div.element;
    }
}

class SongDiv {
    constructor(song) {
        this.song = song;
        this.element = this.create();
    }
    create() {
        let div = new Element({
            type: 'div',
            attrs: {
                className: 'songDiv',
            },
        });
        /*let infoDiv = new Element('div', {}, {
            className: 'infoDiv'
        });
        let title = new Element('h1', {}, {
            innerHTML: this.song.title,
        });
        let subTitle = new Element('h3', {}, {
            innerHTML: 'by ADAM THE GOLEM',
        });
        infoDiv.element.appendChild(title.element);
        infoDiv.element.appendChild(subTitle.element);
        div.element.appendChild(infoDiv.element);*/
        div.element.appendChild(this.song.player.element);
        return div.element;
    }
}

const discography = [
    {
        title: 'Wishes',
        number: 989907174,
        url: "https://adamthegolem.bandcamp.com/track/wishes",
        published: true,
    },
    {
        title: 'Empty Roads',
        number: 2690346874,
        url: "https://adamthegolem.bandcamp.com/track/empty-roads",
        published: true,
    },
];

let main = document.getElementsByClassName('main')[0];
class ReadMore {
    constructor(info) {
        this.innerHTML = info.innerHTML;
        this.element = this.create();
    }
    create() {
        let div = document.createElement('div');
        div.style.display = 'inline';
        let readmoreSpan = new Element({
            type: 'span',
            attrs: {
                innerHTML: this.innerHTML,
                className: 'readMoreText',
                'data-open': 'false',
            },
        });
        let a = new Element({
            type: 'a',
            attrs: {
                innerHTML: 'Read more',
                className: 'readMore',
                'data-open': 'false',
            },
            events: {
                click: function() {
                    let bool = !(this.getAttribute('data-open') == 'true');
                    //console.log(bool);
                    readmoreSpan.element.setAttribute('data-open', bool);
                    this.setAttribute('data-open', bool);
                    this.innerHTML = (bool) ? 'Read less' : 'Read more';
                    if (!bool) {
                        /*this.scrollIntoView();
                        window.scrollBy(0,-100);*/
                        window.scrollTo(window.scrollX, this.scrollPosition);
                        console.log(this.scrollPosition);

                    } else {
                        console.log(window.scrollY);
                        this.scrollPosition = window.scrollY;
                    }
                },
            },
        });
        div.appendChild(readmoreSpan.element);
        div.appendChild(a.element);
        return div;
    }
}
class PageInfo {
    constructor(info) {
        this.description = info.description;
        this.header = info.header;
        //this.readmore = info.readmore;
        this.element = this.create();
    }
    create() {
        let div = new Element({
            type: 'div',
            attrs: {
                className: 'pageInfo',
            },
        });
        let h1 = new Element({
            type: 'h1',
            attrs: {
                innerHTML: this.header,
            },
        });
        let p = new Element({
            type: 'p',
            attrs: {
                innerHTML: this.description,
            },
        });
        div.element.appendChild(h1.element);
        div.element.appendChild(p.element);

        /*if (this.readmore) {
            let readmoreSpan = new Element({
                type: 'span',
                attrs: {
                    innerHTML: this.readmore,
                    className: 'readMoreText',
                    'data-open': 'false',
                },
            });
            let details = new Element('span', {}, {
                innerHTML: 'Read more',
                className: 'readMore',
                'data-open': 'false',
            }, {
                click: function() {
                    let bool = !(this.getAttribute('data-open') == 'true');
                    console.log(bool);
                    readmoreSpan.element.setAttribute('data-open', bool);
                    this.setAttribute('data-open', bool);
                    this.innerHTML = (bool) ? 'Read less' : 'Read more';
                }
            }{

            });
            p.element.appendChild(readmoreSpan.element);
            p.element.appendChild(details.element);
        }*/
        this.p = p;
        return div.element;
    }
}

document.head.appendChild(new Element({
    type: 'link',
    attrs: {
        rel: 'icon',
        href: '/icons/Lightbulbs.png',
    },
}).element);

class TextTable extends Element {
    constructor(info) {
        info.attrs = (info.attrs) ? info.attrs : {};
        info.attrs['className'] = 'textTable';
        super({
            type: 'table',
            attrs: info.attrs,
            props: info.props,
            events: info.events,
        });
        for (let item of Object.keys(info.obj)) {
            let tr = new Element({type: 'tr'});
            let key = new Element({
                type: 'td',
                attrs: {
                    innerHTML: item,
                },
                props: {
                    fontWeight: 'bolder',
                },
            });
            let value = new Element({
                type: 'td',
                attrs: {
                    innerHTML: info.obj[item],
                },
            });
            tr.element.appendChild(key.element);
            tr.element.appendChild(value.element);
            this.element.appendChild(tr.element);
        }
    }
}
class DivTable extends Element {
    constructor(info) {
        super({
            type: 'table',
            attrs: info.attrs,
            props: info.props,
            events: info.events,
        });
        this.col = info.col;
        this.count = 0;
        this.currentRow = new Element({type: 'tr'}).element;
        this.element.appendChild(this.currentRow);
        this.blankCell = new Element({type: 'td'}).element;
        this.currentRow.appendChild(this.blankCell);
    }
    addItem(item) {
        let td = new Element({type: 'td'}).element;
        td.appendChild(item);
        this.currentRow.insertBefore(td, this.blankCell);
        this.count++;
        if (this.count % 3 == 0 && this.count > 0) {
            this.currentRow = new Element({type: 'tr'}).element;
            this.element.appendChild(this.currentRow);
            this.blankCell.remove();
            this.currentRow.appendChild(this.blankCell);
            this.count = 0;
        }
    }
}