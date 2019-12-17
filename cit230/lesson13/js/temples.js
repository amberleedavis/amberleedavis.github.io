const api = "temples.json";

fetch(api)
    .then(
        (response) => response.json()
    )
    .then(
        (temples) => {
            //DEBUG:
            console.log(temples);

            let billingsName = temples.billings.name;
            let billingsStreetAddress = temples.billings.address.streetAddress;
            let billingsCity = temples.billings.address.city;
            let billingsState = temples.billings.address.state;
            let billingsPostalCode = temples.billings.address.postalCode;
            let billingsNumber = temples.billings.phoneNumber;
            let billingsDedicationDate = temples.billings.dedicationDate;
            let billingsServices = temples.billings.services;
            let billingsOrdinance = temples.billings.ordinanceSchedule;
            let billingsSessions = temples.billings.sessionSchedule;
            let billingsClosure = temples.billings.templeClosure;

            document.getElementById("billingsName").innerHTML = billingsName;
            document.getElementById("billingsAddress").innerHTML = billingsStreetAddress + " " + billingsCity + ", " + billingsState + " " + billingsPostalCode;
            document.getElementById("billingsNumber").innerHTML = billingsNumber;
            document.getElementById("billingsDedicationDate").innerHTML = billingsDedicationDate;
            document.getElementById("billingsServices").innerHTML = billingsServices;
            document.getElementById("billingsOrdinance").innerHTML = billingsOrdinance;
            document.getElementById("billingsSessions").innerHTML = billingsSessions;
            document.getElementById("billingsClosure").innerHTML = billingsClosure;

            let paysonName = temples.payson.name;
            let paysonStreetAddress = temples.payson.address.streetAddress;
            let paysonCity = temples.payson.address.city;
            let paysonState = temples.payson.address.state;
            let paysonPostalCode = temples.payson.address.postalCode;
            let paysonNumber = temples.payson.phoneNumber;
            let paysonDedicationDate = temples.payson.dedicationDate;
            let paysonServices = temples.payson.services;
            let paysonOrdinance = temples.payson.ordinanceSchedule;
            let paysonSessions = temples.payson.sessionSchedule;
            let paysonClosure = temples.payson.templeClosure;

            document.getElementById("paysonName").innerHTML = paysonName;
            document.getElementById("paysonStreetAddress").innerHTML = paysonStreetAddress + " " + paysonCity + ", " + paysonState + " " + paysonPostalCode;
            document.getElementById("paysonNumber").innerHTML = paysonNumber;
            document.getElementById("paysonDedicationDate").innerHTML = paysonDedicationDate;
            document.getElementById("paysonServices").innerHTML = paysonServices;
            document.getElementById("paysonOrdinance").innerHTML = paysonOrdinance;
            document.getElementById("paysonSessions").innerHTML = paysonSessions;
            document.getElementById("paysonClosure").innerHTML = paysonClosure;

            let provoName = temples.provo.name;
            let provoStreetAddress = temples.provo.address.streetAddress;
            let provoCity = temples.provo.address.city;
            let provoState = temples.provo.address.state;
            let provoPostalCode = temples.provo.address.postalCode;
            let provotNumber = temples.provo.phoneNumber;
            let provoDedicationDate = temples.provo.dedicationDate;
            let provoServices = temples.provo.services;
            let provoOrdinance = temples.provo.ordinanceSchedule;
            let provoSessions = temples.provo.sessionSchedule;
            let provoClosure = temples.provo.templeClosure;

            document.getElementById("provoName").innerHTML = provoName;
            document.getElementById("provoAddress").innerHTML = provoStreetAddress + " " + provoCity + ", " + provoState + " " + provoPostalCode;
            document.getElementById("provoNumber").innerHTML = provoNumber;
            document.getElementById("provoDedicationDate").innerHTML = provoDedicationDate;
            document.getElementById("provoServices").innerHTML = provoServices;
            document.getElementById("provoOrdinance").innerHTML = provoOrdinance;
            document.getElementById("provoSessions").innerHTML = provoSessions;
            document.getElementById("provoClosure").innerHTML = provoClosure;

            let snowflakeName = temples.snowflake.name;
            let snowflakeStreetAddress = temples.snowflake.address.streetAddress;
            let snowflakeCity = temples.snowflake.address.city;
            let snowflakeState = temples.snowflake.address.state;
            let snowflakePostalCode = temples.snowflake.address.postalCode;
            let snowflakeNumber = temples.snowflake.phoneNumber;
            let snowflakeDedicationDate = temples.snowflake.dedicationDate;
            let snowflakeServices = temples.snowflake.services;
            let snowflakeOrdinance = temples.snowflake.ordinanceSchedule;
            let snowflakeSessions = temples.snowflake.sessionSchedule;
            let snowflakeClosure = temples.snowflake.templeClosure;

            document.getElementById("snowflakeName").innerHTML = snowflakeName;
            document.getElementById("snowflakeAddress").innerHTML = snowflakeStreetAddress + " " + snowflakeCity + ", " + snowflakeState + " " + snowflakePostalCode;
            document.getElementById("snowflakeNumber").innerHTML = snowflakeNumber;
            document.getElementById("snowflakeDedicationDate").innerHTML = snowflakeDedicationDate;
            document.getElementById("snowflakeServices").innerHTML = snowflakeServices;
            document.getElementById("snowflakeOrdinance").innerHTML = snowflakeOrdinance;
            document.getElementById("snowflakeSessions").innerHTML = snowflakeSessions;
            document.getElementById("snowflakeClosure").innerHTML = snowflakeClosure;

        }
    );