---
name: I_EWM_INBDELIVERYHEADER
description: "Ewm Inbdeliveryheader"
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
  - delivery
  - header-level
  - component:SCM-EWM-DLP-2CL
  - lob:Other
---
# I_EWM_INBDELIVERYHEADER

**Ewm Inbdeliveryheader**

| Property | Value |
|---|---|
| App Component | `SCM-EWM-DLP-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `EWMInboundDelivery` | ✓ | |  |  |  |  |
| `InboundDeliveryUUID` |  | |  |  |  |  |
| `EWMWarehouse` |  | |  |  |  |  |
| `EWMDeliveryDocumentCategory` |  | |  | `DeliveryDocumentCategory` |  |  |
| `EWMDeliveryDocumentType` |  | |  | `InboundDeliveryDocumentType` |  |  |
| `ShipFromParty` |  | |  |  |  |  |
| `ShipFromPartyName` |  | |  | `cast(ShipFromPartyName as ewm_de_ship_from_party_name preserving type)` |  |  |
| `EWMShipFromIsBusPurposeCmpltd` |  | |  |  |  |  |
| `Carrier` |  | |  |  |  |  |
| `CarrierName` |  | |  | `cast(CarrierName as ewm_de_carrier_name preserving type)` |  |  |
| `EWMCarrierIsBusPurposeCmpltd` |  | |  |  |  |  |
| `AdvancedShippingNotification` |  | |  |  |  |  |
| `InboundDelivery` |  | |  | `cast(_Reference.EWMRefDeliveryDocumentNumber as /scwm/sp_docno_erp)` |  |  |
| `PlannedDeliveryUTCDateTime` |  | | `_PlannedDeliveryDateTime` | `DeliveryRelatedStartDateTime` |  |  |
| `ReceivingOffice` |  | |  |  |  |  |
| `EWMWhseReqHasHandlingUnit` |  | | `_HUExists` | `EWMWhseReqHasHandlingUnit` |  |  |
| `EWMDeliveryCreationUTCDateTime` |  | |  |  |  |  |
| `EWMDelivLastChangeUTCDateTime` |  | |  | `case when EWMDelivLastChangeUTCDateTime is initial then cast(EWMDeliveryCreationUTCDateTime as tzntstmps preserving type) else cast(EWMDelivLastChangeUTCDateTime as tzntstmps preserving type) end` |  |  |
| `WarehouseTimeZone` |  | | `_WarehouseTimezone` | `TimeZoneID` |  |  |
| `_WarehouseText` | | ✓ | | | | |
| `_InboundDeliveryHdrTypeText` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_PlannedDeliveryDateTime` | `I_EWM_DeliveryDateAndTime` | [0..1] |
| `_Reference` | `I_EWM_DeliveryReferenceDoc_2` | [1..1] |
| `_WarehouseText` | `I_EWM_WarehouseNumber_2` | [1..1] |
| `_InboundDeliveryHdrTypeText` | `I_EWM_DeliveryTypeText_2` | [0..*] |
| `_HUExists` | `P_EWM_HUHdr_InbDlv_Exist` | [0..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #MANDATORY

@EndUserText.label: 'Warehouse Inbound Delivery Header'

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel.sapObjectNodeType.name: 'WarehouseInboundDelivery'
@ObjectModel.supportedCapabilities: [ #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE ]
@ObjectModel.usageType: { serviceQuality: #D, dataClass: #MIXED, sizeCategory: #XL }

@VDM.viewType: #COMPOSITE

define view entity I_EWM_InbDeliveryHeader
  as select from I_EWM_InbDeliveryHeaderWithBP as pdi_h

  // Planned Dlv Date related always to header and slin is not supported
  association [0..1] to I_EWM_DeliveryDateAndTime      as _PlannedDeliveryDateTime
    on  pdi_h.InboundDeliveryUUID = _PlannedDeliveryDateTime.DeliveryOrderUUID
    and $projection.EWMDeliveryDocumentCategory           = _PlannedDeliveryDateTime.EWMDeliveryDocumentCategory
    and _PlannedDeliveryDateTime.DeliveryDateTimeType     = 'TDELIVERY'
    and _PlannedDeliveryDateTime.DeliveryDateTimeCategory = 'PLAN'

  /* Association to Reference Documents */
  association [1..1] to I_EWM_DeliveryReferenceDoc_2   as _Reference
    on  $projection.InboundDeliveryUUID         = _Reference.DeliveryUUID
    and _Reference.EWMRefDeliveryDocumentItem   = '0000000000'
    and _Reference.EWMReferenceDocumentCategory = 'ERP'

  /* Text associations */
  association [1..1] to I_EWM_WarehouseNumber_2        as _WarehouseText
    on $projection.EWMWarehouse = _WarehouseText.EWMWarehouse

  association [0..*] to I_EWM_DeliveryTypeText_2       as _InboundDeliveryHdrTypeText
    on  $projection.EWMDeliveryDocumentCategory = _InboundDeliveryHdrTypeText.EWMDeliveryDocumentCategory
    and $projection.EWMDeliveryDocumentType     = _InboundDeliveryHdrTypeText.EWMDeliveryDocumentType

  /* HU Existence */
  association [0..1] to P_EWM_HUHdr_InbDlv_Exist       as _HUExists
    on $projection.InboundDeliveryUUID = _HUExists.EWMWarehouseRequestUUID


{
  key EWMInboundDelivery,

      InboundDeliveryUUID,
      EWMWarehouse,
      DeliveryDocumentCategory                                               as EWMDeliveryDocumentCategory,
      InboundDeliveryDocumentType                                            as EWMDeliveryDocumentType,
      ShipFromParty,
      cast(ShipFromPartyName as ewm_de_ship_from_party_name preserving type) as ShipFromPartyName,

      @Semantics.booleanIndicator
      EWMShipFromIsBusPurposeCmpltd,

      Carrier,
      cast(CarrierName as ewm_de_carrier_name preserving type)               as CarrierName,

      @Semantics.booleanIndicator
      EWMCarrierIsBusPurposeCmpltd,

      AdvancedShippingNotification,
      cast(_Reference.EWMRefDeliveryDocumentNumber as /scwm/sp_docno_erp)    as InboundDelivery,
      _PlannedDeliveryDateTime.DeliveryRelatedStartDateTime                  as PlannedDeliveryUTCDateTime,
      ReceivingOffice,

      @Semantics.booleanIndicator: true
      _HUExists.EWMWhseReqHasHandlingUnit,

      /* ETag Handling */
      EWMDeliveryCreationUTCDateTime,

      case
        when EWMDelivLastChangeUTCDateTime is initial then cast(EWMDeliveryCreationUTCDateTime as tzntstmps preserving type)
        else cast(EWMDelivLastChangeUTCDateTime as tzntstmps preserving type)
      end                                                                    as EWMDelivLastChangeUTCDateTime,

      _WarehouseTimezone.TimeZoneID                                          as WarehouseTimeZone,

      /* associations */
      _InboundDeliveryHdrTypeText,
      _WarehouseText
}

where WarehouseLogisticProcess = '' // Remove Inb. Dlv for transit warehouses
```
