angular.module('myApp').

controller('itemsController', ['$scope','ItemsRepositorio', '_','promiseTracker',function($scope, ItemsRepositorio, _, promiseTracker){

    $scope.tracker = {};
	$scope.tracker.removendoItem = promiseTracker();
    $scope.tracker.carregandoItens = promiseTracker();

    (function(){
        carregaItems();
    })();

    $scope.remove = function(item){
		var promise = ItemsRepositorio.remove(item).then(
            function(){
                _.remove($scope.items, function(el){
					return el.i_item == item.i_item;
				});
            },
            function(){
                alert('Erro ao remover o item');
            });

        $scope.tracker.removendoItem.addPromise(promise);
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
            var promise = ItemsRepositorio.add(item).then(
                function(){
                     $scope.items.unshift(item);
                     $('#myModal').modal('hide');
                },
                function(){
                    alert('Erro ao salvar um novo item!');
                }
            );

        }
    }

    function update(){
        return function(item){
            var promise = ItemsRepositorio.update(item).then(
                function(){
                    $scope.items[$scope.i_item] = item;
                    $('#myModal').modal('hide');
                },
                function(){
                    alert('Erro ao atualizar o item!');
                }
            );
        }
    }

    function carregaItems(){
        var promise = ItemsRepositorio.get().then(function(items){
            $scope.items = items;
        });

        $scope.tracker.carregandoItens.addPromise(promise);
    }

}]);
