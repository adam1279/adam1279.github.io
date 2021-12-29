main.appendChild(new PageInfo({
    header: 'Artwork',
    description: "I mostly use Photoshop to create artwork, but I have been getting into Illustrator and SVG's. I also use Blender, which I'm experimenting a lot with. I create all of the artwork for my music myself."
}).element);
main.appendChild(new Element({
    type: 'img',
    attrs: {
        src: '/icons/Lightbulbs.png'
    },
    props: {
        'height': '500px',
        'margin': 'auto',
        'display': 'block',
        //'filter': 'hue-rotate(170deg)'
    }
}).element);