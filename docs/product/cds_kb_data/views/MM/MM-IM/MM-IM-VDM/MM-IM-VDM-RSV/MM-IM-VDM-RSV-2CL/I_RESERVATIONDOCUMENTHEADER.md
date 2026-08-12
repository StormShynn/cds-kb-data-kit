---
name: I_RESERVATIONDOCUMENTHEADER
description: "Reservationdocumentheader"
app_component: MM-IM-VDM-RSV-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - MM
  - MM-IM
  - MM-IM-VDM
  - interface-view
  - document
  - header-level
  - component:MM-IM-VDM-RSV-2CL
  - lob:Sourcing & Procurement
---
# I_RESERVATIONDOCUMENTHEADER

**Reservationdocumentheader**

| Property | Value |
|---|---|
| App Component | `MM-IM-VDM-RSV-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Reservation` | ✓ | |  |  |  |  |
| `ReservationCreationCode` |  | |  |  |  |  |
| `ReservationOrigin` |  | |  |  |  |  |
| `OrderID` |  | |  |  |  |  |
| `GoodsMovementType` |  | |  |  |  |  |
| `CostCenter` |  | |  |  |  |  |
| `ProfitCenter` |  | |  |  |  |  |
| `ProfitabilitySegment` |  | |  |  |  |  |
| `ProfitabilitySegment_2` |  | |  |  |  |  |
| `ControllingArea` |  | |  |  |  |  |
| `GoodsRecipientName` |  | |  |  |  |  |
| `ReservationDate` |  | |  |  |  |  |
| `IsCheckedAgainstFactoryCal` |  | |  |  |  |  |
| `Customer` |  | |  |  |  |  |
| `WBSElementInternalID` |  | |  |  |  |  |
| `SalesOrder` |  | |  |  |  |  |
| `SalesOrderItem` |  | |  |  |  |  |
| `SalesOrderScheduleLine` |  | |  |  |  |  |
| `AssetNumber` |  | |  |  |  |  |
| `AssetSubNumber` |  | |  |  |  |  |
| `NetworkNumberForAcctAssgmt` |  | |  |  |  |  |
| `IssuingOrReceivingPlant` |  | |  |  |  |  |
| `IssuingOrReceivingStorageLoc` |  | |  |  |  |  |
| `ResvnVerificationCompanyCode` |  | |  |  |  |  |
| `UserID` |  | |  |  |  |  |
| `CreationDateTime` |  | |  |  |  |  |
| `LastChangedByUser` |  | |  |  |  |  |
| `LastChangeDateTime` |  | |  |  |  |  |
| `_CostCenter` | | ✓ | | | | |
| `_ReservationDocumentItem` | | ✓ | | | | |
| `_WBSElementByInternalKey` | | ✓ | | | | |
| `_WBSElementBasicData` | | ✓ | | | | |
| `_ReservationCreationCode` | | ✓ | | | | |
| `_ProfitCenter` | | ✓ | | | | |
| `_ControllingArea` | | ✓ | | | | |
| `_VerificationCompanyCode` | | ✓ | | | | |
| `_Order` | | ✓ | | | | |
| `_GoodsMovementType` | | ✓ | | | | |
| `_Customer` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CostCenter` | `I_CostCenter` | [0..*] |
| `_ReservationDocumentItem` | `I_ReservationDocumentItem` | [1..*] |
| `_WBSElementByInternalKey` | `I_WBSElementByInternalKey` | [0..1] |
| `_WBSElementBasicData` | `I_WBSElementBasicData` | [0..1] |
| `_ReservationCreationCode` | `I_ReservationCreationCode` | [0..1] |

## Source Code

```abap
@AccessControl: {
                  authorizationCheck: #CHECK,
                  personalData.blocking: #BLOCKED_DATA_EXCLUDED
                }
