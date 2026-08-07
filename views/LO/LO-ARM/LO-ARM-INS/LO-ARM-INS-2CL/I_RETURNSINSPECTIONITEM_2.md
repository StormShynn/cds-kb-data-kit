---
name: I_RETURNSINSPECTIONITEM_2
description: Returnsinspectionitem 2
app_component: LO-ARM-INS-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - LO
  - LO-ARM
  - LO-ARM-INS
  - interface-view
  - inspection
  - item-level
  - component:LO-ARM-INS-2CL
  - lob:Logistics General
---
# I_RETURNSINSPECTIONITEM_2

**Returnsinspectionitem 2**

| Property | Value |
|---|---|
| App Component | `LO-ARM-INS-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `ReturnsInspection` | ✓ | |  | `InspectionDocument` |
| `ReturnsInspectionItem` | ✓ | |  | `InspectionDocumentItem` |
| `Product` |  | |  |  |
| `InspectionCode` |  | |  |  |
| `InspectionDate` |  | |  |  |
| `ProductInspectorName` |  | |  |  |
| `InspectionLeadingUnitCode` |  | |  |  |
| `InspectedProductQtyInBaseUnit` |  | |  |  |
| `BaseUnit` |  | |  |  |
| `InspectionDocumentIsDeleted` |  | |  |  |
| `InspectionDocumentIsCancelled` |  | |  |  |
| `ReturnsFollowUpActivity` |  | |  |  |
| `InspectedProductQtyInSalesUnit` |  | |  |  |
| `SalesUnit` |  | |  |  |
| `InspectedProductQuantity` |  | |  | `case when ReturnsInspectionItem.InspectionLeadingUnitCode = '1' then cast (ReturnsInspectionItem.InspectedProductQtyInBaseUnit as /spe/inspqty preserving type ) when ReturnsInspectionItem.InspectionLeadingUnitCode = '2' then cast (ReturnsInspectionItem.InspectedProductQtyInSalesUnit as /spe/inspqty preserving type ) else cast (ReturnsInspectionItem.InspectedProductQtyInBaseUnit as /spe/inspqty preserving type ) end` |
| `InspectedProductUnit` |  | |  | `case when ReturnsInspectionItem.InspectionLeadingUnitCode = '1' then cast (ReturnsInspectionItem.BaseUnit as meins preserving type ) when ReturnsInspectionItem.InspectionLeadingUnitCode = '2' then cast (ReturnsInspectionItem.SalesUnit as meins preserving type ) else cast (ReturnsInspectionItem.BaseUnit as meins preserving type ) end` |
| `ReturnsInspectionItemStatus` |  | |  | `case when ReturnsInspectionItem.InspectionCode is not initial and ReturnsInspectionItem.InspectedProductQtyInBaseUnit > 0 then cast( '2' as msr_insp_insp_status) when ReturnsInspectionItem.InspectionCode is initial or ReturnsInspectionItem.InspectedProductQtyInBaseUnit <= 0 then cast( '1' as msr_insp_insp_status ) when ReturnsInspectionItem.InspectionDocumentIsDeleted is not initial then cast( '4' as msr_insp_insp_status ) else cast( '1' as msr_insp_insp_status ) end` |
| `RetsFllwUpActyItmSts` |  | |  | `case when ReturnsInspection.RetsMgmtInspPubgSts = 'P' or ReturnsInspection.RetsMgmtInspPubgSts = 'C' then cast( '3' as msr_insp_ldm_status) when ReturnsInspection.RetsMgmtInspPubgSts <> 'P' and ReturnsInspection.RetsMgmtInspPubgSts <> 'C' and ReturnsInspectionItem.ReturnsFollowUpActivity is not initial then cast( '2' as msr_insp_ldm_status) when ReturnsInspection.RetsMgmtInspPubgSts <> 'P' and ReturnsInspection.RetsMgmtInspPubgSts <> 'C' and ReturnsInspectionItem.ReturnsFollowUpActivity is initial then cast( '1' as msr_insp_ldm_status) when ReturnsInspection.RetsMgmtInspPubgSts = 'P' and ReturnsInspectionItem.InspectionDocumentIsCancelled <> '' and ReturnsInspectionItem.ReturnsFollowUpActivity <> '0031' then cast( '2' as msr_insp_ldm_status) when ReturnsInspectionItem.InspectionDocumentIsDeleted <> '' then '4' else cast( '1' as msr_insp_ldm_status) end` |
| `RetsMgmtProcess` |  | |  |  |
| `TargetPlant` |  | | `_ReturnsInspectionExecuted` | `TargetPlant` |
| `TargetStorageLocation` |  | | `_ReturnsInspectionExecuted` | `TargetStorageLocation` |
| `TargetStockType` |  | | `_ReturnsInspectionExecuted` | `TargetStockType` |
| `TgtProdForGdsMvtPostg` |  | | `_ReturnsInspectionExecuted` | `TgtProdForGdsMvtPostg` |
| `Supplier` |  | | `_ReturnsInspectionExecuted` | `Supplier` |
| `RetsFllwUpActyRespPersnName` |  | |  |  |
| `RetsFllwUpActyReleasedDate` |  | |  |  |
| `_ReturnsInspection` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ReturnsInspection` | `I_ReturnsInspection_2` | [1..1] |
| `_ReturnsInspectionExecuted` | `I_AdvncdRetsMgmtProcExecuted` | [1..*] |

