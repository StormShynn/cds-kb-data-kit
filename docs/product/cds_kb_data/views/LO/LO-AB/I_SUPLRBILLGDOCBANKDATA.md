---
name: I_SUPLRBILLGDOCBANKDATA
description: "Supplier Billing Document Bank Data"
app_component: LO-AB
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SUPLRBILLGDOCBANKDATA')/$value
semantic_en: "Supplier Billing Document Bank Data"
semantic_vi: "Supplier Billing Document Bank Data — CDS view cơ bản dựa trên R_SuplrBillgDocBankData."
keywords:
  - "supplier"
  - "billing"
  - "document"
  - "bank"
  - "data"
  - "suplr"
  - "billg"
  - "acct"
  - "type"
  - "creation"
  - "time"
  - "date"
  - "created"
  - "user"
tags:
  - LO
  - billing
  - bo:billingdocument
  - component:LO-AB
  - document
  - interface-view
  - LO-AB
  - lob:logistics general
  - supplier
---
# I_SUPLRBILLGDOCBANKDATA

**Supplier Billing Document Bank Data**

| Property | Value |
|---|---|
| App Component | `LO-AB` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SUPLRBILLGDOCBANKDATA')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SuplrBillgDoc` | ✓ | |  |  | `CHAR(10)` | Supplier Billing Document Number |
| `SuplrBillgDocAcctType` | ✓ | |  |  | `CHAR(1)` | Account Type for Which the Bank Data Was Entered |
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
| `_SuplrBillgDoc` | | ✓ | | | | |
| `_Bank` | | ✓ | | | | |
| `_SuplrBillgDocAcctType` | | ✓ | | | | |
| `_BankCountry` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_SuplrBillgDoc` | `I_SuplrBillgDoc` | [1..1] |
| `_Bank` | `I_Bank` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SUPLRBILLGDOCBANKDATA')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SUPLRBILLGDOCBANKDATA')/$value)*

```abap
@VDM: {
  viewType: #BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@AccessControl: {
  authorizationCheck: #PRIVILEGED_ONLY,
  personalData.blocking: #('TRANSACTIONAL_DATA')
}

@ObjectModel: {
   representativeKey: 'SuplrBillgDocAcctType',
   modelingPattern: #ANALYTICAL_DIMENSION,
   supportedCapabilities : [#CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #ANALYTICAL_DIMENSION],
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
@Analytics.technicalName: 'IWLFSPBDOCBKDATA'
@EndUserText.label: 'Supplier Billing Document Bank Data'
@Metadata.ignorePropagatedAnnotations: true
@Metadata.allowExtensions:true

define view entity I_SuplrBillgDocBankData
  as select from R_SuplrBillgDocBankData

  association [1..1] to I_SuplrBillgDoc as _SuplrBillgDoc on  $projection.SuplrBillgDoc = _SuplrBillgDoc.SuplrBillgDoc
  association [0..1] to I_Bank          as _Bank          on  $projection.BankCountry    = _Bank.BankCountry
                                                          and $projection.BankInternalID = _Bank.BankInternalID

{
      @ObjectModel.foreignKey.association: '_SuplrBillgDoc'
      @Consumption: {
        valueHelpDefinition: [{ entity: { name: 'I_SuplrBillgDocStdVH', element: 'SuplrBillgDoc' } }]
      }
  key SuplrBillgDoc,
  key SuplrBillgDocAcctType,
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
      IsNaturalPerson,
      VATLiability,

      /* Associations */
      @ObjectModel.association.type: [#TO_COMPOSITION_PARENT, #TO_COMPOSITION_ROOT]
      _SuplrBillgDoc,
      _SuplrBillgDocAcctType,
      _BankCountry,
      _Bank
}
```
