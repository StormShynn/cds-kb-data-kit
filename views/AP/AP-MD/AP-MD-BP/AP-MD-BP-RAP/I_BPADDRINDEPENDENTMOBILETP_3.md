---
name: I_BPADDRINDEPENDENTMOBILETP_3
description: Bpaddrindependentmobiletp 3
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
# I_BPADDRINDEPENDENTMOBILETP_3

**Bpaddrindependentmobiletp 3**

| Property | Value |
|---|---|
| App Component | `AP-MD-BP-RAP` |
| Software Component | `SAP_BASIS` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `BusinessPartner` | `BusinessPartner` |
| key `AddressID` | `AddressID` |
| key `Person` | `Person` |
| key `OrdinalNumber` | `OrdinalNumber` |
| `AddressIDForEdit` | `AddressIDForEdit` |
| `OrdinalNumberForEdit` | `OrdinalNumberForEdit` |
| `MobilePhoneCountry` | `MobilePhoneCountry` |
| `IsDefaultPhoneNumber` | `IsDefaultPhoneNumber` |
| `CommNumberIsNotUsed` | `CommNumberIsNotUsed` |
| `MobilePhoneNumber` | `MobilePhoneNumber` |
| `PhoneNumberExtension` | `PhoneNumberExtension` |
| `CompleteTelephoneNumber` | `CompleteTelephoneNumber` |
| `PhoneIsSMSEnabled` | `PhoneIsSMSEnabled` |
| `PhoneNumberType` | `PhoneNumberType` |
| `AuthorizationGroup` | `AuthorizationGroup` |
| `AddressCommunicationRemarkText` | `AddressCommunicationRemarkText` |
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
| `_BusinessPartner` | *Association* |
| `_TelCountryPrefix` | *Association* |

## Source Code

```abap
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'Address Independent Mobile'

@VDM: {
  viewType: #TRANSACTIONAL,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@ObjectModel: {
    usageType.serviceQuality: #D,
    usageType.sizeCategory : #XXL,
    usageType.dataClass: #MASTER,
    supportedCapabilities: [#TRANSACTIONAL_PROVIDER], 
    modelingPattern: #TRANSACTIONAL_INTERFACE
}
@Search.searchable: true
@Metadata.ignorePropagatedAnnotations: true
@Consumption.dbHints: [ 'USE_HEX_PLAN' ]

define view entity I_BPAddrIndependentMobileTP_3 
  as projection on I_BPAddrIndependentMobileTP_2 
{
key BusinessPartner,
  key AddressID,
  key Person,
  key OrdinalNumber,
      @ObjectModel.editableFieldFor: 'AddressID'
      AddressIDForEdit,
      @ObjectModel.editableFieldFor: 'OrdinalNumber'
      OrdinalNumberForEdit,
      MobilePhoneCountry,
      IsDefaultPhoneNumber,

      CommNumberIsNotUsed,
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #HIGH
      MobilePhoneNumber,
      PhoneNumberExtension,
      CompleteTelephoneNumber,
      @Semantics.booleanIndicator
      PhoneIsSMSEnabled,
      PhoneNumberType,
      AuthorizationGroup,
      AddressCommunicationRemarkText,
      
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
      _BusinessPartner : redirected to parent I_BusinessPartnerTP_3,
      _TelCountryPrefix
 //     _BPDataControllerUsage
    
}
```
