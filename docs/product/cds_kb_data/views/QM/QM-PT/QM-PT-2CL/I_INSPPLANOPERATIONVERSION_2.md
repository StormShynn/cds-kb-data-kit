---
name: I_INSPPLANOPERATIONVERSION_2
description: "Inspplanoperationversion 2"
app_component: QM-PT-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - QM
  - QM-PT
  - interface-view
  - component:QM-PT-2CL
  - lob:Quality Management
---
# I_INSPPLANOPERATIONVERSION_2

**Inspplanoperationversion 2**

| Property | Value |
|---|---|
| App Component | `QM-PT-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `InspectionPlanGroup` | ✓ | | `_BillOfOperationsOpBasic` | `BillOfOperationsGroup` |  |  |
| `BOOOperationInternalID` | ✓ | | `_BillOfOperationsOpBasic` | `BOOOperationInternalID` |  |  |
| `BOOOpInternalVersionCounter` | ✓ | | `_BillOfOperationsOpBasic` | `BOOOpInternalVersionCounter` |  |  |
| `BillOfOperationsType` | ✓ | | `_BillOfOperationsOpBasic` | `BillOfOperationsType` |  |  |
| `InspectionPlan` |  | | `_InspPlanOpAssgmt` | `InspectionPlan` |  |  |
| `WorkCenterInternalID` |  | | `_BillOfOperationsOpBasic` | `WorkCenterInternalID` |  |  |
| `WorkCenterTypeCode` |  | | `_BillOfOperationsOpBasic` | `WorkCenterTypeCode` |  |  |
| `IsDeleted` |  | |  | `cast( case when _BillOfOperationsOpBasic.IsDeleted = 'X' then 'X' when _InspPlanOpAssgmt.IsDeleted = 'X' then 'X' else ' ' end as lkenz preserving type )` |  |  |
| `IsImplicitlyDeleted` |  | | `_BillOfOperationsOpBasic` | `IsImplicitlyDeleted` |  |  |
| `OperationExternalID` |  | | `_BillOfOperationsOpBasic` | `OperationExternalID` |  |  |
| `Operation` |  | | `_BillOfOperationsOpBasic` | `Operation_2` |  |  |
| `OperationText` |  | | `_BillOfOperationsOpBasic` | `OperationText` |  |  |
| `Plant` |  | | `_BillOfOperationsOpBasic` | `Plant` |  |  |
| `OperationControlProfile` |  | | `_BillOfOperationsOpBasic` | `OperationControlProfile` |  |  |
| `OperationStandardTextCode` |  | | `_BillOfOperationsOpBasic` | `OperationStandardTextCode` |  |  |
| `BillOfOperationsRefType` |  | | `_BillOfOperationsOpBasic` | `BillOfOperationsRefType` |  |  |
| `BillOfOperationsRefGroup` |  | | `_BillOfOperationsOpBasic` | `BillOfOperationsRefGroup` |  |  |
| `BillOfOperationsRefVariant` |  | | `_BillOfOperationsOpBasic` | `BillOfOperationsRefVariant` |  |  |
| `BOORefOperationIncrementValue` |  | | `_BillOfOperationsOpBasic` | `BOORefOperationIncrementValue` |  |  |
| `InspSbstCompletionConfirmation` |  | | `_BillOfOperationsOpBasic` | `InspSbstCompletionConfirmation` |  |  |
| `InspSbstHasNoTimeOrQuantity` |  | | `_BillOfOperationsOpBasic` | `InspSbstHasNoTimeOrQuantity` |  |  |
| `OperationReferenceQuantity` |  | | `_BillOfOperationsOpBasic` | `OperationReferenceQuantity` |  |  |
| `OperationUnit` |  | | `_BillOfOperationsOpBasic` | `OperationUnit` |  |  |
| `OpQtyToBaseQtyDnmntr` |  | | `_BillOfOperationsOpBasic` | `OpQtyToBaseQtyDnmntr` |  |  |
| `OpQtyToBaseQtyNmrtr` |  | | `_BillOfOperationsOpBasic` | `OpQtyToBaseQtyNmrtr` |  |  |
| `CreationDate` |  | | `_BillOfOperationsOpBasic` | `CreationDate` |  |  |
| `CreatedByUser` |  | | `_BillOfOperationsOpBasic` | `CreatedByUser` |  |  |
| `LastChangeDate` |  | | `_BillOfOperationsOpBasic` | `LastChangeDate` |  |  |
| `LastChangedByUser` |  | | `_BillOfOperationsOpBasic` | `LastChangedByUser` |  |  |
| `ChangeNumber` |  | | `_BillOfOperationsOpBasic` | `ChangeNumber` |  |  |
| `ValidityStartDate` |  | | `_BillOfOperationsOpBasic` | `ValidityStartDate` |  |  |
| `ValidityEndDate` |  | | `_BillOfOperationsOpBasic` | `ValidityEndDate` |  |  |
| `_InspectionPlanVersion` | | ✓ | | | | |
| `_BillOfOperationsType` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_InspectionPlanVersion` | `I_InspectionPlanVersion` | [1..1] |
| `_BillOfOperationsType` | `I_BillOfOperationsType` | [1..1] |

