let contacts = new TextTable({
    obj: {
        'Gmail:': '<a href="mailto:adamthegolem@gmail.com">adamthegolem@gmail.com</a>',
        'Twitter:': '<a href="https://twitter.com/adamthegolem">@adamthegolem</a>',
        'Instagram:': '<a href="https://www.instagram.com/adamthegolem/">@adamthegolem</a>',
        'YouTube:': '<a href="https://www.youtube.com/channel/UCYMNYivqg18JYcnJq5FFL-A">Adam The Golem</a>',
        'Bandcamp:': '<a href="https://adamthegolem.bandcamp.com/music">Adam The Golem</a>',
    },
});
main.appendChild(new PageInfo({
    header: 'Contact',
    description: contacts.element.outerHTML
}).element);