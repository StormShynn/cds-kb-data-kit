---
name: I_QMSYSTASSIGNMENTFORSUPPLIER
description: "Qmsystassignmentforsupplier"
app_component: QM-PT-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - QM
  - QM-PT
  - interface-view
  - supplier
  - component:QM-PT-2CL
  - lob:Quality Management
  - bo:Supplier
---
# I_QMSYSTASSIGNMENTFORSUPPLIER

**Qmsystassignmentforsupplier**

| Property | Value |
|---|---|
| App Component | `QM-PT-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `QualityManagementSystem` | ✓ | |  | `qssysfam` |  |  |
| `QualityMgmtSystemForSupplier` | ✓ | |  | `qssys` |  |  |
| `_QualityManagementSystem` | | ✓ | | | | |
| `_QualityMgmtSystemForSupplier` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_QualityManagementSystem` | `I_QualityManagementSystem` | [1..1] |
| `_QualityMgmtSystemForSupplier` | `I_QualityMgmtSystemForSupplier` | [1..1] |

## Source Code

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'QM System Assgmt and QM System Rqmts'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.usageType:{
  serviceQuality: #A,
  sizeCategory: #M,
  dataClass: #CUSTOMIZING
}
@ObjectModel.modelingPattern: #NONE
@ObjectModel.supportedCapabilities:
    [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]
@VDM: {
    viewType: #BASIC,
    lifecycle.contract.type: #PUBLIC_LOCAL_API
}
define view entity I_QMSystAssignmentForSupplier as select from tq02a
  association [1..1] to I_QualityManagementSystem as _QualityManagementSystem 
    on $projection.QualityManagementSystem = _QualityManagementSystem.QualityManagementSystem
  association [1..1] to I_QualityMgmtSystemForSupplier as _QualityMgmtSystemForSupplier
    on $projection.QualityMgmtSystemForSupplier = _QualityMgmtSystemForSupplier.QualityMgmtSystemForSupplier
{
  key qssysfam as QualityManagementSystem,
  key qssys    as QualityMgmtSystemForSupplier,
  
  //Associations
  _QualityManagementSystem,
  _QualityMgmtSystemForSupplier
}
```
