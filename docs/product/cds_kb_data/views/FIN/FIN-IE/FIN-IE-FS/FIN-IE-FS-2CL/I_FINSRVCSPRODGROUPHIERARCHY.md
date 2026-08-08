---
name: I_FINSRVCSPRODGROUPHIERARCHY
description: "Finsrvcsprodgrouphierarchy"
app_component: FIN-IE-FS-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FIN
  - FIN-IE
  - FIN-IE-FS
  - interface-view
  - component:FIN-IE-FS-2CL
  - lob:Other
---
# I_FINSRVCSPRODGROUPHIERARCHY

**Finsrvcsprodgrouphierarchy**

| Property | Value |
|---|---|
| App Component | `FIN-IE-FS-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `FinSrvcsProductGroupHierarchy` | ✓ | |  | `cast( HierDirectory.HierarchyShortID as ffs_hryid_product_group preserving type )` |  |  |
| `ValidityEndDate` | ✓ | |  |  |  |  |
| `ValidityStartDate` |  | |  |  |  |  |
| `LastChangedByUser` |  | |  |  |  |  |
| `LastChangeDateTime` |  | |  |  |  |  |
| `_Text` | | ✓ | | | | |

## Source Code

```abap
@EndUserText.label: 'Fin Services Product Group Hierarchy'
@AccessControl.authorizationCheck: #MANDATORY
@ObjectModel:{
    representativeKey: 'FinSrvcsProductGroupHierarchy',
    usageType: {
    serviceQuality: #A,
    sizeCategory: #M,
    dataClass: #MASTER
    },
    sapObjectNodeType.name: 'FinSrvcsProductGroupHierarchy',
    modelingPattern: #ANALYTICAL_DIMENSION,
    supportedCapabilities: [#CDS_MODELING_DATA_SOURCE,
                            #CDS_MODELING_ASSOCIATION_TARGET,
                            #EXTRACTION_DATA_SOURCE,
                            #ANALYTICAL_DIMENSION]
}
@VDM: {
  viewType:#COMPOSITE,
  lifecycle.contract.type:#PUBLIC_LOCAL_API
}
@Metadata.allowExtensions: true
@Analytics: {
 dataCategory: #DIMENSION,
 dataExtraction.enabled: true,
 internalName: #LOCAL }
@Search.searchable: true
@Metadata.ignorePropagatedAnnotations: true

define root view entity I_FinSrvcsProdGroupHierarchy
  as select from R_HierRuntimeRepresentation as HierDirectory
  composition [0..*] of I_FinSrvcsProdGrpHierarchyT as _Text
{
      @Search.ranking: #HIGH
      @Search.defaultSearchElement: true
      @ObjectModel.text.association: '_Text'
  key cast( HierDirectory.HierarchyShortID  as ffs_hryid_product_group preserving type ) as FinSrvcsProductGroupHierarchy,
      @Semantics.businessDate.to: true
  key HierDirectory.ValidityEndDate                                                      as ValidityEndDate,
      @Semantics.businessDate.from: true
      HierDirectory.ValidityStartDate                                                    as ValidityStartDate,
      @Semantics.user.lastChangedBy: true
      HierDirectory.LastChangedByUser                                                    as LastChangedByUser,
      @Semantics.systemDateTime.lastChangedAt: true
      HierDirectory.LastChangeDateTime                                                   as LastChangeDateTime,
      _Text
}
where
  HierDirectory.HierarchyType = 'FFS1'
```
