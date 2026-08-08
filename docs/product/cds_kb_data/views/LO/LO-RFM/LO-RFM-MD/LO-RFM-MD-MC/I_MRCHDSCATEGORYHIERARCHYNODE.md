---
name: I_MRCHDSCATEGORYHIERARCHYNODE
description: "Mrchdscategoryhierarchynode"
app_component: LO-RFM-MD-MC
software_component: SAPSCORE
release_state: released
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
# I_MRCHDSCATEGORYHIERARCHYNODE

**Mrchdscategoryhierarchynode**

| Property | Value |
|---|---|
| App Component | `LO-RFM-MD-MC` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `MrchdsCategoryHierarchyNode` | ✓ | |  | `cast(MrchdsCatHierNode.class as rfm_mrchdcathiernode preserving type )` |  |  |
| `LastChangeDateTime` |  | |  | `case when class_header.tstmp_i >= class_header.tstmp_c and class_header.tstmp_i >= MrchdsCatHierNode.lastchangeddatetime then class_header.tstmp_i when class_header.tstmp_c >= class_header.tstmp_i and class_header.tstmp_c >= MrchdsCatHierNode.lastchangeddatetime then class_header.tstmp_c else MrchdsCatHierNode.lastchangeddatetime end` |  |  |
| `ClassInternalID` |  | |  | `clint` |  |  |
| `_MrchdsCatHierNodeText` | | ✓ | | | | |
| `_MrchdsCatHierNodeCharc` | | ✓ | | | | |
| `_MrchdsCatHierNodeToParent` | | ✓ | | | | |
| `_MCHierNodeCVRstrn` | | ✓ | | | | |
| `_MrchdsCmpltHierarchyNode` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_MrchdsCatHierNodeText` | `I_MrchdsCatHierNodeText` | [0..*] |
| `_MrchdsCatHierNodeCharc` | `I_MrchdsCatHierNodeCharc` | [1..*] |
| `_MrchdsCatHierNodeToParent` | `I_MrchdsCatHierNodeToParent` | [0..1] |
| `_MCHierNodeCVRstrn` | `I_MCHierNodeCVRstrn` | [0..*] |
| `_MrchdsCmpltHierarchyNode` | `I_MrchdsCatCmpltHierarchyNode` | [0..1] |

## Source Code

```abap
@VDM: {
  viewType                          : #BASIC,
  lifecycle.contract.type           : #PUBLIC_LOCAL_API
}

@Analytics:{
  dataCategory                      : #DIMENSION,
  internalName                      : #LOCAL,
  technicalName                     : 'IMCHierNode',
  dataExtraction                    : {
  enabled                           : true
}}

@AccessControl.authorizationCheck   : #CHECK
@ObjectModel: {
   representativeKey                : 'MrchdsCategoryHierarchyNode',
   supportedCapabilities            : [ #SQL_DATA_SOURCE,
                                        #CDS_MODELING_DATA_SOURCE,
                                        #CDS_MODELING_ASSOCIATION_TARGET,
                                        #EXTRACTION_DATA_SOURCE,
                                        #ANALYTICAL_DIMENSION
                                      ],
   usageType                        : {serviceQuality: #A,sizeCategory: #M,dataClass: #MASTER } ,
   modelingPattern                  :  #ANALYTICAL_DIMENSION
 }
@Metadata :{
   ignorePropagatedAnnotations      : true,
   allowExtensions                  : true
}
@ObjectModel.sapObjectNodeType.name : 'MrchdsCategoryHierarchyNode'
@EndUserText.label                  : 'Merchandise Category Hierarchy Node'

define view entity I_MrchdsCategoryHierarchyNode
  as select from klah as MrchdsCatHierNode
  left outer to one join clf_hdr as class_header      on  MrchdsCatHierNode.clint = class_header.objek
                                                      and class_header.obtab      = 'KLAH'
                                                      and class_header.mafid      = 'K'
                                                      and class_header.klart      = '026'
  association [0..*] to I_MrchdsCatHierNodeText       as _MrchdsCatHierNodeText     on $projection.MrchdsCategoryHierarchyNode = _MrchdsCatHierNodeText.MrchdsCategoryHierarchyNode
  association [1..*] to I_MrchdsCatHierNodeCharc      as _MrchdsCatHierNodeCharc    on $projection.MrchdsCategoryHierarchyNode = _MrchdsCatHierNodeCharc.MrchdsCategoryHierarchyNode
  association [0..1] to I_MrchdsCatHierNodeToParent   as _MrchdsCatHierNodeToParent on $projection.MrchdsCategoryHierarchyNode = _MrchdsCatHierNodeToParent.MrchdsCategoryHierarchyNode
  association [0..*] to I_MCHierNodeCVRstrn           as _MCHierNodeCVRstrn         on $projection.MrchdsCategoryHierarchyNode = _MCHierNodeCVRstrn.MrchdsCategoryHierarchyNode
  association [0..1] to I_MrchdsCatCmpltHierarchyNode as _MrchdsCmpltHierarchyNode  on $projection.MrchdsCategoryHierarchyNode = _MrchdsCmpltHierarchyNode.MrchdsCategoryHierarchyNode
{
      @ObjectModel.hierarchy.association : '_MrchdsCmpltHierarchyNode'
  key cast(MrchdsCatHierNode.class as rfm_mrchdcathiernode preserving type ) as MrchdsCategoryHierarchyNode,
      @Semantics.systemDateTime.lastChangedAt: true
       case
          when class_header.tstmp_i >= class_header.tstmp_c and class_header.tstmp_i >= MrchdsCatHierNode.lastchangeddatetime then class_header.tstmp_i
          when class_header.tstmp_c >= class_header.tstmp_i and class_header.tstmp_c >= MrchdsCatHierNode.lastchangeddatetime then class_header.tstmp_c
          else MrchdsCatHierNode.lastchangeddatetime
       end                                                                  as LastChangeDateTime,
       MrchdsCatHierNode.clint                                              as ClassInternalID,
//     MrchdsCatHierNode.lastchangeddatetime                                as LastChangeDateTime,
      _MrchdsCatHierNodeText,
      _MrchdsCatHierNodeCharc,
      _MrchdsCatHierNodeToParent,
      _MCHierNodeCVRstrn,
      _MrchdsCmpltHierarchyNode
}
where
  MrchdsCatHierNode.wwskz = '0'
```
