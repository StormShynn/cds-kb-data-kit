---
name: I_SUPPLIEREVALRESPONSEAPI01
description: Supplierevalresponseapi 01
app_component: SLC-EVL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SLC
  - SLC-EVL
  - interface-view
  - supplier
  - component:SLC-EVL
  - lob:Other
  - bo:Supplier
---
# I_SUPPLIEREVALRESPONSEAPI01

**Supplierevalresponseapi 01**

| Property | Value |
|---|---|
| App Component | `SLC-EVL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SuplrEvalRspUUID` | ✓ | |  |  |  |  |
| `SupplierEvalResponse` |  | |  |  |  |  |
| `SuplrEvalRspName` |  | |  |  |  |  |
| `SuplrEvalStartDate` |  | |  |  |  |  |
| `SuplrEvalEndDate` |  | |  |  |  |  |
| `SuplrEvalSubmissionDateTime` |  | |  |  |  |  |
| `CreationDateTime` |  | |  |  |  |  |
| `SuplrEvalDeadlineDate` |  | |  |  |  |  |
| `PurgCatUUID` |  | |  |  |  |  |
| `CreatedByUser` |  | |  | `cast(CreatedByUser as /srmsmc/created_by )` |  |  |
| `LastChangeDateTime` |  | |  |  |  |  |
| `LastChangedByUser` |  | |  | `cast(LastChangedByUser as /srmsmc/last_changed_by )` |  |  |
| `Language` |  | |  |  |  |  |
| `SuplrEvalRspLifecycleStatus` |  | |  |  |  |  |
| `_Supplier` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Supplier` | `I_SuplrEvalRspSupplierAPI01` | [0..1] |

## Source Code

```abap
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.sqlViewName: 'ISEVALRESPAPI01'
@AccessControl.authorizationCheck: #CHECK
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Supplier Evaluation Response'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.usageType.dataClass:  #TRANSACTIONAL
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #M
@ObjectModel.semanticKey:  [ 'SupplierEvalResponse' ]
@ObjectModel.representativeKey: 'SuplrEvalRspUUID'
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC
@ObjectModel.supportedCapabilities: 
[ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]
define view I_SupplierEvalResponseAPI01
  as select from I_SupplierEvalResponse
  association [0..1] to I_SuplrEvalRspSupplierAPI01 as _Supplier on $projection.SuplrEvalRspUUID = _Supplier.SuplrEvalRspUUID
{
  key SuplrEvalRspUUID,
      SupplierEvalResponse,
      SuplrEvalRspName,
      SuplrEvalStartDate,
      SuplrEvalEndDate,
      SuplrEvalSubmissionDateTime,
      CreationDateTime,
      SuplrEvalDeadlineDate,
      PurgCatUUID,
      cast(CreatedByUser as /srmsmc/created_by ) as CreatedByUser,
      LastChangeDateTime,
      cast(LastChangedByUser as /srmsmc/last_changed_by ) as LastChangedByUser,
      Language,
      SuplrEvalRspLifecycleStatus,
      _Supplier
}
```
