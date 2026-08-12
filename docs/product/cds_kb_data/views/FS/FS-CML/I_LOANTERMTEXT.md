---
name: I_LOANTERMTEXT
description: "Loan Term - Text"
app_component: FS-CML
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LOANTERMTEXT')/$value
semantic_en: "Loan Term - Text"
semantic_vi: "Loan Term - Text — CDS view giao diện dựa trên td09t."
keywords:
  - "loan"
  - "term"
  - "text"
  - "language"
  - "short"
tags:
  - FS
  - component:FS-CML
  - FS-CML
  - interface-view
---
# I_LOANTERMTEXT

**Loan Term - Text**

| Property | Value |
|---|---|
| App Component | `FS-CML` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LOANTERMTEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `spras` | `LANG(1)` | Language Key |
| `LoanTerm` | ✓ | |  | `sfrist` | `NUMC(2)` | Loan Term |
| `LoanTermShortText` |  | |  | `xktext` | `CHAR(15)` | Text (15 characters) |
| `LoanTermText` |  | |  | `xltext` | `CHAR(40)` | Text, 40 Characters Long |
| `_Language` | | ✓ | | | | |
| `_LoanTerm` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |
| `_LoanTerm` | `I_LoanTerm` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LOANTERMTEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LOANTERMTEXT')/$value)*

```abap
@AbapCatalog:{
    sqlViewName: 'ILTERMTXT',
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
    representativeKey: 'LoanTerm'
}
@VDM.viewType: #BASIC
@Metadata.ignorePropagatedAnnotations:true
@Analytics.dataExtraction.enabled: true
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Loan Term - Text'
define view I_LoanTermText
  as select from td09t
  association [0..1] to I_Language as _Language on $projection.Language = _Language.Language
  association [0..1] to I_LoanTerm as _LoanTerm on $projection.LoanTerm = _LoanTerm.LoanTerm
{
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key spras  as Language,
      @ObjectModel.foreignKey.association: '_LoanTerm'
  key sfrist as LoanTerm,

      @Semantics.text: true
      xktext as LoanTermShortText,

      @Semantics.text: true
      xltext as LoanTermText,

      _Language,
      _LoanTerm
}
```
