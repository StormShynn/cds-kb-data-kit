---
name: I_BASISID
description: "Basis ID"
app_component: LO-CMM-BF
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BASISID')/$value
semantic_en: "Basis ID"
semantic_vi: "Basis ID — CDS view giao diện dựa trên tbacc_bas_id."
keywords:
  - "basis"
tags:
  - LO
  - component:LO-CMM-BF
  - interface-view
  - LO-CMM
  - LO-CMM-BF
  - lob:logistics general
  - lob:sourcing & procurement
---
# I_BASISID

**Basis ID**

| Property | Value |
|---|---|
| App Component | `LO-CMM-BF` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BASISID')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BasisID` | ✓ | |  | `cast (basis_id as tbac_basis_id)` | `CHAR(18)` | Basis ID |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_BasisIDText` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BASISID')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BASISID')/$value)*

```abap
@EndUserText.label: 'Basis ID'
@Analytics.dataCategory: #DIMENSION
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck: #NOT_REQUIRED  //or #CHECK
@AbapCatalog.sqlViewName: 'IBASISID'
@ObjectModel.representativeKey: 'BasisID'
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION]
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations: true

define view I_BasisID
  as select from tbacc_bas_id

  association [0..*] to I_BasisIDText as _Text on $projection.BasisID = _Text.BasisID

{
      @ObjectModel.text.association: '_Text'

  key cast (basis_id as tbac_basis_id) as BasisID,
      _Text

}
```
