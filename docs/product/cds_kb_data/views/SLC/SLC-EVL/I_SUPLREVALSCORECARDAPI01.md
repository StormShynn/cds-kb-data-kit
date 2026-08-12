---
name: I_SUPLREVALSCORECARDAPI01
description: "Suplrevalscorecardapi 01"
app_component: SLC-EVL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SLC
  - SLC-EVL
  - interface-view
  - component:SLC-EVL
  - lob:Other
---
# I_SUPLREVALSCORECARDAPI01

**Suplrevalscorecardapi 01**

| Property | Value |
|---|---|
| App Component | `SLC-EVL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SuplrEvalScorecardUUID` | ✓ | |  |  |  |  |
| `SupplierEvalScorecard` |  | |  |  |  |  |
| `SuplrEvalScorecardName` |  | |  |  |  |  |
| `SuplrEvalStartDate` |  | |  |  |  |  |
| `SuplrEvalEndDate` |  | |  |  |  |  |
| `PurgCatUUID` |  | |  |  |  |  |
| `CreationDateTime` |  | |  |  |  |  |
| `CreatedByUser` |  | |  | `cast(CreatedByUser as /srmsmc/created_by )` |  |  |
| `LastChangeDateTime` |  | |  |  |  |  |
| `LastChangedByUser` |  | |  | `cast(LastChangedByUser as /srmsmc/last_changed_by )` |  |  |
| `SuplrEvalIsFinal` |  | |  |  |  |  |
| `_Supplier` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Supplier` | `I_SuplrEvalSccrdSupplierAPI01` | [0..1] |

## Source Code

```abap
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.sqlViewName: 'ISUPEVSCARDAPI01'
@AccessControl.authorizationCheck: #CHECK
@AccessControl.personalData.blocking: #REQUIRED
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Supplier Evaluation Scorecard'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.representativeKey: ['SuplrEvalScorecardUUID']
@ObjectModel.semanticKey:  [ 'SupplierEvalScorecard' ]
@ObjectModel.usageType.dataClass:  #TRANSACTIONAL
@ObjectModel.usageType.serviceQuality: #B
@ObjectModel.usageType.sizeCategory: #M
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC
@ObjectModel.supportedCapabilities: 
[ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]
define view I_SuplrEvalScorecardAPI01
  as select from I_SupplierEvalScorecard
  association [0..1] to I_SuplrEvalSccrdSupplierAPI01 as _Supplier on $projection.SuplrEvalScorecardUUID = _Supplier.SuplrEvalScorecardUUID
{
  key SuplrEvalScorecardUUID,
      SupplierEvalScorecard,
      SuplrEvalScorecardName,
      SuplrEvalStartDate,
      SuplrEvalEndDate,
      PurgCatUUID,
      CreationDateTime,
      cast(CreatedByUser as /srmsmc/created_by ) as CreatedByUser,
      LastChangeDateTime,
      cast(LastChangedByUser as /srmsmc/last_changed_by ) as LastChangedByUser,
      SuplrEvalIsFinal,
      _Supplier
}
```
