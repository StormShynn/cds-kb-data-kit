---
name: I_EWM_INBDELIVERYHEADERTP
description: Ewm Inbdeliveryheadertp
app_component: SCM-EWM-DLP-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SCM
  - SCM-EWM
  - SCM-EWM-DLP
  - interface-view
  - transactional-processing
  - delivery
  - header-level
  - component:SCM-EWM-DLP-2CL
  - lob:Other
---
# I_EWM_INBDELIVERYHEADERTP

**Ewm Inbdeliveryheadertp**

| Property | Value |
|---|---|
| App Component | `SCM-EWM-DLP-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `EWMInboundDelivery` | `EWMInboundDelivery` |
| `InboundDeliveryUUID` | `InboundDeliveryUUID` |
| `SAPObjectNodeType` | `SAPObjectNodeType` |
| `EWMInboundDeliveryUUIDHex` | `EWMInboundDeliveryUUIDHex` |
| `EWMWarehouse` | `EWMWarehouse` |
| `EWMDeliveryDocumentCategory` | `EWMDeliveryDocumentCategory` |
| `EWMDeliveryDocumentType` | `EWMDeliveryDocumentType` |
| `ShipFromParty` | `ShipFromParty` |
| `ShipFromPartyName` | `ShipFromPartyName` |
| `EWMShipFromIsBusPurposeCmpltd` | `EWMShipFromIsBusPurposeCmpltd` |
| `Carrier` | `Carrier` |
| `CarrierName` | `CarrierName` |
| `EWMCarrierIsBusPurposeCmpltd` | `EWMCarrierIsBusPurposeCmpltd` |
| `AdvancedShippingNotification` | `AdvancedShippingNotification` |
| `InboundDelivery` | `InboundDelivery` |
| `PlannedDeliveryUTCDateTime` | `cast(PlannedDeliveryUTCDateTime as ewm_de_plan_dlv_date preserving type)` |
| `ReceivingOffice` | `ReceivingOffice` |
| `EWMDelivLastChangeUTCDateTime` | `EWMDelivLastChangeUTCDateTime` |
| `WarehouseTimeZone` | `WarehouseTimeZone` |
| `_WhseInbDeliveryItem` | *Association* |
| `_HDMRelation` | *Association* |

## Source Code

```abap
@AccessControl:{
  authorizationCheck: #MANDATORY,
  privilegedAssociations: ['_HDMRelation'],
  personalData: {
  blocking: #REQUIRED
  }
}

@VDM.viewType: #TRANSACTIONAL
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API

@ObjectModel.usageType.dataClass: #TRANSACTIONAL
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.modelingPattern:       #TRANSACTIONAL_INTERFACE
@ObjectModel.supportedCapabilities: [#TRANSACTIONAL_PROVIDER]
@ObjectModel.semanticKey: ['EWMInboundDelivery']
@ObjectModel.sapObjectNodeType.name: 'WarehouseInboundDelivery'

@Metadata.ignorePropagatedAnnotations: true

@AbapCatalog.extensibility: {
  extensible: true,
  elementSuffix: 'CDH',
  quota: {
    maximumFields: 408, //This is calculated with formula - 2* <Customer Percentage from SCFD_REGISTRY> * <max number of fields in SCFD_REGISTRY>
    maximumBytes: 8160 //This is calculated with formula - 4* <Customer Percentage from SCFD_REGISTRY> * <number of chars as defined in SCFD_REGISTRY>
  },
  dataSources: ['WhseInboundDeliveryHead']
}

@EndUserText.label: 'Inbound Delivery Header Interface - TP'

define root view entity I_EWM_InbDeliveryHeaderTP
provider contract transactional_interface
  as projection on R_EWM_InbDeliveryHeaderTP as WhseInboundDeliveryHead

{
  key EWMInboundDelivery,

      InboundDeliveryUUID,

      @UI.hidden: true
      SAPObjectNodeType,

      @UI.hidden: true
      EWMInboundDeliveryUUIDHex,

      EWMWarehouse,
      EWMDeliveryDocumentCategory,
      EWMDeliveryDocumentType,
      ShipFromParty,
      ShipFromPartyName,

      @Semantics.booleanIndicator: true
      EWMShipFromIsBusPurposeCmpltd,

      Carrier,
      CarrierName,

      @Semantics.booleanIndicator: true
      EWMCarrierIsBusPurposeCmpltd,

      AdvancedShippingNotification,
      InboundDelivery,
      cast(PlannedDeliveryUTCDateTime as ewm_de_plan_dlv_date preserving type) as PlannedDeliveryUTCDateTime,
      ReceivingOffice,
      EWMDelivLastChangeUTCDateTime,
      WarehouseTimeZone,
      _WhseInbDeliveryItem : redirected to composition child I_EWM_InbDeliveryItemTP,

      /* Attachments */
      @ObjectModel.filter.enabled: false
      @ObjectModel.sort.enabled: false
      _HDMRelation
}
```
