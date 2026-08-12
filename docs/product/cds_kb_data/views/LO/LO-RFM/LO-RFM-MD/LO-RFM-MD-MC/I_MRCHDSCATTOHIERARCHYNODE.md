---
name: I_MRCHDSCATTOHIERARCHYNODE
description: "Mrchdscattohierarchynode"
app_component: LO-RFM-MD-MC
software_component: SAPSCORE
release_state: released
dev_ext_status: released
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
# I_MRCHDSCATTOHIERARCHYNODE

**Mrchdscattohierarchynode**

| Property | Value |
|---|---|
| App Component | `LO-RFM-MD-MC` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `MerchandiseCategory` | ✓ | |  | `cast (MrchdsCategory.class as rfm_mrchdscategory )` |  |  |
| `MrchdsCategoryHierarchyNode` |  | |  | `cast (MrchdsCatHiernode.class as rfm_mrchdcathiernode preserving type )` |  |  |
| `_MerchandiseCategory` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_MerchandiseCategory` | `I_MerchandiseCategory` | [1..1] |

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
   representativeKey                : 'MerchandiseCategory',
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
@ObjectModel.sapObjectNodeType.name : 'MerchandiseCategory'
@EndUserText.label                  : 'Merchandise Category HierNode Assignment'

define view entity I_MrchdsCatToHierarchyNode
  as select from klah as MrchdsCategory
    inner join   kssk as MrchdsCatAssignment on MrchdsCategory.clint      = MrchdsCatAssignment.objek
    inner join   klah as MrchdsCatHiernode   on MrchdsCatAssignment.clint = MrchdsCatHiernode.clint
    
  association [1..1] to I_MerchandiseCategory as _MerchandiseCategory on $projection.MerchandiseCategory = _MerchandiseCategory.MerchandiseCategory
{
  key cast (MrchdsCategory.class   as  rfm_mrchdscategory )                    as MerchandiseCategory,
      cast (MrchdsCatHiernode.class as rfm_mrchdcathiernode preserving type  ) as MrchdsCategoryHierarchyNode,
      _MerchandiseCategory
}
where
  MrchdsCategory.wwskz = '1'
```
