---
name: I_VARIANCEREASONTEXT
description: "Variancereasontext"
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
# I_VARIANCEREASONTEXT

**Variancereasontext**

| Property | Value |
|---|---|
| App Component | `PP-VDM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `VarianceReasonCode` | ✓ | |  | `cast(txt.grund as pph_agrnd preserving type)` |  |  |
| `Plant` | ✓ | |  | `werks` |  |  |
| `Language` | ✓ | |  | `cast(txt.spras as spras preserving type)` |  |  |
| `VarianceReasonName` |  | |  | `cast(txt.grdtx as pph_grdtx preserving type)` |  |  |
| `_Plant` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |
| `_VarianceReason` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Plant` | `I_Plant` | [1..1] |
| `_Language` | `I_Language` | [1..1] |
| `_VarianceReason` | `I_VarianceReason` | [1..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IVARCREASONTEXT'
@AbapCatalog.buffering: {status: #ACTIVE, type: #GENERIC, numberOfKeyFields: 001}
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics.dataExtraction.enabled: true
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.supportedCapabilities: [#LANGUAGE_DEPENDENT_TEXT, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #SEARCHABLE_ENTITY, #EXTRACTION_DATA_SOURCE]
@ObjectModel.representativeKey: 'VarianceReasonCode'
@ObjectModel.dataCategory: #TEXT
@ObjectModel.usageType: {serviceQuality: #A, sizeCategory: #S, dataClass: #CUSTOMIZING}
@Search.searchable: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC
@EndUserText.label: 'Variance Reason - Text'

define view I_VarianceReasonText
  as select from trugt as txt
  association [1..1] to I_Plant          as _Plant          on  $projection.Plant = _Plant.Plant
  association [1..1] to I_Language       as _Language       on  $projection.Language = _Language.Language
  association [1..1] to I_VarianceReason as _VarianceReason on  $projection.Plant              = _VarianceReason.Plant
                                                            and $projection.VarianceReasonCode = _VarianceReason.VarianceReasonCode
{
      @ObjectModel.foreignKey.association: '_VarianceReason'
      @ObjectModel.text.element: ['VarianceReasonName']
  key cast(txt.grund as pph_agrnd preserving type) as VarianceReasonCode,
      @ObjectModel.foreignKey.association: '_Plant'
      @ObjectModel.sapObjectNodeTypeReference: 'Plant'
  key txt.werks                                    as Plant,
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key cast(txt.spras as spras preserving type)     as Language,
      @Search: {defaultSearchElement: true, ranking: #LOW, fuzzinessThreshold: 0.8}
      @Semantics.text: true
      cast(txt.grdtx as pph_grdtx preserving type) as VarianceReasonName,

      // Associations
      @ObjectModel.association.type: [#TO_COMPOSITION_PARENT, #TO_COMPOSITION_ROOT] 
      _VarianceReason,
      _Plant,
      _Language
};
```
