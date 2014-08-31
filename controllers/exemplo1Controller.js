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

	$scope.novo = function(){
		$scope.items.push($scope.newitem);
		$scope.newitem = null;
	}

	$scope.habilitaNovo = function(){
		$scope.adicionaItem = !$scope.adicionaItem;

		if($scope.adicionaItem){
			$scope.addButton = 'Ocultar';
		}else{
			$scope.addButton = 'Add Item';
		};
	}
});


