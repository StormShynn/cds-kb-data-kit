---
name: I_SAFETYTIMEPERIODPROFILETEXT
description: "Safetytimeperiodprofiletext"
app_component: PP-VDM-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PP
  - PP-VDM
  - interface-view
  - text-view
  - text
  - component:PP-VDM-2CL
  - lob:Manufacturing
---
# I_SAFETYTIMEPERIODPROFILETEXT

**Safetytimeperiodprofiletext**

| Property | Value |
|---|---|
| App Component | `PP-VDM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Plant` | ✓ | |  | `werks` |  |  |
| `SafetyTimePeriodProfile` | ✓ | |  | `cast(shpro as pph_shpro preserving type)` |  |  |
| `Language` | ✓ | |  | `spras` |  |  |
| `SafetyTimePeriodProfileName` |  | |  | `cast(txt.text40 as pph_shprotxt preserving type)` |  |  |
| `_Plant` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |
| `_Profile` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Plant` | `I_Plant` | [1..1] |
| `_Language` | `I_Language` | [0..1] |
| `_Profile` | `I_SafetyTimePeriodProfile` | [1..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'ISAFTTMEPERPRFLT'
@AbapCatalog.buffering: {status: #ACTIVE, type: #GENERIC, numberOfKeyFields: 001}
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.dataCategory: #TEXT
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.supportedCapabilities: [#LANGUAGE_DEPENDENT_TEXT, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #SEARCHABLE_ENTITY]
@ObjectModel.representativeKey: 'SafetyTimePeriodProfile'
@ObjectModel.usageType: {serviceQuality: #A, sizeCategory: #S, dataClass: #CUSTOMIZING}
@Search.searchable: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC
@EndUserText.label: 'Period Profile for Safety Time - Text'

define view I_SafetyTimePeriodProfileText
  as select from t438w as txt
  
  association [1..1] to I_Plant                   as _Plant    on  $projection.Plant    = _Plant.Plant
  association [0..1] to I_Language                as _Language on  $projection.Language = _Language.Language
  association [1..1] to I_SafetyTimePeriodProfile as _Profile  on  $projection.Plant                   = _Profile.Plant
                                                               and $projection.SafetyTimePeriodProfile = _Profile.SafetyTimePeriodProfile 
{
      @ObjectModel.foreignKey.association: '_Plant'
  key werks      as Plant,
      @ObjectModel.foreignKey.association: '_Profile'  
      @ObjectModel.text.element: ['SafetyTimePeriodProfileName']
  key cast(shpro as pph_shpro preserving type)         as SafetyTimePeriodProfile,
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key txt.spras  as Language,
      @Search: {defaultSearchElement: true, ranking: #LOW, fuzzinessThreshold: 0.8}
      @Semantics.text: true
      cast(txt.text40 as pph_shprotxt preserving type) as SafetyTimePeriodProfileName,

      //Associations
      @ObjectModel.association.type: [#TO_COMPOSITION_PARENT, #TO_COMPOSITION_ROOT]
      _Profile,
      _Plant,
      _Language
};
```
