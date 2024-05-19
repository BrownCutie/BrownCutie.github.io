// 将最上面的分类也可以点击了
document.getElementsByClassName('site-page group')[1].href = '/categories/'

console.log(GLOBAL_CONFIG_SITE.title)
axios.get('http://127.0.0.1:8088/post/show?title=' + GLOBAL_CONFIG_SITE.title
).then(function (response) {
    console.log(response);
})
    .catch(function (error) {
        console.log(error);
    });