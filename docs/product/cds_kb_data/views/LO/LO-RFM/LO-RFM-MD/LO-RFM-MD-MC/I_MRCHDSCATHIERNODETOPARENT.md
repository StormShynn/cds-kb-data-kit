---
name: I_MRCHDSCATHIERNODETOPARENT
description: "Mrchdscathiernodetoparent"
app_component: LO-RFM-MD-MC
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
  - LO
  - LO-RFM
  - LO-RFM-MD
  - interface-view
  - component:LO-RFM-MD-MC
  - lob:Logistics General
---
# I_MRCHDSCATHIERNODETOPARENT

**Mrchdscathiernodetoparent**

| Property | Value |
|---|---|
| App Component | `LO-RFM-MD-MC` |
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
| `MrchdsCategoryHierarchyNode` | ✓ | |  | `cast(MrchdsCatHiernode .class as rfm_mrchdcathiernode preserving type )` |  |  |
| `ParentMrchdsCatHierarchyNode` |  | |  | `class` |  |  |
| `_MrchdsCategoryHierarchyNode` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_MrchdsCategoryHierarchyNode` | `I_MrchdsCategoryHierarchyNode` | [1..1] |

## Source Code

```abap
@VDM: {
  viewType                          : #BASIC,
  lifecycle.contract.type           : #PUBLIC_LOCAL_API
}

@Analytics:{
  dataCategory                      : #DIMENSION,
  internalName                      : #LOCAL,
  dataExtraction                    : {
  enabled                           : true
} }

@AccessControl.authorizationCheck   : #CHECK
@ObjectModel: {
   representativeKey                : 'MrchdsCategoryHierarchyNode',
   supportedCapabilities            : [ #SQL_DATA_SOURCE,
                                        #CDS_MODELING_DATA_SOURCE,
                                        #CDS_MODELING_ASSOCIATION_TARGET,
                                        #EXTRACTION_DATA_SOURCE,
                                        #ANALYTICAL_DIMENSION
                                      ], 
   modelingPattern                  :  #ANALYTICAL_DIMENSION ,                                                                                                
   usageType                        : {serviceQuality: #A,sizeCategory: #M,dataClass: #MASTER }
 }
@Metadata :{
   ignorePropagatedAnnotations      : true,
   allowExtensions                  : true
}
@ObjectModel.sapObjectNodeType.name : 'MrchdsCategoryHierarchyNode'
@EndUserText.label                  : 'Assignment of Hierarchy Node'

define view entity I_MrchdsCatHierNodeToParent
  as select from klah as MrchdsCatHiernode 
    inner join   kssk as MrchdsCatHierAssignment       on MrchdsCatHiernode .clint      = MrchdsCatHierAssignment.objek
    inner join   klah as ParentMrchdsCatHiernode       on MrchdsCatHierAssignment.clint = ParentMrchdsCatHiernode.clint
    
   association [1..1] to I_MrchdsCategoryHierarchyNode as _MrchdsCategoryHierarchyNode on  $projection.MrchdsCategoryHierarchyNode = _MrchdsCategoryHierarchyNode.MrchdsCategoryHierarchyNode
  
{
  key cast(MrchdsCatHiernode .class as rfm_mrchdcathiernode preserving type ) as MrchdsCategoryHierarchyNode,
      ParentMrchdsCatHiernode.class                                           as ParentMrchdsCatHierarchyNode,
      _MrchdsCategoryHierarchyNode  
}
where
  MrchdsCatHiernode .wwskz = '0'
```
