describe('Testing AngularJS', function(){
    describe('Testing AngularJS Controller', function(){
        it('should initialze the default server', function(){
            module('app');
            var scope = {};
            var ctrl;
            
            inject(function($controller){
                ctrl = $controller('mainController', {$scope:scope});
            });
            
            expect(scope.title).toBeDefined();
            expect(scope.title).toBe('This is default Title');
        });
    })
});