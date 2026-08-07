---
name: I_BPDATACONTROLLERTP_3
description: Bpdatacontrollertp 3
app_component: AP-MD-BP-RAP
software_component: SAP_BASIS
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - AP
  - AP-MD
  - AP-MD-BP
  - interface-view
  - transactional-processing
  - component:AP-MD-BP-RAP
  - lob:Other
---
# I_BPDATACONTROLLERTP_3

**Bpdatacontrollertp 3**

| Property | Value |
|---|---|
| App Component | `AP-MD-BP-RAP` |
| Software Component | `SAP_BASIS` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `BusinessPartner` | ✓ | |  |  |
| `DataController` | ✓ | |  |  |
| `PurposeForPersonalData` | ✓ | |  |  |
| `BusinessPartnerForEdit` |  | |  |  |
| `DataControllerForEdit` |  | |  |  |
| `IsDerivationSet` |  | |  |  |
| `DataControllerDescription` |  | |  |  |
| `AuthorizationGroup` |  | |  |  |
| `DataControlAssignmentStatus` |  | |  |  |
| `PurposeDerived` |  | |  |  |
| `PurposeType` |  | |  |  |
| `BusinessPurposeFlag` |  | |  |  |
| `_BusinessPartner` | | ✓ | | |

## Source Code

```abap
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'BP Data Controller RAP'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.usageType:{
  serviceQuality: #D,
  sizeCategory: #XXL,
  dataClass: #MASTER
}
@VDM: {
  viewType: #TRANSACTIONAL,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@ObjectModel: {
    supportedCapabilities: [#TRANSACTIONAL_PROVIDER], 
    modelingPattern: #TRANSACTIONAL_INTERFACE
}
@Search.searchable: true

define view entity I_BPDataControllerTP_3 as projection on I_BPDataControllerTP_2
{
  key BusinessPartner,
  key DataController,
  key PurposeForPersonalData,
  BusinessPartnerForEdit,
  @Search.defaultSearchElement: true
  DataControllerForEdit,
  IsDerivationSet,
  DataControllerDescription,
  AuthorizationGroup,
  DataControlAssignmentStatus,
  PurposeDerived,
  PurposeType,
  BusinessPurposeFlag,

_BusinessPartner : redirected to parent I_BusinessPartnerTP_3
}
```
