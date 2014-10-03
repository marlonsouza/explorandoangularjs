angular.module('myApp')

.controller('estoqueController', ['$scope', 'EstoqueRepositorio','_','promiseTracker',function ($scope, EstoqueRepositorio, _, promiseTracker) {

	(function(){
        carregaEstoque();
    })();

    $scope.tracker = {};
	$scope.tracker.removentoEstoque = promiseTracker();

    $scope.remove = function(lote){
		var promise = EstoqueRepositorio.remove(lote).then(
            function(){
                _.remove($scope.estoque, function(el){
                    return el.id = $scope.estoque.id;
                });
            },
            function(){
                alert('Erro ao remover o lançamento');
            }
        );

        $scope.tracker.removendoEstoque.addPromise(promise);
	}

	$scope.cadastrarNovo = function(){
        $scope.newitem = null;
		$scope.salvar = novo();
        $scope.id = 0;
	}

    $scope.editar = function(index){
        $scope.newitem = $scope.estoque[index];
        $scope.salvar = update();
        $scope.id = index;
    }

    function novo (){
        return function(lote){
            var promise = EstoqueRepositorio.add(lote).then(
                function(){
                    $scope.estoque.unshift(lote);
                    $('#myModal').modal('hide');
                },
                function(){
                    alert('Erro a cadastro lançamento!');
                }
            );
        }
    }

    function update(){
        return function(lote){
            var promise = EstoqueRepositorio.update(lote).then(
                function(){
                    $scope.estoque[$scope.id] = lote;
                    $('#myModal').modal('hide');
                },
                function(){
                    alert('Erro ao atualizar o lançamento');
                }
            );
        }
    }

    function carregaEstoque(){
        var itemsPromise = EstoqueRepositorio.get().then(function(estoque){
            $scope.estoque = estoque;
        });
    }

}]);
