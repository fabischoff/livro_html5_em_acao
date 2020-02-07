(function  () {
    var init = function () {
        var orderForm = document.forms.order,
        saveBtn = document.getElementById('saveOrder'),
        saveBtnClicked = false;

        var saveForm = function  () {
            if(!('formAction' in document.createEvent('input'))){
                var formAction = saveBtn.getAttribute('formaction');
                orderForm.setAttribute('action', formAction);
            }
            saveBtn.Clicked = true;
        };
        saveBtn.addEventListener('click', saveForm, false);
        var qtyFields = orderForm.quantity, totalFields = document.getElementsByClassName('item_total'),
        orderTotalField = document.getElementById('order_total');

        var formatMoney = function  (value) {
            return value.toString().replace(/\B(?=(\d{3}) + (?!\d))/g,",");
        }

        var calculateTotals = function  () {
            var i = 0;
            ln = qtyFields.length,
            itemQty = 0,
            itemPrice = 0.00,
            itemTotal = 0.00,
            itemtotalMoney = '0.00',
            orderTotal = 0.00,
            orderTotalMoney = '$0.00';

            for (; i <ln; i++){

            }
        };

        calculateTotals();

        var qtyListeners = function(){
            var i = 0,
            ls = qtyFields.length;

            for(; i< ln; i++){
                qtyFields[i].addEventListener('input', calculateTotals, false);
                qtyFields[i].addEventListener('keyup', calculateTotals, false);
            }
        }
    };
    qtyListeners();
    window.addEventListener("load", init, false);
})();