---
name: I_OPERATIONDATEOFFSETREFCODE
description: "Operationdateoffsetrefcode"
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
  - component:PP-VDM-MD-2CL
  - lob:Manufacturing
---
# I_OPERATIONDATEOFFSETREFCODE

**Operationdateoffsetrefcode**

| Property | Value |
|---|---|
| App Component | `PP-VDM-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `OperationDateOffsetRefCode` | ✓ | |  | `bzoff` |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_OperationDateOffstRefCodeTxt` | [0..*] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IPPOPDATREFCD'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true 
@AbapCatalog.buffering: {status: #ACTIVE, type: #FULL, numberOfKeyFields: 000}
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics.dataCategory: #DIMENSION
@Analytics.internalName: #LOCAL
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #SEARCHABLE_ENTITY, #VALUE_HELP_PROVIDER, #EXTRACTION_DATA_SOURCE]
@ObjectModel.representativeKey: 'OperationDateOffsetRefCode'
@ObjectModel.usageType: {serviceQuality: #A, sizeCategory: #S, dataClass: #CUSTOMIZING}
@Search.searchable: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC
@EndUserText.label: 'Operation Date Offset Reference Code'
@ObjectModel.sapObjectNodeType.name: 'BOOOpDateOffsetRefCode'
@Analytics.dataExtraction.enabled: true

define view I_OperationDateOffsetRefCode
  as select from tca54
  association [0..*] to I_OperationDateOffstRefCodeTxt as _Text on $projection.OperationDateOffsetRefCode = _Text.OperationDateOffsetRefCode
{
      @ObjectModel.text.association: '_Text'
      @Search: {defaultSearchElement: true, ranking: #HIGH, fuzzinessThreshold: 0.8}
  key bzoff as OperationDateOffsetRefCode,

      // Associations
      _Text
};
```
