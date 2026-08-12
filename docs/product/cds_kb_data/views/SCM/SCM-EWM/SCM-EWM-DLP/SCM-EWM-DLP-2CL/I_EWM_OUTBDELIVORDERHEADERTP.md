---
name: I_EWM_OUTBDELIVORDERHEADERTP
description: "Ewm Outbdelivorderheadertp"
app_component: SCM-EWM-DLP-2CL
software_component: SAPSCORE
release_state: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SCM
  - SCM-EWM
  - SCM-EWM-DLP
  - interface-view
  - transactional-processing
  - header-level
  - component:SCM-EWM-DLP-2CL
  - lob:Other
---
# I_EWM_OUTBDELIVORDERHEADERTP

**Ewm Outbdelivorderheadertp**

| Property | Value |
|---|---|
| App Component | `SCM-EWM-DLP-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `EWMOutboundDeliveryOrder` | ✓ | |  |  |  |  |
| `OutboundDeliveryOrderUUID` |  | |  |  |  |  |
| `SAPObjectNodeType` |  | |  |  |  |  |
| `EWMOutbDeliveryOrderUUIDHex` |  | |  |  |  |  |
| `EWMWarehouse` |  | |  |  |  |  |
| `EWMDeliveryDocumentCategory` |  | |  |  |  |  |
| `EWMDeliveryDocumentType` |  | |  |  |  |  |
| `ShipToParty` |  | |  |  |  |  |
| `ShipToPartyName` |  | |  |  |  |  |
| `EWMShipToIsBusPurposeCmpltd` |  | |  |  |  |  |
| `Carrier` |  | |  |  |  |  |
| `CarrierName` |  | |  |  |  |  |
| `EWMCarrierIsBusPurposeCmpltd` |  | |  |  |  |  |
| `OutboundDelivery` |  | |  |  |  |  |
| `FreightOrder` |  | |  |  |  |  |
| `MasterBillOfLading` |  | |  |  |  |  |
| `TranspOrdPartnerReference` |  | |  |  |  |  |
| `BusinessSystemName` |  | |  |  |  |  |
| `EWMShippingReadinessStatus` |  | |  |  |  |  |
| `PlannedDeliveryUTCDateTime` |  | |  |  |  |  |
| `PlannedOutOfYardUTCDateTime` |  | |  |  |  |  |
| `WarehouseTimeZone` |  | |  |  |  |  |
| `IncotermsPart1` |  | |  |  |  |  |
| `IncotermsPart2` |  | |  |  |  |  |
| `EWMRoute` |  | |  |  |  |  |
| `RouteName` |  | |  |  |  |  |
| `SalesOrganization` |  | |  |  |  |  |
| `ShippingOffice` |  | |  |  |  |  |
| `EWMMeansOfTransport` |  | |  |  |  |  |
| `EWMMeansOfTransportType` |  | |  |  |  |  |
| `EWMTranspPlanningType` |  | |  |  |  |  |
| `EWMDelivLastChangeUTCDateTime` |  | |  |  |  |  |
| `EWMWhseReqHasWarehouseTask` |  | |  |  |  |  |
| `_WhseOutbDeliveryOrderItem` | | ✓ | | | | |
| `_HDMRelation` | | ✓ | | | | |

## Source Code

```abap
@AccessControl:{
  authorizationCheck: #MANDATORY,
  privilegedAssociations: ['_HDMRelation']
}

@VDM.viewType: #TRANSACTIONAL
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API

@ObjectModel.usageType.dataClass: #TRANSACTIONAL
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.modelingPattern:       #TRANSACTIONAL_INTERFACE
@ObjectModel.supportedCapabilities: [#TRANSACTIONAL_PROVIDER]
@ObjectModel.semanticKey: ['EWMOutboundDeliveryOrder']
@ObjectModel.sapObjectNodeType.name: 'WarehouseOutboundDeliveryOrder'

@Metadata.ignorePropagatedAnnotations: true

@AbapCatalog.extensibility: {
  extensible: true,
  elementSuffix: 'CDH',
  quota: {
    maximumFields: 408, //This is calculated with formula - 2* <Customer Percentage from SCFD_REGISTRY> * <max number of fields in SCFD_REGISTRY>
    maximumBytes: 8160 //This is calculated with formula - 4* <Customer Percentage from SCFD_REGISTRY> * <number of chars as defined in SCFD_REGISTRY>
  },
  dataSources: ['WhseOutbDeliveryOrderHead']
}

@EndUserText.label: 'Outbound Delivery Order Header - TP'

define root view entity I_EWM_OutbDelivOrderHeaderTP
provider contract transactional_interface
  as projection on R_EWM_OutbDelivOrderHeaderTP as WhseOutbDeliveryOrderHead

{
  key EWMOutboundDeliveryOrder,

      OutboundDeliveryOrderUUID,

      @UI.hidden: true
      SAPObjectNodeType,

      @UI.hidden: true
      EWMOutbDeliveryOrderUUIDHex,

      EWMWarehouse,
      EWMDeliveryDocumentCategory,
      EWMDeliveryDocumentType,

      /* Business Partner */
      ShipToParty,
      ShipToPartyName,

      @Semantics.booleanIndicator: true
      EWMShipToIsBusPurposeCmpltd,

      Carrier,
      CarrierName,

      @Semantics.booleanIndicator: true
      EWMCarrierIsBusPurposeCmpltd,

      /* Reference Documents */
      OutboundDelivery,
      /* TM References */
      FreightOrder,
      MasterBillOfLading,
      TranspOrdPartnerReference,

      BusinessSystemName,

      /* Status */
      EWMShippingReadinessStatus,

      /* Date Times */
      PlannedDeliveryUTCDateTime,
      PlannedOutOfYardUTCDateTime,
      WarehouseTimeZone,

      /* Incoterms */
      IncotermsPart1,
      IncotermsPart2,

      /* Transportation & Location */
      EWMRoute,

      @EndUserText.label: 'Name of Route'
      RouteName,

      SalesOrganization,
      ShippingOffice,
      EWMMeansOfTransport,
      EWMMeansOfTransportType,
      EWMTranspPlanningType,

      // Last Change Date Time relevant for ETAG
      EWMDelivLastChangeUTCDateTime,

      /* Warehouse Tasks Exists*/
      @Semantics.booleanIndicator: true
      EWMWhseReqHasWarehouseTask,

      /* VDM Associations */
      _WhseOutbDeliveryOrderItem : redirected to composition child I_EWM_OutbDelivOrderItemTP,
      /* Attachments */
      @ObjectModel.filter.enabled:false
      @ObjectModel.sort.enabled:false
      _HDMRelation
}
```
