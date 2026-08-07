---
name: I_COSTCENTERHIERARCHYVH
description: Cost CenterHIERARCHYVH
app_component: FI-GL-IS-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-GL
  - FI-GL-IS
  - interface-view
  - value-help
  - cost-center
  - component:FI-GL-IS-2CL
  - lob:Finance
  - bo:CostCenter
---
# I_COSTCENTERHIERARCHYVH

**Cost CenterHIERARCHYVH**

| Property | Value |
|---|---|
| App Component | `FI-GL-IS-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CostCenterHierarchy` | ✓ | |  | `cast( hrrp_dir_n.hryid_42 as fis_cctr_hryid_42 preserving type )` |  |  |
| `ValidityEndDate` | ✓ | |  | `hryvalto` |  |  |
| `ValidityStartDate` |  | |  | `hryvalfrom` |  |  |
| `ControllingArea` |  | |  | `cast( hrrp_dir_n.hrycls as fis_hrycls_kokrs preserving type )` |  |  |
| `_ControllingArea` | | ✓ | | | | |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ControllingArea` | `I_ControllingArea` | [0..1] |
| `_Text` | `I_CostCenterHierarchyText` | [1..*] |

## Source Code

```abap
@ObjectModel.representativeKey: 'CostCenterHierarchy' //Inserted by VDM CDS Suite Plugin
@EndUserText.label: 'Cost Center Hierarchy'
@Analytics: { dataCategory: #DIMENSION }
@ObjectModel.dataCategory: #VALUE_HELP
@VDM.viewType: #BASIC
@AbapCatalog.sqlViewName: 'IFICOSTCENTERHVH'
@AccessControl.authorizationCheck: #CHECK
@Metadata.allowExtensions:true
@Search.searchable: true
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType: {
  dataClass: #MASTER,
  serviceQuality: #A,
  sizeCategory: #XL
}
@AbapCatalog.preserveKey: true
@Consumption.filter.businessDate.at : true
@ObjectModel.supportedCapabilities: [#CDS_MODELING_ASSOCIATION_TARGET, #ANALYTICAL_DIMENSION]
@Metadata.ignorePropagatedAnnotations: true

define view I_CostCenterHierarchyVH
  as select from    hrrp_dir_n
  //    inner join hrrp_node on hrrp_directory.hryid = hrrp_node.hryid and
  //                             hrrp_directory.hryver = hrrp_node.hryver and
  //                             hrrp_directory.hryvalto = hrrp_node.hryvalto and
  //                             hrrp_node.nodetype = 'R'
  association [0..1] to I_ControllingArea         as _ControllingArea on  $projection.ControllingArea = _ControllingArea.ControllingArea

  association [1..*] to I_CostCenterHierarchyText as _Text            on  $projection.CostCenterHierarchy = _Text.CostCenterHierarchy
                                                                      and $projection.ControllingArea     = _Text.ControllingArea
                                                                      and $projection.ValidityEndDate     = _Text.ValidityEndDate

  //{
  //        @ObjectModel.foreignKey.association: '_ControllingArea'
  //  key   cast( hrrp_node.nodecls as fis_kokrs )                           as ControllingArea,
  //        @ObjectModel.text.association: '_Text'
  //  key   cast(hrrp_directory.hryid as fis_hryid_cctr)                     as CostCenterHierarchy,
  //        @Semantics.businessDate.to: true
  //  key   hrrp_directory.hryvalto                                          as ValidityEndDate,
  //        @Semantics.businessDate.from: true
  //        hrrp_directory.hryvalfrom                                        as ValidityStartDate,
  //        _ControllingArea,
  //        _Text
  //}
  //where
  //  hrrp_directory.hrytyp = '0101';
{
        @Search: { defaultSearchElement:  true, ranking: #HIGH, fuzzinessThreshold: 1.0 }
        @ObjectModel.text.association: '_Text'
  key   cast( hrrp_dir_n.hryid_42 as fis_cctr_hryid_42 preserving type ) as CostCenterHierarchy,
        @Semantics.businessDate.to: true
  key   hrrp_dir_n.hryvalto                                           as ValidityEndDate,
        @Semantics.businessDate.from: true
        hrrp_dir_n.hryvalfrom                                         as ValidityStartDate,
        @ObjectModel.foreignKey.association: '_ControllingArea'
        cast( hrrp_dir_n.hrycls as fis_hrycls_kokrs preserving type ) as ControllingArea,
        _ControllingArea,
        _Text
}
where
  hrrp_dir_n.hrytyp = '0101';
```
