---
name: I_IAMBUSINESSROLEPRICECATEGORY
description: "Iambusinessrolepricecategory"
app_component: BC-SRV-APS-IAM
software_component: SAP_CLOUD
release_state: released
dev_ext_status: released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
atc_state: released
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
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
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
