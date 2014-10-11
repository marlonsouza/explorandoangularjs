angular.module('myApp')

.controller('estoqueController', ['$scope', 'EstoqueRepositorio','_','promiseTracker',function ($scope, EstoqueRepositorio, _, promiseTracker) {

    $scope.tracker = {};
    $scope.tracker.carregandoEstoque = promiseTracker();
	$scope.tracker.removentoEstoque = promiseTracker();

	(function(){
        carregaEstoque();
    })();

    $scope.remove = function(lote){
		var promise = EstoqueRepositorio.remove(lote).then(
            function(){
                _.remove($scope.estoque, function(el){
                    return el.id = lote.id;
                });
                alert("Teste remove");
            },
            function(){
                alert('Erro ao remover o lançamento');
            }
        );

         $scope.tracker.removentoEstoque.addPromise(promise);
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
        $scope.tracker.carregandoEstoque.addPromise(itemsPromise);
    }

}]);
