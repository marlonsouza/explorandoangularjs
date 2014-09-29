angular.module('myApp')

.controller('estoqueController', ['$scope', 'EstoqueRepositorio',function ($scope, EstoqueRepositorio) {

	(function(){
        carregaEstoque();
    })();

    $scope.remove = function(index){
		$scope.items.splice(index,1);
	}

	$scope.cadastrarNovo = function(){
        $scope.newitem = null;
		$scope.salvar = novo();
        $scope.id = 0;
	}

    $scope.editar = function(index){
        $scope.newitem = $scope.items[index];
        $scope.salvar = update();
        $scope.id = index;
    }

    function novo (){
        return function(item){
            $scope.items.unshift(item);
            $('#myModal').modal('hide');
        }
    }

    function update(){
        return function(item){
            $scope.items[$scope.id] = item;
            $('#myModal').modal('hide');
        }
    }

    function carregaEstoque(){
        var itemsPromise = EstoqueRepositorio.get().then(function(items){
            $scope.items = items;
        });
    }

}]);
