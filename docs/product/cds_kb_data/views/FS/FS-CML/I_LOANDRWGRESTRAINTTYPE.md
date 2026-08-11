---
name: I_LOANDRWGRESTRAINTTYPE
description: "Loan Drawing Restraint Type"
app_component: FS-CML
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LOANDRWGRESTRAINTTYPE')/$value
semantic_en: "Loan Drawing Restraint Type"
semantic_vi: "Loan Drawing Restraint Type — CDS view giao diện dựa trên tzv05."
keywords:
  - "loan"
  - "drawing"
  - "restraint"
  - "type"
  - "drwg"
  - "scrty"
  - "lending"
tags:
  - FS
  - component:FS-CML
  - FS-CML
  - interface-view
---
# I_LOANDRWGRESTRAINTTYPE

**Loan Drawing Restraint Type**

| Property | Value |
|---|---|
| App Component | `FS-CML` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LOANDRWGRESTRAINTTYPE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `LoanDrwgRestraintType` | ✓ | |  | `sverfu` | `NUMC(2)` | Type of Restraint on Drawing |
| `LoanDrwgIsScrtyLending` |  | |  | `sleihe` | `CHAR(1)` | Austria- Securities lending indicator |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_LoanDrwgRestraintTypeText` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LOANDRWGRESTRAINTTYPE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LOANDRWGRESTRAINTTYPE')/$value)*

```abap
@AbapCatalog:{
    sqlViewName: 'ILDRWRSTTYP',
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
    representativeKey: 'LoanDrwgRestraintType'
}
@VDM.viewType: #BASIC
@Analytics:{
    dataCategory: #DIMENSION,
    internalName: #LOCAL,
    dataExtraction.enabled: true
}
@Metadata.ignorePropagatedAnnotations: true
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Loan Drawing Restraint Type'
define view I_LoanDrwgRestraintType
  as select from tzv05
  association [0..*] to I_LoanDrwgRestraintTypeText as _Text on $projection.LoanDrwgRestraintType = _Text.LoanDrwgRestraintType
{
      @ObjectModel.text.association: '_Text'
  key sverfu as LoanDrwgRestraintType,
  
      @Semantics.booleanIndicator:true
      sleihe as LoanDrwgIsScrtyLending,

      _Text
}
```
