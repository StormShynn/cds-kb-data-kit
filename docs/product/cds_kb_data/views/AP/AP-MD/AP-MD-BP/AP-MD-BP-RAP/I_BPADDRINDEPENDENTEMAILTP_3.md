---
name: I_BPADDRINDEPENDENTEMAILTP_3
description: "Bpaddrindependentemailtp 3"
semantic_vi: "View Bpaddrindependentemailtp 3 cung cấp truy cập vào địa chỉ email đối tác kinh doanh, cho phép bạn quản lý và lấy địa chỉ email độc lập cho đối tác kinh doanh, điều này rất quan trọng cho giao tiếp qua email trong quản lý đối tác kinh doanh."
keywords:
  - "business partner"
  - "đối tác kinh doanh"
  - "email address"
  - "địa chỉ email"
  - "independent email"
  - "địa chỉ email độc lập"
  - "business partner management"
  - "quản lý đối tác kinh doanh"
  - "email communication"
  - "giao tiếp qua email"
  - "sap"
  - "ap-md-bp-rap"
semantic_en: "The Bpaddrindependentemailtp 3 view provides access to business partner email addresses, allowing you to manage and retrieve independent email addresses for business partners, which is essential for email communication in business partner management."
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
  - workflow
  - email
  - component:AP-MD-BP-RAP
  - lob:Other
---
# I_BPADDRINDEPENDENTEMAILTP_3

**Bpaddrindependentemailtp 3**

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
| `AddressIDForEdit` |  | |  |  |  |  |
| `OrdinalNumberForEdit` |  | |  |  |  |  |
| `IsDefaultEmailAddress` |  | |  |  |  |  |
| `EmailAddress` |  | |  |  |  |  |
| `SearchEmailAddress` |  | |  |  |  |  |
| `IsHomeEmailAddress` |  | |  |  |  |  |
| `CommNumberIsNotUsed` |  | |  |  |  |  |
| `AuthorizationGroup` |  | |  |  |  |  |
| `AddressCommunicationRemarkText` |  | |  |  |  |  |
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

## Source Code

```abap
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'Address Independent Email'

@VDM: {
  viewType: #TRANSACTIONAL,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@ObjectModel: {
    usageType.serviceQuality: #C,
    usageType.sizeCategory : #XXL,
    usageType.dataClass: #MASTER,
    supportedCapabilities: [#TRANSACTIONAL_PROVIDER],
    modelingPattern: #TRANSACTIONAL_INTERFACE 
}
@Search.searchable: true
@Metadata.ignorePropagatedAnnotations: true
@Consumption.dbHints: [ 'USE_HEX_PLAN' ]

define view entity I_BPAddrIndependentEmailTP_3 as projection on I_BPAddrIndependentEmailTP_2 
{

    key BusinessPartner,
    key AddressID,
    key Person,
    key OrdinalNumber,
      @ObjectModel.editableFieldFor: 'AddressID'
      AddressIDForEdit,
      @ObjectModel.editableFieldFor: 'OrdinalNumber'
      OrdinalNumberForEdit,

      IsDefaultEmailAddress,
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #HIGH
      EmailAddress,
      SearchEmailAddress,
      IsHomeEmailAddress,
      CommNumberIsNotUsed,
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
 //     _BusinessPartner,
  //-- Data controller association        
//      _BPDataControllerUsage,
 
     _BusinessPartner : redirected to parent I_BusinessPartnerTP_3
} 
//where BusinessPartner is not null;
```
