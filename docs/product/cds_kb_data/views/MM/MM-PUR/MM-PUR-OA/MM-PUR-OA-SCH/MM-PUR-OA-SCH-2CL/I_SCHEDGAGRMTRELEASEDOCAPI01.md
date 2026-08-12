---
name: I_SCHEDGAGRMTRELEASEDOCAPI01
description: "Schedgagrmtreleasedocapi 01"
app_component: MM-PUR-OA-SCH-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - MM
  - MM-PUR
  - MM-PUR-OA
  - interface-view
  - lease
  - component:MM-PUR-OA-SCH-2CL
  - lob:Sourcing & Procurement
---
# I_SCHEDGAGRMTRELEASEDOCAPI01

**Schedgagrmtreleasedocapi 01**

| Property | Value |
|---|---|
| App Component | `MM-PUR-OA-SCH-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SchedulingAgreement` | ✓ | |  |  |  |  |
| `SchedulingAgreementItem` | ✓ | |  |  |  |  |
| `SchedulingAgreementReleaseType` | ✓ | |  |  |  |  |
| `ReleaseCode` | ✓ | |  |  |  |  |
| `SchedulingAgreementRelease` |  | |  |  |  |  |
| `SchedgAgreementItemRelText` |  | |  |  |  |  |
| `SchedgAgreementItemRelStatus` |  | |  |  |  |  |
| `SchedgAgreementItemRelStsText` |  | |  |  |  |  |
| `SchedgAgrmtReleaseCreationDate` |  | |  |  |  |  |
| `SchedgAgrmtReleaseCreationTime` |  | |  |  |  |  |
| `SchedgAgreementItemNextRelDate` |  | |  |  |  |  |
| `ProductionGoAheadPeriodEndDate` |  | |  |  |  |  |
| `MaterialGoAheadPeriodEndDate` |  | |  |  |  |  |
| `LastGoodsReceiptQuantity` |  | |  |  |  |  |
| `LastGoodsReceiptDate` |  | |  |  |  |  |
| `SchedgAgrmtRelTransmissionDate` |  | |  |  |  |  |
| `SchedgAgrmtRelTransmissionTime` |  | |  |  |  |  |
| `OrderQuantityUnit` |  | |  |  |  |  |
| `IsSchedgAgreementItemReld` |  | |  |  |  |  |
| `InboundDeliveryNote` |  | |  |  |  |  |
| `SchedgAgrmtCumltvRcvdQty` |  | |  |  |  |  |
| `_SchedgAgrmtHdrAPI01` | | ✓ | | | | |
| `_SchedgAgrmtItmAPI01` | | ✓ | | | | |
| `_SchedgAgrmtRelDocScLiAPI01` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_SchedgAgrmtHdrAPI01` | `I_SchedgagrmthdrApi01` | [1..1] |
| `_SchedgAgrmtItmAPI01` | `I_SchedgAgrmtItmApi01` | [1..1] |
| `_SchedgAgrmtRelDocScLiAPI01` | `I_SchedgAgrmtRelDocScLiAPI01` | [0..*] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'ISARELDOCAPI01'
@AbapCatalog.preserveKey:true 
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #CHECK
@EndUserText.label: 'Release Document of Pur Schedg Agrmt'
@VDM.viewType: #COMPOSITE
@Metadata.ignorePropagatedAnnotations: true

@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.usageType.dataClass: #TRANSACTIONAL
@ClientHandling.algorithm: #SESSION_VARIABLE
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@AccessControl.personalData.blocking: #NOT_REQUIRED
@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]
define view I_SchedgAgrmtReleaseDocAPI01 
  as select from I_SchedgAgrmtReleaseDoc 
  
  // --Association with Scheduling Agreement Header
  association [1..1] to I_SchedgagrmthdrApi01                as _SchedgAgrmtHdrAPI01         on  $projection.SchedulingAgreement            = _SchedgAgrmtHdrAPI01.SchedulingAgreement
  
  // -- Association with Scheduling Agreement Items 
  association [1..1] to I_SchedgAgrmtItmApi01                as _SchedgAgrmtItmAPI01         on  $projection.SchedulingAgreement            = _SchedgAgrmtItmAPI01.SchedulingAgreement
                                                                                            and  $projection.SchedulingAgreementItem        = _SchedgAgrmtItmAPI01.SchedulingAgreementItem                                                                                            
  //--Association with Release Document Schedule Line                                                                                       
  association [0..*] to I_SchedgAgrmtRelDocScLiAPI01         as _SchedgAgrmtRelDocScLiAPI01  on  $projection.SchedulingAgreement            = _SchedgAgrmtRelDocScLiAPI01.SchedulingAgreement
                                                                                            and  $projection.SchedulingAgreementItem        = _SchedgAgrmtRelDocScLiAPI01.SchedulingAgreementItem
                                                                                            and  $projection.SchedulingAgreementReleaseType = _SchedgAgrmtRelDocScLiAPI01.SchedulingAgreementReleaseType
                                                                                            and  $projection.ReleaseCode                    = _SchedgAgrmtRelDocScLiAPI01.SchedulingAgreementRelease
{
 
      key SchedulingAgreement,
      
      key SchedulingAgreementItem,
      
      key SchedulingAgreementReleaseType,
      
      key ReleaseCode,
      
      SchedulingAgreementRelease,
      
      SchedgAgreementItemRelText,
      
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: 'SchedgAgreementItemRelStsText'    
      SchedgAgreementItemRelStatus,
      
      SchedgAgreementItemRelStsText,
      
      SchedgAgrmtReleaseCreationDate,
      
      SchedgAgrmtReleaseCreationTime,
      
      SchedgAgreementItemNextRelDate,
      
      ProductionGoAheadPeriodEndDate,
      
      MaterialGoAheadPeriodEndDate,
      
      @Semantics.quantity.unitOfMeasure: 'OrderQuantityUnit'
      LastGoodsReceiptQuantity,
      
      LastGoodsReceiptDate,
      
      SchedgAgrmtRelTransmissionDate,
      
      SchedgAgrmtRelTransmissionTime,
      
      @Semantics.unitOfMeasure: true
      OrderQuantityUnit,
            
      IsSchedgAgreementItemReld,
      
      InboundDeliveryNote,
      
      @Semantics.quantity.unitOfMeasure: 'OrderQuantityUnit'
      SchedgAgrmtCumltvRcvdQty,

      /* Associations */       
      _SchedgAgrmtHdrAPI01,
       
      _SchedgAgrmtItmAPI01,
      
      _SchedgAgrmtRelDocScLiAPI01
   
 }
```
