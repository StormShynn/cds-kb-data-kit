---
name: I_LOANCONDITIONHEADERTYPE
description: "Loan Condition Header Type"
app_component: FS-CML
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LOANCONDITIONHEADERTYPE')/$value
semantic_en: "Loan Condition Header Type"
semantic_vi: "Loan Condition Header Type — CDS view giao diện dựa trên dd07l."
keywords:
  - "loan"
  - "condition"
  - "header"
  - "type"
tags:
  - FS
  - component:FS-CML
  - FS-CML
  - interface-view
---
# I_LOANCONDITIONHEADERTYPE

**Loan Condition Header Type**

| Property | Value |
|---|---|
| App Component | `FS-CML` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LOANCONDITIONHEADERTYPE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `LoanConditionHeaderType` | ✓ | |  | `cast(substring(domvalue_l, 1, 2) as skokoart )` | `NUMC(2)` | Type of Condition Header |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_LoanConditionHeaderTypeText` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LOANCONDITIONHEADERTYPE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LOANCONDITIONHEADERTYPE')/$value)*

```abap
@AbapCatalog:{
    sqlViewName: 'ILCNDHDRTYP',
    compiler.compareFilter: true,
    preserveKey: true
}
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ObjectModel:{
    usageType:{
        serviceQuality: 'A',
        sizeCategory: 'S',
        dataClass: 'CUSTOMIZING'
    },
    supportedCapabilities: [ #ANALYTICAL_DIMENSION,
                             #CDS_MODELING_ASSOCIATION_TARGET,
                             #SQL_DATA_SOURCE,
                             #CDS_MODELING_DATA_SOURCE,
                             #EXTRACTION_DATA_SOURCE ],
    representativeKey: 'LoanConditionHeaderType'
}
@VDM.viewType: #BASIC
@Analytics:{
    dataCategory: #DIMENSION,
    internalName: #LOCAL,
    dataExtraction.enabled: true
}
@Metadata.ignorePropagatedAnnotations: true
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Loan Condition Header Type'
define view I_LoanConditionHeaderType
  as select from dd07l
  association [0..*] to I_LoanConditionHeaderTypeText as _Text on $projection.LoanConditionHeaderType = _Text.LoanConditionHeaderType
{
      @ObjectModel.text.association: '_Text'
  key cast(substring(domvalue_l, 1, 2) as skokoart ) as LoanConditionHeaderType,

      _Text
}
where
      dd07l.domname  = 'SKOKOART'
  and dd07l.as4local = 'A'
```
