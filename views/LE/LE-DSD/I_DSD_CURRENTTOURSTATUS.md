---
name: I_DSD_CURRENTTOURSTATUS
description: Dsd Currenttourstatus
app_component: LE-DSD
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - LE
  - LE-DSD
  - interface-view
  - status
  - component:LE-DSD
  - lob:Logistics Execution
---
# I_DSD_CURRENTTOURSTATUS

**Dsd Currenttourstatus**

| Property | Value |
|---|---|
| App Component | `LE-DSD` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `DSD_TourIdentification` | `tourid` |
| `TourScenario` | `scenario` |
| `TourStartDate` | `sdate` |
| `TourStatusIdentification` | `status_id` |
| `ShipmentDocument` | `shipment` |
| `VisitListNumber` | `vlid` |
| `MainDriver` | `driver` |
| `DeliveryVehicleNumber` | `vehicle` |
| `AssignedObject` | `objectass` |
| `ShipmentType` | `shtyp` |
| `TransportationPlanningPoint` | `tplst` |
| `VisitPlanType` | `vptyp` |
| `RouteSettlementOffice` | `bso` |
| `RouteSettlementType` | `sltyp` |
| `TourStatusSequentialNumber` | `last_count` |
| `EnteredByUser` | `iuser` |
| `CreatedAtDate` | `idate` |
| `TimeOfCreation` | `itime` |
| `_TourScenario` | *Association* |
| `_TourStatusID` | *Association* |
| `_Customer` | *Association* |
| `_Equipment` | *Association* |
| `_PlanType` | *Association* |
| `_SettlementOffice` | *Association* |
| `_SettlementTypes` | *Association* |
| `_User` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_TourScenario` | `I_DSD_TourScenario` | [0..1] |
| `_TourStatusID` | `I_DSD_TourStatus` | [0..1] |
| `_Customer` | `I_Customer` | [0..1] |
| `_Equipment` | `I_Equipment` | [0..1] |
| `_PlanType` | `I_DSD_VisitScheduleType` | [0..1] |
| `_SettlementOffice` | `I_DSD_RouteSettlementOffice` | [0..1] |
| `_SettlementTypes` | `I_DSD_RouteSettlementType` | [0..1] |
| `_User` | `I_User` | [0..1] |

## Source Code

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'Current Tour Status'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.usageType:{
  serviceQuality: #C,
  sizeCategory: #L,
  dataClass: #TRANSACTIONAL
}
@VDM: { viewType: #BASIC }
@ObjectModel.supportedCapabilities: [ #CDS_MODELING_DATA_SOURCE ]

define view entity I_DSD_CurrentTourStatus
  as select from /dsd/st_status as _CurrentStatus

  association [0..1] to I_DSD_TourScenario          as _TourScenario     on $projection.TourScenario             = _TourScenario.TourScenario
  association [0..1] to I_DSD_TourStatus            as _TourStatusID     on $projection.TourStatusIdentification = _TourStatusID.TourStatusIdentification
  association [0..1] to I_Customer                  as _Customer         on $projection.MainDriver               = _Customer.Customer
  association [0..1] to I_Equipment                 as _Equipment        on $projection.DeliveryVehicleNumber    = _Equipment.Equipment
  association [0..1] to I_DSD_VisitScheduleType     as _PlanType         on $projection.VisitPlanType            = _PlanType.VisitPlanType
  association [0..1] to I_DSD_RouteSettlementOffice as _SettlementOffice on $projection.RouteSettlementOffice    = _SettlementOffice.RouteSettlementOffice
  association [0..1] to I_DSD_RouteSettlementType   as _SettlementTypes  on $projection.RouteSettlementType      = _SettlementTypes.RouteSettlementType
  association [0..1] to I_User                      as _User             on $projection.EnteredByUser            = _User.UserID


{
  key tourid     as DSD_TourIdentification,
      scenario   as TourScenario,
      sdate      as TourStartDate,
      status_id  as TourStatusIdentification,
      shipment   as ShipmentDocument,
      vlid       as VisitListNumber,
      driver     as MainDriver,
      vehicle    as DeliveryVehicleNumber,
      objectass  as AssignedObject,
      shtyp      as ShipmentType,
      tplst      as TransportationPlanningPoint,
      vptyp      as VisitPlanType,
      bso        as RouteSettlementOffice,
      sltyp      as RouteSettlementType,
      last_count as TourStatusSequentialNumber,
      iuser      as EnteredByUser,
      idate      as CreatedAtDate,
      itime      as TimeOfCreation,

      _TourScenario,
      _TourStatusID,
      _Customer,
      _Equipment,
      _PlanType,
      _SettlementOffice,
      _SettlementTypes,
      _User

}
```
