---
name: I_PROCMTHUBRPLDPURCHASEORDER
description: PROCMTHUBRPLDPurchase Order
app_component: MM-PUR-HUB-PO-2CL
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
  - purchase-order
  - component:MM-PUR-HUB-PO-2CL
  - lob:Sourcing & Procurement
  - bo:PurchaseOrder
---
# I_PROCMTHUBRPLDPURCHASEORDER

**PROCMTHUBRPLDPurchase Order**

| Property | Value |
|---|---|
| App Component | `MM-PUR-HUB-PO-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `PurchaseOrder` | `Document.PurchaseOrder` |
| key `ExtSourceSystem` | `Document.ExtSourceSystem` |
| `PurchasingDocumentCategory` | `PurchasingDocumentCategory` |
| `PurchaseOrderType` | `Document.PurchaseOrderType` |
| `PurchaseOrderSubtype` | `Document.PurchaseOrderSubtype` |
| `PurchasingDocumentOrigin` | `Document.PurchasingDocumentOrigin` |
| `CreatedByUser` | `Document.CreatedByUser` |
| `CreatedByUserFullName` | `Document.CreatedByUserName` |
| `CreationDate` | `Document.CreationDate` |
| `PurchaseOrderDate` | `Document.PurchaseOrderDate` |
| `ValidityStartDate` | `Document.ValidityStartDate` |
| `ValidityEndDate` | `Document.ValidityEndDate` |
| `Language` | `Document.Language` |
| `PurchasingDocumentDeletionCode` | `Document.PurchasingDocumentDeletionCode` |
| `ReleaseIsNotCompleted` | `Document.ReleaseIsNotCompleted` |
| `PurchasingProcessingStatus` | `Document.PurchasingProcessingStatus` |
| `PurchasingCompletenessStatus` | `Document.PurchasingCompletenessStatus` |
| `CompanyCode` | `Document.CompanyCode` |
| `CompanyCodeCountry` | `Document.CompanyCodeCountry` |
| `PurchasingOrganization` | `Document.PurchasingOrganization` |
| `PurchasingGroup` | `Document.PurchasingGroup` |
| `Supplier` | `Document.Supplier` |
| `SupplierRespSalesPersonName` | `Document.SupplierRespSalesPersonName` |
| `SupplierPhoneNumber` | `Document.SupplierPhoneNumber` |
| `SupplyingSupplier` | `Document.SupplyingSupplier` |
| `SupplyingPlant` | `Document.SupplyingPlant` |
| `InvoicingParty` | `Document.InvoicingParty` |
| `PaymentTerms` | `Document.PaymentTerms` |
| `CashDiscount1Days` | `Document.CashDiscount1Days` |
| `CashDiscount2Days` | `Document.CashDiscount2Days` |
| `NetPaymentDays` | `Document.NetPaymentDays` |
| `CashDiscount1Percent` | `Document.CashDiscount1Percent` |
| `CashDiscount2Percent` | `Document.CashDiscount2Percent` |
| `IncotermsClassification` | `Document.IncotermsClassification` |
| `IncotermsTransferLocation` | `Document.IncotermsTransferLocation` |
| `IncotermsVersion` | `Document.IncotermsVersion` |
| `IncotermsLocation1` | `Document.IncotermsLocation1` |
| `IncotermsLocation2` | `Document.IncotermsLocation2` |
| `IsIntrastatReportingRelevant` | `Document.IsIntrastatReportingRelevant` |
| `IsIntrastatReportingExcluded` | `Document.IsIntrastatReportingExcluded` |
| `DeliveryDocumentCondition` | `Document.DeliveryDocumentCondition` |
| `PricingProcedure` | `Document.PricingProcedure` |
| `DocumentCurrency` | `Document.DocumentCurrency` |
| `ExchangeRate` | `Document.ExchangeRate` |
| `AbsoluteExchangeRate` | `Document.AbsoluteExchangeRate` |
| `ExchRateIsIndirectQuotation` | `Document.ExchRateIsIndirectQuotation` |
| `EffectiveExchangeRate` | `Document.EffectiveExchangeRate` |
| `ExchangeRateIsFixed` | `Document.ExchangeRateIsFixed` |
| `LastChangeDateTime` | `Document.LastChangeDateTime` |
| `ManualSupplierAddressID` | `Document.ManualSupplierAddressID` |
| `HasNote` | `Document.HasNote` |
| `HasAttachment` | `Document.HasAttachment` |
| `PurchaseOrderNetAmount` | `Document.PurchaseOrderNetAmount` |
| `NumberOfOverduePurOrders` | `Document.NumberOfOverduePurOrders` |
| `NumberOfOverduePurOrdItm` | `Document.NumberOfOverduePurOrdItm` |
| `PurchaseOrderStatus` | `Document.PurchaseOrderStatus` |
| `PurchaseOrderStatusName` | `Document.PurchaseOrderStatusName` |
| `ApproverUser` | `Document.ApproverUser` |
| `ApproverName` | `Document.ApproverName` |
| `ScheduleLineDeliveryDate` | `Document.ScheduleLineDeliveryDate` |
| `PurOrdOutputCtrlType` | `Document.PurOrdOutputCtrlType` |
| `PurchaseOrderOutputStatus` | `Document.PurchaseOrderOutputStatus` |
| `PurchaseOrderOutputStatusName` | `Document.PurchaseOrderOutputStatusName` |
| `PurchaseOrderOutputDateTime` | `Document.PurchaseOrderOutputDateTime` |
| `WeightedRelevance` | `Document.WeightedRelevance` |
| `PurchaseOrderOutputIndCode` | `Document.PurchaseOrderOutputIndCode` |
| `PurchaseOrderOutputIndDesc` | `Document.PurchaseOrderOutputIndDesc` |
| `VATRegistrationCountry` | `Document.VATRegistrationCountry` |
| `CorrespncExternalReference` | `Document.CorrespncExternalReference` |
| `CorrespncInternalReference` | `Document.CorrespncInternalReference` |
| `IsEndOfPurposeBlocked` | `IsEndOfPurposeBlocked` |
| `_DocumentCurrency` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Extension` | `E_PrmtHbRpldPurchaseOrder` | [0..1] |

