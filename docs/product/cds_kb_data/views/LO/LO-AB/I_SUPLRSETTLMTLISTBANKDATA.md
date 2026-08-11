---
name: I_SUPLRSETTLMTLISTBANKDATA
description: "Supplier Settlement List Bank Data"
app_component: LO-AB
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SUPLRSETTLMTLISTBANKDATA')/$value
semantic_en: "Supplier Settlement List Bank Data"
semantic_vi: "Supplier Settlement List Bank Data — CDS view cơ bản dựa trên R_SuplrSettlmtListBankData."
keywords:
  - "supplier"
  - "settlement"
  - "list"
  - "bank"
  - "data"
  - "suplr"
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
  - component:LO-AB
  - interface-view
  - LO-AB
  - lob:logistics general
  - supplier
---
# I_SUPLRSETTLMTLISTBANKDATA

**Supplier Settlement List Bank Data**

| Property | Value |
|---|---|
| App Component | `LO-AB` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SUPLRSETTLMTLISTBANKDATA')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SuplrSettlmtList` | ✓ | |  |  | `CHAR(10)` | Supplier Settlement List |
| `SuplrSettlmtListAcctType` | ✓ | |  |  | `CHAR(1)` | Account Type for Which the Bank Data Was Entered |
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
| `_SuplrSettlmtList` | | ✓ | | | | |
| `_Bank` | | ✓ | | | | |
| `_SuplrSettlmtListAcctType` | | ✓ | | | | |
| `_BankCountry` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_SuplrSettlmtList` | `I_SuplrSettlmtList` | [1..1] |
| `_Bank` | `I_Bank` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SUPLRSETTLMTLISTBANKDATA')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SUPLRSETTLMTLISTBANKDATA')/$value)*

```abap
@EndUserText.label: 'Supplier Settlement List Bank Data'
@VDM: {
    viewType: #BASIC,
    lifecycle.contract.type: #PUBLIC_LOCAL_API
    }
@AccessControl: {
    authorizationCheck: #PRIVILEGED_ONLY,
    personalData.blocking: #('TRANSACTIONAL_DATA')
    }
@ObjectModel: {
    representativeKey: 'SuplrSettlmtListAcctType',
    modelingPattern: #ANALYTICAL_DIMENSION,
    supportedCapabilities : [ #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #ANALYTICAL_DIMENSION],
    usageType: {
      dataClass:      #TRANSACTIONAL,
      serviceQuality: #A,
      sizeCategory:   #M
      }
    }
@Analytics: {
    dataCategory: #DIMENSION,
    dataExtraction.enabled: false,
    internalName: #LOCAL
    }
@Analytics.technicalName: 'IWLFSPLSMLSBKDT'
@Metadata: {
    ignorePropagatedAnnotations: true,
    allowExtensions: true
    }

/*+[hideWarning] { "IDS" : [ "CALCULATED_FIELD_CHECK" ]  } */
define view entity I_SuplrSettlmtListBankData
  as select from R_SuplrSettlmtListBankData

  association [1..1] to I_SuplrSettlmtList as _SuplrSettlmtList on  $projection.SuplrSettlmtList = _SuplrSettlmtList.SuplrSettlmtList
  association [0..1] to I_Bank             as _Bank             on  $projection.BankCountry    = _Bank.BankCountry
                                                                and $projection.BankInternalID = _Bank.BankInternalID

{
      @ObjectModel.foreignKey.association: '_SuplrSettlmtList'
      @Consumption: {
        valueHelpDefinition: [{ entity: { name: 'I_SuplrSettlmtListStdVH', element: 'SuplrSettlmtList' } }]
      }
  key SuplrSettlmtList,
  key SuplrSettlmtListAcctType,
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
      //        @Semantics.booleanIndicator
      IsNaturalPerson,
      VATLiability,

      // associations:
      @ObjectModel.association.type: [#TO_COMPOSITION_PARENT, #TO_COMPOSITION_ROOT]
      _SuplrSettlmtList,
      _SuplrSettlmtListAcctType,
      _BankCountry,
      _Bank

}
```
