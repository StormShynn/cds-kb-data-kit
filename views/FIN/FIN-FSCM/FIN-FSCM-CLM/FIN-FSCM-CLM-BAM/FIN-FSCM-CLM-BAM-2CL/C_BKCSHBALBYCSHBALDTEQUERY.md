---
name: C_BKCSHBALBYCSHBALDTEQUERY
description: This CDS view retrieves bank account balances of different types for the specified key date. You can use this query to create models and stories on SAP Analytics Cloud. For more information about how to consume queries to create your own models and stories, see Consume Queries on SAC to Create Models and Stories. This CDS view provides the data to answer the following business questions: What are the closing ledger balance, closing available balance, closing value date balance, adjusted closing value date balance, and the current available balance of a bank account on a specific date? Are there any differences between different balance types, for example, closing ledger balance and closing value date balance? What is the aggregated balance of a specific type of bank account, for example, by bank account type, bank account contract type, or bank account characteristic? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.
app_component: FIN-FSCM-CLM-BAM-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_BKCSHBALBYCSHBALDTEQUERY')/$value
semantic_en: This CDS view retrieves bank account balances of different types for the specified key date. You can use this query to create models and stories on SAP Analytics Cloud. For more information about how to consume queries to create your own models and stories, see Consume Queries on SAC to Create Models and Stories. This CDS view provides the data to answer the following business questions: What are the closing ledger balance, closing available balance, closing value date balance, adjusted closing value date balance, and the current available balance of a bank account on a specific date? Are there any differences between different balance types, for example, closing ledger balance and closing value date balance? What is the aggregated balance of a specific type of bank account, for example, by bank account type, bank account contract type, or bank account characteristic? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.
tags:
  - FIN
  - account
  - bo:bank
  - component:FIN-FSCM-CLM-BAM-2CL
  - consumption-view
  - contract
  - FIN-FSCM
  - FIN-FSCM-CLM
  - FIN-FSCM-CLM-BAM
  - FIN-FSCM-CLM-BAM-2CL
  - lob:finance
  - metadata-only
---
# C_BKCSHBALBYCSHBALDTEQUERY

**This CDS view retrieves bank account balances of different types for the specified key date. You can use this query to create models and stories on SAP Analytics Cloud. For more information about how to consume queries to create your own models and stories, see Consume Queries on SAC to Create Models and Stories. This CDS view provides the data to answer the following business questions: What are the closing ledger balance, closing available balance, closing value date balance, adjusted closing value date balance, and the current available balance of a bank account on a specific date? Are there any differences between different balance types, for example, closing ledger balance and closing value date balance? What is the aggregated balance of a specific type of bank account, for example, by bank account type, bank account contract type, or bank account characteristic? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-CLM-BAM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_BKCSHBALBYCSHBALDTEQUERY')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `BankCountry` |  | |  |  | `CHAR(3)` | Bank Country/Region Key |
| `Bank` |  | |  |  | `CHAR(15)` | Bank Key |
| `BankName` |  | |  |  | `CHAR(60)` | Name of Financial Institution |
| `SWIFTCode` |  | |  |  | `CHAR(11)` | SWIFT/BIC for International Payments |
| `BankAccountType` |  | |  |  | `CHAR(10)` | Bank Account Type ID |
| `BankAccountCharacteristic` |  | |  |  | `CHAR(5)` | Bank Account Characteristic |
| `BankAccountNumber` |  | |  |  | `CHAR(40)` | Bank Account Number |
| `CashBalanceType` |  | |  |  | `CHAR(1)` | Cash Balance Type |
| `CashBalanceDate` |  | |  |  | `DATS(8)` | Transaction Date |
| `TransactionDate` |  | |  |  | `DATS(8)` | Key Date |
| `CashBalanceAmount` |  | |  |  | `CURR(23)` | Balance Amount |
| `CashBalanceCurrency` |  | |  |  | `CUKY(5)` | Balance Currency |
| `DisplayCurrency` |  | |  |  | `CUKY(5)` | Display Currency |
| `CalculatedAmountInDspCrcy` |  | |  |  | `CURR(19)` | Net Value in Display Currency |
| `BankAccountStatus` |  | |  |  | `CHAR(2)` | Bank Account Status |
| `BankAccountContractType` |  | |  |  | `CHAR(2)` | Bank Account Contract Type |
| `BankStatementShortID` |  | |  |  | `NUMC(8)` | Bank Statement Short Key |
| `BankAccountInternalID` |  | |  |  | `NUMC(10)` | Bank Account Technical ID |
| `BankAccountDescription` |  | |  |  | `CHAR(60)` | Account Description |
