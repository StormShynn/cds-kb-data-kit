---
name: I_TREASURYREVERSALREASON
description: Treasuryreversalreason
app_component: FIN-FSCM-TRM-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FIN
  - FIN-FSCM
  - FIN-FSCM-TRM
  - interface-view
  - treasury
  - component:FIN-FSCM-TRM-2CL
  - lob:Other
---
# I_TREASURYREVERSALREASON

**Treasuryreversalreason**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-TRM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `TreasuryReversalReason` | ✓ | |  | `sstogrd` |
| `_ReversalReasonText` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ReversalReasonText` | `I_TreasuryReversalReasonText` | [0..*] |

## Source Code

```abap
@AbapCatalog.buffering.status: #NOT_ALLOWED
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AbapCatalog.sqlViewName: 'ITRSYREVREAS'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics.dataCategory: #DIMENSION 
@Analytics.dataExtraction.enabled: true
@ObjectModel.supportedCapabilities: [ #ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #EXTRACTION_DATA_SOURCE ]
@ObjectModel.modelingPattern: [ #ANALYTICAL_DIMENSION ]
@Analytics.internalName: #LOCAL
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Treasury Reversal Reason'
@ObjectModel.representativeKey: 'TreasuryReversalReason'
@ObjectModel.usageType.dataClass: #MASTER
@ObjectModel.usageType.serviceQuality: #B
@ObjectModel.usageType.sizeCategory: #S
@Metadata.allowExtensions:true  
@Metadata.ignorePropagatedAnnotations: true 
@VDM.viewType: #BASIC 
@ObjectModel.sapObjectNodeType.name: 'TreasuryReversalReason'

define view I_TreasuryReversalReason 
  as select from tzst
  association [0..*] to I_TreasuryReversalReasonText as _ReversalReasonText on $projection.TreasuryReversalReason = _ReversalReasonText.TreasuryReversalReason
{
//  @ObjectModel.text.association: '_ReversalReasonText'
  key sstogrd as TreasuryReversalReason,

 _ReversalReasonText
}
```