## Source Code

```abap
@VDM.viewType: #COMPOSITE
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'Returns Inspection Item'
@ObjectModel: {
  representativeKey        : 'ReturnsInspectionItem',
  sapObjectNodeType.name   : 'ReturnsInspectionItem',
  modelingPattern          : #NONE,
  supportedCapabilities    : [#CDS_MODELING_DATA_SOURCE,
                              #CDS_MODELING_ASSOCIATION_TARGET,
                              #SQL_DATA_SOURCE,
                              #EXTRACTION_DATA_SOURCE ],
  usageType: {
    serviceQuality: #C,
    dataClass:      #TRANSACTIONAL,
    sizeCategory:   #L
    }                            
}
@Metadata.ignorePropagatedAnnotations: true
@Metadata.allowExtensions: true
@Analytics.internalName:#LOCAL 
@Analytics.dataExtraction.enabled: true

define view entity I_ReturnsInspectionItem_2
  as select from I_InspectionOutcomeItemBasic         as ReturnsInspectionItem
    inner join I_ReturnsInspection_2                  as ReturnsInspection          on ReturnsInspection.ReturnsInspection = ReturnsInspectionItem.InspectionDocument
    association[1..1] to I_ReturnsInspection_2        as _ReturnsInspection         on $projection.ReturnsInspection = _ReturnsInspection.ReturnsInspection
    association[1..*] to I_AdvncdRetsMgmtProcExecuted as _ReturnsInspectionExecuted on $projection.RetsMgmtProcess   = _ReturnsInspectionExecuted.RetsMgmtProcess
                                                                                    and ReturnsInspectionItem.InspectionDocument       = _ReturnsInspectionExecuted.ReturnsDocument
                                                                                    and _ReturnsInspectionExecuted.RetsMgmtProcessStep = '0041'
                                                                                    and _ReturnsInspectionExecuted.ReturnsDocumentType = '05'
{
       @ObjectModel.foreignKey.association: '_ReturnsInspection'
  key  ReturnsInspectionItem.InspectionDocument         as ReturnsInspection,
  key  ReturnsInspectionItem.InspectionDocumentItem     as ReturnsInspectionItem,
       ReturnsInspectionItem.Product,
       ReturnsInspectionItem.InspectionCode,
       ReturnsInspectionItem.InspectionDate,
       ReturnsInspectionItem.ProductInspectorName,
       ReturnsInspectionItem.InspectionLeadingUnitCode,
       @Semantics.quantity.unitOfMeasure: 'BaseUnit'
       ReturnsInspectionItem.InspectedProductQtyInBaseUnit,
       ReturnsInspectionItem.BaseUnit,
       @Semantics.booleanIndicator: true
       ReturnsInspectionItem.InspectionDocumentIsDeleted,
       @Semantics.booleanIndicator: true
       ReturnsInspectionItem.InspectionDocumentIsCancelled,
       ReturnsInspectionItem.ReturnsFollowUpActivity,
       @Semantics.quantity.unitOfMeasure: 'SalesUnit'
       ReturnsInspectionItem.InspectedProductQtyInSalesUnit,
       ReturnsInspectionItem.SalesUnit,
       @Semantics.quantity.unitOfMeasure: 'InspectedProductUnit'
       case
         when ReturnsInspectionItem.InspectionLeadingUnitCode = '1'
          then cast (ReturnsInspectionItem.InspectedProductQtyInBaseUnit  as  /spe/inspqty preserving type  )
         when ReturnsInspectionItem.InspectionLeadingUnitCode = '2'
          then cast (ReturnsInspectionItem.InspectedProductQtyInSalesUnit  as  /spe/inspqty preserving type )
         else
          cast (ReturnsInspectionItem.InspectedProductQtyInBaseUnit  as  /spe/inspqty preserving type  )
       end                                              as InspectedProductQuantity,

       case
         when ReturnsInspectionItem.InspectionLeadingUnitCode = '1'
          then cast (ReturnsInspectionItem.BaseUnit as  meins preserving type )
         when ReturnsInspectionItem.InspectionLeadingUnitCode  = '2'
          then cast (ReturnsInspectionItem.SalesUnit as  meins preserving type )
         else
          cast (ReturnsInspectionItem.BaseUnit as  meins preserving type )
       end                                              as InspectedProductUnit,

       case
         when ReturnsInspectionItem.InspectionCode is not initial and ReturnsInspectionItem.InspectedProductQtyInBaseUnit > 0 then cast( '2' as msr_insp_insp_status) // inspected
         when ReturnsInspectionItem.InspectionCode is initial or ReturnsInspectionItem.InspectedProductQtyInBaseUnit <= 0 then cast( '1' as msr_insp_insp_status ) // not_inspected
         when ReturnsInspectionItem.InspectionDocumentIsDeleted is not initial then cast( '4' as msr_insp_insp_status ) // inspection_cancelled
         else cast( '1' as msr_insp_insp_status ) // not_inspected
       end                                              as ReturnsInspectionItemStatus,

       case
         when ReturnsInspection.RetsMgmtInspPubgSts = 'P' or ReturnsInspection.RetsMgmtInspPubgSts = 'C' // published or publish_work
           then cast( '3' as msr_insp_ldm_status)  //confirmed
         when ReturnsInspection.RetsMgmtInspPubgSts <> 'P' and ReturnsInspection.RetsMgmtInspPubgSts <> 'C' // published and publish_work
                                                            and ReturnsInspectionItem.ReturnsFollowUpActivity is not initial
           then cast( '2' as msr_insp_ldm_status) // in_process
         when ReturnsInspection.RetsMgmtInspPubgSts <> 'P' and ReturnsInspection.RetsMgmtInspPubgSts <> 'C' // published and publish_work
                                                            and ReturnsInspectionItem.ReturnsFollowUpActivity is initial
           then cast( '1' as msr_insp_ldm_status) // open
         when ReturnsInspection.RetsMgmtInspPubgSts = 'P' and ReturnsInspectionItem.InspectionDocumentIsCancelled <> '' // publish_work
                                                           and ReturnsInspectionItem.ReturnsFollowUpActivity <> '0031'
           then cast( '2' as msr_insp_ldm_status) // in_process
         when ReturnsInspectionItem.InspectionDocumentIsDeleted <> '' then '4' // cancelled
         else cast( '1' as msr_insp_ldm_status) // open
       end                                              as RetsFllwUpActyItmSts,
       
        ReturnsInspection.RetsMgmtProcess,
       
       _ReturnsInspectionExecuted.TargetPlant           as TargetPlant,
       _ReturnsInspectionExecuted.TargetStorageLocation as TargetStorageLocation,
       _ReturnsInspectionExecuted.TargetStockType       as TargetStockType,
       _ReturnsInspectionExecuted.TgtProdForGdsMvtPostg as TgtProdForGdsMvtPostg,
       _ReturnsInspectionExecuted.Supplier              as Supplier,
       ReturnsInspectionItem.RetsFllwUpActyRespPersnName,
       ReturnsInspectionItem.RetsFllwUpActyReleasedDate,
       _ReturnsInspection
}
```
