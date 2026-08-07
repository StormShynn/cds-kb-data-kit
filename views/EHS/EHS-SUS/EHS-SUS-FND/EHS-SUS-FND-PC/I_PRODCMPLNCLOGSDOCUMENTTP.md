---
name: I_PRODCMPLNCLOGSDOCUMENTTP
description: Prodcmplnclogsdocumenttp
app_component: EHS-SUS-FND-PC
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - EHS
  - EHS-SUS
  - EHS-SUS-FND
  - interface-view
  - transactional-processing
  - document
  - component:EHS-SUS-FND-PC
  - lob:Other
---
# I_PRODCMPLNCLOGSDOCUMENTTP

**Prodcmplnclogsdocumenttp**

| Property | Value |
|---|---|
| App Component | `EHS-SUS-FND-PC` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ProdCmplncLogsDocumentUUID` | ✓ | |  |  |  |  |
| `CreationDateTime` |  | |  |  |  |  |
| `CreatedByUser` |  | |  |  |  |  |
| `LastChangeDateTime` |  | |  |  |  |  |
| `LastChangedByUser` |  | |  |  |  |  |
| `ProdCmplncLogsDocument` |  | |  |  |  |  |
| `BusinessSystemName` |  | |  |  |  |  |
| `ProdCmplncLogsDocumentCategory` |  | |  |  |  |  |
| `ProdCmplncLogsDocumentStatus` |  | |  |  |  |  |
| `ProdMktbltyCheckIsRequested` |  | |  |  |  |  |
| `SftyDtaShtCheckIsRequested` |  | |  |  |  |  |
| `DangerousGoodsCheckIsRequested` |  | |  |  |  |  |
| `ChmlSuplrCheckIsRequested` |  | |  |  |  |  |
| `GoodsIssueIsPosted` |  | |  |  |  |  |
| `ActualGoodsMovementDate` |  | |  |  |  |  |
| `ActualGoodsMovementTime` |  | |  |  |  |  |
| `ActualGoodsIssueTimeZone` |  | |  |  |  |  |
| `_Item` | | ✓ | | | | |
| `_Stage` | | ✓ | | | | |
| `_StatusMessage` | | ✓ | | | | |
| `_MnllyOvrwrtnAddr` | | ✓ | | | | |

## Source Code

```abap
@EndUserText.label: 'Prod Compliance Logistics Document - TP'
@AccessControl.authorizationCheck: #MANDATORY
@VDM.viewType: #TRANSACTIONAL
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@ObjectModel.supportedCapabilities: [#TRANSACTIONAL_PROVIDER]
@ObjectModel.modelingPattern: #TRANSACTIONAL_INTERFACE
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel: {
  sapObjectNodeType.name: 'ProdCmplncLogisticsDocument',
  usageType:{
    serviceQuality: #A,
    sizeCategory: #L,
    dataClass: #TRANSACTIONAL
  }
}

define root view entity I_ProdCmplncLogsDocumentTP
  provider contract transactional_interface
  as projection on R_ProdCmplncLogsDocumentTP
{
  key ProdCmplncLogsDocumentUUID,

      @Semantics.systemDateTime.createdAt: true
      CreationDateTime,
      @Semantics.user.createdBy: true
      CreatedByUser,
      @Semantics.systemDateTime.lastChangedAt: true
      LastChangeDateTime,
      @Semantics.user.lastChangedBy: true
      LastChangedByUser,

      ProdCmplncLogsDocument,
      BusinessSystemName,
      ProdCmplncLogsDocumentCategory,
      ProdCmplncLogsDocumentStatus,
      ProdMktbltyCheckIsRequested,
      SftyDtaShtCheckIsRequested,
      DangerousGoodsCheckIsRequested,
      ChmlSuplrCheckIsRequested,
      GoodsIssueIsPosted, 
      ActualGoodsMovementDate,
      ActualGoodsMovementTime,
      ActualGoodsIssueTimeZone,

      /* Associations */
      _Item             : redirected to composition child I_ProdCmplncLogsDocumentItemTP,
      _Stage            : redirected to composition child I_ProdCmplncLogsDocStageTP,
      _StatusMessage    : redirected to composition child I_ProdCmplncLogsDocStatusMsgTP,
      _MnllyOvrwrtnAddr : redirected to composition child I_PCLgsDcMnllyOvrwrtnAddrTP
}
```
