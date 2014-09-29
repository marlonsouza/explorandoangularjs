angular.module('myApp').

controller('itemsController', ['$scope','ItemsRepositorio',function($scope, ItemsRepositorio){

    (function(){
        carregaItems();
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
            var newItemPromisse = ItemsRepositorio.add(item).then(
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
            var itemPromisse = ItemsRepositorio.update(item).then(
                function(){
                    $scope.items[$scope.id] = item;
                    $('#myModal').modal('hide');
                },
                function(){
                    alert('Erro ao atualizar o item!');
                }
            );
        }
    }

    function carregaItems(){
        var itemsPromise = ItemsRepositorio.get().then(function(items){
            $scope.items = items;
        });
    }

}]);
