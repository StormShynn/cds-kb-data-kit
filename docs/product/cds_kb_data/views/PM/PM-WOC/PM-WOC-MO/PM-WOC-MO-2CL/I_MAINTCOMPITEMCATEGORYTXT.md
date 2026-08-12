---
name: I_MAINTCOMPITEMCATEGORYTXT
description: "Maintcompitemcategorytxt"
app_component: PM-WOC-MO-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PM
  - PM-WOC
  - PM-WOC-MO
  - interface-view
  - item-level
  - component:PM-WOC-MO-2CL
  - lob:Plant Maintenance
---
# I_MAINTCOMPITEMCATEGORYTXT

**Maintcompitemcategorytxt**

| Property | Value |
|---|---|
| App Component | `PM-WOC-MO-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | | `_text` | `spras` |  |  |
| `MaintComponentItemCategory` | ✓ | | `_text` | `postp` |  |  |
| `MaintComponentItemCategoryDesc` |  | | `_text` | `ptext` |  |  |
| `_Language` | | ✓ | | | | |
| `_MaintComponentItemCategory` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@EndUserText.label: 'Maint Component Item Category - Text'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.dataCategory: #TEXT
@Analytics.technicalName: 'IMCOMPITMCATTXT'
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.representativeKey: 'MaintComponentItemCategory'
@ObjectModel.supportedCapabilities: [#CDS_MODELING_ASSOCIATION_TARGET, 
                                     #CDS_MODELING_DATA_SOURCE,
                                     #EXTRACTION_DATA_SOURCE,
                                     #LANGUAGE_DEPENDENT_TEXT,
                                     #SEARCHABLE_ENTITY,
                                     #SQL_DATA_SOURCE]
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.dataClass: #META
@ObjectModel.usageType.sizeCategory: #S
@Search.searchable: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC
@Analytics.dataExtraction.enabled:true
@AccessControl.authorizationCheck: #NOT_REQUIRED

define view entity I_MaintCompItemCategoryTxt
  as select from t418t                        as _text
    inner join   I_MaintComponentItemCategory as _Category on _text.postp = _Category.MaintComponentItemCategory

  association to parent I_MaintComponentItemCategory as _MaintComponentItemCategory
    on $projection.MaintComponentItemCategory = _MaintComponentItemCategory.MaintComponentItemCategory
    
  association [0..1] to I_Language as _Language      
    on $projection.Language = _Language.Language
    
{
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key _text.spras as Language,
      @ObjectModel.foreignKey.association: '_MaintComponentItemCategory'
      @ObjectModel.text.element: ['MaintComponentItemCategoryDesc']
  key _text.postp as MaintComponentItemCategory,
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #LOW
      @Semantics.text: true
      _text.ptext as MaintComponentItemCategoryDesc,
      @ObjectModel.association.type: [#TO_COMPOSITION_PARENT, 
                                      #TO_COMPOSITION_ROOT] 
      _MaintComponentItemCategory,
      _Language
}
```
