module.exports = function(grunt) {
	rules: [{
    ip: '127.0.0.1',    // point domain "A" to address "B"
    hostname: 'qun.qq.com',
    type: 'set'
}]
rules: [{
    domain: 'baidu.com',    // point domain "A" to domain "B"
    hostname: 'qun.qq.com',
    type: 'set'
}]

grunt.initConfig({
    localhosts: {
        set : {
            options: {
                rules: [{
                    ip: '127.0.0.1',
                    hostname: 'qun.qq.com',
                    type: 'set'
                }, {
                    ip: '127.0.0.1',
                    hostname: 'find.qq.com',
                    type: 'set'
                }, {
                    domain: 'baidu.com',    // point domain "A" to domain "B"
                    hostname: 'find.qq.com',
                    type: 'set'
                }]
            }
        },
        remove : {
            options: {
                rules: [{
                    ip: '127.0.0.1',
                    hostname: 'qun.qq.com',
                    type: 'remove'
                }]
            }
        }
    },
});
 
 
grunt.registerTask('serve', function (target) {
    grunt.task.run([
        'concurrent:server',
        "localhosts:set",
        'connect:livereload',
        'open:server',
        'watch'
    ]);
});
 
grunt.registerTask('build', [
        'localhosts:remove',    // clear previously set localhosts
        '.......'    // content removed for brevity
]);
} 