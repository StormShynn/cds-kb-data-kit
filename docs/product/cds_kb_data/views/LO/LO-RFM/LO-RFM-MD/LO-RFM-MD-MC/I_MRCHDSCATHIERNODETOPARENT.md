---
name: I_MRCHDSCATHIERNODETOPARENT
description: "Mrchdscathiernodetoparent"
app_component: LO-RFM-MD-MC
software_component: SAPSCORE
release_state: released
dev_ext_status: released
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
