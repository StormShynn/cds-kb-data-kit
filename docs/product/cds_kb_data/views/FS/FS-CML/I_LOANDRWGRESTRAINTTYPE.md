---
name: I_LOANDRWGRESTRAINTTYPE
description: "Loan Drawing Restraint Type"
app_component: FS-CML
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
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
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
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
