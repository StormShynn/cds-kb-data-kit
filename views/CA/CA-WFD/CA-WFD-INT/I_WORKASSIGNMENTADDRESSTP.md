---
name: I_WORKASSIGNMENTADDRESSTP
description: Workassignmentaddresstp
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
  - address
  - component:CA-WFD-INT
  - lob:Cross-Application Components
---
# I_WORKASSIGNMENTADDRESSTP

**Workassignmentaddresstp**

| Property | Value |
|---|---|
| App Component | `CA-WFD-INT` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `WorkforcePersonExternalID` | `WorkforcePersonExternalID` |
| key `WorkAssignmentExternalID` | `WorkAssignmentExternalID` |
| key `Country2DigitISOCode` | `Country2DigitISOCode` |
| key `WorkAssignmentStartDate` | `WorkAssignmentStartDate` |
| key `AddressNumber` | `AddressNumber` |
| `BusinessPartner` | `BusinessPartner` |
| `WorkAssignmentEndDate` | `WorkAssignmentEndDate` |
| `Country` | `Country` |
| `PostalCode` | `PostalCode` |
| `Region` | `Region` |
| `SecondaryRegion` | `SecondaryRegion` |
| `SecondaryRegionName` | `SecondaryRegionName` |
| `TertiaryRegion` | `TertiaryRegion` |
| `TertiaryRegionName` | `TertiaryRegionName` |
| `CityName` | `CityName` |
| `DistrictName` | `DistrictName` |
| `StreetPrefixName1` | `StreetPrefixName1` |
| `StreetPrefixName2` | `StreetPrefixName2` |
| `StreetName` | `StreetName` |
| `StreetSuffixName1` | `StreetSuffixName1` |
| `StreetSuffixName2` | `StreetSuffixName2` |
| `HouseNumber` | `HouseNumber` |
| `HouseNumberSupplementText` | `HouseNumberSupplementText` |
| `Floor` | `Floor` |
| `RoomNumber` | `RoomNumber` |
| `CareOfName` | `CareOfName` |
| `POBoxPostalCode` | `POBoxPostalCode` |
| `IsBlocked` | `IsBlocked` |
| `IsBusinessPurposeCompleted` | `IsBusinessPurposeCompleted` |
| `DataControllerSet` | `DataControllerSet` |
| `DataController1` | `DataController1` |
| `DataController2` | `DataController2` |
| `DataController3` | `DataController3` |
| `DataController4` | `DataController4` |
| `DataController5` | `DataController5` |
| `DataController6` | `DataController6` |
| `DataController7` | `DataController7` |
| `DataController8` | `DataController8` |
| `DataController9` | `DataController9` |
| `DataController10` | `DataController10` |
| `AuthorizationGroup` | `AuthorizationGroup` |
| `_BPProtectedAddress` | *Association* |
| `_WorkAssignment` | *Association* |
| `_WorkforcePerson` | *Association* |

## Source Code

```abap
@EndUserText.label: 'Work Assignment Address - TP'
@AccessControl.authorizationCheck: #MANDATORY

@ObjectModel: {
    usageType.serviceQuality: #C,
    usageType.sizeCategory : #XXL,
    usageType.dataClass: #TRANSACTIONAL,
    supportedCapabilities: [#TRANSACTIONAL_PROVIDER],
    modelingPattern: #TRANSACTIONAL_INTERFACE }
@VDM: {
  lifecycle.contract.type: #PUBLIC_LOCAL_API,
  viewType: #TRANSACTIONAL
}


@Metadata.ignorePropagatedAnnotations: true
@Consumption.dbHints:[ 'USE_HEX_PLAN' ]
define view entity I_WorkAssignmentAddressTP
  as projection on R_WorkAssignmentAddressTP

{
  key WorkforcePersonExternalID,
  key WorkAssignmentExternalID,
  key Country2DigitISOCode,
  key WorkAssignmentStartDate,
  key AddressNumber,
      BusinessPartner,
      WorkAssignmentEndDate,
      Country,
      PostalCode,
      Region,
      SecondaryRegion,
      SecondaryRegionName,
      TertiaryRegion,
      TertiaryRegionName,
      CityName,
      DistrictName,
      StreetPrefixName1,
      StreetPrefixName2,
      StreetName,
      StreetSuffixName1,
      StreetSuffixName2,
      HouseNumber,
      HouseNumberSupplementText,
      Floor,
      RoomNumber,
      CareOfName,
      POBoxPostalCode,
      //  DeliveryServiceTypeCode,
      //  DeliveryServiceNumber,
      @Semantics.booleanIndicator
      @Consumption.hidden: true
      IsBlocked,
      @Semantics.booleanIndicator: true
      @Consumption.hidden: true
      IsBusinessPurposeCompleted,
      @Consumption.hidden: true
      DataControllerSet,
      @Consumption.hidden: true
      DataController1,
      @Consumption.hidden: true
      DataController2,
      @Consumption.hidden: true
      DataController3,
      @Consumption.hidden: true
      DataController4,
      @Consumption.hidden: true
      DataController5,
      @Consumption.hidden: true
      DataController6,
      @Consumption.hidden: true
      DataController7,
      @Consumption.hidden: true
      DataController8,
      @Consumption.hidden: true
      DataController9,
      @Consumption.hidden: true
      DataController10,
      @Consumption.hidden: true
      AuthorizationGroup,

      /* Associations */
      _BPProtectedAddress,
      _WorkAssignment  : redirected to parent I_WorkAssignmentTP_1,
      _WorkforcePerson : redirected to I_WorkforcePersonTP_1
}
```
