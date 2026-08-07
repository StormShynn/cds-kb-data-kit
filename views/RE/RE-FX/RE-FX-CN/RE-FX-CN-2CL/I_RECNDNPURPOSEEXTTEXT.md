---
name: I_RECNDNPURPOSEEXTTEXT
description: Recndnpurposeexttext
app_component: RE-FX-CN-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - RE
  - RE-FX
  - RE-FX-CN
  - interface-view
  - text-view
  - text
  - component:RE-FX-CN-2CL
  - lob:Other
---
# I_RECNDNPURPOSEEXTTEXT

**Recndnpurposeexttext**

| Property | Value |
|---|---|
| App Component | `RE-FX-CN-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `spras` |  |  |
| `REExtConditionPurpose` | ✓ | |  | `condpurposeext` |  |  |
| `RECndnPurposeExtName` |  | |  | `xmcondpurposeext` |  |  |
| `_REConditionPurposeExt` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_REConditionPurposeExt` | `I_REConditionPurposeExt` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
//@AbapCatalog.sqlViewName: 'IRECNDNPURPEXTT'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'RE External Condition Purpose - Text'
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.usageType.serviceQuality: #B
@ObjectModel.usageType.sizeCategory: #M
@ObjectModel.dataCategory:#TEXT
@ObjectModel.representativeKey: 'REExtConditionPurpose'
@ObjectModel.semanticKey: ['REExtConditionPurpose']
@Search.searchable: true
@VDM.viewType:#BASIC
@ObjectModel: {
  modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
  supportedCapabilities: [
    #LANGUAGE_DEPENDENT_TEXT,
    #CDS_MODELING_DATA_SOURCE,
    #CDS_MODELING_ASSOCIATION_TARGET,
    #SQL_DATA_SOURCE,
    #EXTRACTION_DATA_SOURCE,
    #SEARCHABLE_ENTITY
  ],
  sapObjectNodeType.name: 'RealEstateConditionPurposeText'
}
@Metadata.ignorePropagatedAnnotations: true
@Analytics.dataExtraction.enabled: true
define view entity I_RECndnPurposeExtText 
    as select from tivcdcopuextt
    association [0..1] to I_REConditionPurposeExt    as _REConditionPurposeExt      on $projection.REExtConditionPurpose = _REConditionPurposeExt.REExtConditionPurpose
    association [0..1] to I_Language                 as _Language                 on $projection.Language = _Language.Language
{
        @ObjectModel.foreignKey.association: '_Language'
        @Semantics.language: true
    key spras            as Language,
        @ObjectModel.foreignKey.association: '_REConditionPurposeExt'
    key condpurposeext      as REExtConditionPurpose,
        @Semantics.text: true
        @Search.fuzzinessThreshold: 0.8
        @Search.defaultSearchElement: true
        @Search.ranking: #LOW
        xmcondpurposeext as RECndnPurposeExtName,
         
    _REConditionPurposeExt,
    _Language
}
```
