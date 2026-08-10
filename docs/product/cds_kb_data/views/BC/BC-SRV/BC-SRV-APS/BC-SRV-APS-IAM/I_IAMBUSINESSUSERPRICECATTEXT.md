---
name: I_IAMBUSINESSUSERPRICECATTEXT
description: "Iambusinessuserpricecattext"
app_component: BC-SRV-APS-IAM
software_component: SAP_CLOUD
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - BC
  - BC-SRV
  - BC-SRV-APS
  - interface-view
  - text-view
  - text
  - component:BC-SRV-APS-IAM
  - lob:Basis Components
---
# I_IAMBUSINESSUSERPRICECATTEXT

**Iambusinessuserpricecattext**

| Property | Value |
|---|---|
| App Component | `BC-SRV-APS-IAM` |
| Software Component | `SAP_CLOUD` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `langu` | `LANG(1)` | Language Key |
| `UserID` | ✓ | |  | `cast( pc.UserID as aps_userid preserving type )` | `CHAR(12)` | User ID |
| `BusinessUserPriceCategory` | ✓ | |  | `usrprc_id` | `CHAR(30)` | IAM: User Price Category ID |
| `BusinessUserPriceCategoryName` |  | |  | `text` | `CHAR(80)` | IAM: Description |
| `_BusinessUserPriceCategory` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_BusinessUserPriceCategory` | `I_IAMBusinessUserPriceCategory` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #CHECK
@EndUserText.label: 'Business User Price Category Text'
@Metadata.ignorePropagatedAnnotations: true
@VDM.viewType: #COMPOSITE
@ObjectModel.supportedCapabilities: [#CDS_MODELING_ASSOCIATION_TARGET, #CDS_MODELING_DATA_SOURCE]
@ObjectModel.usageType:{
  serviceQuality: #X,
  sizeCategory: #S,
  dataClass: #MIXED
}
define view entity I_IAMBusinessUserPriceCatText
  as select from I_IAMBusinessUserPriceCategory as pc
    inner join   aps_iam_w_usrprt               as pct on pct.usrprc_id = pc.BusinessUserPriceCategory
  association to I_IAMBusinessUserPriceCategory as _BusinessUserPriceCategory on  $projection.BusinessUserPriceCategory = _BusinessUserPriceCategory.BusinessUserPriceCategory
                                                                              and $projection.UserID                    = _BusinessUserPriceCategory.UserID
  association to I_Language                     as _Language                  on  $projection.Language = _Language.Language

{
  key pct.langu     as Language,
  key cast( pc.UserID as aps_userid preserving type ) as UserID,  
  key pct.usrprc_id as BusinessUserPriceCategory,
      pct.text      as BusinessUserPriceCategoryName,
      _Language,
      _BusinessUserPriceCategory
}
```
