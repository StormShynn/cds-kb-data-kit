---
name: I_IAMBUSINESSROLEPRICECATTEXT
description: Iambusinessrolepricecattext
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
# I_IAMBUSINESSROLEPRICECATTEXT

**Iambusinessrolepricecattext**

| Property | Value |
|---|---|
| App Component | `BC-SRV-APS-IAM` |
| Software Component | `SAP_CLOUD` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `Language` | `pct.langu` |
| key `BusinessRoleUUID` | `pc.BusinessRoleUUID` |
| key `BusinessRolePriceCategory` | `pct.usrprc_id` |
| `BusinessRole` | `pc.BusinessRole` |
| `BusinessRoleGroup` | `pc.BusinessRoleGroup` |
| `BusinessRolePriceCategoryName` | `pct.text` |
| `_BusinessRolePriceCategory` | *Association* |
| `_Language` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_BusinessRolePriceCategory` | `I_IAMBusinessRolePriceCategory` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Business Role Price Category Text'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.supportedCapabilities: [#CDS_MODELING_ASSOCIATION_TARGET, #CDS_MODELING_DATA_SOURCE]
@VDM.viewType: #BASIC
@ObjectModel.usageType:{
  serviceQuality: #X,
  sizeCategory: #S,
  dataClass: #MIXED
}
define view entity I_IAMBusinessRolePriceCatText
  as select from I_IAMBusinessRolePriceCategory as pc
    inner join   aps_iam_w_usrprt               as pct on pct.usrprc_id = pc.BusinessRolePriceCategory
  association to I_IAMBusinessRolePriceCategory as _BusinessRolePriceCategory on  $projection.BusinessRolePriceCategory = _BusinessRolePriceCategory.BusinessRolePriceCategory
                                                                              and $projection.BusinessRoleUUID          = _BusinessRolePriceCategory.BusinessRoleUUID
  association to I_Language                     as _Language                  on  $projection.Language = _Language.Language

{
  key pct.langu     as Language,
  key pc.BusinessRoleUUID,
  
  @EndUserText:{ label:'Business Role Price Category', quickInfo:'Price Category' }
  key pct.usrprc_id as BusinessRolePriceCategory,
      pc.BusinessRole,
      pc.BusinessRoleGroup,
      pct.text      as BusinessRolePriceCategoryName,
      _Language,            
      _BusinessRolePriceCategory
}
```
