---
name: I_PURCHASEORDERTP_2
description: "Purchase OrderTP 2"
app_component: MM-PUR-PO-2CL
software_component: SAPSCORE
release_state: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - MM
  - MM-PUR
  - MM-PUR-PO
  - interface-view
  - transactional-processing
  - purchase-order
  - component:MM-PUR-PO-2CL
  - lob:Sourcing & Procurement
  - bo:PurchaseOrder
---
# I_PURCHASEORDERTP_2

**Purchase OrderTP 2**

| Property | Value |
|---|---|
| App Component | `MM-PUR-PO-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `PurchaseOrder` | ✓ | |  |  |  |  |
| `PurchaseOrderType` |  | |  |  |  |  |
| `PurchaseOrderSubtype` |  | |  |  |  |  |
| `PurchasingDocumentOrigin` |  | |  |  |  |  |
| `PurchasingDocumentProcessCode` |  | |  |  |  |  |
| `CreatedByUser` |  | |  |  |  |  |
| `CreationDate` |  | |  |  |  |  |
| `PurchaseOrderDate` |  | |  |  |  |  |
| `LastChangeDateTime` |  | |  |  |  |  |
| `ValidityStartDate` |  | |  |  |  |  |
| `ValidityEndDate` |  | |  |  |  |  |
| `Language` |  | |  |  |  |  |
| `PurchaseOrderDeletionCode` |  | |  |  |  |  |
| `ReleaseIsNotCompleted` |  | |  |  |  |  |
| `PurchasingCompletenessStatus` |  | |  |  |  |  |
| `PurchasingProcessingStatus` |  | |  |  |  |  |
| `PurgReleaseSequenceStatus` |  | |  |  |  |  |
| `ReleaseCode` |  | |  |  |  |  |
| `PurchasingReleaseStrategy` |  | |  |  |  |  |
| `PurgReasonForDocCancellation` |  | |  |  |  |  |
| `CompanyCode` |  | |  |  |  |  |
| `PurchasingOrganization` |  | |  |  |  |  |
| `PurchasingGroup` |  | |  |  |  |  |
| `Supplier` |  | |  |  |  |  |
| `ManualSupplierAddressID` |  | |  |  |  |  |
| `SupplierAddressID` |  | |  |  |  |  |
| `SupplierRespSalesPersonName` |  | |  |  |  |  |
| `SupplierPhoneNumber` |  | |  |  |  |  |
| `SupplyingSupplier` |  | |  |  |  |  |
| `SupplyingPlant` |  | |  |  |  |  |
| `InvoicingParty` |  | |  |  |  |  |
| `Customer` |  | |  |  |  |  |
| `PurchaseContract` |  | |  |  |  |  |
| `SupplierQuotationExternalID` |  | |  |  |  |  |
| `QuotationSubmissionDate` |  | |  |  |  |  |
| `ItemNumberIntervalForSubItems` |  | |  |  |  |  |
| `PaymentTerms` |  | |  |  |  |  |
| `CashDiscount1Days` |  | |  |  |  |  |
| `CashDiscount2Days` |  | |  |  |  |  |
| `NetPaymentDays` |  | |  |  |  |  |
| `CashDiscount1Percent` |  | |  |  |  |  |
| `CashDiscount2Percent` |  | |  |  |  |  |
| `DownPaymentType` |  | |  |  |  |  |
| `DownPaymentPercentageOfTotAmt` |  | |  |  |  |  |
| `DownPaymentAmount` |  | |  |  |  |  |
| `DownPaymentDueDate` |  | |  |  |  |  |
| `IncotermsClassification` |  | |  |  |  |  |
| `IncotermsTransferLocation` |  | |  |  |  |  |
| `IncotermsVersion` |  | |  |  |  |  |
| `IncotermsLocation1` |  | |  |  |  |  |
| `IncotermsLocation2` |  | |  |  |  |  |
| `IsIntrastatReportingRelevant` |  | |  |  |  |  |
| `IsIntrastatReportingExcluded` |  | |  |  |  |  |
| `CorrespncExternalReference` |  | |  |  |  |  |
| `CorrespncInternalReference` |  | |  |  |  |  |
| `PricingDocument` |  | |  |  |  |  |
| `PricingProcedure` |  | |  |  |  |  |
| `DocumentCurrency` |  | |  |  |  |  |
| `ExchangeRate` |  | |  |  |  |  |
| `ExchangeRateIsFixed` |  | |  |  |  |  |
| `TaxReturnCountry` |  | |  |  |  |  |
| `VATRegistrationCountry` |  | |  |  |  |  |
| `PurgAggrgdProdCmplncSuplrSts` |  | |  |  |  |  |
| `PurgAggrgdProdMarketabilitySts` |  | |  |  |  |  |
| `PurgAggrgdSftyDataSheetStatus` |  | |  |  |  |  |
| `PurgProdCmplncTotDngrsGoodsSts` |  | |  |  |  |  |
| `PurchasingCollectiveNumber` |  | |  |  |  |  |
| `_SupplierAddress` | | ✓ | | | | |
| `_PurchaseOrderItem` | | ✓ | | | | |
| `_PurchaseOrderNote` | | ✓ | | | | |
| `_PurchaseOrderPartner` | | ✓ | | | | |
| `_CompanyCode` | | ✓ | | | | |
| `_CreatedByUser` | | ✓ | | | | |
| `_DocumentCurrency` | | ✓ | | | | |
| `_IncotermsClassification` | | ✓ | | | | |
| `_IncotermsVersion` | | ✓ | | | | |
| `_InvoicingParty` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |
| `_PaymentTerms` | | ✓ | | | | |
| `_PurchaseOrderCalcFields` | | ✓ | | | | |
| `_PurchaseOrderDeletionCode` | | ✓ | | | | |
| `_PurchaseOrderType` | | ✓ | | | | |
| `_PurchasingGroup` | | ✓ | | | | |
| `_PurchasingOrganization` | | ✓ | | | | |
| `_Supplier` | | ✓ | | | | |
| `_SupplyingPlant` | | ✓ | | | | |
| `_SupplyingSupplier` | | ✓ | | | | |
| `_PurchaseOrderTypeText` | | ✓ | | | | |
| `_PurchaseOrderDeletionCodeText` | | ✓ | | | | |
| `_IncotermsClassificationText` | | ✓ | | | | |
| `_IncotermsVersionText` | | ✓ | | | | |
| `_DocumentCurrencyText` | | ✓ | | | | |
| `_TaxReturnCountryText` | | ✓ | | | | |
| `_VATRegistrationCountryText` | | ✓ | | | | |
| `_PurgTotProdCmplncSuplrStsT` | | ✓ | | | | |
| `_PurgTotProdMarketabilityStsT` | | ✓ | | | | |
| `_PurgAggrgdSftyDataSheetStsT` | | ✓ | | | | |
| `_PurgTotDangerousGoodsStsT` | | ✓ | | | | |

## Source Code

```abap
@EndUserText.label: 'Purchase Order Projection'
@AccessControl: { authorizationCheck: #CHECK, 
                  personalData.blocking: #BLOCKED_DATA_EXCLUDED, 
                  privilegedAssociations: ['_SupplierAddress','_PurchaseOrderPartner'] }
