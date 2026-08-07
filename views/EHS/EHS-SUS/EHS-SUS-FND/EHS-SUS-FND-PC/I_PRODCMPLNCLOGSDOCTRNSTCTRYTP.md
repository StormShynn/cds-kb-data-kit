---
name: I_PRODCMPLNCLOGSDOCTRNSTCTRYTP
description: Prodcmplnclogsdoctrnstctrytp
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
  - component:EHS-SUS-FND-PC
  - lob:Other
---
# I_PRODCMPLNCLOGSDOCTRNSTCTRYTP

**Prodcmplnclogsdoctrnstctrytp**

| Property | Value |
|---|---|
| App Component | `EHS-SUS-FND-PC` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `ProdCmplncLogsDocumentUUID` | ✓ | |  |  |
| `ProdCmplncLogsDocumentStage` | ✓ | |  |  |
| `Country` | ✓ | |  |  |
| `CreationDateTime` |  | |  |  |
| `CreatedByUser` |  | |  |  |
| `LastChangeDateTime` |  | |  |  |
| `LastChangedByUser` |  | |  |  |
| `_Document` | | ✓ | | |
| `_Stage` | | ✓ | | |

## Source Code

```abap
@EndUserText.label: 'Prod Cmplnc Logs Doc Trnst Country - TP'
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

define view entity I_ProdCmplncLogsDocTrnstCtryTP
  as projection on R_ProdCmplncLogsDocTrnstCtryTP
{
  key ProdCmplncLogsDocumentUUID,
  key ProdCmplncLogsDocumentStage,
  key Country,

      @Semantics.systemDateTime.createdAt: true
      CreationDateTime,
      @Semantics.user.createdBy: true
      CreatedByUser,
      @Semantics.systemDateTime.lastChangedAt: true
      LastChangeDateTime,
      @Semantics.user.lastChangedBy: true
      LastChangedByUser,

      /* Associations */
      _Document : redirected to I_ProdCmplncLogsDocumentTP,
      _Stage    : redirected to parent I_ProdCmplncLogsDocStageTP
}
```
