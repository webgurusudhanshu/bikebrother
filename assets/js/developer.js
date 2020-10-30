


function ChangeDateFormat(value) {
    return value.split('/')[2] + '-' + value.split('/')[1] + '-' + value.split('/')[0];
}

function comparePassword() {
    if ($("#txtPassword").val() != $("#txtRePassword").val()) {
        var errorClass = "alert alert-danger alert-dismissible shadow";
        var msg = "Password and Re-Password Must be same !";
        showMsg(msg, errorClass);
        $("#txtPassword").focus();
        return false;
    }
}

    function showAddDisttModel() {
        $("#modelTitle").html("Add District");
        $("#btnSave").show();
        $("#btnUpdate").hide();
        $("#DisttModel").modal('show');
    }

    function showConfirm() {
        $("#psdModel").modal('show');
    }

    function showAddCityModel() {
        $("#CityModel").modal('show');
    }
    function showAddBikeModel() {
        $("#modelTitle").html("Add Bike");
        $("#btnSave").show();
        $("#btnUpdate").hide();
        $("#BikeModel").modal('show');
    }
    function showAddRoleModel() {
        $("#modelTitle").html("Add Role");
        $("#btnSave").show();
        $("#btnUpdate").hide();
        $("#RoleModel").modal('show');
    }
    function fillDistrict() {
        var stateId = $("#ddlState").val();
        $("#ddlDisttrict").empty();
        if (stateId == 0) {
            alert('Select valid State !');
            return false;
        }
        else {            
            $.ajax({
                url: "/Subscription/FillDisttrict",
                data: "{'Id':'" + stateId + "'}",
                type: "POST",
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                success: function (data) {
                    $("#ddlDisttrict").append(data);
                },
                error: function (data) {
                    alert("Something went wrong! Please try after some times.");
                    return false;
                }
            });
        }
    }

    function fillDistrictUpdate() {
        var stateId = $("#ddlStateUpdate").val();
        $("#ddlDisttrictUpdate").empty();
        if (stateId == 0) {
            alert('Select valid State !');
            return false;
        }
       
        else {
            $.ajax({
                url: "/Subscription/FillDisttrict",
                data: "{'Id':'" + stateId + "'}",
                type: "POST",
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                success: function (data) {
                    $("#ddlDisttrictUpdate").append(data);
                },
                error: function (data) {
                    alert("Something went wrong! Please try after some times.");
                    return false;
                }
            });
        }
    }

    function FillCity() {
        var disttrictId = $("#ddlDisttrict").val();
        $("#ddlCity").empty();
        if (disttrictId == 0) {
            alert('Select valid District !');
            return false;
        }
        else {
            $.ajax({
                url: "/Subscription/FillCity",
                data: "{'Id':'" + disttrictId + "'}",
                type: "POST",
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                success: function (data) {
                    $("#ddlCity").append(data);
                },
                error: function (data) {
                    alert("Something went wrong! Please try after some times.");
                    return false;
                }
            });
        }
    }

    function IDUSubscription(sts) {

        var FirstName = $("#txtFirstName").val();
        var LastName = $("#txtLastName").val();
        var Phone = $("#txtPhone").val();
        var Email = $("#txtEmail").val();
        var Address = $("#txtAddress").val();
        var State = $("#ddlState").val();
        var Disttrict = $("#ddlDisttrict").val();
        var City = $("#ddlCity").val();
        var Pincode = $("#txtPincode").val();
        var BikeNumber = $("#txtBikeNumber").val();
        var PayMode = $("#ddlPayMode").val();
        var Remark = $("#txtRemark").val();
        var Amount = $("#txtAmount").val();
        var RegDate = $("#txtRegDate").val();
        var Validity = $("#txtValidity").val();
        var IsActive = "No";

        var successClass = "alert alert-success alert-dismissible shadow";
        var errorClass = "alert alert-danger alert-dismissible shadow";

        var msg = '';
        var bikeTypeDiv = document.getElementById('divBikeType');
        var radio = bikeTypeDiv.getElementsByTagName('input');
        var len = radio.length;
        var selectedBike = '';
        for (var k = 0; k < len; k++) {
            if (radio[k].type == 'radio' && radio[k].checked == true) {
                selectedBike = radio[k].value;
                break;
            }
        }

        if (FirstName.trim() == '') {
            $("#txtFirstName").focus();
            msg = "Please Enter First Name !";
            showMsg(msg, errorClass);
            return false;
        }
        else if (LastName.trim() == '') {
            $("#txtLastName").focus();
            msg = "Please Enter Last Name !";
            showMsg(msg, errorClass);
            return false;
        }
        else if (Phone.trim() == '') {
            $("#txtPhone").focus();
            msg = "Please Enter Phone/Mobile Number !";
            showMsg(msg, errorClass);
            return false;
        }
        else if (Address.trim() == '') {
            $("#txtAddress").focus();
            msg = "Please Enter Address !";
            showMsg(msg, errorClass);
            return false;
        }
        else if (State == "0") {
            $("#ddlState").focus();
            msg = "Please Select Valid State !";
            showMsg(msg, errorClass);
            return false;
        }
        else if (Disttrict == "0") {
            $("#ddlDisttrict").focus();
            msg = "Please Select Valid District !";
            showMsg(msg, errorClass);
            return false;
        }
        else if (City == "0") {
            $("#ddlCity").focus();
            msg = "Please Select Valid City !";
            showMsg(msg, errorClass);
            return false;
        }
        else if (Pincode.trim() == '') {
            $("#txtPincode").focus();
            msg = "Please Enter Pincode !";
            showMsg(msg, errorClass);
            return false;
        }
        else if (selectedBike == '') {
            msg = "Please Select Bike Type !";
            showMsg(msg, errorClass);
            return false;
        }
        else if (BikeNumber.trim() == '') {
            $("#txtBikeNumber").focus();
            msg = "Please Enter Bike Number !";
            showMsg(msg, errorClass);
            return false;
        }
        else if (Amount.trim() == '') {
            $("#txtAmount").focus();
            msg = "Please Enter Amount !";
            showMsg(msg, errorClass);
            return false;
        }
        else if (RegDate.trim() == '') {
            $("#txtRegDate").focus();
            msg = "Please Enter Registration Date !";
            showMsg(msg, errorClass);
            return false;
        }

        if (document.getElementById("Rdbactive").checked == true)
            IsActive = "Yes";
        if (document.getElementById("RdbinActive").checked == true)
            IsActive = "No";

        var frm = new FormData();
        frm.append("FirstName", FirstName);
        frm.append("LastName", LastName);
        frm.append("Phone", Phone);
        frm.append("Email", Email);
        frm.append("Address", Address);
        frm.append("State", State);
        frm.append("Disttrict", Disttrict);
        frm.append("City", City);
        frm.append("Pincode", Pincode);
        frm.append("selectedBike", selectedBike);
        frm.append("BikeNumber", BikeNumber);
        frm.append("PayMode", PayMode);
        frm.append("Remark", Remark);
        frm.append("Amount", Amount);
        frm.append("RegDate", ChangeDateFormat(RegDate));
        frm.append("Validity", ChangeDateFormat(Validity));
        frm.append("IsActive", IsActive);

        var fileUpload = $("#uploadImg").get(0);
        var files = fileUpload.files;
        for (var i = 0; i < files.length; i++) {
            frm.append(files[i].name, files[i]);
        }

        $.ajax({
            type: "POST",
            url: "/Subscription/CreateSubscription",
            dataType: "json",
            contentType: false, // Not to set any content header
            processData: false, // Not to process data
            data: frm,
            success: function fnsuccesscallback(data) {
                var refNumb = data.split('^')[0];
                var SubsID = data.split('^')[1];
                if (sts == 'Download') {
                    window.location.href = "/Subscription/DownloadSubsPDF?SubsId=" + SubsID;
                }
                var csscls = "alert alert-success alert-dismissible shadow";
                //var msg = "<strong><b>Congratulations ! </b>Data saved successfully !</strong>";
                var msg = "<strong><b>Congratulations ! </b></strong>Subscription has been created successfully. <br/>Subscription Number is :: " + refNumb + "";
                showMsg(msg, csscls);
                clearSubsControlsValue();                
            },
            error: function fnerrorcallback(error) {
                var msg = "Opps! Somethings went wrong, Please after sometimes !";
                var csscls = "alert alert-danger alert-dismissible shadow";
                showMsg(msg, csscls);
            }
        });
        return false;
    }

    function clearSubsControlsValue() {

        $("#txtFirstName").val('');
        $("#txtLastName").val('');
        $("#txtPhone").val('');
        $("#txtEmail").val('');
        $("#txtAddress").val('');
        $("#ddlState").val(0);
        $("#ddlDisttrict").val(0);
        $("#ddlCity").val(0);
        $("#txtPincode").val('');
        $("#txtBikeNumber").val('');
        $("#ddlPayMode").val(0);
        $("#txtRemark").val('');
        $("#txtAmount").val('');
        $("#txtRegDate").val('');
        $("#txtValidity").val('');

        var bikeTypeDiv = document.getElementById('divBikeType');
        var radio = bikeTypeDiv.getElementsByTagName('input');
        var len = radio.length;
        for (var k = 0; k < len; k++) {
            if (radio[k].type == 'radio') {
                radio[k].checked = false;
            }
        }
        document.getElementById('Rdbactive').checked = true;
        document.getElementById('RdbinActive').checked = false;
        $("#preview").addClass('d-none');
    }

    function showMsg(msg, csscls) {
        var html = '';
        $("#divErrorContainer").empty();

        html += "<div class='" + csscls + "' role='alert'>";
        html += "<div class='container'>";
        html += msg;
        html += "<button type='button' class='close' data-dismiss='alert' aria-label='Close'>";
        html += "<span aria-hidden='true'>&times;</span>";
        html += "</button>";
        html += "</div>";
        html += "</div>";

        $("#divErrorContainer").append(html);
    }

    function specialNotAllowd(e, id) {
        // only special characters not allow
        var keynum;
        var keychar;
        var keynum = window.event ? e.keyCode : e.which;
        var charCode = (e.which) ? e.which : e.keyCode;
        if ((keynum >= 65 && keynum <= 90) || (keynum >= 97 && keynum <= 122) || (keynum >= 48 && keynum <= 57) || (keynum == 32))
            return true;
        else {
            var msg = "Special symbols are not allowed.";
            var csscls = "alert alert-danger alert-dismissible shadow";
            showMsg(msg, csscls);
            $("#" + id).focus();
            return false;
        }
    }

    function validatedigit(evt,id ) {
        var theEvent = evt || window.event; 
        if (theEvent.type === 'paste') {
            key = event.clipboardData.getData('text/plain');
        } else {
            // Handle key press
            var key = theEvent.keyCode || theEvent.which;
            key = String.fromCharCode(key);
        }
        var regex = /[0-9]/;
        if (!regex.test(key)) { 
            var strId=evt.target.id;
            var msg = "Only digit allowed.";
            var csscls = "alert alert-danger alert-dismissible shadow";
            showMsg(msg, csscls);
            $("#" + id).focus();
            theEvent.returnValue = false;
            if(theEvent.preventDefault) theEvent.preventDefault();
        }
    }

    function IDUBike() {

        var Code = $("#txtCode").val();
        var Name = $("#txtname").val();
        var IsActive = "No";

        var successClass = "alert alert-success alert-dismissible shadow";
        var errorClass = "alert alert-danger alert-dismissible shadow";

        var msg = '';


        if (Code.trim() == '') {
            msg = "Please Enter Code !";
            showMsg(msg, errorClass);
            $("#txtCode").focus();
            return false;
        }
        else if (Name.trim() == '') {
            msg = "Please Enter Name !";
            showMsg(msg, errorClass);
            $("#txtname").focus();
            return false;
        }

        if (document.getElementById("Rdbactive").checked == true)
            IsActive = "Yes";
        if (document.getElementById("RdbinActive").checked == true)
            IsActive = "No";

        var frm = new FormData();
        frm.append("Code", Code);
        frm.append("Name", Name);
        frm.append("IsActive", IsActive);

        $.ajax({
            type: "POST",
            url: "/Bike/AddBike",
            dataType: "json",
            contentType: false, // Not to set any content header
            processData: false, // Not to process data
            data: frm,
            success: function fnsuccesscallback(data) {
                if (data == "Save") {
                    bindList(10, 1, $('#txtSearchValue').val());
                    $("#BikeModel").modal('hide');
                    var csscls = "alert alert-success alert-dismissible shadow";
                    var msg = "<strong><b>Congratulations ! </b></strong> Bike has been created successfully.";
                    showMsg(msg, csscls);
                    $("#txtCode").val('');
                    $("#txtname").val('');
                    document.getElementById("Rdbactive").checked = true;
                    document.getElementById("RdbinActive").checked = false;
                }
                else if (data == "Code") {
                    $("#txtCode").focus();
                    var msg = "Code is Exists.";
                    var csscls = "alert alert-danger alert-dismissible shadow";
                    showMsg(msg, csscls);
                    return false;
                }
                else if (data == "Name") {
                    $("#txtname").focus();
                    var msg = "Name is Exists.";
                    var csscls = "alert alert-danger alert-dismissible shadow";
                    showMsg(msg, csscls);
                    return false;
                }
            },
            error: function fnerrorcallback(error) {
                var msg = "Opps! Somethings went wrong, Please after sometimes !";
                var csscls = "alert alert-danger alert-dismissible shadow";
                showMsg(msg, csscls);
            }
        });
        return false;
    }

    function IDUCompanyProfile() {

        var Id = $("#hdfId").val();
        var DisplayName = $("#txtDisplayName").val();
        var TradingName = $("#txtLegalName").val();
        var GSTNumber = $("#txtGstNumb").val();
        var PANNumber = $("#txtPanNumb").val();
        var AddressLine1 = $("#txtAddress").val();
        var State = $("#ddlState").val();
        var Disttrict = $("#ddlDisttrict").val();
        var City = $("#ddlCity").val();
        var Pincode = $("#txtPincode").val();
        var Mobile = $("#txtPhone").val();
        var Email = $("#txtEmail").val();
        var Website = $("#txtWebsite").val();
        

        var successClass = "alert alert-success alert-dismissible shadow";
        var errorClass = "alert alert-danger alert-dismissible shadow";

        var msg = '';

        if (DisplayName.trim() == '') {
            $("#txtDisplayName").focus();
            msg = "Please Enter Display Name !";
            showMsg(msg, errorClass);
            return false;
        }
        else if (TradingName.trim() == '') {
            $("#txtLegalName").focus();
            msg = "Please Enter Trading Name !";
            showMsg(msg, errorClass);
            return false;
        }
        else if (GSTNumber.trim() == '') {
            $("#txtGstNumb").focus();
            msg = "Please Enter GST Number !";
            showMsg(msg, errorClass);
            return false;
        }
        else if (PANNumber.trim() == '') {
            $("#txtPanNumb").focus();
            msg = "Please Enter PAN Number !";
            showMsg(msg, errorClass);
            return false;
        }
        else if (AddressLine1.trim() == '') {            
            $("#txtAddress").focus();
            msg = "Please Enter Locality/ Address !";
            showMsg(msg, errorClass);
            return false;
        }
        else if (State == "0") {
            $("#ddlState").focus();
            msg = "Please Select Valid State !";
            showMsg(msg, errorClass);
            return false;
        }
        else if (Disttrict == "0") {
            $("#ddlDisttrict").focus();
            msg = "Please Select Valid District !";
            showMsg(msg, errorClass);
            return false;
        }
        else if (City == "0") {
            $("#ddlCity").focus();
            msg = "Please Select Valid City !";
            showMsg(msg, errorClass);
            return false;
        }
        else if (Pincode.trim() == '') {
            $("#txtPincode").focus();
            msg = "Please Enter Pincode !";
            showMsg(msg, errorClass);
            return false;
        }
        else if (Mobile.trim() == '') {
            $("#txtPhone").focus();
            msg = "Please Enter Mobile Number !";
            showMsg(msg, errorClass);
            return false;
        }
        else if (Email.trim() == '') {
            $("#txtEmail").focus();
            msg = "Please Enter Email !";
            showMsg(msg, errorClass);
            return false;
        }
        

        var frm = new FormData();
        frm.append("Id", Id);
        frm.append("DisplayName", DisplayName);
        frm.append("TradingName", TradingName);
        frm.append("GSTNumber", GSTNumber);
        frm.append("PANNumber", PANNumber);
        frm.append("AddressLine1", AddressLine1);
        frm.append("State", State);
        frm.append("Disttrict", Disttrict);
        frm.append("City", City);
        frm.append("Pincode", Pincode);
        frm.append("Mobile", Mobile);
        frm.append("Email", Email);
        frm.append("Website", Website);

        var fileUpload = $("#uploadImg").get(0);
        var files = fileUpload.files;
        for (var i = 0; i < files.length; i++) {
            frm.append(files[i].name, files[i]);
        }

        $.ajax({
            type: "POST",
            url: "/CompanyManager/CreateCompanyInfo",
            dataType: "json",
            contentType: false, // Not to set any content header
            processData: false, // Not to process data
            data: frm,
            success: function fnsuccesscallback(data) {
                if (data == "S") {
                    var csscls = "alert alert-success alert-dismissible shadow";
                    var msg = "<strong><b>Congratulations ! </b></strong> Company details has been created successfully.";
                    showMsg(msg, csscls);
                }
                else if (data == "U") {
                    var csscls = "alert alert-success alert-dismissible shadow";
                    var msg = "<strong><b>Congratulations ! </b></strong> Company details has been updated successfully.";
                    showMsg(msg, csscls);
                }
            },
            error: function fnerrorcallback(error) {
                var msg = "Opps! Somethings went wrong, Please after sometimes !";
                var csscls = "alert alert-danger alert-dismissible shadow";
                showMsg(msg, csscls);
            }
        });
        return false;
    }