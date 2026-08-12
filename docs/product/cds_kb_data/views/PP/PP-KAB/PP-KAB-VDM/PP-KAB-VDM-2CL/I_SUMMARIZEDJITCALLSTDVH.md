---
name: I_SUMMARIZEDJITCALLSTDVH
description: "Summarizedjitcallstdvh"
app_component: PP-KAB-VDM-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PP
  - PP-KAB
  - PP-KAB-VDM
  - interface-view
  - value-help
  - standard-value-help
  - component:PP-KAB-VDM-2CL
  - lob:Manufacturing
---
# I_SUMMARIZEDJITCALLSTDVH

**Summarizedjitcallstdvh**

| Property | Value |
|---|---|
| App Component | `PP-KAB-VDM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `JITCallNumber` | ✓ | |  |  |  |  |
| `Plant` |  | |  |  |  |  |
| `Supplier` |  | |  |  |  |  |
| `SumzdJITCallPlndDelivDateTime` |  | |  |  |  |  |
| `_Supplier` | | ✓ | | | | |
| `_SupplierCompanyByPlant` | | ✓ | | | | |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IPPSJITCALLSTDVH'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@EndUserText.label: 'Summarized JIT Call'

@AccessControl.authorizationCheck: #MANDATORY
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.usageType: { serviceQuality: #A, sizeCategory: #XXL, dataClass: #TRANSACTIONAL }
@ObjectModel.representativeKey: 'JITCallNumber'
@ObjectModel.supportedCapabilities: [ #SEARCHABLE_ENTITY, #VALUE_HELP_PROVIDER ]
@ObjectModel.dataCategory: #VALUE_HELP
@ObjectModel.modelingPattern: #VALUE_HELP_PROVIDER
@ClientHandling.algorithm: #SESSION_VARIABLE

@VDM.viewType: #COMPOSITE

@Search.searchable: true
@Consumption.ranked: true

define view I_SummarizedJITCallStdVH as select from I_SummarizedJITCall 
{
 @Search: {defaultSearchElement: true, ranking: #HIGH, fuzzinessThreshold: 0.8}
 key JITCallNumber,
     Plant,
     Supplier,
     SumzdJITCallPlndDelivDateTime,
     
  //only for DCL
     @Consumption.hidden: true
     _Supplier,
     @Consumption.hidden: true
     _SupplierCompanyByPlant   
}
```
