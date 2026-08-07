---
name: I_PRODNRTGNONHISTORICSQNCTP_2
description: Prodnrtgnonhistoricsqnctp 2
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
  - transactional-processing
  - component:PP-VDM-MD-2CL
  - lob:Manufacturing
---
# I_PRODNRTGNONHISTORICSQNCTP_2

**Prodnrtgnonhistoricsqnctp 2**

| Property | Value |
|---|---|
| App Component | `PP-VDM-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `ProductionRoutingGroup` | ✓ | |  |  |
| `ProductionRouting` | ✓ | |  |  |
| `ProductionRoutingSequence` | ✓ | |  |  |
| `ChangedDateTime` |  | |  |  |
| `_ProdnRtgTP` | | ✓ | | |
| `_Header` | | ✓ | | |
| `_Sequence` | | ✓ | | |
| `_Operation` | | ✓ | | |
| `_SubOp` | | ✓ | | |
| `_OpCompAlloc` | | ✓ | | |
| `_OpDocPRTAssgmt` | | ✓ | | |
| `_OpEquipPRTAssgmt` | | ✓ | | |
| `_OpMatlPRTAssgmt` | | ✓ | | |
| `_OpMiscPRTAssgmt` | | ✓ | | |
| `_OpInspCharcsAssgmt` | | ✓ | | |

## Source Code

```abap
@EndUserText.label: 'Interface for BO ProductionRouting NonHist Sequence - TP'
@ObjectModel.sapObjectNodeType.name: 'ProductionRouting'
@ObjectModel.usageType: { serviceQuality: #B, sizeCategory: #L, dataClass: #MASTER }
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #TRANSACTIONAL
@ObjectModel.supportedCapabilities: [#TRANSACTIONAL_PROVIDER]
@ObjectModel.modelingPattern: #TRANSACTIONAL_INTERFACE
@Metadata.ignorePropagatedAnnotations: true
@AccessControl.authorizationCheck: #MANDATORY
define view entity I_ProdnRtgNonHistoricSqncTP_2
  as projection on R_ProdnRtgNonHistoricSqncTP_2
{
  key ProductionRoutingGroup,
  key ProductionRouting,
  key ProductionRoutingSequence,
      ChangedDateTime,

      /* Associations */
      _ProdnRtgTP         : redirected to parent I_ProductionRoutingTP_2,
      _Header             : redirected to I_ProductionRoutingHeaderTP_2,
      _Sequence           : redirected to composition child I_ProdnRoutingSequenceTP_2,
      _Operation          : redirected to composition child I_ProdnRoutingOperationTP_2,
      _SubOp              : redirected to composition child I_ProductionRoutingSubopTP_2,
      _OpCompAlloc        : redirected to composition child I_ProdnRoutingOpCompAllocTP_2,
      _OpDocPRTAssgmt     : redirected to composition child I_ProdnRtgOpDocPRTAssgmtTP_2,
      _OpEquipPRTAssgmt   : redirected to composition child I_ProdnRtgOpEquipPRTAssgmtTP_2,
      _OpMatlPRTAssgmt    : redirected to composition child I_ProdnRtgOpMatlPRTAssgmtTP_2,
      _OpMiscPRTAssgmt    : redirected to composition child I_ProdnRtgOpMiscPRTAssgmtTP_2,
      _OpInspCharcsAssgmt : redirected to composition child I_ProdnRtgInspCharcsAssgmtTP_2
}
```
