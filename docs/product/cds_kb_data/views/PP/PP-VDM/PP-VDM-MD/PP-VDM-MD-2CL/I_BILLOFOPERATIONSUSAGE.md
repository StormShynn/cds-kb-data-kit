---
name: I_BILLOFOPERATIONSUSAGE
description: "Billofoperationsusage"
app_component: PP-VDM-MD-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
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
# I_BILLOFOPERATIONSUSAGE

**Billofoperationsusage**

| Property | Value |
|---|---|
| App Component | `PP-VDM-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BillOfOperationsUsage` | ✓ | |  | `cast(t411.verwe as billofoperationsusage preserving type)` |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_BillOfOperationsUsageText` | [0..*] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IPPBOOUSAGE'
@AbapCatalog.buffering: {status: #ACTIVE, type: #GENERIC, numberOfKeyFields: 001}
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics.dataCategory: #DIMENSION
@ClientHandling.algorithm: #SESSION_VARIABLE
@ClientHandling.type: #CLIENT_DEPENDENT
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #SEARCHABLE_ENTITY,#EXTRACTION_DATA_SOURCE]
@ObjectModel.representativeKey: 'BillOfOperationsUsage'
@ObjectModel.resultSet.sizeCategory: #XS
@ObjectModel.usageType: {serviceQuality: #A, sizeCategory: #S, dataClass: #CUSTOMIZING}
@Search.searchable: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC
@EndUserText.label: 'Bill of Operations Usage'
@ObjectModel.sapObjectNodeType.name: 'BillOfOperationsUsage'
@Analytics.dataExtraction.enabled: true

define view I_BillOfOperationsUsage
  as select from t411 as t411

  association [0..*] to I_BillOfOperationsUsageText as _Text on $projection.BillOfOperationsUsage = _Text.BillOfOperationsUsage
{
      @ObjectModel.text.association: '_Text'
      @Search: {defaultSearchElement: true, ranking: #HIGH, fuzzinessThreshold: 0.8}
  key cast(t411.verwe as billofoperationsusage preserving type) as BillOfOperationsUsage,

      // Associations
      _Text
};
```
