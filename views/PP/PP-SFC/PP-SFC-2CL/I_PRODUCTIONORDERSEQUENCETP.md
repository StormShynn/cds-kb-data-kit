---
name: I_PRODUCTIONORDERSEQUENCETP
description: Production OrderSEQUENCETP
app_component: PP-SFC-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PP
  - PP-SFC
  - interface-view
  - transactional-processing
  - product
  - production-order
  - component:PP-SFC-2CL
  - lob:Manufacturing
  - bo:ProductionOrder
---
# I_PRODUCTIONORDERSEQUENCETP

**Production OrderSEQUENCETP**

| Property | Value |
|---|---|
| App Component | `PP-SFC-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `ProductionOrder` | ✓ | |  |  |
| `ProductionOrderSequence` | ✓ | |  |  |
| `OrderInternalID` |  | |  |  |
| `SequenceInternalID` |  | |  |  |
| `SequenceText` |  | |  |  |
| `SequenceHasLongText` |  | |  |  |
| `LongTextLanguage` |  | |  |  |
| `SequenceBranchOperation` |  | |  |  |
| `SequenceReturnOperation` |  | |  |  |
| `SequenceCategory` |  | |  |  |
| `ReferenceSequence` |  | |  |  |
| `SequenceSchedulingAlignment` |  | |  |  |
| `ObjectInternalID` |  | |  |  |
| `BillOfOperationsUnit` |  | |  |  |
| `MinimumLotSizeQuantity` |  | |  |  |
| `MaximumLotSizeQuantity` |  | |  |  |
| `_ProductionOrder` | | ✓ | | |
| `_Operation` | | ✓ | | |

## Source Code

```abap
@AccessControl.authorizationCheck: #MANDATORY
@AccessControl.personalData.blocking: #NOT_REQUIRED

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel.modelingPattern: #NONE
@ObjectModel.supportedCapabilities: [#TRANSACTIONAL_PROVIDER]
@ObjectModel.usageType: {serviceQuality: #C, sizeCategory: #L, dataClass: #TRANSACTIONAL}
@ObjectModel.sapObjectNodeType.name: 'ProductionOrderSequence'

@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #TRANSACTIONAL 

@EndUserText.label: 'Production Order Sequence - TP'

define view entity I_ProductionOrderSequenceTP 
as projection on R_ProductionOrderSequenceTP
{

  key ProductionOrder,
  key ProductionOrderSequence,

      // Internal Key
      OrderInternalID,
      SequenceInternalID,

      // Text
      SequenceText,
      SequenceHasLongText,
      LongTextLanguage,

      SequenceBranchOperation,
      SequenceReturnOperation,
      SequenceCategory,      
      ReferenceSequence,
      SequenceSchedulingAlignment,
      ObjectInternalID,
      
      // Quantity and UoM
      BillOfOperationsUnit,
      @Semantics.quantity.unitOfMeasure: 'BillOfOperationsUnit'
      MinimumLotSizeQuantity,
      @Semantics.quantity.unitOfMeasure: 'BillOfOperationsUnit'
      MaximumLotSizeQuantity, 

      // Compositions
      _ProductionOrder: redirected to parent I_ProductionOrderTP,
      _Operation: redirected to composition child I_ProductionOrderOperationTP 
 
}
```
