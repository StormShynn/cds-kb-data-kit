---
name: I_PROCMTHUBRPLDPURCHASEORDER
description: "PROCMTHUBRPLDPurchase Order"
app_component: MM-PUR-HUB-PO-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
atc_state: released
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

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `PurchaseOrder` | ✓ | |  |  |  |  |
| `ExtSourceSystem` | ✓ | |  |  |  |  |
| `PurchasingDocumentCategory` |  | |  |  |  |  |
| `PurchaseOrderType` |  | |  |  |  |  |
| `PurchaseOrderSubtype` |  | |  |  |  |  |
| `PurchasingDocumentOrigin` |  | |  |  |  |  |
| `CreatedByUser` |  | |  |  |  |  |
| `CreatedByUserFullName` |  | |  | `CreatedByUserName` |  |  |
| `CreationDate` |  | |  |  |  |  |
| `PurchaseOrderDate` |  | |  |  |  |  |
| `ValidityStartDate` |  | |  |  |  |  |
| `ValidityEndDate` |  | |  |  |  |  |
| `Language` |  | |  |  |  |  |
| `PurchasingDocumentDeletionCode` |  | |  |  |  |  |
| `ReleaseIsNotCompleted` |  | |  |  |  |  |
| `PurchasingProcessingStatus` |  | |  |  |  |  |
| `PurchasingCompletenessStatus` |  | |  |  |  |  |
| `CompanyCode` |  | |  |  |  |  |
| `CompanyCodeCountry` |  | |  |  |  |  |
| `PurchasingOrganization` |  | |  |  |  |  |
| `PurchasingGroup` |  | |  |  |  |  |
| `Supplier` |  | |  |  |  |  |
| `SupplierRespSalesPersonName` |  | |  |  |  |  |
| `SupplierPhoneNumber` |  | |  |  |  |  |
| `SupplyingSupplier` |  | |  |  |  |  |
| `SupplyingPlant` |  | |  |  |  |  |
| `InvoicingParty` |  | |  |  |  |  |
| `PaymentTerms` |  | |  |  |  |  |
| `CashDiscount1Days` |  | |  |  |  |  |
| `CashDiscount2Days` |  | |  |  |  |  |
| `NetPaymentDays` |  | |  |  |  |  |
| `CashDiscount1Percent` |  | |  |  |  |  |
| `CashDiscount2Percent` |  | |  |  |  |  |
| `IncotermsClassification` |  | |  |  |  |  |
| `IncotermsTransferLocation` |  | |  |  |  |  |
| `IncotermsVersion` |  | |  |  |  |  |
| `IncotermsLocation1` |  | |  |  |  |  |
| `IncotermsLocation2` |  | |  |  |  |  |
| `IsIntrastatReportingRelevant` |  | |  |  |  |  |
| `IsIntrastatReportingExcluded` |  | |  |  |  |  |
| `DeliveryDocumentCondition` |  | |  |  |  |  |
| `PricingProcedure` |  | |  |  |  |  |
| `DocumentCurrency` |  | |  |  |  |  |
| `ExchangeRate` |  | |  |  |  |  |
| `AbsoluteExchangeRate` |  | |  |  |  |  |
| `ExchRateIsIndirectQuotation` |  | |  |  |  |  |
| `EffectiveExchangeRate` |  | |  |  |  |  |
| `ExchangeRateIsFixed` |  | |  |  |  |  |
| `LastChangeDateTime` |  | |  |  |  |  |
| `ManualSupplierAddressID` |  | |  |  |  |  |
| `HasNote` |  | |  |  |  |  |
| `HasAttachment` |  | |  |  |  |  |
| `PurchaseOrderNetAmount` |  | |  |  |  |  |
| `NumberOfOverduePurOrders` |  | |  |  |  |  |
| `NumberOfOverduePurOrdItm` |  | |  |  |  |  |
| `PurchaseOrderStatus` |  | |  |  |  |  |
| `PurchaseOrderStatusName` |  | |  |  |  |  |
| `ApproverUser` |  | |  |  |  |  |
| `ApproverName` |  | |  |  |  |  |
| `ScheduleLineDeliveryDate` |  | |  |  |  |  |
| `PurOrdOutputCtrlType` |  | |  |  |  |  |
| `PurchaseOrderOutputStatus` |  | |  |  |  |  |
| `PurchaseOrderOutputStatusName` |  | |  |  |  |  |
| `PurchaseOrderOutputDateTime` |  | |  |  |  |  |
| `WeightedRelevance` |  | |  |  |  |  |
| `PurchaseOrderOutputIndCode` |  | |  |  |  |  |
| `PurchaseOrderOutputIndDesc` |  | |  |  |  |  |
| `VATRegistrationCountry` |  | |  |  |  |  |
| `CorrespncExternalReference` |  | |  |  |  |  |
| `CorrespncInternalReference` |  | |  |  |  |  |
| `IsEndOfPurposeBlocked` |  | |  |  |  |  |
| `_DocumentCurrency` | | ✓ | | | | |

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
