---
name: I_LOANCORRESPNCROLETYPETEXT
description: "Loan Correspondence Role Type - Text"
app_component: FS-CML
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LOANCORRESPNCROLETYPETEXT')/$value
semantic_en: "Loan Correspondence Role Type - Text"
semantic_vi: "Loan Correspondence Role Type - Text — CDS view giao diện dựa trên tdpz6t."
keywords:
  - "loan"
  - "correspondence"
  - "role"
  - "type"
  - "text"
  - "language"
  - "correspnc"
tags:
  - FS
  - bo:purchaseorder
  - component:FS-CML
  - FS-CML
  - interface-view
---
# I_LOANCORRESPNCROLETYPETEXT

**Loan Correspondence Role Type - Text**

| Property | Value |
|---|---|
| App Component | `FS-CML` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LOANCORRESPNCROLETYPETEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `spras` | `LANG(1)` | Language Key |
| `LoanCorrespncRoleType` | ✓ | |  | `role` | `CHAR(4)` | CML Correspondence Role Type of Recipient |
| `LoanCorrespncRoleTypeText` |  | |  | `xrole` | `CHAR(30)` | Description of Correspondence Role Type |
| `_Language` | | ✓ | | | | |
| `_LoanCorrespncRoleType` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |
| `_LoanCorrespncRoleType` | `I_LoanCorrespncRoleType` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LOANCORRESPNCROLETYPETEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LOANCORRESPNCROLETYPETEXT')/$value)*

```abap
@AbapCatalog:{
    sqlViewName: 'ILCORROLETYPTXT',
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
    representativeKey: 'LoanCorrespncRoleType'
}
@VDM.viewType: #BASIC
@Metadata.ignorePropagatedAnnotations:true
@Analytics.dataExtraction.enabled: true
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Loan Correspondence Role Type - Text'
define view I_LoanCorrespncRoleTypeText
  as select from tdpz6t
  association [0..1] to I_Language              as _Language              on $projection.Language = _Language.Language
  association [0..1] to I_LoanCorrespncRoleType as _LoanCorrespncRoleType on $projection.LoanCorrespncRoleType = _LoanCorrespncRoleType.LoanCorrespncRoleType
{
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key spras as Language,
      @ObjectModel.foreignKey.association: '_LoanCorrespncRoleType'
  key role  as LoanCorrespncRoleType,

      @Semantics.text: true
      xrole as LoanCorrespncRoleTypeText,

      _Language,
      _LoanCorrespncRoleType
}
```
