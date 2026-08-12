---
name: I_IAMBUSINESSROLEPRICECATEGORY
description: "Iambusinessrolepricecategory"
app_component: BC-SRV-APS-IAM
software_component: SAP_CLOUD
release_state: released
dev_ext_status: released
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
# I_IAMBUSINESSROLEPRICECATEGORY

**Iambusinessrolepricecategory**

| Property | Value |
|---|---|
| App Component | `BC-SRV-APS-IAM` |
| Software Component | `SAP_CLOUD` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BusinessRoleUUID` | ✓ | |  |  | `RAW(16)` | Global Unique ID for table |
| `BusinessRole` |  | |  |  | `CHAR(40)` | IAM: Business Role ID |
| `BusinessRoleGroup` |  | |  |  | `CHAR(12)` | Role Group |
| `BusinessRolePriceCategory` |  | |  | `case res.access_restriction_code when '3' then pc.PriceCategoryRead else pc.PriceCategory end` | `CHAR(30)` | 30 Characters |

## Source Code

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #CHECK
@EndUserText.label: 'Business Role Price Category'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.supportedCapabilities: [#CDS_MODELING_ASSOCIATION_TARGET, #CDS_MODELING_DATA_SOURCE]
@VDM.viewType: #BASIC
@ObjectModel.usageType:{
  serviceQuality: #X,
  sizeCategory: #S,
  dataClass: #MIXED
}
define view entity I_IAMBusinessRolePriceCategory
  as select from    I_IAMBusinessRole             as br
    inner join      aps_iam_br_price_tag_text_ddl as pc  on pc.BusinessRoleUUID = br.BusinessRoleUUID
    left outer join aps_iam_d_brcres              as res on  res.brole_uuid         = br.BusinessRoleUUID
                                                         and (
                                                            res.restriction_type    = ''
                                                            or res.restriction_type is null
                                                          )
                                                         and res.access_category    = 'W'
{
  key       br.BusinessRoleUUID,
            br.BusinessRole,
            br.BusinessRoleGroup,
            
            @EndUserText:{ label:'Business Role Price Category', quickInfo:'Price Category' }
            case res.access_restriction_code
            when  '3' then pc.PriceCategoryRead
            else  pc.PriceCategory                       
            end as BusinessRolePriceCategory
}
```
