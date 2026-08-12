---
name: I_SUPLRACTYTSKACTIVITYREFAPI01
description: "Suplractytskactivityrefapi 01"
app_component: SLC-ACT
software_component: SAPSCORE
release_state: released
dev_ext_status: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SLC
  - SLC-ACT
  - interface-view
  - component:SLC-ACT
  - lob:Other
---
# I_SUPLRACTYTSKACTIVITYREFAPI01

**Suplractytskactivityrefapi 01**

| Property | Value |
|---|---|
| App Component | `SLC-ACT` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SuplrActyTaskReferenceUUID` | ✓ | |  |  |  |  |
| `SuplrActyTaskUUID` |  | |  |  |  |  |
| `SuplrActyUUID` |  | |  |  |  |  |
| `SupplierActivity` |  | |  |  |  |  |

## Source Code

```abap
@EndUserText.label: 'Activity Reference to Supplier Acty Task'
@VDM.viewType: #BASIC
@ObjectModel.supportedCapabilities: 
[ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@AccessControl.authorizationCheck: #CHECK
@ObjectModel.usageType.dataClass:  #TRANSACTIONAL
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #M
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog.sqlViewName: 'IACTTSKREFAPI01'
@Metadata.ignorePropagatedAnnotations: true
@AbapCatalog.compiler.compareFilter: true
define view I_SuplrActyTskActivityRefAPI01
  as select from I_SupplierActivityTaskActRef
{

  key SuplrActyTaskReferenceUUID,
      SuplrActyTaskUUID,
      SuplrActyUUID,
      SupplierActivity
}
```
