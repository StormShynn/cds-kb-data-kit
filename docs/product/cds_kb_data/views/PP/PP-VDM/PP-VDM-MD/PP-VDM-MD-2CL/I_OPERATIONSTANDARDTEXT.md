---
name: I_OPERATIONSTANDARDTEXT
description: "Operationstandardtext"
app_component: PP-VDM-MD-2CL
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
  - PP-VDM-MD
  - interface-view
  - text-view
  - text
  - component:PP-VDM-MD-2CL
  - lob:Manufacturing
---
# I_OPERATIONSTANDARDTEXT

**Operationstandardtext**

| Property | Value |
|---|---|
| App Component | `PP-VDM-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `OperationStandardTextCode` | ✓ | |  | `cast(t435.vlsch as pph_ktsch preserving type)` |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_OperationStandardTextText` | [0..*] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IPPOPSTDTEXT'
@AbapCatalog.buffering: {status: #ACTIVE, type: #GENERIC, numberOfKeyFields: 001}
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true 
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics.dataCategory: #DIMENSION
@Analytics.internalName: #LOCAL
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #SEARCHABLE_ENTITY, #VALUE_HELP_PROVIDER, #EXTRACTION_DATA_SOURCE]
@ObjectModel.representativeKey: 'OperationStandardTextCode'
@ObjectModel.usageType: {serviceQuality: #A, sizeCategory: #L, dataClass: #CUSTOMIZING}
@Search.searchable: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC
@EndUserText.label: 'Standard Text for Operation'
  @ObjectModel.sapObjectNodeType.name: 'BOOOperationsStandardText'
  @Analytics.dataExtraction.enabled: true


define view I_OperationStandardText
  as select from t435
  association [0..*] to I_OperationStandardTextText as _Text on $projection.OperationStandardTextCode = _Text.OperationStandardTextCode
{
      @ObjectModel.text.association: '_Text'
      @Search: {defaultSearchElement: true, ranking: #HIGH, fuzzinessThreshold: 0.8}
  key cast(t435.vlsch as pph_ktsch preserving type) as OperationStandardTextCode,

      // get name
      _Text
};
```
