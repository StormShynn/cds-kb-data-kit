---
name: I_QUALITYINPROCUREMENTTP_2
description: Qualityinprocurementtp 2
app_component: QM-PT-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - QM
  - QM-PT
  - interface-view
  - transactional-processing
  - component:QM-PT-2CL
  - lob:Quality Management
---
# I_QUALITYINPROCUREMENTTP_2

**Qualityinprocurementtp 2**

| Property | Value |
|---|---|
| App Component | `QM-PT-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `Material` | `Material` |
| key `QltyInProcmtIntID` | `QltyInProcmtIntID` |
| `Supplier` | `Supplier` |
| `Plant` | `Plant` |
| `MaterialRevisionLevel` | `MaterialRevisionLevel` |
| `QltyInProcmtReleaseValidTo` | `QltyInProcmtReleaseValidTo` |
| `BaseUnit` | `BaseUnit` |
| `ReleasedQuantity` | `ReleasedQuantity` |
| `QltyInProcmtBlockReasonText` | `QltyInProcmtBlockReasonText` |
| `ProcurementBlock` | `ProcurementBlock` |
| `QltyInProcmtRelQtyIsActive` | `QltyInProcmtRelQtyIsActive` |
| `QltyInProcmtInspControl` | `QltyInProcmtInspControl` |
| `ProdnPieceApprovalIsRequired` | `ProdnPieceApprovalIsRequired` |
| `ProductionPieceApproval` | `ProductionPieceApproval` |
| `ProductionPieceApprovalLevel` | `ProductionPieceApprovalLevel` |
| `ProductionPieceApprovalStatus` | `ProductionPieceApprovalStatus` |
| `ChangedDateTime` | `ChangedDateTime` |
| `CreationDate` | `CreationDate` |
| `CreatedByUser` | `CreatedByUser` |
| `LastChangeDate` | `LastChangeDate` |
| `LastChangedByUser` | `LastChangedByUser` |
| `IsDeleted` | `IsDeleted` |
| `QualityManagementSystem` | `QualityManagementSystem` |
| `QltyInProcmtCertfnValidTo` | `QltyInProcmtCertfnValidTo` |
| `InspectionLotType` | `InspectionLotType` |
| `QltyInProcmtLotCrtnLeadTime` | `QltyInProcmtLotCrtnLeadTime` |
| `QltyInProcmtCertificateCtrl` | `QltyInProcmtCertificateCtrl` |
| `IsBusinessPurposeCompleted` | `IsBusinessPurposeCompleted` |
| `MatlQualityAuthorizationGroup` | `MatlQualityAuthorizationGroup` |
| `AuthorizationGroup` | `AuthorizationGroup` |
| `_QltyFirstArticleInsp` | *Association* |
| `_QltyInProcmtLongText` | *Association* |
| `_QltyInProcmtStatus` | *Association* |

## Source Code

```abap
@AccessControl.authorizationCheck: #MANDATORY
@VDM.viewType: #TRANSACTIONAL
@ObjectModel.supportedCapabilities: [#TRANSACTIONAL_PROVIDER]
@ObjectModel.modelingPattern: #TRANSACTIONAL_INTERFACE
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.sapObjectNodeType: { name: 'PurchasingQualityInfoRecord' }
@ObjectModel.usageType  : {
                        serviceQuality  : #C,
                        sizeCategory    : #S,
                        dataClass       : #MASTER
    }
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API    
@AccessControl.personalData.blocking: #REQUIRED
@EndUserText.label: 'Quality Info Record Data'

define root view entity I_QualityInProcurementTP_2
provider contract transactional_interface 
as projection on R_QualityInProcurementTP as PurchasingQualityInfoRecord {
  key Material,
  key QltyInProcmtIntID,
  Supplier,
  Plant,
  MaterialRevisionLevel,
  QltyInProcmtReleaseValidTo,
  BaseUnit,
  
  @Semantics.quantity.unitOfMeasure: 'BaseUnit'
  ReleasedQuantity,
  
  QltyInProcmtBlockReasonText,
  ProcurementBlock,
  QltyInProcmtRelQtyIsActive,
  QltyInProcmtInspControl,
  ProdnPieceApprovalIsRequired,
  ProductionPieceApproval,
  ProductionPieceApprovalLevel,
  ProductionPieceApprovalStatus,
  ChangedDateTime,
  CreationDate,
  CreatedByUser,
  LastChangeDate,
  LastChangedByUser,
  @Semantics.booleanIndicator
  IsDeleted,
  QualityManagementSystem,
  QltyInProcmtCertfnValidTo,
  InspectionLotType,
  QltyInProcmtLotCrtnLeadTime,
  QltyInProcmtCertificateCtrl,
  @Semantics.booleanIndicator
  IsBusinessPurposeCompleted,
  MatlQualityAuthorizationGroup,
  AuthorizationGroup,

  /* Associations */
  _QltyFirstArticleInsp : redirected to composition child I_QltyFirstArticleInspTP_2,
  _QltyInProcmtLongText : redirected to composition child I_QltyInProcmtLongTextTP_2,
  
  @Feature:'SW:QM_SFWS_QALL'
  _QltyInProcmtStatus   : redirected to composition child I_QltyInProcmtStatusTP_2
}
```
