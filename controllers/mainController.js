app.controller('itemsController', function ($scope) {

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
		{nome: 'Tênis', qtd: 12, price: 25.90}
	];

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
            $scope.items.push(item);
            $('#myModal').modal('hide');
        }
    }

    function update(){
        return function(item){
            $scope.items[$scope.id] = item;
            $('#myModal').modal('hide');
        }
    }

});
