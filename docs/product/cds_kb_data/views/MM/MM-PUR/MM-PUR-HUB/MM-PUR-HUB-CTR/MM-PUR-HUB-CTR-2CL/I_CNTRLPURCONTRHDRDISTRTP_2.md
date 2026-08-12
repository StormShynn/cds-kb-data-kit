---
name: I_CNTRLPURCONTRHDRDISTRTP_2
description: "Cntrlpurcontrhdrdistrtp 2"
app_component: MM-PUR-HUB-CTR-2CL
software_component: SAPSCORE
release_state: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - MM
  - MM-PUR
  - MM-PUR-HUB
  - interface-view
  - transactional-processing
  - header-level
  - component:MM-PUR-HUB-CTR-2CL
  - lob:Sourcing & Procurement
---
# I_CNTRLPURCONTRHDRDISTRTP_2

**Cntrlpurcontrhdrdistrtp 2**

| Property | Value |
|---|---|
| App Component | `MM-PUR-HUB-CTR-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CentralPurchaseContract` | ✓ | |  |  |  |  |
| `DistributionKey` | ✓ | |  |  |  |  |
| `PurchasingDocumentCategory` |  | |  |  |  |  |
| `PurchasingDocumentType` |  | |  |  |  |  |
| `PurchasingOrganization` |  | |  |  |  |  |
| `CompanyCode` |  | |  |  |  |  |
| `Plant` |  | |  |  |  |  |
| `DocumentCurrency` |  | |  |  |  |  |
| `PurchasingGroup` |  | |  |  |  |  |
| `StorageLocation` |  | |  |  |  |  |
| `PaymentTerms` |  | |  |  |  |  |
| `CashDiscount1Days` |  | |  |  |  |  |
| `CashDiscount2Days` |  | |  |  |  |  |
| `NetPaymentDays` |  | |  |  |  |  |
| `CashDiscount1Percent` |  | |  |  |  |  |
| `CashDiscount2Percent` |  | |  |  |  |  |
| `CntrlPurContrDistributionPct` |  | |  |  |  |  |
| `IsDeleted` |  | |  |  |  |  |
| `OrderQuantityUnit` |  | |  |  |  |  |
| `ManualDeliveryAddressID` |  | |  |  |  |  |
| `ProcmtHubDelivAddressTypeCode` |  | |  |  |  |  |
| `ProcurementHubSourceSystem` |  | |  |  |  |  |
| `SourceListIsUpdated` |  | |  |  |  |  |
| `SourceListRestriction` |  | |  |  |  |  |
| `ProcmtHubCompanyCodeGroupingID` |  | |  |  |  |  |
| `IncotermsClassification` |  | |  |  |  |  |
| `IncotermsLocation1` |  | |  |  |  |  |
| `ShippingInstruction` |  | |  |  |  |  |
| `ProcmtHubSubcontractor` |  | |  |  |  |  |
| `ProcmtHubSuplrIsSubcontractor` |  | |  |  |  |  |
| `ReferenceDeliveryAddressID` |  | |  |  |  |  |
| `FormOfAddress` |  | |  |  |  |  |
| `ProcmtHubBusinessPartnerName1` |  | |  |  |  |  |
| `ProcmtHubBusinessPartnerName2` |  | |  |  |  |  |
| `ProcmtHubBusinessPartnerName3` |  | |  |  |  |  |
| `ProcmtHubBusinessPartnerName4` |  | |  |  |  |  |
| `ProcmtHubStreetName` |  | |  |  |  |  |
| `ProcmtHubHouseNumber` |  | |  |  |  |  |
| `ProcmtHubPostalCode` |  | |  |  |  |  |
| `ProcmtHubCityName` |  | |  |  |  |  |
| `ProcmtHubCountry` |  | |  |  |  |  |
| `ProcmtHubRegion` |  | |  |  |  |  |
| `_CntrlPurchaseContract` | | ✓ | | | | |
| `_CentralPurchaseContHdrPart` | | ✓ | | | | |

## Source Code

```abap
@EndUserText.label: 'CCTR Header Distribution - TP'
@AccessControl.authorizationCheck: #CHECK
@AccessControl.personalData.blocking: #BLOCKED_DATA_EXCLUDED

@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #TRANSACTIONAL

@ObjectModel.supportedCapabilities: [#TRANSACTIONAL_PROVIDER]

@ObjectModel.modelingPattern: #TRANSACTIONAL_INTERFACE

@ObjectModel.semanticKey: ['CentralPurchaseContract','DistributionKey' ]

@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.usageType.dataClass: #MIXED

@Metadata.ignorePropagatedAnnotations: true
define view entity I_CntrlPurContrHdrDistrTP_2
  as projection on R_CntrlPurContrHdrDistrTP as CentralPurchaseContrHdrDistr
{
     
  key CentralPurchaseContract,
  key DistributionKey,
      PurchasingDocumentCategory,
      PurchasingDocumentType,
      PurchasingOrganization,
      CompanyCode,
      Plant,
      DocumentCurrency,
      PurchasingGroup,
      StorageLocation,
      PaymentTerms,
      CashDiscount1Days,
      CashDiscount2Days,
      NetPaymentDays,
      CashDiscount1Percent,
      CashDiscount2Percent,
      CntrlPurContrDistributionPct,
      IsDeleted,
      OrderQuantityUnit,
      ManualDeliveryAddressID,
      ProcmtHubDelivAddressTypeCode,
      ProcurementHubSourceSystem,
      @Semantics.booleanIndicator: true
      SourceListIsUpdated,
      SourceListRestriction,
      ProcmtHubCompanyCodeGroupingID,
      IncotermsClassification,
      IncotermsLocation1,
      ShippingInstruction,
      ProcmtHubSubcontractor,
      ProcmtHubSuplrIsSubcontractor,
      ReferenceDeliveryAddressID,
      FormOfAddress,
      ProcmtHubBusinessPartnerName1,
      ProcmtHubBusinessPartnerName2,
      ProcmtHubBusinessPartnerName3,
      ProcmtHubBusinessPartnerName4,
      ProcmtHubStreetName,
      ProcmtHubHouseNumber,
      ProcmtHubPostalCode,
      ProcmtHubCityName,
      ProcmtHubCountry,
      ProcmtHubRegion,
      

      /* Associations */
      _CntrlPurchaseContract      : redirected to parent I_CntrlPurchaseContractTP_2,
      _CentralPurchaseContHdrPart : redirected to composition child I_CntrlPurContrHdrDistPartTP_2

}
```
