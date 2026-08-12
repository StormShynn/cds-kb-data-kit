---
name: I_PRODCMPLNCLOGSDOCSTAGETP
description: "Prodcmplnclogsdocstagetp"
app_component: EHS-SUS-FND-PC
software_component: SAPSCORE
release_state: released
atc_state: released
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
# I_PRODCMPLNCLOGSDOCSTAGETP

**Prodcmplnclogsdocstagetp**

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
| `CreationDateTime` |  | |  |  |  |  |
| `CreatedByUser` |  | |  |  |  |  |
| `LastChangeDateTime` |  | |  |  |  |  |
| `LastChangedByUser` |  | |  |  |  |  |
| `DepartureCountry` |  | |  |  |  |  |
| `DestinationCountry` |  | |  |  |  |  |
| `DngrsGoodsModeOfTransport` |  | |  |  |  |  |
| `_Document` | | ✓ | | | | |
| `_StageItem` | | ✓ | | | | |
| `_TransitCountry` | | ✓ | | | | |

## Source Code

```abap
@EndUserText.label: 'Prod Compliance Logs Document Stage - TP'
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

define view entity I_ProdCmplncLogsDocStageTP
  as projection on R_ProdCmplncLogsDocStageTP
{
  key ProdCmplncLogsDocumentUUID,
  key ProdCmplncLogsDocumentStage,

      @Semantics.systemDateTime.createdAt: true
      CreationDateTime,
      @Semantics.user.createdBy: true
      CreatedByUser,
      @Semantics.systemDateTime.lastChangedAt: true
      LastChangeDateTime,
      @Semantics.user.lastChangedBy: true
      LastChangedByUser,

      DepartureCountry,
      DestinationCountry,
      DngrsGoodsModeOfTransport,

      /* Associations */
      _Document       : redirected to parent I_ProdCmplncLogsDocumentTP,
      _StageItem      : redirected to composition child I_ProdCmplncLogsDocStageItemTP,
      _TransitCountry : redirected to composition child I_ProdCmplncLogsDocTrnstCtryTP
}
```
