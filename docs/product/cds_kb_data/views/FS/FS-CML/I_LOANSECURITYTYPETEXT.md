---
name: I_LOANSECURITYTYPETEXT
description: "Loan Security Type - Text"
app_component: FS-CML
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LOANSECURITYTYPETEXT')/$value
semantic_en: "Loan Security Type - Text"
semantic_vi: "Loan Security Type - Text — CDS view giao diện dựa trên td16t."
keywords:
  - "loan"
  - "security"
  - "type"
  - "text"
  - "language"
  - "short"
  - "long"
tags:
  - FS
  - component:FS-CML
  - FS-CML
  - interface-view
---
# I_LOANSECURITYTYPETEXT

**Loan Security Type - Text**

| Property | Value |
|---|---|
| App Component | `FS-CML` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LOANSECURITYTYPETEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `spras` | `LANG(1)` | Language Key |
| `LoanSecurityType` | ✓ | |  | `stitart` | `NUMC(2)` | Borrower's Note Loan Security Type |
| `LoanSecurityTypeShortText` |  | |  | `xkbez` | `CHAR(15)` | Short Name |
| `LoanSecurityTypeText` |  | |  | `xmbez` | `CHAR(30)` | Normal name (30 characters) |
| `LoanSecurityTypeLongText` |  | |  | `xlbez` | `CHAR(50)` | Name |
| `_Language` | | ✓ | | | | |
| `_LoanSecurityType` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |
| `_LoanSecurityType` | `I_LoanSecurityType` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LOANSECURITYTYPETEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LOANSECURITYTYPETEXT')/$value)*

```abap
@AbapCatalog:{
    sqlViewName: 'ILSECTYPTXT',
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
    representativeKey: 'LoanSecurityType'
}
@VDM.viewType: #BASIC
@Metadata.ignorePropagatedAnnotations:true
@Analytics.dataExtraction.enabled: true
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Loan Security Type - Text'
define view I_LoanSecurityTypeText
  as select from td16t
  association [0..1] to I_Language         as _Language         on $projection.Language = _Language.Language
  association [0..1] to I_LoanSecurityType as _LoanSecurityType on $projection.LoanSecurityType = _LoanSecurityType.LoanSecurityType
{
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key spras   as Language,
      @ObjectModel.foreignKey.association: '_LoanSecurityType'
  key stitart as LoanSecurityType,

      @Semantics.text: true
      xkbez   as LoanSecurityTypeShortText,

      @Semantics.text: true
      xmbez   as LoanSecurityTypeText,

      @Semantics.text: true
      xlbez   as LoanSecurityTypeLongText,

      _Language,
      _LoanSecurityType
}
```
