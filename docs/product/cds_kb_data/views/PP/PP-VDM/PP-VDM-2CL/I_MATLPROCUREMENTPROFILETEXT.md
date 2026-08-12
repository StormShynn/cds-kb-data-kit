---
name: I_MATLPROCUREMENTPROFILETEXT
description: "Matlprocurementprofiletext"
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
# I_MATLPROCUREMENTPROFILETEXT

**Matlprocurementprofiletext**

| Property | Value |
|---|---|
| App Component | `PP-VDM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `MaterialProcurementProfile` | ✓ | |  | `cast(txt.sobsl as pph_sobsl preserving type)` |  |  |
| `Plant` | ✓ | |  | `werks` |  |  |
| `Language` | ✓ | |  | `cast(txt.spras as spras preserving type)` |  |  |
| `MaterialProcurementProfileName` |  | |  | `cast(txt.ltext as materialprocurementprofilename preserving type)` |  |  |
| `_Plant` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |
| `_Profile` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Plant` | `I_Plant` | [1..1] |
| `_Language` | `I_Language` | [0..1] |
| `_Profile` | `I_MatlProcurementProfile` | [1..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IMATLPROCPRFLTXT'
@AbapCatalog.buffering: {status: #ACTIVE, type: #GENERIC, numberOfKeyFields: 001}
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.dataCategory: #TEXT
@ObjectModel.representativeKey: 'MaterialProcurementProfile'
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.supportedCapabilities: [#LANGUAGE_DEPENDENT_TEXT, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #SEARCHABLE_ENTITY]
@ObjectModel.usageType: {serviceQuality: #A, sizeCategory: #S, dataClass: #CUSTOMIZING}
@Search.searchable: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC
@EndUserText.label: 'Material Procurement Profile - Text'

define view I_MatlProcurementProfileText
  as select from t460t as txt
  association [1..1] to I_Plant                  as _Plant    on  $projection.Plant = _Plant.Plant
  association [0..1] to I_Language               as _Language on  $projection.Language = _Language.Language
  association [1..1] to I_MatlProcurementProfile as _Profile  on  $projection.MaterialProcurementProfile = _Profile.MaterialProcurementProfile
                                                              and $projection.Plant                      = _Profile.Plant
{
      @ObjectModel.foreignKey.association: '_Profile'
      @ObjectModel.text.element: ['MaterialProcurementProfileName']
  key cast(txt.sobsl as pph_sobsl preserving type)                      as MaterialProcurementProfile,
      @ObjectModel.foreignKey.association: '_Plant'
  key txt.werks                                                         as Plant,
      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key cast(txt.spras as spras preserving type)                          as Language,
      @Search: {defaultSearchElement: true, ranking: #LOW, fuzzinessThreshold: 0.8}
      @Semantics.text: true
      cast(txt.ltext as materialprocurementprofilename preserving type) as MaterialProcurementProfileName,

      // Associations
      _Profile,
      _Plant,
      _Language
};
```
