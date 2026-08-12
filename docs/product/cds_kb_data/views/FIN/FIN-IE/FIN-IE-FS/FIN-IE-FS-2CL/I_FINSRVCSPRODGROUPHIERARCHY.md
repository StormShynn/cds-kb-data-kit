---
name: I_FINSRVCSPRODGROUPHIERARCHY
description: "Finsrvcsprodgrouphierarchy"
app_component: FIN-IE-FS-2CL
software_component: SAPSCORE
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
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
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
