---
name: I_CENTRALRFQITEMDISTRIBUTION
description: "Centralrfqitemdistribution"
app_component: MM-PUR-HUB-RFQ-2CL
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
  - item-level
  - component:MM-PUR-HUB-RFQ-2CL
  - lob:Sourcing & Procurement
---
# I_CENTRALRFQITEMDISTRIBUTION

**Centralrfqitemdistribution**

| Property | Value |
|---|---|
| App Component | `MM-PUR-HUB-RFQ-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CentralRequestForQuotation` | ✓ | |  |  |  |  |
| `CentralRequestForQuotationItem` | ✓ | |  |  |  |  |
| `DistributionKey` | ✓ | |  |  |  |  |
| `PurchasingDocumentCategory` |  | |  |  |  |  |
| `PurchasingDocumentType` |  | |  |  |  |  |
| `PurchasingOrganization` |  | |  |  |  |  |
| `CompanyCode` |  | |  |  |  |  |
| `Plant` |  | |  |  |  |  |
| `LogicalSystem` |  | |  |  |  |  |
| `DocumentCurrency` |  | |  |  |  |  |
| `Currency` |  | |  |  |  |  |
| `PurchasingGroup` |  | |  |  |  |  |
| `StorageLocation` |  | |  |  |  |  |
| `PaymentTerms` |  | |  |  |  |  |
| `CashDiscount1Days` |  | |  |  |  |  |
| `CashDiscount2Days` |  | |  |  |  |  |
| `NetPaymentDays` |  | |  |  |  |  |
| `CashDiscount1Percent` |  | |  |  |  |  |
| `CashDiscount2Percent` |  | |  |  |  |  |
| `Material` |  | |  |  |  |  |
| `MaterialGroup` |  | |  |  |  |  |
| `CntrlPurgDistributionInPercent` |  | |  |  |  |  |
| `TargetQuantity` |  | |  |  |  |  |
| `TargetAmount` |  | |  |  |  |  |
| `ExtContractForPurg` |  | |  |  |  |  |
| `ExtContractItemForPurg` |  | |  |  |  |  |
| `PurgDocItemDistributionStatus` |  | |  |  |  |  |
| `IsDeleted` |  | |  | `PurgDocItmDistrLineDeltnCode` |  |  |
| `OrderQuantityUnit` |  | |  |  |  |  |
| `DistributionType` |  | |  |  |  |  |
| `DistrResponseMessageUUID` |  | |  |  |  |  |
| `ItemDistributionIsRelevant` |  | |  |  |  |  |
| `PurgDocItemDistrRelevanceCode` |  | |  |  |  |  |
| `ReferenceHeaderDistributionKey` |  | |  |  |  |  |
| `ManualDeliveryAddressID` |  | |  |  |  |  |
| `AddressType` |  | |  |  |  |  |
| `ProcurementHubSourceSystem` |  | |  |  |  |  |
| `ProcmtHubPurchaseRequisition` |  | |  |  |  |  |
| `ProcmtHubPurRequisitionItem` |  | |  |  |  |  |
| `PurReqnReleaseStatus` |  | |  |  |  |  |
| `NetPriceAmount` |  | |  |  |  |  |
| `_CentralReqForQuotationItem` | | ✓ | | | | |
| `_CentralRequestForQuotation` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CentralReqForQuotationItem` | `I_CentralReqForQuotationItem` | [1..1] |
| `_CentralRequestForQuotation` | `I_CentralRequestForQuotation` | [1..1] |

## Source Code

```abap
@VDM.viewType : #BASIC
@EndUserText.label: 'Central RFQ Item Distribution'
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.personalData.blocking: #REQUIRED
@AccessControl.authorizationCheck: #CHECK

@AbapCatalog.sqlViewName: 'ICNTRLRFQIDIS'
@ObjectModel.usageType.serviceQuality: #B
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.usageType.dataClass: #TRANSACTIONAL

@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.supportedCapabilities:[ #SQL_DATA_SOURCE,
                                     #CDS_MODELING_DATA_SOURCE,
                                     #CDS_MODELING_ASSOCIATION_TARGET ]
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API

define view I_CentralRFQItemDistribution
  as select from R_CentralRFQItemDistribution

  association [1..1] to I_CentralReqForQuotationItem as _CentralReqForQuotationItem on  $projection.CentralRequestForQuotation     = _CentralReqForQuotationItem.CentralRequestForQuotation
                                                                                    and $projection.CentralRequestForQuotationItem = _CentralReqForQuotationItem.CentralRequestForQuotationItem
  association [1..1] to I_CentralRequestForQuotation as _CentralRequestForQuotation on  $projection.CentralRequestForQuotation = _CentralRequestForQuotation.CentralRequestForQuotation

{
  key CentralRequestForQuotation,
  key CentralRequestForQuotationItem,
  key DistributionKey,
      PurchasingDocumentCategory,
      PurchasingDocumentType,
      PurchasingOrganization,
      CompanyCode,
      Plant,
      LogicalSystem,
      DocumentCurrency,
      Currency,
      PurchasingGroup,
      StorageLocation,
      PaymentTerms,
      CashDiscount1Days,
      CashDiscount2Days,
      NetPaymentDays,
      CashDiscount1Percent,
      CashDiscount2Percent,
      Material,
      MaterialGroup,
      CntrlPurgDistributionInPercent,
      @Semantics.quantity.unitOfMeasure: 'OrderQuantityUnit'
      TargetQuantity,
      @Semantics.amount.currencyCode:'DocumentCurrency'
      TargetAmount,
      ExtContractForPurg,
      ExtContractItemForPurg,
      PurgDocItemDistributionStatus,
      PurgDocItmDistrLineDeltnCode as IsDeleted,
      OrderQuantityUnit,
      DistributionType,
      DistrResponseMessageUUID,
      @VDM.lifecycle.status: #DEPRECATED
      @VDM.lifecycle.successor: 'PurgDocItemDistrRelevanceCode'
      ItemDistributionIsRelevant,
      PurgDocItemDistrRelevanceCode,
      ReferenceHeaderDistributionKey,
      ManualDeliveryAddressID,
      AddressType,
      ProcurementHubSourceSystem,
      ProcmtHubPurchaseRequisition,
      ProcmtHubPurRequisitionItem,
      PurReqnReleaseStatus,
      @Semantics.amount.currencyCode: 'DocumentCurrency'
      NetPriceAmount,

      /* Associations */
      _CentralRequestForQuotation,
      _CentralReqForQuotationItem

}
```
