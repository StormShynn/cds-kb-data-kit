---
name: I_BILLOFOPERATIONSSTATUS
description: Billofoperationsstatus
app_component: PP-VDM-MD-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PP
  - PP-VDM
  - PP-VDM-MD
  - interface-view
  - status
  - component:PP-VDM-MD-2CL
  - lob:Manufacturing
---
# I_BILLOFOPERATIONSSTATUS

**Billofoperationsstatus**

| Property | Value |
|---|---|
| App Component | `PP-VDM-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `BillOfOperationsStatus` | ✓ | |  | `plnst` |
| `IsReleased` |  | |  | `freif` |
| `_Text` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_BillOfOperationsStatusText` | [0..*] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IPPBOOSTATUS'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.buffering: {status: #ACTIVE, type: #GENERIC, numberOfKeyFields: 001}
@AbapCatalog.preserveKey: true 
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics.dataCategory: #DIMENSION
@ClientHandling.algorithm: #SESSION_VARIABLE
@ClientHandling.type: #CLIENT_DEPENDENT
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #SEARCHABLE_ENTITY,#EXTRACTION_DATA_SOURCE]
@ObjectModel.representativeKey: 'BillOfOperationsStatus'
@ObjectModel.semanticKey: 'BillOfOperationsStatus'
@ObjectModel.usageType: {serviceQuality: #A, sizeCategory: #M, dataClass: #CUSTOMIZING}
@ObjectModel.resultSet.sizeCategory: #XS
@Search.searchable: true
@VDM.viewType: #BASIC
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@EndUserText.label: 'Bill of Operations Status Code'
@ObjectModel.sapObjectNodeType.name: 'BillOfOperationStatus'
@Analytics.dataExtraction.enabled: true

define view I_BillOfOperationsStatus
  as select from t412 as t412
  association [0..*] to I_BillOfOperationsStatusText as _Text on $projection.BillOfOperationsStatus = _Text.BillOfOperationsStatus
{
      @ObjectModel.text.association: '_Text'
      @Search: {defaultSearchElement: true, ranking: #HIGH, fuzzinessThreshold: 0.8}
  key t412.plnst as BillOfOperationsStatus,
 
      t412.freif as IsReleased,

      // Associations
      _Text
};
```
