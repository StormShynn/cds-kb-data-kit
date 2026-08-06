---
name: I_BUSINESSPARTNERBANKTP_3
description: Business PartnerBANKTP 3
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
  - business-partner
  - bank
  - partner
  - component:AP-MD-BP-RAP
  - lob:Other
  - bo:BusinessPartner
  - bo:Bank
---
# I_BUSINESSPARTNERBANKTP_3

**Business PartnerBANKTP 3**

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
| key `BankIdentification` | `BankIdentification` |
| `BankIdnForEditValue` | `BankIdnForEditValue` |
| `BankCountryKey` | `BankCountryKey` |
| `BankName` | `BankName` |
| `BankNumber` | `BankNumber` |
| `SWIFTCode` | `SWIFTCode` |
| `BankControlKey` | `BankControlKey` |
| `BankAccountHolderName` | `BankAccountHolderName` |
| `BankAccountName` | `BankAccountName` |
| `BankValidityStartDate` | `BankValidityStartDate` |
| `BankValidityEndDate` | `BankValidityEndDate` |
| `IBAN` | `IBAN` |
| `IBANValidityStartDate` | `IBANValidityStartDate` |
| `BankAccount` | `BankAccount` |
| `BankAccountReferenceText` | `BankAccountReferenceText` |
| `CollectionAuthInd` | `CollectionAuthInd` |
| `BusinessPartnerExternalBankID` | `BusinessPartnerExternalBankID` |
| `BPBankDetailsChangeDate` | `BPBankDetailsChangeDate` |
| `BPBankDetailsChangeTargetID` | `BPBankDetailsChangeTargetID` |
| `BPBankIsProtected` | `BPBankIsProtected` |
| `CityName` | `CityName` |
| `AuthorizationGroup` | `AuthorizationGroup` |
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
| `_Bank` | *Association* |
| `_BusinessPartner` | *Association* |
| `_IBAN` | *Association* |

## Source Code

```abap
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'Business Partner Bank details'
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

define view entity I_BusinessPartnerBankTP_3 
 as projection on I_BusinessPartnerBankTP_2
{
  @Search.defaultSearchElement: true
  key BusinessPartner,
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #HIGH
  key BankIdentification,
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #HIGH
      BankIdnForEditValue,
      BankCountryKey,
      @Semantics.text: true
      BankName,
      BankNumber,
      SWIFTCode,
      BankControlKey,
      BankAccountHolderName,
      BankAccountName,
      @EndUserText.label: 'BankValidityStartDate'
      @Semantics.businessDate.from: true
      BankValidityStartDate,
      @EndUserText.label: 'BankValidityEndDate'
      @Semantics.businessDate.to: true
      BankValidityEndDate,
      IBAN,
      IBANValidityStartDate,
      BankAccount,
      BankAccountReferenceText,
      CollectionAuthInd,
      BusinessPartnerExternalBankID,
      BPBankDetailsChangeDate,
      BPBankDetailsChangeTargetID,
      BPBankIsProtected,
      CityName,
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
      _Bank,
      _BusinessPartner : redirected to parent I_BusinessPartnerTP_3,
      _IBAN
//      _BPDataControllerUsage
}
```
