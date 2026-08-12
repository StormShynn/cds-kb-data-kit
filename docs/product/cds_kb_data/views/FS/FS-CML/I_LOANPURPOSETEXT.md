---
name: I_LOANPURPOSETEXT
description: "Loan Purpose - Text"
app_component: FS-CML
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LOANPURPOSETEXT')/$value
semantic_en: "Loan Purpose - Text"
semantic_vi: "Loan Purpose - Text — CDS view giao diện dựa trên td07t."
keywords:
  - "loan"
  - "purpose"
  - "text"
  - "language"
  - "product"
  - "type"
  - "short"
tags:
  - FS
  - bo:purchaseorder
  - component:FS-CML
  - FS-CML
  - interface-view
---
# I_LOANPURPOSETEXT

**Loan Purpose - Text**

| Property | Value |
|---|---|
| App Component | `FS-CML` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LOANPURPOSETEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `spras` | `LANG(1)` | Language Key |
| `LoanProductType` | ✓ | |  | `gsart` | `CHAR(3)` | Product Type |
| `LoanPurpose` | ✓ | |  | `svzweck` | `CHAR(2)` | Purpose of Loan |
| `LoanPurposeText` |  | |  | `xtext` | `CHAR(30)` | Text (30 Characters) |
| `LoanPurposeShortText` |  | |  | `xkbez` | `CHAR(15)` | Short Name |
| `LoanPurposeLongText` |  | |  | `xlbez` | `CHAR(50)` | Name |
| `_Language` | | ✓ | | | | |
| `_FinancialInstrProductType` | | ✓ | | | | |
| `_LoanPurpose` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |
| `_FinancialInstrProductType` | `I_FinancialinstrProductType` | [0..1] |
| `_LoanPurpose` | `I_LoanPurpose` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LOANPURPOSETEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LOANPURPOSETEXT')/$value)*

```abap
@AbapCatalog:{
    sqlViewName: 'ILPURPOSETXT',
    compiler.compareFilter: true,
    preserveKey: true
}
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ObjectModel:{
    dataCategory: #TEXT,
    usageType:{
        serviceQuality: 'A',
        sizeCategory: 'S',
        dataClass: 'CUSTOMIZING'
    },
    supportedCapabilities: [ #LANGUAGE_DEPENDENT_TEXT,
                             #CDS_MODELING_ASSOCIATION_TARGET,
                             #SQL_DATA_SOURCE,
                             #CDS_MODELING_DATA_SOURCE,
                             #EXTRACTION_DATA_SOURCE ],
    representativeKey: 'LoanPurpose'
}
@VDM.viewType: #BASIC
@Metadata.ignorePropagatedAnnotations:true
@Analytics.dataExtraction.enabled: true
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Loan Purpose - Text'
define view I_LoanPurposeText
  as select from td07t
  association [0..1] to I_Language                  as _Language                  on  $projection.Language = _Language.Language
  association [0..1] to I_FinancialinstrProductType as _FinancialInstrProductType on  $projection.LoanProductType = _FinancialInstrProductType.FinancialInstrumentProductType
  association [0..1] to I_LoanPurpose               as _LoanPurpose               on  $projection.LoanProductType = _LoanPurpose.LoanProductType
                                                                                  and $projection.LoanPurpose     = _LoanPurpose.LoanPurpose
{
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key spras   as Language,
      @ObjectModel.foreignKey.association: '_FinancialInstrProductType'
  key gsart   as LoanProductType,
      @ObjectModel.foreignKey.association: '_LoanPurpose'
  key svzweck as LoanPurpose,

      @Semantics.text: true
      xtext   as LoanPurposeText,

      @Semantics.text: true
      xkbez   as LoanPurposeShortText,

      @Semantics.text: true
      xlbez   as LoanPurposeLongText,

      _Language,
      _FinancialInstrProductType,
      _LoanPurpose
}
```