@EndUserText.label: 'Reservation Document Header'
@ObjectModel: {
                usageType: {
                             sizeCategory: #M,
                             serviceQuality: #A,
                             dataClass:#TRANSACTIONAL
                            },
                compositionRoot: true,
                semanticKey: ['Reservation'],
                representativeKey: 'Reservation',
                modelingPattern: #ANALYTICAL_DIMENSION,
                supportedCapabilities: [#ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE]
}
@VDM: {
        viewType: #BASIC,
        lifecycle.contract.type: #PUBLIC_LOCAL_API
      } 
@Analytics.dataCategory: #DIMENSION
@Analytics.technicalName: 'IRESVNDOCHDR'
@Metadata: {
             ignorePropagatedAnnotations:true,
             allowExtensions: true
           }
           
define view entity I_ReservationDocumentHeader
  as select from I_ReservationHeader     
  association [0..*] to I_CostCenter              as _CostCenter              on  $projection.CostCenter      =  _CostCenter.CostCenter
                                                                              and $projection.ControllingArea =  _CostCenter.ControllingArea
  association [1..*] to I_ReservationDocumentItem as _ReservationDocumentItem on  $projection.Reservation = _ReservationDocumentItem.Reservation
  association [0..1] to I_WBSElementByInternalKey as _WBSElementByInternalKey on  $projection.WBSElementInternalID = _WBSElementByInternalKey.WBSElementInternalID
  association [0..1] to I_WBSElementBasicData     as _WBSElementBasicData     on  $projection.WBSElementInternalID = _WBSElementBasicData.WBSElementInternalID
  association [0..1] to I_ReservationCreationCode as _ReservationCreationCode on  $projection.ReservationCreationCode = _ReservationCreationCode.ReservationCreationCode
//  //associations for UI Exposure
//  association [0..1] to I_ResvnDocHeaderStatus       as _ReservationDocHeaderStatus on  $projection.Reservation = _ReservationDocHeaderStatus.Reservation   
  
{

  key Reservation,
  
      ReservationCreationCode,
      
      ReservationOrigin,
      
      @ObjectModel.foreignKey.association: '_Order'
      OrderID,

      @ObjectModel.foreignKey.association: '_GoodsMovementType'
      GoodsMovementType,

      @ObjectModel.foreignKey.association: '_CostCenter'
      CostCenter,
      
      ProfitCenter,
      @API.element.releaseState: #DECOMMISSIONED
      @API.element.successor: 'ProfitabilitySegment_2'
//      @VDM.lifecycle.status: #DEPRECATED
//      @VDM.lifecycle.successor: 'ProfitabilitySegment_2'
      ProfitabilitySegment,
      ProfitabilitySegment_2, 
      @ObjectModel.foreignKey.association: '_ControllingArea'
      ControllingArea,

      GoodsRecipientName,

      @Semantics.businessDate.at: true
      ReservationDate,
      IsCheckedAgainstFactoryCal,

      @ObjectModel.foreignKey.association: '_Customer'
      Customer,
      WBSElementInternalID,
//      _WBSElementByInternalKey.WBSElement,
      SalesOrder,
      SalesOrderItem,
      SalesOrderScheduleLine,
      AssetNumber,
      AssetSubNumber,
      NetworkNumberForAcctAssgmt,
      IssuingOrReceivingPlant,
      IssuingOrReceivingStorageLoc,
      ResvnVerificationCompanyCode,
      UserID,
      CreationDateTime,
      LastChangedByUser,
      LastChangeDateTime,
      @Consumption.filter.businessDate.at: true
      _CostCenter,
      _ProfitCenter,      
      _ControllingArea,
      _VerificationCompanyCode,
      _Order,
      _GoodsMovementType,
      _Customer,
     _WBSElementByInternalKey,
     _WBSElementBasicData,
     _ReservationCreationCode,
//     _ReservationDocHeaderStatus,
       
      @ObjectModel.association.type: [#TO_COMPOSITION_CHILD]
      _ReservationDocumentItem
      
            
}
```
