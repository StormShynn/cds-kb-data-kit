---
name: I_WRKASSGMTSRVCCOSTLVLTP_1
description: "Wrkassgmtsrvccostlvltp 1"
app_component: CA-WFD-INT
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CA
  - CA-WFD
  - CA-WFD-INT
  - interface-view
  - transactional-processing
  - component:CA-WFD-INT
  - lob:Cross-Application Components
---
# I_WRKASSGMTSRVCCOSTLVLTP_1

**Wrkassgmtsrvccostlvltp 1**

| Property | Value |
|---|---|
| App Component | `CA-WFD-INT` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `WorkforcePersonExternalID` | ✓ | |  |  |  |  |
| `WorkAssignmentExternalID` | ✓ | |  |  |  |  |
| `Country2DigitISOCode` | ✓ | |  |  |  |  |
| `StartDate` | ✓ | |  |  |  |  |
| `EndDate` |  | |  |  |  |  |
| `ServiceCostLevel` |  | |  |  |  |  |
| `IsBlocked` |  | |  |  |  |  |
| `_CostLevelText` | | ✓ | | | | |
| `_WorkAssignment` | | ✓ | | | | |
| `_WorkforcePerson` | | ✓ | | | | |

## Source Code

```abap
@EndUserText.label: 'Projection of Service Cost Level - TP'
@AccessControl.authorizationCheck: #MANDATORY
@ObjectModel:{
usageType:{
  serviceQuality: #C,
  sizeCategory: #XXL,
  dataClass: #TRANSACTIONAL
},
    modelingPattern:        #TRANSACTIONAL_INTERFACE,
    supportedCapabilities: [#TRANSACTIONAL_PROVIDER]
    }
@VDM: {
  lifecycle.contract.type: #PUBLIC_LOCAL_API,
  viewType: #TRANSACTIONAL
}

@Metadata.ignorePropagatedAnnotations: true
define view entity I_WrkAssgmtSrvcCostLvlTP_1
  as projection on R_WrkAssgmtSrvcCostLvlTP_1
{
  key WorkforcePersonExternalID,
  key WorkAssignmentExternalID,
  key Country2DigitISOCode,
  key StartDate,
      EndDate,
      ServiceCostLevel,
      IsBlocked,

      /* Associations */
      _CostLevelText,
      _WorkAssignment  : redirected to parent I_WorkAssignmentTP_1,
      _WorkforcePerson : redirected to I_WorkforcePersonTP_1
}
```
