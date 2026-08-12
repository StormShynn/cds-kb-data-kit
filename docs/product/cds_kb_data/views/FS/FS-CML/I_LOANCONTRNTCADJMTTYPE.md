---
name: I_LOANCONTRNTCADJMTTYPE
description: "Loan Contract Notice Adjustment Type"
app_component: FS-CML
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LOANCONTRNTCADJMTTYPE')/$value
semantic_en: "Loan Contract Notice Adjustment Type"
semantic_vi: "Loan Contract Notice Adjustment Type — CDS view giao diện dựa trên dd07l."
keywords:
  - "loan"
  - "contract"
  - "notice"
  - "adjustment"
  - "type"
  - "contr"
  - "adjmt"
tags:
  - FS
  - component:FS-CML
  - contract
  - FS-CML
  - interface-view
---
# I_LOANCONTRNTCADJMTTYPE

**Loan Contract Notice Adjustment Type**

| Property | Value |
|---|---|
| App Component | `FS-CML` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LOANCONTRNTCADJMTTYPE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `LoanContrNtcAdjmtType` | ✓ | |  | `cast(substring(domvalue_l, 1, 2) as vvskueartb)` | `NUMC(2)` | Adjustment Indicator for Notice Fields |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_LoanContrNtcAdjmtTypeText` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LOANCONTRNTCADJMTTYPE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LOANCONTRNTCADJMTTYPE')/$value)*

```abap
@AbapCatalog:{
    sqlViewName: 'ILCNTCADJTYP',
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
    representativeKey: 'LoanContrNtcAdjmtType'
}
@VDM.viewType: #BASIC
@Analytics:{
    dataCategory: #DIMENSION,
    internalName: #LOCAL,
    dataExtraction.enabled: true
}
@Metadata.ignorePropagatedAnnotations: true
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Loan Contract Notice Adjustment Type'
define view I_LoanContrNtcAdjmtType
  as select from dd07l
  association [0..*] to I_LoanContrNtcAdjmtTypeText as _Text on $projection.LoanContrNtcAdjmtType = _Text.LoanContrNtcAdjmtType
{
      @ObjectModel.text.association: '_Text'
  key cast(substring(domvalue_l, 1, 2) as vvskueartb) as LoanContrNtcAdjmtType,

      _Text
}
where
      dd07l.domname  = 'VVSKUEARTB'
  and dd07l.as4local = 'A'
```
