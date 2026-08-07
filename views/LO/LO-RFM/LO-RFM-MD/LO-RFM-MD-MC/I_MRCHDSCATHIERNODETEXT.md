---
name: I_MRCHDSCATHIERNODETEXT
description: Mrchdscathiernodetext
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
  - text-view
  - text
  - component:LO-RFM-MD-MC
  - lob:Logistics General
---
# I_MRCHDSCATHIERNODETEXT

**Mrchdscathiernodetext**

| Property | Value |
|---|---|
| App Component | `LO-RFM-MD-MC` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `MrchdsCategoryHierarchyNode` | ✓ | |  | `cast(MrchdsCatHiernode.class as rfm_mrchdcathiernode preserving type )` |  |  |
| `Language` | ✓ | |  | `spras` |  |  |
| `MrchdsCatHierNodeText` |  | |  | `kschl` |  |  |
| `ClassInternalID` |  | |  | `clint` |  |  |
| `ClassKeywordPositionNumber` |  | |  | `klpos` |  |  |
| `_MrchdsCategoryHierarchyNode` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_MrchdsCategoryHierarchyNode` | `I_MrchdsCategoryHierarchyNode` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@VDM: {
  viewType                          : #BASIC,
  lifecycle.contract.type           : #PUBLIC_LOCAL_API
}

@Analytics:{
  internalName                      : #LOCAL,
  dataExtraction                    : {
  enabled                           : true
} }

@AccessControl.authorizationCheck   : #CHECK
@ObjectModel: {
   representativeKey                : 'MrchdsCategoryHierarchyNode',
   dataCategory                     : #TEXT,
   supportedCapabilities            : [ #SQL_DATA_SOURCE,
                                        #CDS_MODELING_DATA_SOURCE,
                                        #CDS_MODELING_ASSOCIATION_TARGET,
                                        #EXTRACTION_DATA_SOURCE,
                                        #LANGUAGE_DEPENDENT_TEXT
                                      ], 
   modelingPattern                  :  #LANGUAGE_DEPENDENT_TEXT,                                                            
   usageType                        : {serviceQuality: #A,sizeCategory: #M,dataClass: #MASTER }
 }
@Metadata :{
   ignorePropagatedAnnotations      : true
}
@ObjectModel.sapObjectNodeType.name : 'MrchdsCatHierNodeText'
@EndUserText.label                  : 'Merchandise Cat Hier Node - Text'

define view entity I_MrchdsCatHierNodeText
  as select from klah as MrchdsCatHiernode
    inner join   swor as text on MrchdsCatHiernode.clint = text.clint
    
  association [0..1] to I_MrchdsCategoryHierarchyNode as _MrchdsCategoryHierarchyNode on $projection.MrchdsCategoryHierarchyNode = _MrchdsCategoryHierarchyNode.MrchdsCategoryHierarchyNode
  association [0..1] to I_Language                    as _Language                    on $projection.Language                    = _Language.Language
{
   @ObjectModel.foreignKey.association: '_MrchdsCategoryHierarchyNode'
   key cast(MrchdsCatHiernode.class as rfm_mrchdcathiernode preserving type ) as MrchdsCategoryHierarchyNode,
      @Semantics.language: true
      @ObjectModel.foreignKey.association:'_Language'
   key text.spras                                                             as Language,
      @Semantics.text: true
       text.kschl                                                             as MrchdsCatHierNodeText,
       MrchdsCatHiernode.clint                                                as ClassInternalID,            
       text.klpos                                                             as ClassKeywordPositionNumber,
   /* Associations */
      _MrchdsCategoryHierarchyNode,
      _Language
}
where
 MrchdsCatHiernode.wwskz = '0'
```
