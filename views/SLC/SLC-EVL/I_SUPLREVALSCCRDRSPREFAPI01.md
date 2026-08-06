---
name: I_SUPLREVALSCCRDRSPREFAPI01
description: Suplrevalsccrdrsprefapi 01
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
  - component:SLC-EVL
  - lob:Other
---
# I_SUPLREVALSCCRDRSPREFAPI01

**Suplrevalsccrdrsprefapi 01**

| Property | Value |
|---|---|
| App Component | `SLC-EVL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `SuplrEvalScorecardRefUUID` | `SuplrEvalScorecardRefUUID` |
| `SuplrEvalScorecardUUID` | `SuplrEvalScorecardUUID` |
| `SuplrEvalRspUUID` | `SuplrEvalRspUUID` |
| `CreationDateTime` | `CreationDateTime` |
| `CreatedByUser` | `cast(CreatedByUser as /srmsmc/created_by )` |
| `LastChangeDateTime` | `LastChangeDateTime` |
| `LastChangedByUser` | `cast(LastChangedByUser as /srmsmc/last_changed_by )` |

## Source Code

```abap
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.sqlViewName: 'ISESCRSPRAPI01'
@AccessControl.authorizationCheck: #CHECK
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Scorecard Ref to Suplr Eval Response'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.usageType.dataClass:  #TRANSACTIONAL
@ObjectModel.usageType.serviceQuality: #B
@ObjectModel.usageType.sizeCategory: #M
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC
@ObjectModel.supportedCapabilities: 
[ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]
define view I_SuplrEvalSccrdRspRefAPI01
  as select from I_SuplrEvalScorecardRspRef
{
  key SuplrEvalScorecardRefUUID,
      SuplrEvalScorecardUUID,
      SuplrEvalRspUUID,
      CreationDateTime,
      cast(CreatedByUser as /srmsmc/created_by ) as CreatedByUser,
      LastChangeDateTime,
      cast(LastChangedByUser as /srmsmc/last_changed_by ) as LastChangedByUser
}
```
