---
name: I_BPADDINDEPENDENTFAXTP_2
description: "Bpaddindependentfaxtp 2"
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
# I_BPADDINDEPENDENTFAXTP_2

**Bpaddindependentfaxtp 2**

| Property | Value |
|---|---|
| App Component | `AP-MD-BP-RAP` |
| Software Component | `SAP_BASIS` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BusinessPartner` | ✓ | |  |  |  |  |
| `AddressNumber` | ✓ | |  |  |  |  |
| `Person` | ✓ | |  |  |  |  |
| `OrdinalNumber` | ✓ | |  |  |  |  |
| `OrdinalNumberForEdit` |  | |  |  |  |  |
| `FaxNumberCountry` |  | |  |  |  |  |
| `FaxAreaCodeSubscriberNumber` |  | |  |  |  |  |
| `FaxExtensionNumber` |  | |  |  |  |  |
| `InternationalFaxNumber` |  | |  |  |  |  |
| `FaxNumberIsCurrentDefault` |  | |  |  |  |  |
| `ValidityStartDate` |  | |  |  |  |  |
| `ValidityEndDate` |  | |  |  |  |  |
| `DataControllerSet` |  | |  |  |  |  |
| `DataController1` |  | |  |  |  |  |
| `DataController2` |  | |  |  |  |  |
| `DataController3` |  | |  |  |  |  |
| `DataController4` |  | |  |  |  |  |
| `DataController5` |  | |  |  |  |  |
| `DataController6` |  | |  |  |  |  |
| `DataController7` |  | |  |  |  |  |
| `DataController8` |  | |  |  |  |  |
| `DataController9` |  | |  |  |  |  |
| `DataController10` |  | |  |  |  |  |
| `_AddressCommunicationRemark` | | ✓ | | | | |
| `_AddressCommunicationUsage` | | ✓ | | | | |
| `_BusinessPartner` | | ✓ | | | | |
| `_FaxNumberCountry` | | ✓ | | | | |

## Source Code

```abap
@EndUserText.label: 'Business Partner Address Independent Fax'
@AccessControl.authorizationCheck: #MANDATORY
@VDM: {
  viewType: #TRANSACTIONAL,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@AccessControl.privilegedAssociations:  [ '_AddressCommunicationRemark','_AddressCommunicationUsage' ]
@ObjectModel: {
    usageType.serviceQuality: #C,
    usageType.sizeCategory : #XXL,
    usageType.dataClass: #MASTER,
    supportedCapabilities: [#TRANSACTIONAL_PROVIDER],
    modelingPattern: #TRANSACTIONAL_INTERFACE 
}
@Metadata.ignorePropagatedAnnotations: true
@Consumption.dbHints: [ 'USE_HEX_PLAN' ]

define view entity I_BPAddIndependentFaxTP_2 as projection on I_BPAddIndependentFaxTP {
  key BusinessPartner,
  key AddressNumber,
  key Person,
  key OrdinalNumber,
  @ObjectModel.editableFieldFor :'OrdinalNumber'
  OrdinalNumberForEdit,
  FaxNumberCountry,
  FaxAreaCodeSubscriberNumber,
  FaxExtensionNumber,
  InternationalFaxNumber,
  FaxNumberIsCurrentDefault,
  @EndUserText.label: 'ValidityStartDate'
  ValidityStartDate,
  @EndUserText.label: 'ValidityEndDate'
  ValidityEndDate,
  
  ////////////// Start of Datacontroller 10+1 fields -  Not to be consumed by any other views//////////
          @UI.hidden:true
          @Consumption.hidden:true
          DataControllerSet,
          @Consumption.hidden:true
          @UI.hidden:true
          DataController1,
          @Consumption.hidden:true
          @UI.hidden:true
          DataController2,
          @Consumption.hidden:true
          @UI.hidden:true
          DataController3,
          @Consumption.hidden:true
          @UI.hidden:true
          DataController4,
          @Consumption.hidden:true
          @UI.hidden:true
          DataController5,
          @Consumption.hidden:true
          @UI.hidden:true
          DataController6,
          @Consumption.hidden:true
          @UI.hidden:true
          DataController7,
          @Consumption.hidden:true
          @UI.hidden:true
          DataController8,
          @Consumption.hidden:true
          @UI.hidden:true
          DataController9,
          @Consumption.hidden:true
          @UI.hidden:true
          DataController10,

          ////////////// End of Datacontroller 10+1 fields//////////
  /* Associations */
  _AddressCommunicationRemark,
  _AddressCommunicationUsage,
//  _BPDataControllerUsage,
  _BusinessPartner : redirected to parent I_BusinessPartnerTP_3,
  _FaxNumberCountry
}
```
