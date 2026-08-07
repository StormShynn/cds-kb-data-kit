---
name: I_PRODUCTIONROUTINGTP_2
description: Productionroutingtp 2
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
  - product
  - routing
  - component:PP-VDM-MD-2CL
  - lob:Manufacturing
---
# I_PRODUCTIONROUTINGTP_2

**Productionroutingtp 2**

| Property | Value |
|---|---|
| App Component | `PP-VDM-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ProductionRoutingGroup` | ✓ | |  |  |  |  |
| `ProductionRouting` | ✓ | |  |  |  |  |
| `BillOfOperationsVersionType` |  | |  |  |  |  |
| `BillOfOperationsSubtype` |  | |  |  |  |  |
| `LastUsageDate` |  | |  |  |  |  |
| `NumberOfUsages` |  | |  |  |  |  |
| `HasChangeNumber` |  | |  |  |  |  |
| `HasParameterEffectivity` |  | |  |  |  |  |
| `LastChangeDate` |  | |  |  |  |  |
| `LastChangeTime` |  | |  |  |  |  |
| `LastChangedByUser` |  | |  |  |  |  |
| `IsMarkedForDeletion` |  | |  |  |  |  |
| `RoutingIsReworkRouting` |  | |  |  |  |  |
| `ProdnProcgIsFlexible` |  | |  |  |  |  |
| `ChangedDateTime` |  | |  |  |  |  |
| `_Header` | | ✓ | | | | |
| `_MatlAssgmt` | | ✓ | | | | |
| `_NonSqnc` | | ✓ | | | | |

## Source Code

```abap
@EndUserText.label: 'Interface for BO ProductionRouting Main Header - TP'
@ObjectModel.sapObjectNodeType.name: 'ProductionRouting'
@ObjectModel.usageType: { serviceQuality: #B, sizeCategory: #L, dataClass: #MASTER }
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #TRANSACTIONAL
@ObjectModel.supportedCapabilities: [#TRANSACTIONAL_PROVIDER]
@ObjectModel.modelingPattern: #TRANSACTIONAL_INTERFACE
@Metadata.ignorePropagatedAnnotations: true
@AccessControl.authorizationCheck: #MANDATORY

define root view entity I_ProductionRoutingTP_2
  provider contract transactional_interface
  as projection on R_ProductionRoutingTP_2
{
  key ProductionRoutingGroup,
  key ProductionRouting,
      BillOfOperationsVersionType,
      BillOfOperationsSubtype,
      LastUsageDate,
      NumberOfUsages,
      HasChangeNumber,
      HasParameterEffectivity,
      @Semantics.systemDate.lastChangedAt: true
      LastChangeDate,
      @Semantics.systemTime.lastChangedAt: true
      LastChangeTime,
      @Semantics.user.lastChangedBy: true
      LastChangedByUser,
      IsMarkedForDeletion,
      RoutingIsReworkRouting,
      ProdnProcgIsFlexible,
      @Semantics.systemDateTime.lastChangedAt: true
      ChangedDateTime,

      /* Associations */
      _Header     : redirected to composition child I_ProductionRoutingHeaderTP_2,
      _MatlAssgmt : redirected to composition child I_ProdnRoutingMatlAssgmtTP_2,
      _NonSqnc    : redirected to composition child I_ProdnRtgNonHistoricSqncTP_2
}
```
