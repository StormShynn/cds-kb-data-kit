---
name: I_REPETITIVEMFGPROFILETEXT
description: "Repetitivemfgprofiletext"
app_component: PP-VDM-2CL
software_component: SAPSCORE
release_state: released
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
# I_REPETITIVEMFGPROFILETEXT

**Repetitivemfgprofiletext**

| Property | Value |
|---|---|
| App Component | `PP-VDM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `RepetitiveManufacturingProfile` | ✓ | |  | `sfpro` |  |  |
| `Language` | ✓ | |  | `spras` |  |  |
| `RepetitiveMfgProfileName` |  | |  | `spbez` |  |  |
| `_Profile` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Profile` | `I_RepetitiveMfgProfile` | [1..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IREMPROFTXT'
@AbapCatalog.buffering: {status: #ACTIVE, type: #FULL, numberOfKeyFields: 000}
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.dataCategory: #TEXT
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.supportedCapabilities: [#LANGUAGE_DEPENDENT_TEXT, #CDS_MODELING_DATA_SOURCE, #SQL_DATA_SOURCE, #SEARCHABLE_ENTITY]
@ObjectModel.representativeKey: 'RepetitiveManufacturingProfile'
@ObjectModel.usageType: {serviceQuality: #A, sizeCategory: #S, dataClass: #CUSTOMIZING}
@Search.searchable: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC
@EndUserText.label: 'Repetitive Manufacturing Profile - Text'

define view I_RepetitiveMfgProfileText
  as select from t437r as txt
  association [1..1] to I_RepetitiveMfgProfile as _Profile  on  $projection.RepetitiveManufacturingProfile = _Profile.RepetitiveManufacturingProfile
  association [0..1] to I_Language             as _Language on $projection.Language = _Language.Language
{
      @ObjectModel.foreignKey.association: '_Profile'
      @ObjectModel.text.element: ['RepetitiveMfgProfileName']
  key txt.sfpro                 as RepetitiveManufacturingProfile,
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key txt.spras                 as Language,
      @Search: {defaultSearchElement: true, ranking: #LOW, fuzzinessThreshold: 0.8}
      @Semantics.text: true
      txt.spbez                 as RepetitiveMfgProfileName,

      // Associations
      @ObjectModel.association.type: [#TO_COMPOSITION_PARENT, #TO_COMPOSITION_ROOT]
      _Profile,
      _Language
};
```
