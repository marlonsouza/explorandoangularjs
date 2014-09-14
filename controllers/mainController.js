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

		$scope.salvar = novo();
        $scope.id = 0;

        location.href = './#/novoitem';
	}

    $scope.editar = function(index){

        $scope.adicionaItem = true;
        $scope.newitem = $scope.items[index];
        $scope.salvar = update();
        $scope.id = index;

        location.href = './#/novoitem';
    }

    function novo (){
        return function(item){
            console.log(item);
            $scope.items.push(item);
            $scope.newitem = null;
            location.href = './#/listaitens';
        }
    }

    function update(){
        return function(item){
            $scope.items[$scope.id] = item;
            $scope.newitem = null;
            location.href = './#/listaitens';
        }
    }

});
