---
name: I_CENTRALRFQITEMDISTRIBUTION
description: "Centralrfqitemdistribution"
app_component: MM-PUR-HUB-RFQ-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
atc_state: released
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
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
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
