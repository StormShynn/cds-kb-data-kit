---
name: I_LOANCORRESPNCROLETYPE
description: "Loan Correspondence Role Type"
app_component: FS-CML
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LOANCORRESPNCROLETYPE')/$value
semantic_en: "Loan Correspondence Role Type"
semantic_vi: "Loan Correspondence Role Type — CDS view giao diện dựa trên tdpz6."
keywords:
  - "loan"
  - "correspondence"
  - "role"
  - "type"
  - "correspnc"
  - "category"
tags:
  - FS
  - bo:purchaseorder
  - component:FS-CML
  - FS-CML
  - interface-view
---
# I_LOANCORRESPNCROLETYPE

**Loan Correspondence Role Type**

| Property | Value |
|---|---|
| App Component | `FS-CML` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LOANCORRESPNCROLETYPE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `LoanCorrespncRoleType` | ✓ | |  | `role` | `CHAR(4)` | CML Correspondence Role Type of Recipient |
| `RoleCategory` |  | |  | `rlcat` | `CHAR(6)` | BP Role Category |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_LoanCorrespncRoleTypeText` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LOANCORRESPNCROLETYPE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LOANCORRESPNCROLETYPE')/$value)*

```abap
@AbapCatalog:{
    sqlViewName: 'ILCORROLETYP',
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
    representativeKey: 'LoanCorrespncRoleType'
}
@VDM.viewType: #BASIC
@Analytics:{
    dataCategory: #DIMENSION,
    internalName: #LOCAL,
    dataExtraction.enabled: true
}
@Metadata.ignorePropagatedAnnotations: true
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Loan Correspondence Role Type'
define view I_LoanCorrespncRoleType
  as select from tdpz6
  association [0..*] to I_LoanCorrespncRoleTypeText as _Text on $projection.LoanCorrespncRoleType = _Text.LoanCorrespncRoleType
{
      @ObjectModel.text.association: '_Text'
  key role  as LoanCorrespncRoleType,

      rlcat as RoleCategory,

      _Text
}
```
