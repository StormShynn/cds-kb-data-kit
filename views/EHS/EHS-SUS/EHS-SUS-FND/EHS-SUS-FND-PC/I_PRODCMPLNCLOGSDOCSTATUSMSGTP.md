---
name: I_PRODCMPLNCLOGSDOCSTATUSMSGTP
description: Prodcmplnclogsdocstatusmsgtp
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
  - status
  - component:EHS-SUS-FND-PC
  - lob:Other
---
# I_PRODCMPLNCLOGSDOCSTATUSMSGTP

**Prodcmplnclogsdocstatusmsgtp**

| Property | Value |
|---|---|
| App Component | `EHS-SUS-FND-PC` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `ProdCmplncLogsDocStatusMsgUUID` | ✓ | |  |  |
| `CreationDateTime` |  | |  |  |
| `CreatedByUser` |  | |  |  |
| `LastChangeDateTime` |  | |  |  |
| `LastChangedByUser` |  | |  |  |
| `ProdCmplncLogsDocumentUUID` |  | |  |  |
| `ProdCmplncLogsDocumentStage` |  | |  |  |
| `ProdCmplncLogsDocumentItem` |  | |  |  |
| `ProdCmplncLogsDocumentApplArea` |  | |  |  |
| `ProdCmplncLogsDocApplAreaCntxt` |  | |  |  |
| `SystemMessageIdentification` |  | |  |  |
| `SystemMessageType` |  | |  |  |
| `SystemMessageNumber` |  | |  |  |
| `SystemMessageVariable1` |  | |  |  |
| `SystemMessageVariable2` |  | |  |  |
| `SystemMessageVariable3` |  | |  |  |
| `SystemMessageVariable4` |  | |  |  |
| `_Document` | | ✓ | | |
| `_Item` | | ✓ | | |
| `_Stage` | | ✓ | | |

## Source Code

```abap
@EndUserText.label: 'Prod Cmplnc Logs Doc Status Message - TP'
@AccessControl.authorizationCheck: #MANDATORY
@VDM.viewType: #TRANSACTIONAL
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@ObjectModel.supportedCapabilities: [#TRANSACTIONAL_PROVIDER]
@ObjectModel.modelingPattern: #TRANSACTIONAL_INTERFACE
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.usageType:{
  serviceQuality: #A,
  sizeCategory: #L,
  dataClass: #TRANSACTIONAL
}

define view entity I_ProdCmplncLogsDocStatusMsgTP
  as projection on R_ProdCmplncLogsDocStatusMsgTP
{
  key ProdCmplncLogsDocStatusMsgUUID,

      @Semantics.systemDateTime.createdAt: true
      CreationDateTime,
      @Semantics.user.createdBy: true
      CreatedByUser,
      @Semantics.systemDateTime.lastChangedAt: true
      LastChangeDateTime,
      @Semantics.user.lastChangedBy: true
      LastChangedByUser,

      ProdCmplncLogsDocumentUUID,
      ProdCmplncLogsDocumentStage,
      ProdCmplncLogsDocumentItem,
      ProdCmplncLogsDocumentApplArea,
      ProdCmplncLogsDocApplAreaCntxt,
      SystemMessageIdentification,
      SystemMessageType,
      SystemMessageNumber,
      SystemMessageVariable1,
      SystemMessageVariable2,
      SystemMessageVariable3,
      SystemMessageVariable4,

      /* Associations */
      _Document : redirected to parent I_ProdCmplncLogsDocumentTP,
      _Item     : redirected to I_ProdCmplncLogsDocumentItemTP,
      _Stage    : redirected to I_ProdCmplncLogsDocStageTP
}
```
