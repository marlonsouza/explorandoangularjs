app.controller('itemsController', function ($scope) {

	$scope.addButton = 'Add Item';

	$scope.items = [
		{nome: 'Sapatênis', qtd: 8, price: 15.90},
		{nome: 'Tênis', qtd: 12, price: 25.90},
		{nome: 'Havaianas', qtd: 10, price: 10.90},
		{nome: 'Sapatênis', qtd: 8, price: 15.90},
		{nome: 'Tênis', qtd: 12, price: 25.90},
		{nome: 'Havaianas', qtd: 10, price: 10.90},
		{nome: 'Sapatênis', qtd: 8, price: 15.90},
		{nome: 'Tênis', qtd: 12, price: 25.90},
		{nome: 'Havaianas', qtd: 10, price: 10.90},
		{nome: 'Sapatênis', qtd: 8, price: 15.90},
		{nome: 'Tênis', qtd: 12, price: 25.90},
		{nome: 'Havaianas', qtd: 10, price: 10.90},
		{nome: 'Sapatênis', qtd: 8, price: 15.90},
		{nome: 'Tênis', qtd: 12, price: 25.90},
		{nome: 'Havaianas', qtd: 10, price: 10.90},
		{nome: 'Sapatênis', qtd: 8, price: 15.90},
		{nome: 'Tênis', qtd: 12, price: 25.90},
		{nome: 'Havaianas', qtd: 10, price: 10.90},
		{nome: 'Sapatênis', qtd: 8, price: 15.90},
		{nome: 'Tênis', qtd: 12, price: 25.90},
		{nome: 'Havaianas', qtd: 10, price: 10.90},
		{nome: 'Sapatênis', qtd: 8, price: 15.90},
		{nome: 'Tênis', qtd: 12, price: 25.90},
		{nome: 'Havaianas', qtd: 10, price: 10.90},
		{nome: 'Sapatênis', qtd: 8, price: 15.90},
		{nome: 'Tênis', qtd: 12, price: 25.90},
		{nome: 'Havaianas', qtd: 10, price: 10.90},
		{nome: 'Sapatênis', qtd: 8, price: 15.90},
		{nome: 'Tênis', qtd: 12, price: 25.90},
		{nome: 'Havaianas', qtd: 10, price: 10.90},
		{nome: 'Sapatênis', qtd: 8, price: 15.90},
		{nome: 'Tênis', qtd: 12, price: 25.90},
		{nome: 'Havaianas', qtd: 10, price: 10.90},
		{nome: 'Sapatênis', qtd: 8, price: 15.90},
		{nome: 'Tênis', qtd: 12, price: 25.90},
		{nome: 'Havaianas', qtd: 10, price: 10.90},
		{nome: 'Sapatênis', qtd: 8, price: 15.90},
		{nome: 'Tênis', qtd: 12, price: 25.90},
		{nome: 'Havaianas', qtd: 10, price: 10.90},
		{nome: 'Sapatênis', qtd: 8, price: 15.90},
		{nome: 'Tênis', qtd: 12, price: 25.90},
		{nome: 'Havaianas', qtd: 10, price: 10.90},
		{nome: 'Sapatênis', qtd: 8, price: 15.90},
		{nome: 'Tênis', qtd: 12, price: 25.90},
		{nome: 'Havaianas', qtd: 10, price: 10.90},
		{nome: 'Sapatênis', qtd: 8, price: 15.90},
		{nome: 'Tênis', qtd: 12, price: 25.90},
		{nome: 'Havaianas', qtd: 10, price: 10.90},
		{nome: 'Sapatênis', qtd: 8, price: 15.90},
		{nome: 'Tênis', qtd: 12, price: 25.90},
		{nome: 'Havaianas', qtd: 10, price: 10.90},
		{nome: 'Sapatênis', qtd: 8, price: 15.90},
		{nome: 'Tênis', qtd: 12, price: 25.90},
		{nome: 'Havaianas', qtd: 10, price: 10.90},
		{nome: 'Sapatênis', qtd: 8, price: 15.90},
		{nome: 'Tênis', qtd: 12, price: 25.90},
		{nome: 'Havaianas', qtd: 10, price: 10.90},
		{nome: 'Sapatênis', qtd: 8, price: 15.90},
		{nome: 'Tênis', qtd: 12, price: 25.90},
		{nome: 'Havaianas', qtd: 10, price: 10.90}
	];

	$scope.adicionaItem = false;

	$scope.remove = function(index){
		$scope.items.splice(index,1);
	}

	$scope.habilitaNovo = function(){
		$scope.adicionaItem = !$scope.adicionaItem;

		if($scope.adicionaItem){
			$scope.addButton = 'Ocultar';
		}else{
			$scope.addButton = 'Add Item';
		};

        $scope.salvar = montaOperacao(novo);
        $scope.id = 0;
	}

    $scope.editar = function(index){
        $scope.adicionaItem = true;

        $scope.newitem = $scope.items[index];

        $scope.salvar = montaOperacao(update);

        $scope.id = index;
    }

    var novo = function(index){
        $scope.items.push($scope.newitem);
    }

    var update = function(index){
        $scope.items[index] = $scope.newitem;
    }

    function montaOperacao(opc){
        return function(){
            opc($scope.id);
            $scope.newitem = null;
            $scope.adicionaItem = !$scope.adicionaItem;
        }
    }


});



