---
name: I_LOANDRWGRESTRAINTTYPETEXT
description: "Loan Drawing Restraint Type - Text"
app_component: FS-CML
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LOANDRWGRESTRAINTTYPETEXT')/$value
semantic_en: "Loan Drawing Restraint Type - Text"
semantic_vi: "Loan Drawing Restraint Type - Text — CDS view giao diện dựa trên tzv0e."
keywords:
  - "loan"
  - "drawing"
  - "restraint"
  - "type"
  - "text"
  - "language"
  - "drwg"
  - "short"
tags:
  - FS
  - component:FS-CML
  - FS-CML
  - interface-view
---
# I_LOANDRWGRESTRAINTTYPETEXT

**Loan Drawing Restraint Type - Text**

| Property | Value |
|---|---|
| App Component | `FS-CML` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LOANDRWGRESTRAINTTYPETEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `spras` | `LANG(1)` | Language Key |
| `LoanDrwgRestraintType` | ✓ | |  | `sverfu` | `NUMC(2)` | Type of Restraint on Drawing |
| `LoanDrwgRestraintTypeShortText` |  | |  | `xkbez` | `CHAR(15)` | Short Name |
| `LoanDrwgRestraintTypeText` |  | |  | `xlbez` | `CHAR(50)` | Name |
| `_Language` | | ✓ | | | | |
| `_LoanDrwgRestraintType` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |
| `_LoanDrwgRestraintType` | `I_LoanDrwgRestraintType` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LOANDRWGRESTRAINTTYPETEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LOANDRWGRESTRAINTTYPETEXT')/$value)*

```abap
@AbapCatalog:{
    sqlViewName: 'ILDRWRSTTYPTXT',
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
    representativeKey: 'LoanDrwgRestraintType'
}
@VDM.viewType: #BASIC
@Metadata.ignorePropagatedAnnotations:true
@Analytics.dataExtraction.enabled: true
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Loan Drawing Restraint Type - Text'
define view I_LoanDrwgRestraintTypeText
  as select from tzv0e
  association [0..1] to I_Language              as _Language              on $projection.Language = _Language.Language
  association [0..1] to I_LoanDrwgRestraintType as _LoanDrwgRestraintType on $projection.LoanDrwgRestraintType = _LoanDrwgRestraintType.LoanDrwgRestraintType
{
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key spras  as Language,
      @ObjectModel.foreignKey.association: '_LoanDrwgRestraintType'
  key sverfu as LoanDrwgRestraintType,

      @Semantics.text: true
      xkbez  as LoanDrwgRestraintTypeShortText,

      @Semantics.text: true
      xlbez  as LoanDrwgRestraintTypeText,

      _Language,
      _LoanDrwgRestraintType
}
```
