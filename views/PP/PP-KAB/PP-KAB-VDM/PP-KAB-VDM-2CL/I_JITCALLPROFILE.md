---
name: I_JITCALLPROFILE
description: Jitcallprofile
app_component: PP-KAB-VDM-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PP
  - PP-KAB
  - PP-KAB-VDM
  - interface-view
  - component:PP-KAB-VDM-2CL
  - lob:Manufacturing
---
# I_JITCALLPROFILE

**Jitcallprofile**

| Property | Value |
|---|---|
| App Component | `PP-KAB-VDM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `JITCallProfile` | ✓ | |  | `cast(pabprf as vdm_pabprf preserving type )` |  |  |
| `JITCallOutboundType` |  | |  | `pabart` |  |  |
| `JITCallPartnerRole` |  | |  | `cast(pabpar as vdm_pabpar preserving type )` |  |  |
| `JITCallSummarizationStrategy` |  | |  | `pabzus` |  |  |
| `JITCallTimeDefinition` |  | |  | `pabztd` |  |  |
| `JITCallGRPostingControl` |  | |  | `goods_receipt_posting_control` |  |  |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IPPJITCLPROF'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@EndUserText.label: 'JIT Call Profile'
@AbapCatalog.buffering.status: #ACTIVE
@AbapCatalog.buffering.type: #FULL

@AccessControl.authorizationCheck: #NOT_REQUIRED
@ObjectModel.representativeKey: 'JITCallProfile'
@ObjectModel.usageType: {serviceQuality: #A, sizeCategory: #S, dataClass: #CUSTOMIZING}
@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@ClientHandling.algorithm: #SESSION_VARIABLE

@Metadata.ignorePropagatedAnnotations: true

@VDM.viewType: #BASIC
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API

define view I_JITCallProfile
  as select from cpabprf
{
  key cast(pabprf as vdm_pabprf preserving type )    as JITCallProfile,
      pabart                                         as JITCallOutboundType,
      cast(pabpar as vdm_pabpar preserving type )    as JITCallPartnerRole, // cast to identical type to avoid conversion exit
      pabzus                                         as JITCallSummarizationStrategy,
      pabztd                                         as JITCallTimeDefinition,
      goods_receipt_posting_control                  as JITCallGRPostingControl

}
```
