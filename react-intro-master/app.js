var image = React.createElement('img', { src: 'img/vue.png' });
var text = React.createElement('h1', null, 'qweqeqeqwe');

var all = React.createElement('div', { className: 'container' }, image, text);

ReactDOM.render(all, document.getElementById('root'));
