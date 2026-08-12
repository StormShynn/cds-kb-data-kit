---
name: I_PROCMTHUBPURORDHDRAPI01
description: "Procmthubpurordhdrapi 01"
app_component: MM-PUR-HUB-PO-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - MM
  - MM-PUR
  - MM-PUR-HUB
  - interface-view
  - header-level
  - component:MM-PUR-HUB-PO-2CL
  - lob:Sourcing & Procurement
---
# I_PROCMTHUBPURORDHDRAPI01

**Procmthubpurordhdrapi 01**

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
| `PurchaseOrderType` |  | |  |  |  |  |
| `PurchaseOrderSubtype` |  | |  |  |  |  |
| `PurchasingDocumentOrigin` |  | |  |  |  |  |
| `CreatedByUser` |  | |  |  |  |  |
| `CreationDate` |  | |  |  |  |  |
| `PurchaseOrderDate` |  | |  |  |  |  |
| `Language` |  | |  |  |  |  |
| `PurchasingDocumentDeletionCode` |  | |  |  |  |  |
| `ReleaseIsNotCompleted` |  | |  |  |  |  |
| `PurchasingCompletenessStatus` |  | |  |  |  |  |
| `PurchasingProcessingStatus` |  | |  |  |  |  |
| `PurgReleaseSequenceStatus` |  | |  |  |  |  |
| `ReleaseCode` |  | |  |  |  |  |
| `CompanyCode` |  | |  |  |  |  |
| `PurchasingOrganization` |  | |  |  |  |  |
| `PurchasingGroup` |  | |  |  |  |  |
| `Supplier` |  | |  |  |  |  |
| `ManualSupplierAddressID` |  | |  |  |  |  |
| `SupplierRespSalesPersonName` |  | |  |  |  |  |
| `SupplierPhoneNumber` |  | |  |  |  |  |
| `SupplyingSupplier` |  | |  |  |  |  |
| `SupplyingPlant` |  | |  |  |  |  |
| `InvoicingParty` |  | |  |  |  |  |
| `Customer` |  | |  |  |  |  |
| `SupplierQuotationExternalID` |  | |  |  |  |  |
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
| `PricingDocument` |  | |  | `DeliveryDocumentCondition` |  |  |
| `PricingProcedure` |  | |  |  |  |  |
| `PurchaseOrderNetAmount` |  | |  |  |  |  |
| `DocumentCurrency` |  | |  |  |  |  |
| `ValidityStartDate` |  | |  |  |  |  |
| `ValidityEndDate` |  | |  |  |  |  |
| `ExchangeRate` |  | |  |  |  |  |
| `ExchangeRateIsFixed` |  | |  |  |  |  |
| `LastChangeDateTime` |  | |  |  |  |  |
| `TaxReturnCountry` |  | |  |  |  |  |
| `VATRegistrationCountry` |  | |  |  |  |  |
| `PurgReasonForDocCancellation` |  | |  |  |  |  |
| `PurgReleaseTimeTotalAmount` |  | |  |  |  |  |
| `PrmtHbRpldPOUniqueID` |  | |  | `concat(PurchaseOrder, ExtSourceSystem)` |  |  |
| `ProcmtHubCompanyCodeUniqueID` |  | | `_ProcmtHubCoCodeSystemVH` | `ProcmtHubCompanyCodeUniqueID` |  |  |
| `ProcmtHubPurgOrgUniqueID` |  | | `_ProcmtHubPurgOrgSystemVH` | `ProcmtHubPurgOrgUniqueID` |  |  |
| `_ProcmtHubPurchaseOrderItem` | | ✓ | | | | |
| `_ProcmtHubCoCodeSystemVH` | | ✓ | | | | |
| `_ProcmtHubPurgOrgSystemVH` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ProcmtHubPurchaseOrderItem` | `I_ProcmtHubPurOrdItmAPI01` | [0..*] |
| `_ProcmtHubCoCodeSystemVH` | `I_ProcmtHubCompanyCode` | [0..1] |
| `_ProcmtHubPurgOrgSystemVH` | `I_ProcmtHubPurgOrgAPI01` | [0..1] |

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog.sqlViewName: 'IPRCHBPOHAPI01'
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #CHECK
@EndUserText.label: 'Centrally Managed Purchase Order Header'
@VDM.viewType: #BASIC
@ObjectModel.usageType.serviceQuality: #B
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.usageType.dataClass: #TRANSACTIONAL
@AccessControl.personalData.blocking: #BLOCKED_DATA_EXCLUDED
@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]
@ObjectModel.modelingPattern : #NONE


define view I_ProcmtHubPurOrdHdrAPI01
  as select from I_CentralPurchaseOrder

  association [0..*] to I_ProcmtHubPurOrdItmAPI01 as _ProcmtHubPurchaseOrderItem on  $projection.PurchaseOrder   = _ProcmtHubPurchaseOrderItem.PurchaseOrder
                                                                                 and $projection.ExtSourceSystem = _ProcmtHubPurchaseOrderItem.ExtSourceSystem
  association [0..1] to I_ProcmtHubCompanyCode    as _ProcmtHubCoCodeSystemVH    on  $projection.CompanyCode     = _ProcmtHubCoCodeSystemVH.ProcmtHubCompanyCode
                                                                                 and $projection.ExtSourceSystem = _ProcmtHubCoCodeSystemVH.ProcurementHubSourceSystem
  association [0..1] to I_ProcmtHubPurgOrgAPI01   as _ProcmtHubPurgOrgSystemVH   on  $projection.PurchasingOrganization = _ProcmtHubPurgOrgSystemVH.ProcmtHubPurchasingOrg
                                                                                 and $projection.ExtSourceSystem        = _ProcmtHubPurgOrgSystemVH.ProcurementHubSourceSystem
{

      //Key
  key PurchaseOrder,
  key ExtSourceSystem,
      PurchaseOrderType,
      PurchaseOrderSubtype,
      PurchasingDocumentOrigin,

      //Admin
      CreatedByUser,
      CreationDate,
      PurchaseOrderDate,
      Language,

      //Status
      PurchasingDocumentDeletionCode,
      ReleaseIsNotCompleted,
      PurchasingCompletenessStatus,
      PurchasingProcessingStatus,
      PurgReleaseSequenceStatus,
      ReleaseCode,


      //Organization
      CompanyCode,
      PurchasingOrganization,
      PurchasingGroup,

      //Supplier
      Supplier,
      ManualSupplierAddressID,
      SupplierRespSalesPersonName,
      SupplierPhoneNumber,
      SupplyingSupplier,
      SupplyingPlant,
      InvoicingParty,
      Customer,

      //Quotation
      SupplierQuotationExternalID,

      //PaymentTerms
      PaymentTerms,
      CashDiscount1Days,
      CashDiscount2Days,
      NetPaymentDays,
      CashDiscount1Percent,
      CashDiscount2Percent,

      //DownPayment
      DownPaymentType,
      DownPaymentPercentageOfTotAmt,
      @Semantics.amount.currencyCode:'DocumentCurrency'
      DownPaymentAmount,
      DownPaymentDueDate,

      //Incoterms
      IncotermsClassification,
      IncotermsTransferLocation,
      IncotermsVersion,
      IncotermsLocation1,
      IncotermsLocation2,

      //Intratat
      IsIntrastatReportingRelevant,
      IsIntrastatReportingExcluded,

      //Pricing
      DeliveryDocumentCondition as PricingDocument,
      PricingProcedure,
      @Semantics.amount.currencyCode:'DocumentCurrency'
      PurchaseOrderNetAmount,
      DocumentCurrency,

      ValidityStartDate,
      ValidityEndDate,

      ExchangeRate,
      ExchangeRateIsFixed,

      LastChangeDateTime,

      TaxReturnCountry,
      VATRegistrationCountry,
      PurgReasonForDocCancellation,
      @Semantics.amount.currencyCode:'DocumentCurrency'
      PurgReleaseTimeTotalAmount,
      
      concat(PurchaseOrder, ExtSourceSystem)  as PrmtHbRpldPOUniqueID,

      // _ProcmtHubPurchaseOrderItem.Plant as plant,
      _ProcmtHubCoCodeSystemVH.ProcmtHubCompanyCodeUniqueID,
      _ProcmtHubPurgOrgSystemVH.ProcmtHubPurgOrgUniqueID,




      // Associations
      _ProcmtHubPurchaseOrderItem,
      _ProcmtHubCoCodeSystemVH, //Responsibility management
      _ProcmtHubPurgOrgSystemVH //Responsibility management

}
```
