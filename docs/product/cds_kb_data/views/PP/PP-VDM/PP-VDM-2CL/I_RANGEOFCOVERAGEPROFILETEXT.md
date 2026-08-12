---
name: I_RANGEOFCOVERAGEPROFILETEXT
description: "Rangeofcoverageprofiletext"
app_component: PP-VDM-2CL
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
  - PP
  - PP-VDM
  - interface-view
  - text-view
  - text
  - component:PP-VDM-2CL
  - lob:Manufacturing
---
# I_RANGEOFCOVERAGEPROFILETEXT

**Rangeofcoverageprofiletext**

| Property | Value |
|---|---|
| App Component | `PP-VDM-2CL` |
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
| `Plant` | ✓ | |  | `werks` |  |  |
| `RangeOfCoverageProfile` | ✓ | |  | `cast(rwpro as pph_rwpro preserving type)` |  |  |
| `Language` | ✓ | |  | `spras` |  |  |
| `RangeOfCoverageProfileName` |  | |  | `cast(txt.text40 as pph_rwprotxt preserving type)` |  |  |
| `_Plant` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |
| `_Profile` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Plant` | `I_Plant` | [1..1] |
| `_Language` | `I_Language` | [0..1] |
| `_Profile` | `I_RangeOfCoverageProfile` | [1..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IRANGEOFCOVERTXT'
@AbapCatalog.buffering: {status: #ACTIVE, type: #GENERIC, numberOfKeyFields: 001}
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.dataCategory: #TEXT
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.supportedCapabilities: [#LANGUAGE_DEPENDENT_TEXT, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #SEARCHABLE_ENTITY]
@ObjectModel.representativeKey: 'RangeOfCoverageProfile'
@ObjectModel.usageType: {serviceQuality: #A, sizeCategory: #S, dataClass: #CUSTOMIZING}
@Search.searchable: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC
@EndUserText.label: 'Range of Coverage Profile - Text'

define view I_RangeOfCoverageProfileText
  as select from t438s as txt
  
  association [1..1] to I_Plant                  as _Plant    on  $projection.Plant    = _Plant.Plant
  association [0..1] to I_Language               as _Language on  $projection.Language = _Language.Language
  association [1..1] to I_RangeOfCoverageProfile as _Profile  on  $projection.Plant                  = _Profile.Plant
                                                              and $projection.RangeOfCoverageProfile = _Profile.RangeOfCoverageProfile
{
      @ObjectModel.foreignKey.association: '_Plant'
  key werks                                            as Plant,
      @ObjectModel.foreignKey.association: '_Profile'  
      @ObjectModel.text.element: ['RangeOfCoverageProfileName']
  key cast(rwpro as pph_rwpro preserving type)         as RangeOfCoverageProfile,
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key txt.spras                                        as Language,
      @Search: {defaultSearchElement: true, ranking: #LOW, fuzzinessThreshold: 0.8}
      @Semantics.text: true
      cast(txt.text40 as pph_rwprotxt preserving type) as RangeOfCoverageProfileName,

      //Associations
      @ObjectModel.association.type: [#TO_COMPOSITION_PARENT, #TO_COMPOSITION_ROOT]
      _Profile,
      _Plant,
      _Language
};
```
