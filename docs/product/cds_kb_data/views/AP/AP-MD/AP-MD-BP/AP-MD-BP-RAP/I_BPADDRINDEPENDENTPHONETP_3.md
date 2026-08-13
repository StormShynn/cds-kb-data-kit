---
name: I_BPADDRINDEPENDENTPHONETP_3
description: "Bpaddrindependentphonetp 3"
semantic_vi: "View này hiển thị số điện thoại độc lập của đối tác kinh doanh và được sử dụng khi truy xuất hoặc cập nhật số điện thoại cho đối tác kinh doanh."
keywords:
  - "business partner"
  - "đối tác kinh doanh"
  - "phone number"
  - "số điện thoại"
  - "address-independent"
  - "tự do địa chỉ"
  - "sap"
  - "cds view"
  - "view dữ liệu"
  - "data view"
semantic_en: "This view exposes business partner address-independent phone numbers and is used when retrieving or updating phone numbers for business partners."
app_component: AP-MD-BP-RAP
software_component: SAP_BASIS
release_state: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - AP
  - AP-MD
  - AP-MD-BP
  - interface-view
  - transactional-processing
  - phone
  - component:AP-MD-BP-RAP
  - lob:Other
---
# I_BPADDRINDEPENDENTPHONETP_3

**Bpaddrindependentphonetp 3**

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
| `AddressID` | ✓ | |  |  |  |  |
| `Person` | ✓ | |  |  |  |  |
| `OrdinalNumber` | ✓ | |  |  |  |  |
| `OrdinalNumberForEdit` |  | |  |  |  |  |
| `AddressIDForEdit` |  | |  |  |  |  |
| `DestinationLocationCountry` |  | |  |  |  |  |
| `TelephoneCountryPrefix` |  | |  |  |  |  |
| `IsDefaultPhoneNumber` |  | |  |  |  |  |
| `CommNumberIsNotUsed` |  | |  |  |  |  |
| `PhoneNumber` |  | |  |  |  |  |
| `PhoneNumberExtension` |  | |  |  |  |  |
| `InternationalPhoneNumber` |  | |  |  |  |  |
| `PhoneIsSMSEnabled` |  | |  |  |  |  |
| `PhoneNumberType` |  | |  |  |  |  |
| `AddressCommunicationRemarkText` |  | |  |  |  |  |
| `AuthorizationGroup` |  | |  |  |  |  |
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
| `_BusinessPartner` | | ✓ | | | | |
| `_TelCountryPrefix` | | ✓ | | | | |

## Source Code

```abap
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'BP Address Independent Phone'
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

define view entity I_BPAddrIndependentPhoneTP_3 
  as projection on I_BPAddrIndependentPhoneTP_2
{

  key BusinessPartner,
  key AddressID,
  key Person,
  key OrdinalNumber,
      @ObjectModel.editableFieldFor: 'OrdinalNumber'
      OrdinalNumberForEdit,
      @ObjectModel.editableFieldFor: 'AddressID'
      AddressIDForEdit,
      DestinationLocationCountry,
      TelephoneCountryPrefix,
      IsDefaultPhoneNumber,
      CommNumberIsNotUsed,
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #HIGH
      PhoneNumber,
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #HIGH
      PhoneNumberExtension,
      InternationalPhoneNumber,
      PhoneIsSMSEnabled,
      PhoneNumberType,
      AddressCommunicationRemarkText,
      AuthorizationGroup,
      
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
