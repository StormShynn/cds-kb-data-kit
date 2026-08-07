---
name: C_BKPOABANKACCOUNTFDP
description: This CDS view is used during the creation of a PDF for powers of attorney and provides the bank accounts assigned to a power of attorney, including some basic information about the bank accounts, as well as the timestamps of the assignment and removal of a bank account to the power of attorney. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.
app_component: FIN-FSCM-CLM-BAM-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_BKPOABANKACCOUNTFDP')/$value
semantic_en: This CDS view is used during the creation of a PDF for powers of attorney and provides the bank accounts assigned to a power of attorney, including some basic information about the bank accounts, as well as the timestamps of the assignment and removal of a bank account to the power of attorney. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.
tags:
  - FIN
  - account
  - bo:bank
  - component:FIN-FSCM-CLM-BAM-2CL
  - consumption-view
  - FIN-FSCM
  - FIN-FSCM-CLM
  - FIN-FSCM-CLM-BAM
  - FIN-FSCM-CLM-BAM-2CL
  - lob:finance
  - metadata-only
---
# C_BKPOABANKACCOUNTFDP

**This CDS view is used during the creation of a PDF for powers of attorney and provides the bank accounts assigned to a power of attorney, including some basic information about the bank accounts, as well as the timestamps of the assignment and removal of a bank account to the power of attorney. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-CLM-BAM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_BKPOABANKACCOUNTFDP')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BankPowerOfAttorneyUUID` |  | |  |  | `RAW(16)` | Power of Attorney UUID |
| `BkPOABankAccountUUID` |  | |  |  | `RAW(16)` | UUID of Bank Account in POA for Banking Transactions |
| `BkPOAAuthorizationGroup` |  | |  |  | `CHAR(10)` | Authorization Group for Powers of Attorney |
| `BankAccountInternalID` |  | |  |  | `NUMC(10)` | Bank Account Technical ID |
| `BkPOABkAcctAssignmentDateTime` |  | |  |  | `DEC(15)` | Bank Account Assignment Timestamp |
| `BkPOABkAcctRemovalDateTime` |  | |  |  | `DEC(15)` | Bank Account Removal Timestamp |
| `BankAccountNumber` |  | |  |  | `CHAR(40)` | Bank Account Number |
| `Bank` |  | |  |  | `CHAR(15)` | Bank Key |
| `BankAccountCurrency` |  | |  |  | `CUKY(5)` | Currency Key |
| `BankAccountDescription` |  | |  |  | `CHAR(60)` | Account Description |
| `BankCountry` |  | |  |  | `CHAR(3)` | Bank Country/Region Key |
| `BankCountryName` |  | |  |  | `CHAR(50)` | Country/Region Name |
| `BankControlKey` |  | |  |  | `CHAR(2)` | Bank Control Key |
| `BankAccountContractType` |  | |  |  | `CHAR(2)` | Bank Account Contract Type |
| `BankAccountContractTypeName` |  | |  |  | `CHAR(60)` | Bank Account Contract Type Description |
| `BankAccountType` |  | |  |  | `CHAR(10)` | Bank Account Type ID |
| `BankAccountTypeText` |  | |  |  | `CHAR(60)` | Bank Account Type Description |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `CompanyCodeName` |  | |  |  | `CHAR(25)` | Name of Company Code or Company |
| `BankName` |  | |  |  | `CHAR(60)` | Name of Financial Institution |
