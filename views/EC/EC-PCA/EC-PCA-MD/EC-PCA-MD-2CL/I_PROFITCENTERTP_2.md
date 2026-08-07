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

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ControllingArea` | ✓ | |  |  |  |  |
| `ProfitCenter` | ✓ | |  |  |  |  |
| `ValidityEndDate` | ✓ | |  |  |  |  |
| `ValidityStartDate` |  | |  |  |  |  |
| `ControllingAreaForEdit` |  | |  |  |  |  |
| `ProfitCenterForEdit` |  | |  |  |  |  |
| `ValidityEndDateForEdit` |  | |  |  |  |  |
| `ProfitCenterName` |  | |  |  |  |  |
| `ProfitCenterLongName` |  | |  |  |  |  |
| `ProfitCtrResponsiblePersonName` |  | |  |  |  |  |
| `ProfitCtrResponsibleUser` |  | |  |  |  |  |
| `ProfitCenterCreationDate` |  | |  |  |  |  |
| `ProfitCenterCreatedByUser` |  | |  |  |  |  |
| `ProfitCenterIsBlocked` |  | |  |  |  |  |
| `ProfitCenterStandardHierarchy` |  | |  |  |  |  |
| `Segment` |  | |  |  |  |  |
| `ProfitCenterDepartment` |  | |  |  |  |  |
| `ProfitCenterTitleName` |  | |  |  |  |  |
| `AddressName` |  | |  |  |  |  |
| `AdditionalName` |  | |  |  |  |  |
| `ProfitCenterAddrName3` |  | |  |  |  |  |
| `ProfitCenterAddrName4` |  | |  |  |  |  |
| `StreetAddressName` |  | |  |  |  |  |
| `CityName` |  | |  |  |  |  |
| `PostalCode` |  | |  |  |  |  |
| `District` |  | |  |  |  |  |
| `Country` |  | |  |  |  |  |
| `Region` |  | |  |  |  |  |
| `TaxJurisdiction` |  | |  |  |  |  |
| `POBox` |  | |  |  |  |  |
| `POBoxPostalCode` |  | |  |  |  |  |
| `Language` |  | |  |  |  |  |
| `PhoneNumber1` |  | |  |  |  |  |
| `PhoneNumber2` |  | |  |  |  |  |
| `FaxNumber` |  | |  |  |  |  |
| `TeleboxNumber` |  | |  |  |  |  |
| `TelexNumber` |  | |  |  |  |  |
| `TeletexNumber` |  | |  |  |  |  |
| `DataCommunicationPhoneNumber` |  | |  |  |  |  |
| `ProfitCenterPrinterName` |  | |  |  |  |  |
| `LogicalSystem` |  | |  |  |  |  |
| `ChangeDocObject` |  | |  |  |  |  |
| `_ProfitCenterTextTP` | | ✓ | | | | |
| `_PrftCtrCompCodeAssgmtTP` | | ✓ | | | | |

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
