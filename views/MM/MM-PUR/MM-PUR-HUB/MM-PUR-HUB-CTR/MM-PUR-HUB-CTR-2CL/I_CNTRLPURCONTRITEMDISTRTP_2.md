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

| Field | Data Source |
|---|---|
| key `CentralPurchaseContract` | `CentralPurchaseContract` |
| key `CentralPurchaseContractItem` | `CentralPurchaseContractItem` |
| key `DistributionKey` | `DistributionKey` |
| `PurchasingDocumentCategory` | `PurchasingDocumentCategory` |
| `PurchasingDocumentType` | `PurchasingDocumentType` |
| `PurchasingOrganization` | `PurchasingOrganization` |
| `CompanyCode` | `CompanyCode` |
| `Plant` | `Plant` |
| `DocumentCurrency` | `DocumentCurrency` |
| `PurchasingGroup` | `PurchasingGroup` |
| `StorageLocation` | `StorageLocation` |
| `PaymentTerms` | `PaymentTerms` |
| `CashDiscount1Days` | `CashDiscount1Days` |
| `CashDiscount2Days` | `CashDiscount2Days` |
| `NetPaymentDays` | `NetPaymentDays` |
| `CashDiscount1Percent` | `CashDiscount1Percent` |
| `CashDiscount2Percent` | `CashDiscount2Percent` |
| `CntrlPurContrDistributionPct` | `CntrlPurContrDistributionPct` |
| `TargetQuantity` | `TargetQuantity` |
| `TargetAmount` | `TargetAmount` |
| `IsDeleted` | `IsDeleted` |
| `OrderQuantityUnit` | `OrderQuantityUnit` |
| `DistributionType` | `DistributionType` |
| `ReferenceHeaderDistributionKey` | `ReferenceHeaderDistributionKey` |
| `CntrlPurContrItmDistrIsBlocked` | `CntrlPurContrItmDistrIsBlocked` |
| `ManualDeliveryAddressID` | `ManualDeliveryAddressID` |
| `ProcmtHubDelivAddressTypeCode` | `ProcmtHubDelivAddressTypeCode` |
| `ProcurementHubSourceSystem` | `ProcurementHubSourceSystem` |
| `PurchasingInfoRecordUpdateCode` | `PurchasingInfoRecordUpdateCode` |
| `ProcmtHubPurchaseRequisition` | `ProcmtHubPurchaseRequisition` |
| `ProcmtHubPurRequisitionItem` | `ProcmtHubPurRequisitionItem` |
| `SourceListIsUpdated` | `SourceListIsUpdated` |
| `SourceListRestriction` | `SourceListRestriction` |
| `ProcmtHubCompanyCodeGroupingID` | `ProcmtHubCompanyCodeGroupingID` |
| `OutlineAgrmtItmIsBlocked` | `OutlineAgrmtItmIsBlocked` |
| `PurgDocItmBlkRsnCode` | `PurgDocItmBlkRsnCode` |
| `IncotermsClassification` | `IncotermsClassification` |
| `IncotermsLocation1` | `IncotermsLocation1` |
| `ShippingInstruction` | `ShippingInstruction` |
| `ProcmtHubSubcontractor` | `ProcmtHubSubcontractor` |
| `ProcmtHubSuplrIsSubcontractor` | `ProcmtHubSuplrIsSubcontractor` |
| `ReferenceDeliveryAddressID` | `ReferenceDeliveryAddressID` |
| `FormOfAddress` | `FormOfAddress` |
| `ProcmtHubBusinessPartnerName1` | `ProcmtHubBusinessPartnerName1` |
| `ProcmtHubBusinessPartnerName2` | `ProcmtHubBusinessPartnerName2` |
| `ProcmtHubBusinessPartnerName3` | `ProcmtHubBusinessPartnerName3` |
| `ProcmtHubBusinessPartnerName4` | `ProcmtHubBusinessPartnerName4` |
| `ProcmtHubStreetName` | `ProcmtHubStreetName` |
| `ProcmtHubHouseNumber` | `ProcmtHubHouseNumber` |
| `ProcmtHubPostalCode` | `ProcmtHubPostalCode` |
| `ProcmtHubCityName` | `ProcmtHubCityName` |
| `ProcmtHubCountry` | `ProcmtHubCountry` |
| `ProcmtHubRegion` | `ProcmtHubRegion` |
| `_CntrlPurchaseContractItem` | *Association* |
| `_CntrlPurContract` | *Association* |
| `_CntrlPurContrItemPartner` | *Association* |

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
