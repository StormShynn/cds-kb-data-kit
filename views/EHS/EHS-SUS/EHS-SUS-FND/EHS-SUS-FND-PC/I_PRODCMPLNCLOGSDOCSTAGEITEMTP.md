---
name: I_PRODCMPLNCLOGSDOCSTAGEITEMTP
description: Prodcmplnclogsdocstageitemtp
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
  - item-level
  - component:EHS-SUS-FND-PC
  - lob:Other
---
# I_PRODCMPLNCLOGSDOCSTAGEITEMTP

**Prodcmplnclogsdocstageitemtp**

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
| `ProdCmplncLogsDocumentStage` | ✓ | |  |  |  |  |
| `ProdCmplncLogsDocumentItem` | ✓ | |  |  |  |  |
| `CreationDateTime` |  | |  |  |  |  |
| `CreatedByUser` |  | |  |  |  |  |
| `LastChangeDateTime` |  | |  |  |  |  |
| `LastChangedByUser` |  | |  |  |  |  |
| `ProdCmplncLogicalTransportUnit` |  | |  |  |  |  |
| `_Document` | | ✓ | | | | |
| `_Item` | | ✓ | | | | |
| `_Stage` | | ✓ | | | | |
| `_EUADR` | | ✓ | | | | |

## Source Code

```abap
@EndUserText.label: 'Prod Cmplnc Logs Doc Stage Item - TP'
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

define view entity I_ProdCmplncLogsDocStageItemTP
  as projection on R_ProdCmplncLogsDocStageItemTP
{
  key ProdCmplncLogsDocumentUUID,
  key ProdCmplncLogsDocumentStage,
  key ProdCmplncLogsDocumentItem,

      @Semantics.systemDateTime.createdAt: true
      CreationDateTime,
      @Semantics.user.createdBy: true
      CreatedByUser,
      @Semantics.systemDateTime.lastChangedAt: true
      LastChangeDateTime,
      @Semantics.user.lastChangedBy: true
      LastChangedByUser,

      ProdCmplncLogicalTransportUnit,

      /* Associations */
      _Document : redirected to I_ProdCmplncLogsDocumentTP,
      _Item     : redirected to I_ProdCmplncLogsDocumentItemTP,
      _Stage    : redirected to parent I_ProdCmplncLogsDocStageTP,
      _EUADR    : redirected to composition child I_ProdCmplncLogsDocEUADRTP

}
```