## Source Code

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'Version of Inspection Plan Operation'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.usageType: { serviceQuality: #C, sizeCategory: #L, dataClass: #MASTER }
@ObjectModel.supportedCapabilities:
    [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]
@VDM.viewType: #COMPOSITE
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
define view entity I_InspPlanOperationVersion_2 
  as select from I_BillOfOperationsOpBasic as _BillOfOperationsOpBasic
    inner join   I_InspPlanOpAssgmtVersion as _InspPlanOpAssgmt on  _BillOfOperationsOpBasic.BillOfOperationsGroup  =  _InspPlanOpAssgmt.InspectionPlanGroup
                                                                and _BillOfOperationsOpBasic.BOOOperationInternalID =  _InspPlanOpAssgmt.BOOOperationInternalID
                                                                and _BillOfOperationsOpBasic.BillOfOperationsType   =  _InspPlanOpAssgmt.BillOfOperationsType
                                                                and _BillOfOperationsOpBasic.ValidityStartDate      >= _InspPlanOpAssgmt.ValidityStartDate
                                                                and _BillOfOperationsOpBasic.ValidityStartDate      <= _InspPlanOpAssgmt.ValidityEndDate
  /*+[hideWarning] { "IDS" :  [ "CARDINALITY_CHECK" ] } */
  association [1..1] to I_InspectionPlanVersion as _InspectionPlanVersion on  $projection.InspectionPlanGroup =  _InspectionPlanVersion.InspectionPlanGroup
                                                                          and $projection.InspectionPlan      =  _InspectionPlanVersion.InspectionPlan
                                                                          and $projection.ValidityStartDate   >= _InspectionPlanVersion.ValidityStartDate
                                                                          and $projection.ValidityStartDate   <= _InspectionPlanVersion.ValidityEndDate

  association [1..1] to I_BillOfOperationsType  as _BillOfOperationsType  on  $projection.BillOfOperationsType = _BillOfOperationsType.BillOfOperationsType

{
//           @ObjectModel.foreignKey.association: '_InspPlanOperation'
  key      _BillOfOperationsOpBasic.BillOfOperationsGroup as InspectionPlanGroup,
//           @ObjectModel.foreignKey.association: '_InspPlanOperation'
  key      _BillOfOperationsOpBasic.BOOOperationInternalID,
  key      _BillOfOperationsOpBasic.BOOOpInternalVersionCounter,
           @ObjectModel.foreignKey.association: '_BillOfOperationsType'
  key      _BillOfOperationsOpBasic.BillOfOperationsType,
           _InspPlanOpAssgmt.InspectionPlan,

           _BillOfOperationsOpBasic.WorkCenterInternalID,
           _BillOfOperationsOpBasic.WorkCenterTypeCode,

           cast( 
             case 
             when _BillOfOperationsOpBasic.IsDeleted = 'X' then 'X'
             when _InspPlanOpAssgmt.IsDeleted = 'X' then 'X'
             else ' '
           end as lkenz preserving type ) as IsDeleted,
           _BillOfOperationsOpBasic.IsImplicitlyDeleted,
           _BillOfOperationsOpBasic.OperationExternalID,
           _BillOfOperationsOpBasic.Operation_2 as Operation,


           _BillOfOperationsOpBasic.OperationText,
           _BillOfOperationsOpBasic.Plant,
           _BillOfOperationsOpBasic.OperationControlProfile,
           _BillOfOperationsOpBasic.OperationStandardTextCode,

           -- Origin
           _BillOfOperationsOpBasic.BillOfOperationsRefType,
           _BillOfOperationsOpBasic.BillOfOperationsRefGroup,
           _BillOfOperationsOpBasic.BillOfOperationsRefVariant,
           _BillOfOperationsOpBasic.BOORefOperationIncrementValue,

           -- Quality management: inspection points
           _BillOfOperationsOpBasic.InspSbstCompletionConfirmation,
           @Semantics.booleanIndicator 
           _BillOfOperationsOpBasic.InspSbstHasNoTimeOrQuantity,

           --Standard Values
           @Semantics.quantity.unitOfMeasure: 'OperationUnit'
           _BillOfOperationsOpBasic.OperationReferenceQuantity,
           _BillOfOperationsOpBasic.OperationUnit,
           _BillOfOperationsOpBasic.OpQtyToBaseQtyDnmntr,
           _BillOfOperationsOpBasic.OpQtyToBaseQtyNmrtr,

           // *************************** Administration ****************************
           _BillOfOperationsOpBasic.CreationDate,
           _BillOfOperationsOpBasic.CreatedByUser,
           _BillOfOperationsOpBasic.LastChangeDate,
           _BillOfOperationsOpBasic.LastChangedByUser,
           _BillOfOperationsOpBasic.ChangeNumber,
           _BillOfOperationsOpBasic.ValidityStartDate,
           _BillOfOperationsOpBasic.ValidityEndDate,


           // **************************** Associations *****************************
           _InspectionPlanVersion,
           _BillOfOperationsType
}
where _BillOfOperationsOpBasic.BillOfOperationsType = 'Q'
```
