---
name: I_CUSTSETTLMTLISTBANKDATA
description: "Customer Settlement List Bank Data"
app_component: LO-AB
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CUSTSETTLMTLISTBANKDATA')/$value
semantic_en: "Customer Settlement List Bank Data"
semantic_vi: "Customer Settlement List Bank Data — CDS view cơ bản dựa trên R_CustSettlmtListBankData."
keywords:
  - "customer"
  - "settlement"
  - "list"
  - "bank"
  - "data"
  - "cust"
  - "settlmt"
  - "acct"
  - "type"
  - "creation"
  - "time"
  - "date"
  - "created"
  - "user"
tags:
  - LO
  - bo:businesspartner
  - component:LO-AB
  - customer
  - interface-view
  - LO-AB
  - lob:logistics general
---
# I_CUSTSETTLMTLISTBANKDATA

**Customer Settlement List Bank Data**

| Property | Value |
|---|---|
| App Component | `LO-AB` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CUSTSETTLMTLISTBANKDATA')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CustSettlmtList` | ✓ | |  |  | `CHAR(10)` | Settlement Document: Customer Settlement List |
| `CustSettlmtListAcctType` | ✓ | |  |  | `CHAR(1)` | Account Type for Which the Bank Data Was Entered |
| `CreationTime` |  | |  |  | `TIMS(6)` | Time of Document Creation |
| `CreationDate` |  | |  |  | `DATS(8)` | Date of Document Creation |
| `CreatedByUser` |  | |  |  | `CHAR(12)` | Name of User who Created the Document |
| `LastChangeDate` |  | |  |  | `DATS(8)` | Date of Last Document Change |
| `BankAccount` |  | |  |  | `CHAR(18)` | Bank Account Number |
| `BankCountry` |  | |  |  | `CHAR(3)` | Bank Country/Region Key |
| `BankInternalID` |  | |  |  | `CHAR(15)` | Bank Internal Identification |
| `BankControlKey` |  | |  |  | `CHAR(2)` | Bank Control Key |
| `BankAccountReferenceText` |  | |  |  | `CHAR(20)` | Reference Details for Bank Details |
| `DataExchangeInstruction` |  | |  | `DataExchangeInstructionKey` | `CHAR(2)` | Data Exchange Instruction |
| `DataExchangeInstructionKey` |  | |  |  | `CHAR(2)` | Data Exchange Instruction |
| `TaxNumber1` |  | |  |  | `CHAR(16)` | Tax Number 1 |
| `TaxNumber2` |  | |  |  | `CHAR(11)` | Tax Number 2 |
| `TaxNumber3` |  | |  |  | `CHAR(18)` | Tax Number 3 |
| `TaxNumber4` |  | |  |  | `CHAR(18)` | Tax Number 4 |
| `IsNaturalPerson` |  | |  |  | `CHAR(1)` | Business Partner Is a Natural Person Under the Tax Laws |
| `VATLiability` |  | |  |  | `CHAR(1)` | Liable for VAT |
| `_CustSettlmtList` | | ✓ | | | | |
| `_Bank` | | ✓ | | | | |
| `_CustSettlmtListAcctType` | | ✓ | | | | |
| `_BankCountry` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CustSettlmtList` | `I_CustSettlmtList` | [1..1] |
| `_Bank` | `I_Bank` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CUSTSETTLMTLISTBANKDATA')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CUSTSETTLMTLISTBANKDATA')/$value)*

```abap
@AbapCatalog: {
    sqlViewName: 'IWLFCSTSMLSBKDT',
    compiler.compareFilter: true,
    preserveKey: true
    }
@EndUserText.label: 'Customer Settlement List Bank Data'
@AccessControl: {
    authorizationCheck: #PRIVILEGED_ONLY,
    personalData.blocking: #('TRANSACTIONAL_DATA') 
    }
@ObjectModel: {
    representativeKey: 'CustSettlmtListAcctType',
    modelingPattern: #ANALYTICAL_DIMENSION,
    supportedCapabilities : [ #ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE],
    usageType.dataClass:      #TRANSACTIONAL, 
    usageType.serviceQuality: #A,
    usageType.sizeCategory:   #M
    }
@ClientHandling: {
    type: #INHERITED,
    algorithm: #SESSION_VARIABLE
    }
@VDM: {
    viewType: #BASIC,
    lifecycle.contract.type: #PUBLIC_LOCAL_API
    }
@Analytics: {
    dataCategory: #DIMENSION,
    dataExtraction.enabled: false,
    internalName: #LOCAL
    }
@Metadata: {
    ignorePropagatedAnnotations: true,
    allowExtensions: true
    }

/*+[hideWarning] { "IDS" : [ "CALCULATED_FIELD_CHECK" ]  } */
define view I_CustSettlmtListBankData
  as select from R_CustSettlmtListBankData

  association [1..1] to I_CustSettlmtList as _CustSettlmtList on  $projection.CustSettlmtList = _CustSettlmtList.CustSettlmtList
  association [0..1] to I_Bank            as _Bank            on  $projection.BankCountry    = _Bank.BankCountry
                                                              and $projection.BankInternalID = _Bank.BankInternalID

{

      @ObjectModel.foreignKey.association: '_CustSettlmtList'
      @Consumption: {
        valueHelpDefinition: [{ entity: { name: 'I_CustSettlmtListStdVH', element: 'CustSettlmtList' } }]
      }
  key CustSettlmtList,
  key CustSettlmtListAcctType,
      CreationTime,
      @Semantics.systemDate.createdAt: true
      CreationDate,
      @Semantics.user.createdBy: true
      CreatedByUser,
      @Semantics.systemDate.lastChangedAt: true
      LastChangeDate,
      BankAccount,
      @ObjectModel.foreignKey.association: '_BankCountry'
      BankCountry,
      @ObjectModel.foreignKey.association: '_Bank'
      BankInternalID,
      BankControlKey,
      BankAccountReferenceText,

      @API.element.releaseState: #DEPRECATED
      @API.element.successor: 'DataExchangeInstructionKey'
      DataExchangeInstructionKey as DataExchangeInstruction,
      DataExchangeInstructionKey,

      TaxNumber1,
      TaxNumber2,
      TaxNumber3,
      TaxNumber4,
      @Semantics.booleanIndicator: true
      IsNaturalPerson,
      VATLiability,

      /* Associations */
      @ObjectModel.association.type: [#TO_COMPOSITION_PARENT, #TO_COMPOSITION_ROOT]
      _CustSettlmtList,
      _CustSettlmtListAcctType,
      _BankCountry,
      _Bank
}
```
