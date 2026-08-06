---
name: I_PRODCMPLNCLOGSDOCUMENTITEMTP
description: Prodcmplnclogsdocumentitemtp
app_component: EHS-SUS-FND-PC
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - EHS
  - EHS-SUS
  - EHS-SUS-FND
  - interface-view
  - transactional-processing
  - document
  - item-level
  - component:EHS-SUS-FND-PC
  - lob:Other
---
# I_PRODCMPLNCLOGSDOCUMENTITEMTP

**Prodcmplnclogsdocumentitemtp**

| Property | Value |
|---|---|
| App Component | `EHS-SUS-FND-PC` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `ProdCmplncLogsDocumentUUID` | `ProdCmplncLogsDocumentUUID` |
| key `ProdCmplncLogsDocumentItem` | `ProdCmplncLogsDocumentItem` |
| `CreationDateTime` | `CreationDateTime` |
| `CreatedByUser` | `CreatedByUser` |
| `LastChangeDateTime` | `LastChangeDateTime` |
| `LastChangedByUser` | `LastChangedByUser` |
| `Product` | `Product` |
| `DepartureCountry` | `DepartureCountry` |
| `DestinationCountry` | `DestinationCountry` |
| `GoodsIssueDate` | `GoodsIssueDate` |
| `SalesOrganization` | `SalesOrganization` |
| `Plant` | `Plant` |
| `Supplier` | `Supplier` |
| `Customer` | `Customer` |
| `ProdCmplncShipToPartyBusPrtn` | `ProdCmplncShipToPartyBusPrtn` |
| `ProdCmplncShipToPartyAddressID` | `ProdCmplncShipToPartyAddressID` |
| `ProdCmplncSftyDataShtRcpntPty` | `ProdCmplncSftyDataShtRcpntPty` |
| `PCSftyDataShtRcpntAddrID` | `PCSftyDataShtRcpntAddrID` |
| `DngrsGoodsMainModeOfTransport` | `DngrsGoodsMainModeOfTransport` |
| `ShippedQuantityInOrderQtyUnit` | `ShippedQuantityInOrderQtyUnit` |
| `OrderQuantityUnit` | `OrderQuantityUnit` |
| `ProdCmplncLogsDocCntctPersnUsr` | `ProdCmplncLogsDocCntctPersnUsr` |
| `ProdCmplncMarketabilityStatus` | `ProdCmplncMarketabilityStatus` |
| `ProdCmplncMktbltyStatusReason` | `ProdCmplncMktbltyStatusReason` |
| `ProdCmplncDngrsGoodsStatus` | `ProdCmplncDngrsGoodsStatus` |
| `DangerousGoodsStatusReason` | `DangerousGoodsStatusReason` |
| `ProdCmplncSftyDataSheetStatus` | `ProdCmplncSftyDataSheetStatus` |
| `ProdCmplncSDSStatusReason` | `ProdCmplncSDSStatusReason` |
| `ChmlSuplrChkStatus` | `ChmlSuplrChkStatus` |
| `ChmlSuplrChkStatusReason` | `ChmlSuplrChkStatusReason` |
| `SftyDtaShtRcpntPtyDetnType` | `SftyDtaShtRcpntPtyDetnType` |
| `_PackingInstruction` | *Association* |
| `_Document` | *Association* |

## Source Code

```abap
@EndUserText.label: 'Prod Compliance Logs Document Item - TP'
@AccessControl.authorizationCheck: #MANDATORY
@AccessControl.personalData.blocking: #REQUIRED
@VDM.viewType: #TRANSACTIONAL
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@ObjectModel.supportedCapabilities: [#TRANSACTIONAL_PROVIDER]
@ObjectModel.modelingPattern: #TRANSACTIONAL_INTERFACE
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.usageType:{
  serviceQuality: #A,
  sizeCategory: #L,
  dataClass: #TRANSACTIONAL
}

define view entity I_ProdCmplncLogsDocumentItemTP
  as projection on R_ProdCmplncLogsDocumentItemTP
{
  key ProdCmplncLogsDocumentUUID,
  key ProdCmplncLogsDocumentItem,

      @Semantics.systemDateTime.createdAt: true
      CreationDateTime,
      @Semantics.user.createdBy: true
      CreatedByUser,
      @Semantics.systemDateTime.lastChangedAt: true
      LastChangeDateTime,
      @Semantics.user.lastChangedBy: true
      LastChangedByUser,

      Product,
      DepartureCountry,
      DestinationCountry,
      GoodsIssueDate,
      SalesOrganization,
      Plant,
      Supplier,
      Customer,
      ProdCmplncShipToPartyBusPrtn,
      ProdCmplncShipToPartyAddressID,
      ProdCmplncSftyDataShtRcpntPty,
      PCSftyDataShtRcpntAddrID,
      DngrsGoodsMainModeOfTransport,
      @Semantics.quantity.unitOfMeasure : 'OrderQuantityUnit'
      ShippedQuantityInOrderQtyUnit,
      OrderQuantityUnit,
      ProdCmplncLogsDocCntctPersnUsr,
      ProdCmplncMarketabilityStatus,
      ProdCmplncMktbltyStatusReason,
      ProdCmplncDngrsGoodsStatus,
      DangerousGoodsStatusReason,
      ProdCmplncSftyDataSheetStatus,
      ProdCmplncSDSStatusReason,
      ChmlSuplrChkStatus,
      ChmlSuplrChkStatusReason,
      SftyDtaShtRcpntPtyDetnType,

      /* Associations */
      _PackingInstruction : redirected to composition child I_PCLgsDcItmPackgInstructionTP,
      _Document           : redirected to parent I_ProdCmplncLogsDocumentTP
}
```
