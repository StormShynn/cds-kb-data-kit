---
name: I_SCHEDGAGRMTRELDOCSCLIAPI01
description: Schedgagrmtreldocscliapi 01
app_component: MM-PUR-OA-SCH-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - MM
  - MM-PUR
  - MM-PUR-OA
  - interface-view
  - component:MM-PUR-OA-SCH-2CL
  - lob:Sourcing & Procurement
---
# I_SCHEDGAGRMTRELDOCSCLIAPI01

**Schedgagrmtreldocscliapi 01**

| Property | Value |
|---|---|
| App Component | `MM-PUR-OA-SCH-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `SchedulingAgreement` | `SchedulingAgreement` |
| key `SchedulingAgreementItem` | `SchedulingAgreementItem` |
| key `SchedulingAgreementReleaseType` | `SchedulingAgreementReleaseType` |
| key `SchedulingAgreementRelease` | `SchedulingAgreementRelease` |
| key `ScheduleLine` | `ScheduleLine` |
| `ScheduleLineDeliveryDate` | `ScheduleLineDeliveryDate` |
| `ScheduleLineDeliveryTime` | `ScheduleLineDeliveryTime` |
| `ScheduledQuantity` | `ScheduledQuantity` |
| `SchedgLineType` | `SchedgLineType` |
| `BOMExplosion` | `BOMExplosion` |
| `SourceOfCreation` | `SourceOfCreation` |
| `PrevDelivQtyOfScheduleLine` | `PrevDelivQtyOfScheduleLine` |
| `ReceivedQuantity` | `ReceivedQuantity` |
| `DelivDateCategory` | `DelivDateCategory` |
| `OrderQuantityUnit` | `_SchedgAgrmtReleaseDocAPI01.OrderQuantityUnit` |
| `_SchedgAgrmtHdrAPI01` | *Association* |
| `_SchedgAgrmtItmAPI01` | *Association* |
| `_SchedgAgrmtReleaseDocAPI01` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_SchedgAgrmtHdrAPI01` | `I_SchedgagrmthdrApi01` | [1..1] |
| `_SchedgAgrmtItmAPI01` | `I_SchedgAgrmtItmApi01` | [1..1] |
| `_SchedgAgrmtReleaseDocAPI01` | `I_SchedgAgrmtReleaseDocAPI01` | [1..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'ISARELDOCSLAPI01'
@AbapCatalog.preserveKey:true 
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #CHECK
@EndUserText.label: 'SchedLine in Rel Doc of Pur Schedg Agrmt'
@VDM.viewType: #COMPOSITE
@Metadata.ignorePropagatedAnnotations: true

@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.usageType.dataClass: #TRANSACTIONAL
@ClientHandling.algorithm: #SESSION_VARIABLE
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@AccessControl.personalData.blocking: #NOT_REQUIRED
@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]
define view I_SchedgAgrmtRelDocScLiAPI01 
  as select from I_SchedgAgrmtRelDocSchedLine 
  
  // --Association with Scheduling Agreement Header  
  association [1..1] to I_SchedgagrmthdrApi01          as _SchedgAgrmtHdrAPI01         on $projection.SchedulingAgreement            = _SchedgAgrmtHdrAPI01.SchedulingAgreement
  
  // -- Association with Scheduling Agreement Items 
  association [1..1] to I_SchedgAgrmtItmApi01          as _SchedgAgrmtItmAPI01         on $projection.SchedulingAgreement            = _SchedgAgrmtItmAPI01.SchedulingAgreement
                                                                                      and $projection.SchedulingAgreementItem        = _SchedgAgrmtItmAPI01.SchedulingAgreementItem 
 //--Association with Release Document
  association [1..1] to I_SchedgAgrmtReleaseDocAPI01   as _SchedgAgrmtReleaseDocAPI01  on $projection.SchedulingAgreement            = _SchedgAgrmtReleaseDocAPI01.SchedulingAgreement
                                                                                      and $projection.SchedulingAgreementItem        = _SchedgAgrmtReleaseDocAPI01.SchedulingAgreementItem
                                                                                      and $projection.SchedulingAgreementReleaseType = _SchedgAgrmtReleaseDocAPI01.SchedulingAgreementReleaseType
                                                                                      and $projection.SchedulingAgreementRelease     = _SchedgAgrmtReleaseDocAPI01.ReleaseCode
{
      key SchedulingAgreement,
  
      key SchedulingAgreementItem,
  
      key SchedulingAgreementReleaseType,
  
      key SchedulingAgreementRelease,
      
      key ScheduleLine,
  
      ScheduleLineDeliveryDate,
  
      ScheduleLineDeliveryTime,
      
      @Semantics.quantity.unitOfMeasure: 'OrderQuantityUnit'  
      ScheduledQuantity,
  
      SchedgLineType,
  
      BOMExplosion,
  
      SourceOfCreation,
      
      @Semantics.quantity.unitOfMeasure: 'OrderQuantityUnit'  
      PrevDelivQtyOfScheduleLine,
      
      @Semantics.quantity.unitOfMeasure: 'OrderQuantityUnit'
      ReceivedQuantity,
  
      DelivDateCategory,
      
      @Semantics.unitOfMeasure: true 
      _SchedgAgrmtReleaseDocAPI01.OrderQuantityUnit,
    
      /* Associations */      
      _SchedgAgrmtHdrAPI01,
      
      _SchedgAgrmtItmAPI01,
      
      _SchedgAgrmtReleaseDocAPI01 
  
}
```