@ObjectModel.supportedCapabilities: [#TRANSACTIONAL_PROVIDER]
@ObjectModel.modelingPattern: #TRANSACTIONAL_INTERFACE
@ObjectModel.usageType: {serviceQuality: #C, sizeCategory: #L, dataClass: #MASTER}
@ObjectModel.sapObjectNodeType.name: 'PurchaseOrder'
@Metadata.ignorePropagatedAnnotations: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #TRANSACTIONAL 
define root view entity I_PurchaseOrderTP_2
provider contract transactional_interface
  as projection on R_PurchaseOrderTP as _PurchaseOrderTP
{

  key PurchaseOrder,
      
      @ObjectModel.text.association: '_PurchaseOrderTypeText'
      PurchaseOrderType,
      PurchaseOrderSubtype,
      PurchasingDocumentOrigin,
     // PurchasingDocumentIsAged,
      PurchasingDocumentProcessCode,

      CreatedByUser,
      CreationDate,
      PurchaseOrderDate,
      LastChangeDateTime,
      ValidityStartDate,
      ValidityEndDate,

      Language,
      @ObjectModel.text.association: '_PurchaseOrderDeletionCodeText'
      PurchaseOrderDeletionCode,
      ReleaseIsNotCompleted,
      PurchasingCompletenessStatus,
      PurchasingProcessingStatus,
      PurgReleaseSequenceStatus,
      ReleaseCode,

      PurchasingReleaseStrategy,
      PurgReasonForDocCancellation,
      @Consumption.valueHelpDefinition: [{ entity: { name: 'I_CompanyCodeStdVH', element: 'CompanyCode' }, useAsTemplate: true }]          //CustomUI
      CompanyCode,
      PurchasingOrganization,
      PurchasingGroup,

      @Consumption.valueHelpDefinition: [{ entity: { name: 'I_Supplier_VH', element: 'Supplier' }, useAsTemplate: true }]       //CustomUI
      Supplier,
      ManualSupplierAddressID,
      SupplierAddressID,
      SupplierRespSalesPersonName,
      SupplierPhoneNumber,
      @Consumption.valueHelpDefinition: [{ entity: { name: 'I_Supplier_VH', element: 'Supplier' }, useAsTemplate: true }]       //CustomUI
      SupplyingSupplier,
      @Consumption.valueHelpDefinition: [{ entity: { name: 'I_PlantStdVH', element: 'Plant' }, useAsTemplate: true }]       //CustomUI
      SupplyingPlant,

      @Consumption.valueHelpDefinition: [{ entity: { name: 'I_Supplier_VH', element: 'Supplier' }, useAsTemplate: true }]       //CustomUI
      InvoicingParty,
      @Consumption.valueHelpDefinition: [{ entity: { name: 'I_Customer_VH', element: 'Customer' }, useAsTemplate: true }]       //CustomUI
      Customer,
      PurchaseContract,
     // RequestForQuotation,
      SupplierQuotationExternalID,
      QuotationSubmissionDate,
      ItemNumberIntervalForSubItems,
      PaymentTerms,

      CashDiscount1Days,
      CashDiscount2Days,
      NetPaymentDays,
      CashDiscount1Percent,
      CashDiscount2Percent,

      DownPaymentType,
      DownPaymentPercentageOfTotAmt,
     
      @Semantics.amount.currencyCode: 'DocumentCurrency' 
      DownPaymentAmount,
      DownPaymentDueDate,

      @ObjectModel.text.association: '_IncotermsClassificationText'
      IncotermsClassification,
      IncotermsTransferLocation,
      @ObjectModel.text.association: '_IncotermsVersionText'
      IncotermsVersion,
      IncotermsLocation1,
      IncotermsLocation2,

      IsIntrastatReportingRelevant,
      IsIntrastatReportingExcluded,

      CorrespncExternalReference,
      CorrespncInternalReference,

      PricingDocument,
      PricingProcedure,
//      @Semantics.amount.currencyCode: 'DocumentCurrency'
//      TargetAmount,
      @ObjectModel.text.association: '_DocumentCurrencyText'
      @Consumption.valueHelpDefinition: [{ entity: { name: 'I_CurrencyStdVH', element: 'Currency' }, useAsTemplate: true }]       //CustomUI
      DocumentCurrency,
      ExchangeRate,
      ExchangeRateIsFixed,
      
     //  @Semantics.amount.currencyCode: 'DocumentCurrency'
     // PurgReleaseTimeTotalAmount,
     // IsEndOfPurposeBlocked,
      @ObjectModel.text.association: '_TaxReturnCountryText'
      @Consumption.valueHelpDefinition: [{ entity: { name: 'I_CountryVH', element: 'Country' }, useAsTemplate: true }]       //CustomUI
      TaxReturnCountry,
      @ObjectModel.text.association: '_VATRegistrationCountryText'
      @Consumption.valueHelpDefinition: [{ entity: { name: 'I_CountryVH', element: 'Country' }, useAsTemplate: true }]       //CustomUI
      VATRegistrationCountry,
      
      // fields from product compliance
      @ObjectModel.text.association: '_PurgTotProdCmplncSuplrStsT'
      @Consumption.valueHelpDefinition: [{ entity: { name: 'I_PurgAggrgdProdCmplncSuplrSts', element: 'PurgAggrgdProdCmplncSuplrSts' }, 
                                           useAsTemplate: true }]       //CustomUI
      PurgAggrgdProdCmplncSuplrSts,
      @ObjectModel.text.association: '_PurgTotProdMarketabilityStsT'
      @Consumption.valueHelpDefinition: [{ entity: { name: 'I_PurgTotProdMarketabilitySts', element: 'PurgAggrgdProdMarketabilitySts' }, 
                                           useAsTemplate: true }]       //CustomUI
      PurgAggrgdProdMarketabilitySts,
      @ObjectModel.text.association: '_PurgAggrgdSftyDataSheetStsT'
      @Consumption.valueHelpDefinition: [{ entity: { name: 'I_PurgAggrgdSftyDataSheetSts', element: 'PurgAggrgdSftyDataSheetStatus' }, 
                                           useAsTemplate: true }]       //CustomUI
      PurgAggrgdSftyDataSheetStatus,
      @ObjectModel.text.association: '_PurgTotDangerousGoodsStsT'
      @Consumption.valueHelpDefinition: [{ entity: { name: 'I_PurgProdCmplncTotDngrsGdsSts', element: 'PurgProdCmplncTotDngrsGoodsSts' }, 
                                           useAsTemplate: true }]       //CustomUI
      PurgProdCmplncTotDngrsGoodsSts,
      
      PurchasingCollectiveNumber,
//      
//      // Text fields for CustomUI
//      @Semantics.text: true
//      _CompanyCode.CompanyCodeName,
//      @Semantics.text: true
//      _PurchasingOrganization.PurchasingOrganizationName,
//      @Semantics.text: true
//      _PurchasingGroup.PurchasingGroupName,
//      @Semantics.text: true
//      _Supplier.SupplierName,
//      @Semantics.text: true
//      _SupplyingSupplier.SupplierName as SupplyingSupplierName,
//      @Semantics.text: true
//      _SupplyingPlant.PlantName as SupplyingPlantName,
//      @Semantics.text: true
//      _InvoicingParty.SupplierName as InvoicingPartyName,
      
      /* Compositions */
      _SupplierAddress   : redirected to composition child I_PurchaseOrdSupplierAddrTP_2,
      _PurchaseOrderItem : redirected to composition child I_PurchaseOrderItemTP_2,
      _PurchaseOrderNote : redirected to composition child I_PurchaseOrderNoteTP_2,
      _PurchaseOrderPartner : redirected to composition child I_PurchaseOrderPartnerTP_2,

      /* Associations */
      _CompanyCode,
      _CreatedByUser,
      _DocumentCurrency,
      _IncotermsClassification,
      _IncotermsVersion,
      _InvoicingParty,
      _Language,
      _PaymentTerms,
      _PurchaseOrderCalcFields,
      _PurchaseOrderDeletionCode,
      _PurchaseOrderType,
      _PurchasingGroup,
      _PurchasingOrganization,
      _Supplier,
      _SupplyingPlant,
      _SupplyingSupplier,
      
      // Text associations for CustomUI
      _PurchaseOrderTypeText,
      _PurchaseOrderDeletionCodeText,
      _IncotermsClassificationText,
      _IncotermsVersionText,
      _DocumentCurrencyText,
      _TaxReturnCountryText,
      _VATRegistrationCountryText,
      _PurgTotProdCmplncSuplrStsT,
      _PurgTotProdMarketabilityStsT,
      _PurgAggrgdSftyDataSheetStsT,
      _PurgTotDangerousGoodsStsT
}
```
