---
name: I_MRPLOTSIZINGPROCEDURETEXT
description: Mrplotsizingproceduretext
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
# I_MRPLOTSIZINGPROCEDURETEXT

**Mrplotsizingproceduretext**

| Property | Value |
|---|---|
| App Component | `PP-VDM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `MaterialLotSizingProcedure` | ✓ | |  | `disls` |  |  |
| `Language` | ✓ | |  | `spras` |  |  |
| `MaterialLotSizingProcedureName` |  | |  | `loslt` |  |  |
| `_LotSizingProcedure` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_LotSizingProcedure` | `I_MRPLotSizingProcedure` | [1..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IPPLOTSIZPROCTXT'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.buffering: {status: #ACTIVE, type: #FULL, numberOfKeyFields: 000}
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ClientHandling.algorithm: #SESSION_VARIABLE
@Consumption.ranked: true
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.dataCategory: #TEXT
@ObjectModel.representativeKey: 'MaterialLotSizingProcedure'
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.supportedCapabilities: [#LANGUAGE_DEPENDENT_TEXT, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #SEARCHABLE_ENTITY]
@ObjectModel.usageType: {serviceQuality: #A, sizeCategory: #S, dataClass: #CUSTOMIZING}
@Search.searchable: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC
@EndUserText.label: 'MRP Lot Sizing Procedure - Text'

define view I_MRPLotSizingProcedureText
  as select from t439t as txt

  association [1..1] to I_MRPLotSizingProcedure as _LotSizingProcedure on $projection.MaterialLotSizingProcedure = _LotSizingProcedure.MaterialLotSizingProcedure
  association [0..1] to I_Language              as _Language on $projection.Language = _Language.Language
{
      @ObjectModel.foreignKey.association: '_LotSizingProcedure'
      @ObjectModel.text.element: ['MaterialLotSizingProcedureName']
  key txt.disls as MaterialLotSizingProcedure,
      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key txt.spras as Language,
      @Search: {defaultSearchElement: true, ranking: #LOW, fuzzinessThreshold: 0.8}
      @Semantics.text: true
      txt.loslt as MaterialLotSizingProcedureName,
    
      // Associations
      @ObjectModel.association.type: [#TO_COMPOSITION_PARENT, #TO_COMPOSITION_ROOT]
      _LotSizingProcedure,
      _Language
};
```
