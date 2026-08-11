---
name: I_LOANSPECIALTREATMENTTEXT
description: "Loan Special Treatment - Text"
app_component: FS-CML
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LOANSPECIALTREATMENTTEXT')/$value
semantic_en: "Loan Special Treatment - Text"
semantic_vi: "Loan Special Treatment - Text — CDS view giao diện dựa trên td10t."
keywords:
  - "loan"
  - "special"
  - "treatment"
  - "text"
  - "language"
  - "short"
tags:
  - FS
  - component:FS-CML
  - FS-CML
  - interface-view
---
# I_LOANSPECIALTREATMENTTEXT

**Loan Special Treatment - Text**

| Property | Value |
|---|---|
| App Component | `FS-CML` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LOANSPECIALTREATMENTTEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `spras` | `LANG(1)` | Language Key |
| `LoanSpecialTreatment` | ✓ | |  | `ssonder` | `NUMC(2)` | Special treatment of loan |
| `LoanSpecialTreatmentShortText` |  | |  | `xktext` | `CHAR(15)` | Text (15 characters) |
| `LoanSpecialTreatmentText` |  | |  | `xltext` | `CHAR(40)` | Text, 40 Characters Long |
| `_Language` | | ✓ | | | | |
| `_LoanSpecialTreatment` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |
| `_LoanSpecialTreatment` | `I_LoanSpecialTreatment` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LOANSPECIALTREATMENTTEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LOANSPECIALTREATMENTTEXT')/$value)*

```abap
@AbapCatalog:{
    sqlViewName: 'ILSPLTREATTXT',
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
    representativeKey: 'LoanSpecialTreatment'
}
@VDM.viewType: #BASIC
@Metadata.ignorePropagatedAnnotations:true
@Analytics.dataExtraction.enabled: true
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Loan Special Treatment - Text'
define view I_LoanSpecialTreatmentText
  as select from td10t
  association [0..1] to I_Language             as _Language             on $projection.Language = _Language.Language
  association [0..1] to I_LoanSpecialTreatment as _LoanSpecialTreatment on $projection.LoanSpecialTreatment = _LoanSpecialTreatment.LoanSpecialTreatment
{
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key spras   as Language,
      @ObjectModel.foreignKey.association: '_LoanSpecialTreatment'
  key ssonder as LoanSpecialTreatment,

      @Semantics.text: true
      xktext  as LoanSpecialTreatmentShortText,

      @Semantics.text: true
      xltext  as LoanSpecialTreatmentText,

      _Language,
      _LoanSpecialTreatment
}
```
