---
name: I_SCHEDGAGRMTRELDOCSCLIAPI01
description: "Schedgagrmtreldocscliapi 01"
app_component: MM-PUR-OA-SCH-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
atc_state: released
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
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SchedulingAgreement` | ✓ | |  |  |  |  |
| `SchedulingAgreementItem` | ✓ | |  |  |  |  |
| `SchedulingAgreementReleaseType` | ✓ | |  |  |  |  |
| `SchedulingAgreementRelease` | ✓ | |  |  |  |  |
| `ScheduleLine` | ✓ | |  |  |  |  |
| `ScheduleLineDeliveryDate` |  | |  |  |  |  |
| `ScheduleLineDeliveryTime` |  | |  |  |  |  |
| `ScheduledQuantity` |  | |  |  |  |  |
| `SchedgLineType` |  | |  |  |  |  |
| `BOMExplosion` |  | |  |  |  |  |
| `SourceOfCreation` |  | |  |  |  |  |
| `PrevDelivQtyOfScheduleLine` |  | |  |  |  |  |
| `ReceivedQuantity` |  | |  |  |  |  |
| `DelivDateCategory` |  | |  |  |  |  |
| `OrderQuantityUnit` |  | | `_SchedgAgrmtReleaseDocAPI01` | `OrderQuantityUnit` |  |  |
| `_SchedgAgrmtHdrAPI01` | | ✓ | | | | |
| `_SchedgAgrmtItmAPI01` | | ✓ | | | | |
| `_SchedgAgrmtReleaseDocAPI01` | | ✓ | | | | |

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
