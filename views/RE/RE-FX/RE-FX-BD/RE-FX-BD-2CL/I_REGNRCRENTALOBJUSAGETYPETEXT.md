---
name: I_REGNRCRENTALOBJUSAGETYPETEXT
description: Regnrcrentalobjusagetypetext
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
# I_REGNRCRENTALOBJUSAGETYPETEXT

**Regnrcrentalobjusagetypetext**

| Property | Value |
|---|---|
| App Component | `RE-FX-BD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `Language` | ✓ | |  | `spras` |
| `REGenericRentalObjectUsageType` | ✓ | |  | `usagetype` |
| `REGnrcRentalObjUsageTypeText` |  | |  | `description` |
| `_REGnrcRentalObjUsageType` | | ✓ | | |
| `_Language` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_REGnrcRentalObjUsageType` | `I_REGnrcRentalObjUsageType` | [0..1] |
| `_Language` | `I_Language` | [1..1] |

## Source Code

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'RE Rental Object Usage Type - Text'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.usageType:{
  serviceQuality: #A,
  sizeCategory: #S,
  dataClass: #CUSTOMIZING
}
@Analytics:{
  dataExtraction.enabled: true,
  technicalName: 'IREGOUSTYPT'
 }
@ObjectModel.representativeKey: 'REGenericRentalObjectUsageType'
@ObjectModel.dataCategory:#TEXT
@VDM.viewType: #BASIC
@ObjectModel.modelingPattern:           #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.supportedCapabilities:  [  #LANGUAGE_DEPENDENT_TEXT,
                                        #CDS_MODELING_DATA_SOURCE,
                                        #CDS_MODELING_ASSOCIATION_TARGET,
                                        #SQL_DATA_SOURCE,
                                        #EXTRACTION_DATA_SOURCE,
                                        #SEARCHABLE_ENTITY ]
@ObjectModel.sapObjectNodeType.name: 'RERentalObjectUsageTypeText'
@Search.searchable: true                                        
define view entity I_REGnrcRentalObjUsageTypeText
  as select from tivgousagetypet
  association [0..1] to I_REGnrcRentalObjUsageType as _REGnrcRentalObjUsageType on $projection.REGenericRentalObjectUsageType = _REGnrcRentalObjUsageType.REGenericRentalObjectUsageType
  association [1..1] to I_Language                 as _Language                 on $projection.Language = _Language.Language

{     
      @Semantics.language:true
      @ObjectModel.foreignKey.association: '_Language'
  key spras       as Language,
      @ObjectModel.foreignKey.association: '_REGnrcRentalObjUsageType'
  key usagetype   as REGenericRentalObjectUsageType,
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.7
      @Search.ranking: #LOW  
      @Semantics.text:true
      description as REGnrcRentalObjUsageTypeText,
      _REGnrcRentalObjUsageType,
      _Language
}
```
