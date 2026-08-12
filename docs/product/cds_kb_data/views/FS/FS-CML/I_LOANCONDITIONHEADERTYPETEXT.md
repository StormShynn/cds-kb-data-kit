---
name: I_LOANCONDITIONHEADERTYPETEXT
description: "Loan Condition Header Type - Text"
app_component: FS-CML
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LOANCONDITIONHEADERTYPETEXT')/$value
semantic_en: "Loan Condition Header Type - Text"
semantic_vi: "Loan Condition Header Type - Text — CDS view giao diện dựa trên dd07t."
keywords:
  - "loan"
  - "condition"
  - "header"
  - "type"
  - "text"
  - "language"
tags:
  - FS
  - component:FS-CML
  - FS-CML
  - interface-view
---
# I_LOANCONDITIONHEADERTYPETEXT

**Loan Condition Header Type - Text**

| Property | Value |
|---|---|
| App Component | `FS-CML` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LOANCONDITIONHEADERTYPETEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `ddlanguage` | `LANG(1)` | Language Key |
| `LoanConditionHeaderType` | ✓ | |  | `cast(substring(domvalue_l, 1, 2) as skokoart)` | `NUMC(2)` | Type of Condition Header |
| `LoanConditionHeaderTypeText` |  | |  | `ddtext` | `CHAR(60)` | Short Text for Fixed Values |
| `_Language` | | ✓ | | | | |
| `_LoanConditionHeaderType` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |
| `_LoanConditionHeaderType` | `I_LoanConditionHeaderType` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LOANCONDITIONHEADERTYPETEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LOANCONDITIONHEADERTYPETEXT')/$value)*

```abap
@AbapCatalog:{
    sqlViewName: 'ILCNDHDRTYPTXT',
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
    representativeKey: 'LoanConditionHeaderType'
}
@VDM.viewType: #BASIC
@Metadata.ignorePropagatedAnnotations:true
@Analytics.dataExtraction.enabled: true
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Loan Condition Header Type - Text'
define view I_LoanConditionHeaderTypeText
  as select from dd07t
  association [0..1] to I_Language                as _Language                on $projection.Language = _Language.Language
  association [0..1] to I_LoanConditionHeaderType as _LoanConditionHeaderType on $projection.LoanConditionHeaderType = _LoanConditionHeaderType.LoanConditionHeaderType
{
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key ddlanguage                                    as Language,
      @ObjectModel.foreignKey.association: '_LoanConditionHeaderType'
  key cast(substring(domvalue_l, 1, 2) as skokoart) as LoanConditionHeaderType,

      @Semantics.text: true
      ddtext                                        as LoanConditionHeaderTypeText,

      _Language,
      _LoanConditionHeaderType
}
where
      domname  = 'SKOKOART'
  and as4local = 'A'
```
