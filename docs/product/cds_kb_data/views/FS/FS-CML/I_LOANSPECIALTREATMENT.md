---
name: I_LOANSPECIALTREATMENT
description: "Loan Special Treatment"
app_component: FS-CML
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LOANSPECIALTREATMENT')/$value
semantic_en: "Loan Special Treatment"
semantic_vi: "Loan Special Treatment — CDS view giao diện dựa trên td10."
keywords:
  - "loan"
  - "special"
  - "treatment"
tags:
  - FS
  - component:FS-CML
  - FS-CML
  - interface-view
---
# I_LOANSPECIALTREATMENT

**Loan Special Treatment**

| Property | Value |
|---|---|
| App Component | `FS-CML` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LOANSPECIALTREATMENT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `LoanSpecialTreatment` | ✓ | |  | `ssonder` | `NUMC(2)` | Special treatment of loan |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_LoanSpecialTreatmentText` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LOANSPECIALTREATMENT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LOANSPECIALTREATMENT')/$value)*

```abap
@AbapCatalog:{
    sqlViewName: 'ILSPLTREAT',
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
    representativeKey: 'LoanSpecialTreatment'
}
@VDM.viewType: #BASIC
@Analytics:{
    dataCategory: #DIMENSION,
    internalName: #LOCAL,
    dataExtraction.enabled: true
}
@Metadata.ignorePropagatedAnnotations: true
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Loan Special Treatment'
define view I_LoanSpecialTreatment
  as select from td10
  association [0..*] to I_LoanSpecialTreatmentText as _Text on $projection.LoanSpecialTreatment = _Text.LoanSpecialTreatment
{
      @ObjectModel.text.association: '_Text'
  key ssonder as LoanSpecialTreatment,

      _Text
}
```
