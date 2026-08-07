---
name: I_CNTRLPURCONTRITEMDISTRTP_2
description: Cntrlpurcontritemdistrtp 2
app_component: MM-PUR-HUB-CTR-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - MM
  - MM-PUR
  - MM-PUR-HUB
  - interface-view
  - transactional-processing
  - item-level
  - component:MM-PUR-HUB-CTR-2CL
  - lob:Sourcing & Procurement
---
# I_CNTRLPURCONTRITEMDISTRTP_2

**Cntrlpurcontritemdistrtp 2**

| Property | Value |
|---|---|
| App Component | `MM-PUR-HUB-CTR-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `CentralPurchaseContract` | ✓ | |  |  |
| `CentralPurchaseContractItem` | ✓ | |  |  |
| `DistributionKey` | ✓ | |  |  |
| `PurchasingDocumentCategory` |  | |  |  |
| `PurchasingDocumentType` |  | |  |  |
| `PurchasingOrganization` |  | |  |  |
| `CompanyCode` |  | |  |  |
| `Plant` |  | |  |  |
| `DocumentCurrency` |  | |  |  |
| `PurchasingGroup` |  | |  |  |
| `StorageLocation` |  | |  |  |
| `PaymentTerms` |  | |  |  |
| `CashDiscount1Days` |  | |  |  |
| `CashDiscount2Days` |  | |  |  |
| `NetPaymentDays` |  | |  |  |
| `CashDiscount1Percent` |  | |  |  |
| `CashDiscount2Percent` |  | |  |  |
| `CntrlPurContrDistributionPct` |  | |  |  |
| `TargetQuantity` |  | |  |  |
| `TargetAmount` |  | |  |  |
| `IsDeleted` |  | |  |  |
| `OrderQuantityUnit` |  | |  |  |
| `DistributionType` |  | |  |  |
| `ReferenceHeaderDistributionKey` |  | |  |  |
| `CntrlPurContrItmDistrIsBlocked` |  | |  |  |
| `ManualDeliveryAddressID` |  | |  |  |
| `ProcmtHubDelivAddressTypeCode` |  | |  |  |
| `ProcurementHubSourceSystem` |  | |  |  |
| `PurchasingInfoRecordUpdateCode` |  | |  |  |
| `ProcmtHubPurchaseRequisition` |  | |  |  |
| `ProcmtHubPurRequisitionItem` |  | |  |  |
| `SourceListIsUpdated` |  | |  |  |
| `SourceListRestriction` |  | |  |  |
| `ProcmtHubCompanyCodeGroupingID` |  | |  |  |
| `OutlineAgrmtItmIsBlocked` |  | |  |  |
| `PurgDocItmBlkRsnCode` |  | |  |  |
| `IncotermsClassification` |  | |  |  |
| `IncotermsLocation1` |  | |  |  |
| `ShippingInstruction` |  | |  |  |
| `ProcmtHubSubcontractor` |  | |  |  |
| `ProcmtHubSuplrIsSubcontractor` |  | |  |  |
| `ReferenceDeliveryAddressID` |  | |  |  |
| `FormOfAddress` |  | |  |  |
| `ProcmtHubBusinessPartnerName1` |  | |  |  |
| `ProcmtHubBusinessPartnerName2` |  | |  |  |
| `ProcmtHubBusinessPartnerName3` |  | |  |  |
| `ProcmtHubBusinessPartnerName4` |  | |  |  |
| `ProcmtHubStreetName` |  | |  |  |
| `ProcmtHubHouseNumber` |  | |  |  |
| `ProcmtHubPostalCode` |  | |  |  |
| `ProcmtHubCityName` |  | |  |  |
| `ProcmtHubCountry` |  | |  |  |
| `ProcmtHubRegion` |  | |  |  |
| `_CntrlPurchaseContractItem` | | ✓ | | |
| `_CntrlPurContract` | | ✓ | | |
| `_CntrlPurContrItemPartner` | | ✓ | | |

## Source Code

```abap
@EndUserText.label: 'CCTR Item Distribution - TP'
@AccessControl.authorizationCheck: #CHECK
@AccessControl.personalData.blocking: #BLOCKED_DATA_EXCLUDED

@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #TRANSACTIONAL

@ObjectModel.supportedCapabilities: [#TRANSACTIONAL_PROVIDER]

@ObjectModel.modelingPattern: #TRANSACTIONAL_INTERFACE

@ObjectModel.semanticKey: ['CentralPurchaseContract','CentralPurchaseContractItem','DistributionKey' ]

@ObjectModel.usageType:{
  serviceQuality: #C,
  sizeCategory: #L,
  dataClass: #TRANSACTIONAL
}

@Metadata.ignorePropagatedAnnotations: true
define view entity I_CntrlPurContrItemDistrTP_2
  as projection on R_CntrlPurContrItemDistrTP as CentralPurchaseContrItemDistr
{

  key CentralPurchaseContract,
  key CentralPurchaseContractItem,
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
      @Semantics.quantity.unitOfMeasure: 'OrderQuantityUnit'
      TargetQuantity,
      @Semantics.amount.currencyCode: 'DocumentCurrency'
      TargetAmount,
      IsDeleted,
      OrderQuantityUnit,
      DistributionType,
      ReferenceHeaderDistributionKey,
      CntrlPurContrItmDistrIsBlocked,
      ManualDeliveryAddressID,
      ProcmtHubDelivAddressTypeCode,
      ProcurementHubSourceSystem,
      PurchasingInfoRecordUpdateCode,
      ProcmtHubPurchaseRequisition,
      ProcmtHubPurRequisitionItem,
      @Semantics.booleanIndicator: true
      SourceListIsUpdated,
      SourceListRestriction,
      ProcmtHubCompanyCodeGroupingID,
      OutlineAgrmtItmIsBlocked,
      PurgDocItmBlkRsnCode,
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
      _CntrlPurchaseContractItem : redirected to parent I_CntrlPurchaseContractItmTP_2,
      _CntrlPurContract          : redirected to I_CntrlPurchaseContractTP_2,
      _CntrlPurContrItemPartner  : redirected to composition child I_CntrlPurContrItmDistPartTP_2

}
```
