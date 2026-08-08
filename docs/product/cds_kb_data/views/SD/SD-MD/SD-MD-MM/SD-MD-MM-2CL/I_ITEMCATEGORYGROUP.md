---
name: I_ITEMCATEGORYGROUP
description: "Itemcategorygroup"
app_component: SD-MD-MM-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SD
  - SD-MD
  - SD-MD-MM
  - interface-view
  - item-level
  - component:SD-MD-MM-2CL
  - lob:Sales & Distribution
---
# I_ITEMCATEGORYGROUP

**Itemcategorygroup**

| Property | Value |
|---|---|
| App Component | `SD-MD-MM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ItemCategoryGroup` | ✓ | |  | `mtpos` |  |  |
| `ItemCategoryGroupOID` |  | |  | `cast( mtpos as itemcategorygroup_oid )` |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_ItemCategoryGroupText` | [0..*] |

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.representativeKey: 'ItemCategoryGroup'
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S
@EndUserText.label: 'Item Category Group'
@Analytics.dataCategory: #DIMENSION
@Analytics.dataExtraction.enabled: true 
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck: #NOT_REQUIRED
@AccessControl.personalData.blocking: #NOT_REQUIRED
@AbapCatalog.sqlViewName: 'ISDITMCATGRP'
@Search.searchable: true
@AbapCatalog.preserveKey: true 
@AbapCatalog.buffering.status: #ACTIVE
@AbapCatalog.buffering.type: #FULL
@AbapCatalog.compiler.compareFilter: true
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.modelingPattern:           #ANALYTICAL_DIMENSION
@ObjectModel.supportedCapabilities:  [  #SQL_DATA_SOURCE,
                                        #CDS_MODELING_DATA_SOURCE,
                                        #CDS_MODELING_ASSOCIATION_TARGET,
                                        #ANALYTICAL_DIMENSION,
                                        #EXTRACTION_DATA_SOURCE,
                                        #SEARCHABLE_ENTITY  ]

@ObjectModel.alternativeKey: [{ id: 'OID', uniqueness: #UNIQUE, element: ['ItemCategoryGroupOID'] }]
@ObjectModel.sapObjectNodeType.name: 'ProductItemCategoryGroup'
@ObjectModel.objectIdentifier.oidElement:'ItemCategoryGroupOID'
@Consumption.ranked: true 

define view I_ItemCategoryGroup 
  as select from tptm
  association[0..*] to I_ItemCategoryGroupText as _Text
    on $projection.ItemCategoryGroup = _Text.ItemCategoryGroup
{
  @Search.defaultSearchElement: true
  @Search.fuzzinessThreshold: 0.8
  @Search.ranking: #HIGH
  @ObjectModel.text.association: '_Text'
  key mtpos as ItemCategoryGroup,

  @ObjectModel.filter.enabled: false
  @ObjectModel.sort.enabled: false
  cast( mtpos as itemcategorygroup_oid )   as ItemCategoryGroupOID,

  _Text
};
```
