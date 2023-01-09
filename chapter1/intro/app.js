const h1 = React.createElement('h1',{
    id:'heading1'
},'My heading 1');


const h2 = React.createElement('h1',{
    id:'heading2'
},'My heading 2');

const div = React.createElement('div',{
    id:'container'
},[h1,h2]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(div)
