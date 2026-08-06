---
name: I_PROFITCENTERTP_2
description: Profit CenterTP 2
app_component: EC-PCA-MD-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - EC
  - EC-PCA
  - EC-PCA-MD
  - interface-view
  - transactional-processing
  - profit-center
  - component:EC-PCA-MD-2CL
  - lob:Other
  - bo:ProfitCenter
---
# I_PROFITCENTERTP_2

**Profit CenterTP 2**

| Property | Value |
|---|---|
| App Component | `EC-PCA-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `ControllingArea` | `ControllingArea` |
| key `ProfitCenter` | `ProfitCenter` |
| key `ValidityEndDate` | `ValidityEndDate` |
| `ValidityStartDate` | `ValidityStartDate` |
| `ControllingAreaForEdit` | `ControllingAreaForEdit` |
| `ProfitCenterForEdit` | `ProfitCenterForEdit` |
| `ValidityEndDateForEdit` | `ValidityEndDateForEdit` |
| `ProfitCenterName` | `ProfitCenterName` |
| `ProfitCenterLongName` | `ProfitCenterLongName` |
| `ProfitCtrResponsiblePersonName` | `ProfitCtrResponsiblePersonName` |
| `ProfitCtrResponsibleUser` | `ProfitCtrResponsibleUser` |
| `ProfitCenterCreationDate` | `ProfitCenterCreationDate` |
| `ProfitCenterCreatedByUser` | `ProfitCenterCreatedByUser` |
| `ProfitCenterIsBlocked` | `ProfitCenterIsBlocked` |
| `ProfitCenterStandardHierarchy` | `ProfitCenterStandardHierarchy` |
| `Segment` | `Segment` |
| `ProfitCenterDepartment` | `ProfitCenterDepartment` |
| `ProfitCenterTitleName` | `ProfitCenterTitleName` |
| `AddressName` | `AddressName` |
| `AdditionalName` | `AdditionalName` |
| `ProfitCenterAddrName3` | `ProfitCenterAddrName3` |
| `ProfitCenterAddrName4` | `ProfitCenterAddrName4` |
| `StreetAddressName` | `StreetAddressName` |
| `CityName` | `CityName` |
| `PostalCode` | `PostalCode` |
| `District` | `District` |
| `Country` | `Country` |
| `Region` | `Region` |
| `TaxJurisdiction` | `TaxJurisdiction` |
| `POBox` | `POBox` |
| `POBoxPostalCode` | `POBoxPostalCode` |
| `Language` | `Language` |
| `PhoneNumber1` | `PhoneNumber1` |
| `PhoneNumber2` | `PhoneNumber2` |
| `FaxNumber` | `FaxNumber` |
| `TeleboxNumber` | `TeleboxNumber` |
| `TelexNumber` | `TelexNumber` |
| `TeletexNumber` | `TeletexNumber` |
| `DataCommunicationPhoneNumber` | `DataCommunicationPhoneNumber` |
| `ProfitCenterPrinterName` | `ProfitCenterPrinterName` |
| `LogicalSystem` | `LogicalSystem` |
| `ChangeDocObject` | `ChangeDocObject` |
| `_ProfitCenterTextTP` | *Association* |
| `_PrftCtrCompCodeAssgmtTP` | *Association* |

## Source Code

```abap
@AccessControl.authorizationCheck: #MANDATORY
@AccessControl.personalData.blocking: #REQUIRED

@EndUserText.label: 'Profit Center - TP'

@VDM:{
  lifecycle.contract.type: #PUBLIC_LOCAL_API,
  viewType: #TRANSACTIONAL
}

@ObjectModel:{
  modelingPattern: #TRANSACTIONAL_INTERFACE,
  sapObjectNodeType.name: 'ProfitCenter',
  supportedCapabilities: [#TRANSACTIONAL_PROVIDER],
  usageType: {
    serviceQuality: #B,
    sizeCategory: #L,
    dataClass: #ORGANIZATIONAL
  }
}

@Metadata.ignorePropagatedAnnotations: true

define root view entity I_ProfitCenterTP_2
  provider contract transactional_interface
  as projection on R_ProfitCenterTP as ProfitCenterTP
{
  key ControllingArea,
  key ProfitCenter,
      @Semantics.businessDate.to: true
  key ValidityEndDate,
      @Semantics.businessDate.from: true
      ValidityStartDate,

      @ObjectModel.editableFieldFor: 'ControllingArea'
      ControllingAreaForEdit,
      @ObjectModel.editableFieldFor: 'ProfitCenter'
      ProfitCenterForEdit,
      @ObjectModel.editableFieldFor: 'ValidityEndDate'
      ValidityEndDateForEdit,

      ProfitCenterName,
      ProfitCenterLongName,
      ProfitCtrResponsiblePersonName,
      ProfitCtrResponsibleUser,
      ProfitCenterCreationDate,
      ProfitCenterCreatedByUser,

      ProfitCenterIsBlocked,

      ProfitCenterStandardHierarchy,
      Segment,
      ProfitCenterDepartment,

      ProfitCenterTitleName,
      AddressName,
      AdditionalName,
      ProfitCenterAddrName3,
      ProfitCenterAddrName4,
      StreetAddressName,
      CityName,
      PostalCode,
      District,
      Country,
      Region,
      TaxJurisdiction,
      POBox,
      POBoxPostalCode,

      Language,
      PhoneNumber1,
      PhoneNumber2,
      FaxNumber,
      TeleboxNumber,
      TelexNumber,
      TeletexNumber,
      DataCommunicationPhoneNumber,
      ProfitCenterPrinterName,
      
      LogicalSystem,

      ChangeDocObject,

      /* Compositions */
      _ProfitCenterTextTP      : redirected to composition child I_ProfitCenterTextTP_2,
      _PrftCtrCompCodeAssgmtTP : redirected to composition child I_PrftCtrCompCodeAssgmtTP_2

}
```
