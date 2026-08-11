---
name: I_LOANTYPETEXT
description: "Loan Type - Text"
app_component: FS-CML
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LOANTYPETEXT')/$value
semantic_en: "Loan Type - Text"
semantic_vi: "Loan Type - Text — CDS view giao diện dựa trên td03t."
keywords:
  - "loan"
  - "type"
  - "text"
  - "language"
  - "short"
tags:
  - FS
  - component:FS-CML
  - FS-CML
  - interface-view
---
# I_LOANTYPETEXT

**Loan Type - Text**

| Property | Value |
|---|---|
| App Component | `FS-CML` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LOANTYPETEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `spras` | `LANG(1)` | Language Key |
| `LoanType` | ✓ | |  | `stitel` | `NUMC(3)` | Loan Type Indicator |
| `LoanTypeShortText` |  | |  | `xkbez` | `CHAR(15)` | Short Name |
| `LoanTypeText` |  | |  | `xlbez` | `CHAR(50)` | Name |
| `_Language` | | ✓ | | | | |
| `_LoanType` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |
| `_LoanType` | `I_LoanType` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LOANTYPETEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LOANTYPETEXT')/$value)*

```abap
@AbapCatalog:{
    sqlViewName: 'ILTYPTXT',
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
    representativeKey: 'LoanType'
}
@VDM.viewType: #BASIC
@Metadata.ignorePropagatedAnnotations:true
@Analytics.dataExtraction.enabled: true
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Loan Type - Text'
define view I_LoanTypeText
  as select from td03t
  association [0..1] to I_Language as _Language on $projection.Language = _Language.Language
  association [0..1] to I_LoanType as _LoanType on $projection.LoanType = _LoanType.LoanType
{
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key spras  as Language,
      @ObjectModel.foreignKey.association: '_LoanType'
  key stitel as LoanType,

      @Semantics.text: true
      xkbez  as LoanTypeShortText,

      @Semantics.text: true
      xlbez  as LoanTypeText,

      _Language,
      _LoanType
}
```
