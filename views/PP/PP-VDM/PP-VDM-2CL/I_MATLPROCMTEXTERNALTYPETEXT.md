---
name: I_MATLPROCMTEXTERNALTYPETEXT
description: "Matlprocmtexternaltypetext"
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
# I_MATLPROCMTEXTERNALTYPETEXT

**Matlprocmtexternaltypetext**

| Property | Value |
|---|---|
| App Component | `PP-VDM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `MaterialProcurementExtType` | ✓ | |  | `cast(text.esobs as pph_esobs preserving type)` |  |  |
| `Language` | ✓ | |  | `cast(text.spras as spras preserving type)` |  |  |
| `MaterialProcurementType` |  | |  | `cast(text.sobes as pph_sobes preserving type)` |  |  |
| `MaterialProcurementExtTypeName` |  | |  | `cast(text.sotxt as dtel_medname preserving type)` |  |  |
| `_Language` | | ✓ | | | | |
| `_ProcurementExternalType` | | ✓ | | | | |
| `_ProcurementType` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |
| `_ProcurementExternalType` | `I_MatlProcmtExternalType` | [1..1] |
| `_ProcurementType` | `I_MatlProcurementType` | [1..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IMATPROCMEXTTYPT'
@AbapCatalog.buffering: {status: #ACTIVE, type: #GENERIC, numberOfKeyFields: 001}
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.dataCategory: #TEXT
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.supportedCapabilities: [#LANGUAGE_DEPENDENT_TEXT, #CDS_MODELING_DATA_SOURCE, #SQL_DATA_SOURCE, #SEARCHABLE_ENTITY]
@ObjectModel.representativeKey: 'MaterialProcurementExtType'
@ObjectModel.usageType: {serviceQuality: #A, sizeCategory: #S, dataClass: #CUSTOMIZING}
@Search.searchable: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC
@EndUserText.label: 'Material Procurement External Type - Text'

/*+[hideWarning] { "IDS" : [ "CALCULATED_FIELD_CHECK" ]  } */
define view I_MatlProcmtExternalTypeText
  as select from t460b as text
  association [0..1] to I_Language               as _Language                on $projection.Language = _Language.Language
  association [1..1] to I_MatlProcmtExternalType as _ProcurementExternalType on $projection.MaterialProcurementExtType = _ProcurementExternalType.MaterialProcurementExtType
  association [1..1] to I_MatlProcurementType    as _ProcurementType         on $projection.MaterialProcurementType = _ProcurementType.MaterialProcurementType
{
      // Key
      @ObjectModel.foreignKey.association: '_ProcurementExternalType'
      @ObjectModel.text.element: ['MaterialProcurementExtTypeName']
  key cast(text.esobs as pph_esobs preserving type)    as MaterialProcurementExtType,
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key cast(text.spras as spras     preserving type)    as Language,
      @ObjectModel.foreignKey.association: '_ProcurementType'
      cast(text.sobes as pph_sobes preserving type)    as MaterialProcurementType,
      @Search: {defaultSearchElement: true, ranking: #LOW, fuzzinessThreshold: 0.8}
      @Semantics.text: true
      cast(text.sotxt as dtel_medname preserving type) as MaterialProcurementExtTypeName,

      // Associations
      _Language,
      _ProcurementExternalType,
      _ProcurementType
};
```
