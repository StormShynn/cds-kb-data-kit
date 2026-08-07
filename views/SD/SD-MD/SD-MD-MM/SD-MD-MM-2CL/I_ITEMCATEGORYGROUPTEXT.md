---
name: I_ITEMCATEGORYGROUPTEXT
description: "Itemcategorygrouptext"
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
  - text-view
  - text
  - item-level
  - component:SD-MD-MM-2CL
  - lob:Sales & Distribution
---
# I_ITEMCATEGORYGROUPTEXT

**Itemcategorygrouptext**

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
| `Language` | ✓ | |  | `spras` |  |  |
| `ItemCategoryGroupName` |  | |  | `bezei` |  |  |
| `_ItemCategoryGroup` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ItemCategoryGroup` | `I_ItemCategoryGroup` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.dataCategory: #TEXT
@ObjectModel.representativeKey: 'ItemCategoryGroup'
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S
@EndUserText.label: 'Item Category Group - Text'
@Analytics.dataExtraction.enabled: true 
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck: #NOT_REQUIRED
@AbapCatalog.sqlViewName: 'ISDITMCATGRPTXT'
@AbapCatalog.preserveKey: true
@AbapCatalog.buffering.status: #ACTIVE
@AbapCatalog.buffering.type: #FULL
@AbapCatalog.compiler.compareFilter: true
@Metadata.ignorePropagatedAnnotations: true
@Search.searchable: true
@ObjectModel.modelingPattern:           #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.supportedCapabilities:  [  #SQL_DATA_SOURCE,
                                        #CDS_MODELING_DATA_SOURCE,
                                        #CDS_MODELING_ASSOCIATION_TARGET,
                                        #LANGUAGE_DEPENDENT_TEXT,
                                        #EXTRACTION_DATA_SOURCE,
                                        #SEARCHABLE_ENTITY   ]
define view I_ItemCategoryGroupText 
as select from tptmt

association[0..1] to I_ItemCategoryGroup as _ItemCategoryGroup on $projection.ItemCategoryGroup = _ItemCategoryGroup.ItemCategoryGroup
association[0..1] to I_Language as _Language on $projection.Language = _Language.Language
{
    @ObjectModel.foreignKey.association: '_ItemCategoryGroup'
    key mtpos as ItemCategoryGroup,

    @Semantics.language: true
    @ObjectModel.foreignKey.association: '_Language'
    key spras as Language,

    @Search.defaultSearchElement: true
    @Search.fuzzinessThreshold: 0.8
    @Search.ranking: #HIGH
    @Semantics.text: true
    bezei as ItemCategoryGroupName,
    
    //Associations
    _ItemCategoryGroup,
    _Language     
}
```
