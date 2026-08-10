---
name: I_IAMBUSINESSUSERPRICECATEGORY
description: "Iambusinessuserpricecategory"
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
  - component:BC-SRV-APS-IAM
  - lob:Basis Components
---
# I_IAMBUSINESSUSERPRICECATEGORY

**Iambusinessuserpricecategory**

| Property | Value |
|---|---|
| App Component | `BC-SRV-APS-IAM` |
| Software Component | `SAP_CLOUD` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `UserID` | ✓ | |  | `cast( bu_weight.UserID as aps_userid preserving type )` | `CHAR(12)` | User ID |
| `BusinessUserPriceCategory` | ✓ | |  | `usrprc_id` | `CHAR(30)` | IAM: User Price Category ID |
| `_Text` | | ✓ | | | | |
| `_BusinessUser` | | ✓ | | | | |
| `_IAMBusinessUserLogonDetails` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_IAMBusinessUserPriceCatText` | [0..*] |
| `_BusinessUser` | `I_BusinessUserBasic` | [1..1] |
| `_IAMBusinessUserLogonDetails` | `I_IAMBusinessUserLogonDetails` | [1..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #CHECK
@EndUserText.label: 'Business User Price Category'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.supportedCapabilities: [#CDS_MODELING_ASSOCIATION_TARGET, #CDS_MODELING_DATA_SOURCE]
@VDM.viewType: #COMPOSITE
@ObjectModel.usageType:{
  serviceQuality: #X,
  sizeCategory: #S,
  dataClass: #MIXED
}
/*+[hideWarning] { "IDS" : [ "CARDINALITY_CHECK" ]  }       UserID is not key of I_BusinessUser*/
define view entity I_IAMBusinessUserPriceCategory
  as select from aps_iam_bu_price_tag_ddl as bu_weight
    inner join   aps_iam_w_usrprc         as price_tag on bu_weight.UserRoleWeight = price_tag.weight
  association [0..*] to I_IAMBusinessUserPriceCatText as _Text                        on  _Text.BusinessUserPriceCategory = $projection.BusinessUserPriceCategory
                                                                                      and _Text.UserID                    = $projection.UserID
  association [1..1] to I_BusinessUserBasic           as _BusinessUser                on  _BusinessUser.UserID = $projection.UserID
  association [1..1] to I_IAMBusinessUserLogonDetails as _IAMBusinessUserLogonDetails on  _IAMBusinessUserLogonDetails.UserID = $projection.UserID
{
      @ObjectModel.text.association: '_Text'
  key cast( bu_weight.UserID as aps_userid preserving type ) as UserID,
  key price_tag.usrprc_id                                    as BusinessUserPriceCategory,
      _BusinessUser,
      @ObjectModel.association.type: [#TO_COMPOSITION_CHILD]
      _Text,
      _IAMBusinessUserLogonDetails
}
```
