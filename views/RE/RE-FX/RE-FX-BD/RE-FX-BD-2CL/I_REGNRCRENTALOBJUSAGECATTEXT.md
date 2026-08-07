---
name: I_REGNRCRENTALOBJUSAGECATTEXT
description: "Regnrcrentalobjusagecattext"
app_component: RE-FX-BD-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - RE
  - RE-FX
  - RE-FX-BD
  - interface-view
  - text-view
  - text
  - component:RE-FX-BD-2CL
  - lob:Other
---
# I_REGNRCRENTALOBJUSAGECATTEXT

**Regnrcrentalobjusagecattext**

| Property | Value |
|---|---|
| App Component | `RE-FX-BD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `REGnrcRentalObjUsageCategory` | ✓ | |  | `usagecategory` |  |  |
| `Language` | ✓ | |  | `spras` |  |  |
| `REGnrcRentalObjUsageCatText` |  | |  | `description` |  |  |
| `_REGnrcRentalObjUsageCategory` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_REGnrcRentalObjUsageCategory` | `I_REGnrcRentalObjUsageCategory` | [0..1] |
| `_Language` | `I_Language` | [1..1] |

## Source Code

```abap
@EndUserText.label: 'RE Rental Object Usage Type - Text'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #M
@ObjectModel.dataCategory: #TEXT
@ObjectModel.representativeKey: 'REGnrcRentalObjUsageCategory'
@ObjectModel.semanticKey: ['REGnrcRentalObjUsageCategory']

@VDM.viewType: #BASIC

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel.modelingPattern:           #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.supportedCapabilities:  [  #LANGUAGE_DEPENDENT_TEXT,
                                        #CDS_MODELING_DATA_SOURCE,
                                        #CDS_MODELING_ASSOCIATION_TARGET,
                                        #SQL_DATA_SOURCE,
                                        #EXTRACTION_DATA_SOURCE,
                                        #SEARCHABLE_ENTITY         ]
@ObjectModel.sapObjectNodeType.name: 'REGnrcRntlObjUsageCategoryText'
 
@Analytics:{
    dataExtraction: {
        enabled: true
    }
}
@Analytics.technicalName: 'IREGOUSCATT'
@Search.searchable: true
define view entity I_REGnrcRentalObjUsageCatText
  as select from tivgousagecatet
  association [0..1] to I_REGnrcRentalObjUsageCategory as _REGnrcRentalObjUsageCategory on $projection.REGnrcRentalObjUsageCategory = _REGnrcRentalObjUsageCategory.REGnrcRentalObjUsageCategory
  association [1..1] to I_Language                     as _Language                     on $projection.Language = _Language.Language
{
      @ObjectModel.foreignKey.association: '_REGnrcRentalObjUsageCategory'
  key usagecategory as REGnrcRentalObjUsageCategory,
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key spras         as Language,
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.7
      @Search.ranking: #LOW  
      @Semantics.text: true
      description   as REGnrcRentalObjUsageCatText,

      _REGnrcRentalObjUsageCategory,
      _Language

}
```