## Source Code

```abap
@VDM.viewType: #COMPOSITE
//@ClientHandling.algorithm: #SESSION_VARIABLE
//@AbapCatalog.sqlViewName: 'IPRMTHBRPLDPO'
//@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'Extensibility of Purchase Order in Procurement Hub'
@ObjectModel.compositionRoot: true
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.entityChangeStateId: 'LastChangeDateTime'
@ObjectModel.usageType.dataClass: #TRANSACTIONAL
@AccessControl.personalData.blocking: #NOT_REQUIRED
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.sapObjectNodeType.name:'PrmtHbRpldPurchaseOrder'
@ObjectModel.supportedCapabilities:[ #SQL_DATA_SOURCE ]
@ObjectModel.modelingPattern : #NONE
@Feature: 'MMPUR_PRMTHB_PO_OPD_PARAM'


define view entity I_ProcmtHubRpldPurchaseOrder
  as select from I_CentralPurchaseOrder as Document

  association [0..1] to E_PrmtHbRpldPurchaseOrder    as _Extension           on  _Extension.PurchaseOrder   = $projection.PurchaseOrder
                                                                             and _Extension.ExtSourceSystem = $projection.ExtSourceSystem

{

  key Document.PurchaseOrder,
  
  key Document.ExtSourceSystem,

      PurchasingDocumentCategory,
      Document.PurchaseOrderType,

      Document.PurchaseOrderSubtype,

      Document.PurchasingDocumentOrigin,

      Document.CreatedByUser,

      @Semantics.text: true
      Document.CreatedByUserName                     as CreatedByUserFullName,

      Document.CreationDate,

      Document.PurchaseOrderDate,

      Document.ValidityStartDate,

      Document.ValidityEndDate,

      @Semantics.language: true
      Document.Language,

      Document.PurchasingDocumentDeletionCode,

      Document.ReleaseIsNotCompleted,

      Document.PurchasingProcessingStatus,

      Document.PurchasingCompletenessStatus,

//      Document.PurchasingDocCompletionStatus,

      Document.CompanyCode,

      Document.CompanyCodeCountry,

      Document.PurchasingOrganization,

      Document.PurchasingGroup,

      Document.Supplier,

      Document.SupplierRespSalesPersonName,

      Document.SupplierPhoneNumber,

      Document.SupplyingSupplier,

      Document.SupplyingPlant,

      Document.InvoicingParty,

      Document.PaymentTerms,

      Document.CashDiscount1Days,

      Document.CashDiscount2Days,

      Document.NetPaymentDays,

      Document.CashDiscount1Percent,

      Document.CashDiscount2Percent,

      Document.IncotermsClassification,

      Document.IncotermsTransferLocation,

      Document.IncotermsVersion,

      Document.IncotermsLocation1,

      Document.IncotermsLocation2,

      Document.IsIntrastatReportingRelevant,

      Document.IsIntrastatReportingExcluded,

      Document.DeliveryDocumentCondition,

      Document.PricingProcedure,

      Document.DocumentCurrency,

      Document.ExchangeRate,

      Document.AbsoluteExchangeRate,

      Document.ExchRateIsIndirectQuotation,

      Document.EffectiveExchangeRate,

      Document.ExchangeRateIsFixed,

      Document.LastChangeDateTime,

      Document.ManualSupplierAddressID,

      Document.HasNote,

      Document.HasAttachment,

      ----------------------------------------------------------------------------------------
      -- Calculated fields                                                                 --
      ----------------------------------------------------------------------------------------
      @Semantics.amount.currencyCode: 'DocumentCurrency'
      Document.PurchaseOrderNetAmount,
      Document.NumberOfOverduePurOrders,
      Document.NumberOfOverduePurOrdItm,
      Document.PurchaseOrderStatus,
      Document.PurchaseOrderStatusName,
      Document.ApproverUser,
      Document.ApproverName,
      Document.ScheduleLineDeliveryDate,
      Document.PurOrdOutputCtrlType,
      Document.PurchaseOrderOutputStatus,
      Document.PurchaseOrderOutputStatusName,
      Document.PurchaseOrderOutputDateTime,
      Document.WeightedRelevance,
      Document.PurchaseOrderOutputIndCode,
      Document.PurchaseOrderOutputIndDesc,
      Document.VATRegistrationCountry,
      Document.CorrespncExternalReference,
      Document.CorrespncInternalReference,

      // Data Privacy and Protection
      @UI.hidden: true
      @Semantics.booleanIndicator
      IsEndOfPurposeBlocked,

      _DocumentCurrency

}
```
