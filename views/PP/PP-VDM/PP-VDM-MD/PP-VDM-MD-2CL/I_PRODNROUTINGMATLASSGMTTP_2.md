---
name: I_PRODNROUTINGMATLASSGMTTP_2
description: Prodnroutingmatlassgmttp 2
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
  - routing
  - component:PP-VDM-MD-2CL
  - lob:Manufacturing
---
# I_PRODNROUTINGMATLASSGMTTP_2

**Prodnroutingmatlassgmttp 2**

| Property | Value |
|---|---|
| App Component | `PP-VDM-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `Product` | ✓ | |  |  |
| `Plant` | ✓ | |  |  |
| `ProductionRoutingGroup` | ✓ | |  |  |
| `ProductionRouting` | ✓ | |  |  |
| `ProductionRoutingMatlAssgmt` | ✓ | |  |  |
| `ProductionRtgMatlAssgmtIntVers` | ✓ | |  |  |
| `CreationDate` |  | |  |  |
| `CreatedByUser` |  | |  |  |
| `LastChangeDate` |  | |  |  |
| `LastChangedByUser` |  | |  |  |
| `ValidityStartDate` |  | |  |  |
| `ValidityEndDate` |  | |  |  |
| `ChangeNumber` |  | |  |  |
| `ChangedDateTime` |  | |  |  |
| `SalesOrder` |  | |  |  |
| `SalesOrderItem` |  | |  |  |
| `_ProdnRtgTP` | | ✓ | | |
| `_Header` | | ✓ | | |

## Source Code

```abap
@EndUserText.label: 'Interface for BO ProductionRouting Material Assignment - TP'
@ObjectModel.sapObjectNodeType.name: 'ProductionRouting'
@ObjectModel.usageType: { serviceQuality: #B, sizeCategory: #L, dataClass: #MASTER }
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #TRANSACTIONAL
@ObjectModel.supportedCapabilities: [#TRANSACTIONAL_PROVIDER]
@ObjectModel.modelingPattern: #TRANSACTIONAL_INTERFACE
@Metadata.ignorePropagatedAnnotations: true
@AccessControl.authorizationCheck: #MANDATORY
define view entity I_ProdnRoutingMatlAssgmtTP_2
  as projection on R_ProdnRoutingMatlAssgmtTP_2
{
  key Product,
  key Plant,
  key ProductionRoutingGroup,
  key ProductionRouting,
  key ProductionRoutingMatlAssgmt,
  key ProductionRtgMatlAssgmtIntVers,
      CreationDate,
      CreatedByUser,
      LastChangeDate,
      LastChangedByUser,
      @Semantics.businessDate.from: true
      ValidityStartDate,
      @Semantics.businessDate.to: true
      ValidityEndDate,
      ChangeNumber,
      ChangedDateTime,
      SalesOrder,
      SalesOrderItem,

      /* Associations */
      _ProdnRtgTP : redirected to parent I_ProductionRoutingTP_2,
      _Header     : redirected to I_ProductionRoutingHeaderTP_2
}
```
