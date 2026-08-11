---
name: I_LOANCLASSTEXT
description: "Loan Class - Text"
app_component: FS-CML
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LOANCLASSTEXT')/$value
semantic_en: "Loan Class - Text"
semantic_vi: "Loan Class - Text — CDS view giao diện dựa trên td02t."
keywords:
  - "loan"
  - "class"
  - "text"
  - "language"
  - "short"
tags:
  - FS
  - component:FS-CML
  - FS-CML
  - interface-view
---
# I_LOANCLASSTEXT

**Loan Class - Text**

| Property | Value |
|---|---|
| App Component | `FS-CML` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LOANCLASSTEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `spras` | `LANG(1)` | Language Key |
| `LoanClass` | ✓ | |  | `sdtyp` | `NUMC(3)` | Loans Class |
| `LoanClassShortText` |  | |  | `xkbez` | `CHAR(15)` | Short Name |
| `LoanClassText` |  | |  | `xlbez` | `CHAR(50)` | Name |
| `_Language` | | ✓ | | | | |
| `_LoanClass` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |
| `_LoanClass` | `I_LoanClass` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LOANCLASSTEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LOANCLASSTEXT')/$value)*

```abap
@AbapCatalog:{
    sqlViewName: 'ILCLASSTXT',
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
    representativeKey: 'LoanClass'
}
@VDM.viewType: #BASIC
@Metadata.ignorePropagatedAnnotations:true
@Analytics.dataExtraction.enabled: true
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Loan Class - Text'
define view I_LoanClassText
  as select from td02t
  association [0..1] to I_Language  as _Language  on $projection.Language = _Language.Language
  association [0..1] to I_LoanClass as _LoanClass on $projection.LoanClass = _LoanClass.LoanClass
{
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key spras as Language,
      @ObjectModel.foreignKey.association: '_LoanClass'
  key sdtyp as LoanClass,

      @Semantics.text: true
      xkbez as LoanClassShortText,

      @Semantics.text: true
      xlbez as LoanClassText,

      _Language,
      _LoanClass
}
```
