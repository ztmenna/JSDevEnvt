import chalk from "chalk";

console.log(chalk.green('Starting app in dev mode ...'));


/*
SELECT *
  FROM [MDM].[mdm].[VendorSourcing]

DECLARE @CustomerID INT;

	SELECT @CustomerID = P.PartyID
    FROM   mdm.Party P (NOLOCK)
    WHERE  P.PartyCode = 'ATC1' AND
		   P.PartyTypeID = 3; -- Customer

Select @CustomerID

select * from mdm.Party where PartyTypeID = 3
and PartyCode = 'ATC1'
--EXEC customer.ReadSourcingVendorSettings 'ATC1
*/
