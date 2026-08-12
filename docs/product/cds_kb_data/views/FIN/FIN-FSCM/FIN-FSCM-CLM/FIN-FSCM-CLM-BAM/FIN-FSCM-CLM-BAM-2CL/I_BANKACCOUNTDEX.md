---
name: I_BANKACCOUNTDEX
description: "This CDS view provides you with access to the data of bank accounts that have one of the following statuses: Opened at Bank Active Marked for Closing Closing Request Sent to Bank Closed at Bank Closed This CDS view provides the data to answer the following business questions: What bank accounts can I use in business transactions? How many bank accounts does a specific company own? How many bank accounts are open? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: FIN-FSCM-CLM-BAM-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BANKACCOUNTDEX')/$value
semantic_en: "This CDS view provides you with access to the data of bank accounts that have one of the following statuses: Opened at Bank Active Marked for Closing Closing Request Sent to Bank Closed at Bank Closed This CDS view provides the data to answer the following business questions: What bank accounts can I use in business transactions? How many bank accounts does a specific company own? How many bank accounts are open? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "Bank Accounts — CDS view giao diện dựa trên R_NonTechnicalBankAccount."
keywords:
  - "bank"
  - "accounts"
  - "account"
  - "internal"
  - "country"
  - "number"
  - "currency"
tags:
  - FIN
  - account
  - bo:bank
  - component:FIN-FSCM-CLM-BAM-2CL
  - FIN-FSCM
  - FIN-FSCM-CLM
  - FIN-FSCM-CLM-BAM
  - FIN-FSCM-CLM-BAM-2CL
  - interface-view
  - lob:finance
  - transaction
---
# I_BANKACCOUNTDEX

**This CDS view provides you with access to the data of bank accounts that have one of the following statuses: Opened at Bank Active Marked for Closing Closing Request Sent to Bank Closed at Bank Closed This CDS view provides the data to answer the following business questions: What bank accounts can I use in business transactions? How many bank accounts does a specific company own? How many bank accounts are open? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-CLM-BAM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BANKACCOUNTDEX')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BankAccountInternalID` | ✓ | |  |  | `NUMC(10)` | Bank Account Technical ID |
| `BankInternalID` |  | |  |  | `CHAR(15)` | Bank Key |
| `BankCountry` |  | |  |  | `CHAR(3)` | Bank Country/Region Key |
| `BankAccountNumber` |  | |  |  | `CHAR(40)` | Bank Account Number |
| `BankAccountCurrency` |  | |  |  | `CUKY(5)` | Currency Key |
| `BankControlKey` |  | |  |  | `CHAR(2)` | Bank Control Key |
| `BankAccountContractType` |  | |  |  | `CHAR(2)` | Bank Account Contract Type |
| `BankNumber` |  | |  |  | `CHAR(15)` | Bank Number |
| `SWIFTCode` |  | |  |  | `CHAR(11)` | SWIFT/BIC for International Payments |
| `BankGroup` |  | |  |  | `CHAR(10)` | Bank Group ID |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `BankAccountInternalType` |  | |  |  | `CHAR(10)` | Bank Account Type ID |
| `BankAccountCharacteristic` |  | |  |  | `CHAR(5)` | Bank Account Characteristic |
| `BankAccountStatus` |  | |  |  | `CHAR(2)` | Bank Account Status |
| `ValidityStartDate` |  | |  |  | `DATS(8)` | Bank Account Opening Date |
| `ValidityEndDate` |  | |  |  | `DATS(8)` | Bank Account Closing Date |
| `_Text` | | ✓ | | | | |
| `_Status` | | ✓ | | | | |
| `_InternalType` | | ✓ | | | | |
| `_ContractType` | | ✓ | | | | |
| `_Characteristic` | | ✓ | | | | |
| `_CompanyCode` | | ✓ | | | | |
| `_Bank` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_BankAccountText` | [0..*] |
| `_Status` | `I_BankAccountStatus_2` | [0..1] |
| `_InternalType` | `I_BankAccountInternalType` | [0..1] |
| `_ContractType` | `I_BankAccountContractType` | [0..1] |
| `_Characteristic` | `I_BankAccountCharacteristic` | [0..1] |
| `_CompanyCode` | `I_CompanyCode` | [0..1] |
| `_Bank` | `I_Bank_2` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BANKACCOUNTDEX')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BANKACCOUNTDEX')/$value)*

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'Bank Accounts'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.usageType:{
  serviceQuality: #C,
  sizeCategory: #M,
  dataClass: #MASTER
}
@AccessControl.privilegedAssociations:  [ '_Text' ]
@Analytics.internalName:#LOCAL
@Metadata.allowExtensions:true
@AccessControl.personalData.blocking: #NOT_REQUIRED
@ObjectModel.modelingPattern:#ANALYTICAL_DIMENSION
@Analytics: {
    dataCategory: #DIMENSION,
    dataExtraction.enabled:  true
}
@ObjectModel.supportedCapabilities: [ #ANALYTICAL_PROVIDER,
                                      #ANALYTICAL_DIMENSION,
                                      #SQL_DATA_SOURCE,
                                      #CDS_MODELING_DATA_SOURCE,
                                      #CDS_MODELING_ASSOCIATION_TARGET,
                                      #EXTRACTION_DATA_SOURCE ]
@VDM.viewType: #COMPOSITE
@ObjectModel.representativeKey: 'BankAccountInternalID'
@ObjectModel.sapObjectNodeType.name: 'BankAccount'

define view entity I_BankAccountDEX
  as select from R_NonTechnicalBankAccount
  association [0..*] to I_BankAccountText           as _Text           on  $projection.BankAccountInternalID = _Text.BankAccountInternalID
  association [0..1] to I_BankAccountStatus_2       as _Status         on  $projection.BankAccountStatus = _Status.BankAccountStatus
  association [0..1] to I_BankAccountInternalType   as _InternalType   on  $projection.BankAccountInternalType = _InternalType.BankAccountInternalType
  association [0..1] to I_BankAccountContractType   as _ContractType   on  $projection.BankAccountContractType = _ContractType.BankAccountContractType
  association [0..1] to I_BankAccountCharacteristic as _Characteristic on  $projection.BankAccountCharacteristic = _Characteristic.BankAccountCharacteristic
  association [0..1] to I_CompanyCode               as _CompanyCode    on  $projection.CompanyCode = _CompanyCode.CompanyCode
  association [0..1] to I_Bank_2                    as _Bank           on  $projection.BankCountry    = _Bank.BankCountry
                                                                       and $projection.BankInternalID = _Bank.BankInternalID
{
      @ObjectModel.text.association: '_Text'
  key BankAccountInternalID,
      BankInternalID,
      BankCountry,
      BankAccountNumber,
      BankAccountCurrency,
      BankControlKey,
      @ObjectModel.foreignKey.association: '_ContractType'
      BankAccountContractType,
      BankNumber,
      SWIFTCode,
      BankGroup,
      @ObjectModel.foreignKey.association: '_CompanyCode'
      CompanyCode,
      @ObjectModel.foreignKey.association: '_InternalType'
      BankAccountInternalType,
      @ObjectModel.foreignKey.association: '_Characteristic'
      BankAccountCharacteristic,
      @ObjectModel.foreignKey.association: '_Status'
      BankAccountStatus,
      ValidityStartDate,
      ValidityEndDate,
      _Text,
      _Status,
      _InternalType,
      _ContractType,
      _Characteristic,
      _CompanyCode,
      _Bank
}
```
