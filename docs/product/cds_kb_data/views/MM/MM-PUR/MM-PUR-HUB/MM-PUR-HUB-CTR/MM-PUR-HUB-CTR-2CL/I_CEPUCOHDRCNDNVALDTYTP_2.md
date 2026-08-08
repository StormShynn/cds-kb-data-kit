---
name: I_CEPUCOHDRCNDNVALDTYTP_2
description: "Cepucohdrcndnvaldtytp 2"
app_component: MM-PUR-HUB-CTR-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - MM
  - MM-PUR
  - MM-PUR-HUB
  - interface-view
  - transactional-processing
  - header-level
  - component:MM-PUR-HUB-CTR-2CL
  - lob:Sourcing & Procurement
---
# I_CEPUCOHDRCNDNVALDTYTP_2

**Cepucohdrcndnvaldtytp 2**

| Property | Value |
|---|---|
| App Component | `MM-PUR-HUB-CTR-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CentralPurchaseContract` | ✓ | |  |  |  |  |
| `ConditionRecord` | ✓ | |  |  |  |  |
| `ConditionValidityEndDate` | ✓ | |  |  |  |  |
| `ConditionApplication` |  | |  |  |  |  |
| `ConditionType` |  | |  |  |  |  |
| `ConditionValidityStartDate` |  | |  |  |  |  |
| `ConditionIsDeleted` |  | |  |  |  |  |
| `_CntrlPurContrHdrCndnAmount` | | ✓ | | | | |
| `_CentralPurchaseContract` | | ✓ | | | | |

## Source Code

```abap
@EndUserText.label: 'CCTR Header Condition Validity - TP'
@AccessControl.authorizationCheck: #CHECK

@AccessControl.personalData.blocking: #BLOCKED_DATA_EXCLUDED

@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #TRANSACTIONAL

@ObjectModel.supportedCapabilities: [#TRANSACTIONAL_PROVIDER]

@ObjectModel.modelingPattern: #TRANSACTIONAL_INTERFACE

@ObjectModel.semanticKey:  [ 'CentralPurchaseContract','ConditionRecord','ConditionValidityEndDate' ]

@ObjectModel.usageType:{
  serviceQuality: #C,
  sizeCategory: #XL,
  dataClass: #TRANSACTIONAL
}

@Metadata.ignorePropagatedAnnotations: true
define view entity I_CePuCoHdrCndnValdtyTP_2
  as projection on R_CntrlPurContrHdrCndnValdtyTP
{

  key  CentralPurchaseContract,
  key  ConditionRecord,
  key  ConditionValidityEndDate,
  
       ConditionApplication,
       ConditionType,
       ConditionValidityStartDate,
       ConditionIsDeleted,


       /* Associations */
       _CntrlPurContrHdrCndnAmount : redirected to composition child I_CntrlPurContrHdrCndnAmtTP_2,
       _CentralPurchaseContract    : redirected to parent I_CntrlPurchaseContractTP_2


}
```
