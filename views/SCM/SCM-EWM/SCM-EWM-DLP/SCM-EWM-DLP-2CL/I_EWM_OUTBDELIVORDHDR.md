---
name: I_EWM_OUTBDELIVORDHDR
description: Ewm Outbdelivordhdr
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
  - header-level
  - component:SCM-EWM-DLP-2CL
  - lob:Other
---
# I_EWM_OUTBDELIVORDHDR

**Ewm Outbdelivordhdr**

| Property | Value |
|---|---|
| App Component | `SCM-EWM-DLP-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `OutboundDeliveryOrder` | ✓ | |  |  |  |  |
| `EWMWarehouse` |  | | `_Warehouse` | `EWMWarehouse` |  |  |
| `EWMOutboundDeliveryOrder` |  | |  | `OutboundDeliveryOrder` |  |  |
| `EWMDeliveryDocumentCategory` |  | |  | `DeliveryCategory` |  |  |
| `EWMDeliveryDocumentType` |  | |  | `DeliveryType` |  |  |
| `ShipToParty` |  | |  | `BusinessPartner` |  |  |
| `ShipToPartyName` |  | |  | `cast( ShipToPartyName as ewm_de_ship_to_party_name preserving type )` |  |  |
| `EWMShipToIsBusPurposeCmpltd` |  | |  |  |  |  |
| `Carrier` |  | |  | `BusinessPartner` |  |  |
| `CarrierName` |  | |  | `cast( CarrierName as ewm_de_carrier_name preserving type )` |  |  |
| `EWMCarrierIsBusPurposeCmpltd` |  | |  |  |  |  |
| `OutboundDelivery` |  | |  | `cast(_Reference.EWMRefDeliveryDocumentNumber as /scwm/sp_docno_erp )` |  |  |
| `BusinessSystemName` |  | | `_Reference` | `BusinessSystemName` |  |  |
| `FreightOrder` |  | |  | `cast( _FreightOrderRefTM.TransportationOrder as ewm_de_freightorder_alpha_conv preserving type )` |  |  |
| `MasterBillOfLading` |  | |  | `cast( case when _BillOfLadingRefEWM.DeliveryUUID is null then _BillOfLadingRefTM.MasterBillOfLading else _BillOfLadingRefEWM.EWMRefDeliveryDocumentNumber end as /scwm/sp_docno_bol preserving type )` |  |  |
| `TranspOrdPartnerReference` |  | |  | `cast( _ExtConsignmentOrderRefTM.TranspOrdPartnerReference as /scwm/de_docno_ecn preserving type )` |  |  |
| `EWMShippingReadinessStatus` |  | |  | `cast( _DSHStatus.EWMOutboundDeliveryOrderStatus as ewm_de_ship_readiness_status preserving type )` |  |  |
| `PlannedDeliveryUTCDateTime` |  | | `_PlannedDeliveryDateTime` | `DeliveryRelatedStartDateTime` |  |  |
| `PlannedOutOfYardUTCDateTime` |  | | `_PlndDeliveryOutOfYardDateTime` | `DeliveryRelatedStartDateTime` |  |  |
| `WarehouseTimeZone` |  | | `_WarehouseTimezone` | `TimeZoneID` |  |  |
| `IncotermsPart1` |  | |  |  |  |  |
| `IncotermsPart2` |  | |  |  |  |  |
| `EWMRoute` |  | |  | `Route` |  |  |
| `EWMMeansOfTransport` |  | |  |  |  |  |
| `EWMMeansOfTransportType` |  | |  |  |  |  |
| `EWMTranspPlanningType` |  | |  | `cast( EWMTranspPlanningType as ewm_de_transp_plng_type preserving type )` |  |  |
| `SalesOrganization` |  | |  |  |  |  |
| `ShippingOffice` |  | |  |  |  |  |
| `EWMWhseReqProductionCode` |  | |  | `cast( EWMWhseReqProductionCode as ewm_de_whsereq_production_code preserving type )` |  |  |
| `EWMDeliveryCreationUTCDateTime` |  | |  |  |  |  |
| `EWMDelivLastChangeUTCDateTime` |  | |  | `case when EWMDelivLastChangeUTCDateTime is initial then EWMDeliveryCreationUTCDateTime else EWMDelivLastChangeUTCDateTime end` |  |  |
| `EWMWhseReqHasWarehouseTask` |  | |  | `case when _WarehouseTasksExists.EWMWarehouseRequestUUID is not null then 'X' else cast( '' as ewm_de_whsereq_has_wt ) end` |  |  |
| `OutboundDeliveryOrderUUID` |  | |  |  |  |  |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_PlannedDeliveryDateTime` | `I_EWM_DeliveryDateAndTime` | [0..1] |
| `_PlndDeliveryOutOfYardDateTime` | `I_EWM_DeliveryDateAndTime` | [0..1] |
| `_Warehouse` | `I_EWM_AssgWhseBusPartner_2` | [1..1] |
| `_Reference` | `I_EWM_DeliveryReferenceDoc_2` | [1..1] |
| `_DSHStatus` | `I_EWM_OutbDelivOrdSts` | [0..1] |
| `_WarehouseTasksExists` | `P_EWM_WhseTskOutbDelivOrdExist` | [0..1] |
| `_BillOfLadingRefEWM` | `I_EWM_DeliveryReferenceDoc_2` | [0..1] |
| `_BillOfLadingRefTM` | `P_EWM_WhseReqBillOfLadingRefTM` | [0..1] |
| `_FreightOrderRefTM` | `P_EWM_WhseReqFreightOrderRefTM` | [0..1] |
| `_ExtConsignmentOrderRefTM` | `P_EWM_WhseReqTranspOrdDocRef` | [0..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #MANDATORY
@AccessControl.personalData.blocking: #('TRANSACTIONAL_DATA')
@EndUserText.label: 'Warehouse Outbound Delivery Order Header'

@VDM.viewType: #COMPOSITE

@ObjectModel.usageType.serviceQuality: #D
@ObjectModel.usageType.dataClass: #MIXED
@ObjectModel.usageType.sizeCategory: #XL

@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.sapObjectNodeType.name: 'WarehouseOutboundDeliveryOrder'

@ObjectModel.supportedCapabilities: [ #CDS_MODELING_ASSOCIATION_TARGET,
                                      #SQL_DATA_SOURCE,
                                      #CDS_MODELING_DATA_SOURCE ]

define view entity I_EWM_OutbDelivOrdHdr
  as select from I_EWM_OutbDelivOrdHdrWithBP as pdo_h

    /* Association to Plan Delivery DateTime */
  association [0..1] to I_EWM_DeliveryDateAndTime      as _PlannedDeliveryDateTime       on  $projection.OutboundDeliveryOrderUUID             = _PlannedDeliveryDateTime.DeliveryOrderUUID
                                                                                         and $projection.EWMDeliveryDocumentCategory           = _PlannedDeliveryDateTime.EWMDeliveryDocumentCategory
                                                                                         and _PlannedDeliveryDateTime.DeliveryDateTimeType     = 'TDELIVERY'
                                                                                         and _PlannedDeliveryDateTime.DeliveryDateTimeCategory = 'PLAN'

  /* Association to Out Of Yard DateTime */
  association [0..1] to I_EWM_DeliveryDateAndTime      as _PlndDeliveryOutOfYardDateTime on  $projection.OutboundDeliveryOrderUUID                   = _PlndDeliveryOutOfYardDateTime.DeliveryOrderUUID
                                                                                         and $projection.EWMDeliveryDocumentCategory                 = _PlndDeliveryOutOfYardDateTime.EWMDeliveryDocumentCategory
                                                                                         and _PlndDeliveryOutOfYardDateTime.DeliveryDateTimeType     = 'TOUTYARD'
                                                                                         and _PlndDeliveryOutOfYardDateTime.DeliveryDateTimeCategory = 'PLAN'

  /* Association to Warehouse */
  association [1..1] to I_EWM_AssgWhseBusPartner_2     as _Warehouse                     on  pdo_h.WarehouseLocationUUID = _Warehouse.SupplyChainUnitUUID

  /* Association to Reference Documents */
  association [1..1] to I_EWM_DeliveryReferenceDoc_2   as _Reference                     on  $projection.OutboundDeliveryOrderUUID   = _Reference.DeliveryUUID
                                                                                         and _Reference.EWMRefDeliveryDocumentItem   = '0000000000'
                                                                                         and _Reference.EWMReferenceDocumentCategory = 'ERP'
  /* Association to Status */
  association [0..1] to I_EWM_OutbDelivOrdSts          as _DSHStatus                     on  $projection.OutboundDeliveryOrderUUID = _DSHStatus.OutboundDeliveryOrderUUID
                                                                                         and _DSHStatus.DeliveryStatusType         = 'DSH'

  /* Warehouse Task Exists */
  association [0..1] to P_EWM_WhseTskOutbDelivOrdExist as _WarehouseTasksExists          on  $projection.OutboundDeliveryOrderUUID = _WarehouseTasksExists.EWMWarehouseRequestUUID


  /* Reference Documents for Transportation Integration */
  association [0..1] to I_EWM_DeliveryReferenceDoc_2   as _BillOfLadingRefEWM            on  $projection.OutboundDeliveryOrderUUID            = _BillOfLadingRefEWM.DeliveryUUID
                                                                                         and _BillOfLadingRefEWM.EWMRefDeliveryDocumentItem   = '0000000000'
                                                                                         and _BillOfLadingRefEWM.EWMReferenceDocumentCategory = 'BOL'
  association [0..1] to P_EWM_WhseReqBillOfLadingRefTM as _BillOfLadingRefTM on          $projection.OutboundDeliveryOrderUUID = _BillOfLadingRefTM.TranspOrdOrigRefRootUUID
  association [0..1] to P_EWM_WhseReqFreightOrderRefTM as _FreightOrderRefTM on          $projection.OutboundDeliveryOrderUUID = _FreightOrderRefTM.TranspOrdOrigRefRootUUID
  association [0..1] to P_EWM_WhseReqTranspOrdDocRef   as _ExtConsignmentOrderRefTM      on  $projection.OutboundDeliveryOrderUUID                 = _ExtConsignmentOrderRefTM.TranspOrdOrigRefRootUUID
                                                                                         and _ExtConsignmentOrderRefTM.TransportationOrderCategory = 'TU'
                                                                                         and _ExtConsignmentOrderRefTM.TranspOrdDocReferenceType   = '496'

{
  key OutboundDeliveryOrder,
      _Warehouse.EWMWarehouse,
      OutboundDeliveryOrder                                                                                              as EWMOutboundDeliveryOrder,
      DeliveryCategory                                                                                                   as EWMDeliveryDocumentCategory,
      DeliveryType                                                                                                       as EWMDeliveryDocumentType,

      /* Business Partner */
      pdo_h._BPShipTo.BusinessPartner                                                                                    as ShipToParty,
      cast( ShipToPartyName as ewm_de_ship_to_party_name preserving type )                                               as ShipToPartyName,
      @Semantics.booleanIndicator
      EWMShipToIsBusPurposeCmpltd,
      pdo_h._BPCarrier.BusinessPartner                                                                                   as Carrier,
      cast( CarrierName as ewm_de_carrier_name preserving type )                                                         as CarrierName,
      @Semantics.booleanIndicator
      EWMCarrierIsBusPurposeCmpltd,

      /* Reference Documents */
      cast(_Reference.EWMRefDeliveryDocumentNumber as /scwm/sp_docno_erp )                                               as OutboundDelivery,
      _Reference.BusinessSystemName,
      /* TM References*/
      cast(  _FreightOrderRefTM.TransportationOrder as ewm_de_freightorder_alpha_conv preserving type )                  as FreightOrder,
      cast( case when _BillOfLadingRefEWM.DeliveryUUID is null
        then _BillOfLadingRefTM.MasterBillOfLading
        else _BillOfLadingRefEWM.EWMRefDeliveryDocumentNumber end as /scwm/sp_docno_bol preserving type )                as MasterBillOfLading,
      cast( _ExtConsignmentOrderRefTM.TranspOrdPartnerReference as /scwm/de_docno_ecn preserving type )                  as TranspOrdPartnerReference,

      /* Status */
      cast( _DSHStatus.EWMOutboundDeliveryOrderStatus as ewm_de_ship_readiness_status preserving type )                  as EWMShippingReadinessStatus,


      /* DateTime */
      _PlannedDeliveryDateTime.DeliveryRelatedStartDateTime                                                              as PlannedDeliveryUTCDateTime,
      _PlndDeliveryOutOfYardDateTime.DeliveryRelatedStartDateTime                                                        as PlannedOutOfYardUTCDateTime,
      _WarehouseTimezone.TimeZoneID                                                                                      as WarehouseTimeZone,

      /* IncoTerms */
      IncotermsPart1,
      IncotermsPart2,

      /* Transportation & Location */
      Route                                                                                                              as EWMRoute,
      EWMMeansOfTransport,
      EWMMeansOfTransportType,
      cast( EWMTranspPlanningType as ewm_de_transp_plng_type preserving type )                                           as EWMTranspPlanningType,
      SalesOrganization,
      ShippingOffice,
      cast( EWMWhseReqProductionCode as ewm_de_whsereq_production_code preserving type )                                 as EWMWhseReqProductionCode,


      /* ETag Handling */
      EWMDeliveryCreationUTCDateTime,
      case
        when EWMDelivLastChangeUTCDateTime is initial then EWMDeliveryCreationUTCDateTime
        else EWMDelivLastChangeUTCDateTime
      end                                                                                                                as EWMDelivLastChangeUTCDateTime,

      /* Warehouse Tasks Exists*/
      @Semantics.booleanIndicator
      case when _WarehouseTasksExists.EWMWarehouseRequestUUID is not null
          then 'X'
          else cast( '' as ewm_de_whsereq_has_wt  )  end                                                                 as EWMWhseReqHasWarehouseTask,

      OutboundDeliveryOrderUUID

}

where
  DeliveryCategory = 'PDO'
```
