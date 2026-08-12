---
name: I_REGNRCRENTALOBJUSAGETYPETEXT
description: "Regnrcrentalobjusagetypetext"
app_component: RE-FX-BD-2CL
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
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `spras` |  |  |
| `REGenericRentalObjectUsageType` | ✓ | |  | `usagetype` |  |  |
| `REGnrcRentalObjUsageTypeText` |  | |  | `description` |  |  |
| `_REGnrcRentalObjUsageType` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

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
