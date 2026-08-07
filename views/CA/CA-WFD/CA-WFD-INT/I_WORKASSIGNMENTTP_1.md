---
name: I_WORKASSIGNMENTTP_1
description: "Workassignmenttp 1"
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
# I_WORKASSIGNMENTTP_1

**Workassignmenttp 1**

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
| `WorkAssignmentStartDate` |  | |  |  |  |  |
| `WorkAssignmentEndDate` |  | |  |  |  |  |
| `IsContingentWorker` |  | |  |  |  |  |
| `IsBlocked` |  | |  |  |  |  |
| `_WorkforcePerson` | | ✓ | | | | |
| `_JobDetails` | | ✓ | | | | |
| `_ServiceCostLevel` | | ✓ | | | | |
| `_AddressDetails` | | ✓ | | | | |
| `_WorkOrderDetails` | | ✓ | | | | |
| `_PaymentDetails` | | ✓ | | | | |

## Source Code

```abap
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'Work Assignments Projection - TP'
@VDM: {
  viewType: #TRANSACTIONAL,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@ObjectModel: {
    usageType.serviceQuality: #B,
    usageType.sizeCategory : #XL,
    usageType.dataClass: #TRANSACTIONAL,
    supportedCapabilities: [#TRANSACTIONAL_PROVIDER],
    modelingPattern: #TRANSACTIONAL_INTERFACE
}
//@Search.searchable: true
@Metadata.ignorePropagatedAnnotations: true

define view entity I_WorkAssignmentTP_1
  as projection on R_WorkAssignmentTP_1
{
      //      @Search.defaultSearchElement: true
  key WorkforcePersonExternalID,
      //      @Search.defaultSearchElement: true
      //      @Search.fuzzinessThreshold: 0.8
      //      @Search.ranking: #HIGH
  key WorkAssignmentExternalID,
  key Country2DigitISOCode,
      WorkAssignmentStartDate,
      WorkAssignmentEndDate,
      @Semantics.booleanIndicator
      IsContingentWorker,
      @Semantics.booleanIndicator
      @Consumption.hidden: true
      IsBlocked,

      // Compositions //
      _WorkforcePerson  : redirected to parent I_WorkforcePersonTP_1,
      _JobDetails       : redirected to composition child I_WorkAssignmentDetailTP_1,
      _ServiceCostLevel : redirected to composition child I_WrkAssgmtSrvcCostLvlTP_1,
      _AddressDetails   : redirected to composition child I_WorkAssignmentAddressTP,
      _WorkOrderDetails : redirected to composition child I_WrkAssgmtWrkOrdDetTP,
      _PaymentDetails   : redirected to composition child I_WrkAssgmtPaymentTP_1


}
```
