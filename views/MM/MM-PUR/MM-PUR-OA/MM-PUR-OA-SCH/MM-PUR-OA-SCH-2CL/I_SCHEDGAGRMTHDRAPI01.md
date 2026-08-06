---
name: I_SCHEDGAGRMTHDRAPI01
description: Schedgagrmthdrapi 01
app_component: MM-PUR-OA-SCH-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - MM
  - MM-PUR
  - MM-PUR-OA
  - interface-view
  - header-level
  - component:MM-PUR-OA-SCH-2CL
  - lob:Sourcing & Procurement
---
# I_SCHEDGAGRMTHDRAPI01

**Schedgagrmthdrapi 01**

| Property | Value |
|---|---|
| App Component | `MM-PUR-OA-SCH-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `SchedulingAgreement` | `I_Schedgagrmthdr.SchedulingAgreement` |
| `CompanyCode` | `I_Schedgagrmthdr.CompanyCode` |
| `PurchasingDocumentCategory` | `I_Schedgagrmthdr.PurchasingDocumentCategory` |
| `PurchasingDocumentType` | `I_Schedgagrmthdr.PurchasingDocumentType` |
| `PurchasingDocumentTypeName` | `I_Schedgagrmthdr.PurchasingDocumentTypeName` |
| `CreatedByUser` | `I_Schedgagrmthdr.CreatedByUser` |
| `CreationDate` | `I_Schedgagrmthdr.CreationDate` |
| `Language` | `I_Schedgagrmthdr.Language` |
| `PurchasingOrganization` | `I_Schedgagrmthdr.PurchasingOrganization` |
| `PurchasingGroup` | `I_Schedgagrmthdr.PurchasingGroup` |
| `DocumentCurrency` | `I_Schedgagrmthdr.DocumentCurrency` |
| `IncotermsClassification` | `I_Schedgagrmthdr.IncotermsClassification` |
| `IncotermsTransferLocation` | `I_Schedgagrmthdr.IncotermsTransferLocation` |
| `PaymentTerms` | `I_Schedgagrmthdr.PaymentTerms` |
| `CashDiscount1Days` | `I_Schedgagrmthdr.CashDiscount1Days` |
| `CashDiscount2Days` | `I_Schedgagrmthdr.CashDiscount2Days` |
| `CashDiscount1Percent` | `I_Schedgagrmthdr.CashDiscount1Percent` |
| `CashDiscount2Percent` | `I_Schedgagrmthdr.CashDiscount2Percent` |
| `NetPaymentDays` | `I_Schedgagrmthdr.NetPaymentDays` |
| `TargetAmount` | `I_Schedgagrmthdr.TargetAmount` |
| `ExchangeRate` | `I_Schedgagrmthdr.ExchangeRate` |
| `ExchangeRateIsFixed` | `I_Schedgagrmthdr.ExchangeRateIsFixed` |
| `IncotermsLocation1` | `I_Schedgagrmthdr.IncotermsLocation1` |
| `IncotermsLocation2` | `I_Schedgagrmthdr.IncotermsLocation2` |
| `IncotermsVersion` | `I_Schedgagrmthdr.IncotermsVersion` |
| `PurchasingDocumentOrderDate` | `I_Schedgagrmthdr.PurchasingDocumentOrderDate` |
| `ScheduleAgreementHasReleaseDoc` | `I_Schedgagrmthdr.ScheduleAgreementHasReleaseDoc` |
| `Supplier` | `I_Schedgagrmthdr.Supplier` |
| `SupplierAddressID` | `I_Schedgagrmthdr.SupplierAddressID` |
| `ValidityStartDate` | `I_Schedgagrmthdr.ValidityStartDate` |
| `ValidityEndDate` | `I_Schedgagrmthdr.ValidityEndDate` |
| `PurchasingDocumentOrigin` | `I_Schedgagrmthdr.PurchasingDocumentOrigin` |
| `PurchasingDocumentDeletionCode` | `I_Schedgagrmthdr.PurchasingDocumentDeletionCode` |
| `QuotationSubmissionDate` | `I_Schedgagrmthdr.QuotationSubmissionDate` |
| `SupplierQuotationExternalID` | `I_Schedgagrmthdr.SupplierQuotationExternalID` |
| `SupplierRespSalesPersonName` | `I_Schedgagrmthdr.SupplierRespSalesPersonName` |
| `SupplierPhoneNumber` | `I_Schedgagrmthdr.SupplierPhoneNumber` |
| `InvoicingParty` | `I_Schedgagrmthdr.InvoicingParty` |
| `SupplyingSupplier` | `I_Schedgagrmthdr.SupplyingSupplier` |
| `CompanyVATRegistration` | `I_Schedgagrmthdr.CompanyVATRegistration` |
| `VATRegistrationCountry` | `I_Schedgagrmthdr.VATRegistrationCountry` |
| `LastChangeDateTime` | `I_Schedgagrmthdr.LastChangeDateTime` |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_SchAgreementExtension` | `E_PurchasingDocument` | [1..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'ISCHAGMTHDAPI01'
@AccessControl.authorizationCheck: #CHECK
@EndUserText.label: 'Purchase Scheduling Agreement'
@AbapCatalog.compiler.compareFilter: true
@VDM.viewType: #BASIC
@Metadata.ignorePropagatedAnnotations: true

@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.usageType.dataClass: #TRANSACTIONAL
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@AccessControl.personalData.blocking: #BLOCKED_DATA_EXCLUDED
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]
define view I_SchedgagrmthdrApi01
  as select from R_PurgSchedulingAgreementHdr as I_Schedgagrmthdr
  association [1..1] to E_PurchasingDocument  as _SchAgreementExtension on $projection.SchedulingAgreement = _SchAgreementExtension.PurchasingDocument

  {

      key I_Schedgagrmthdr.SchedulingAgreement, 
      I_Schedgagrmthdr.CompanyCode, 
      I_Schedgagrmthdr.PurchasingDocumentCategory, 
      I_Schedgagrmthdr.PurchasingDocumentType, 
      I_Schedgagrmthdr.PurchasingDocumentTypeName,
      I_Schedgagrmthdr.CreatedByUser, 
      I_Schedgagrmthdr.CreationDate, 
      I_Schedgagrmthdr.Language, 
      I_Schedgagrmthdr.PurchasingOrganization, 
      I_Schedgagrmthdr.PurchasingGroup, 
      I_Schedgagrmthdr.DocumentCurrency, 
      I_Schedgagrmthdr.IncotermsClassification, 
      I_Schedgagrmthdr.IncotermsTransferLocation, 
      I_Schedgagrmthdr.PaymentTerms, 
      I_Schedgagrmthdr.CashDiscount1Days, 
      I_Schedgagrmthdr.CashDiscount2Days, 
      I_Schedgagrmthdr.CashDiscount1Percent, 
      I_Schedgagrmthdr.CashDiscount2Percent, 
      I_Schedgagrmthdr.NetPaymentDays, 
      @Semantics.amount.currencyCode: 'DocumentCurrency'
      I_Schedgagrmthdr.TargetAmount, 
      I_Schedgagrmthdr.ExchangeRate, 
      I_Schedgagrmthdr.ExchangeRateIsFixed, 
      I_Schedgagrmthdr.IncotermsLocation1, 
      I_Schedgagrmthdr.IncotermsLocation2, 
      I_Schedgagrmthdr.IncotermsVersion, 
      I_Schedgagrmthdr.PurchasingDocumentOrderDate, 
      I_Schedgagrmthdr.ScheduleAgreementHasReleaseDoc, 
      I_Schedgagrmthdr.Supplier, 
      I_Schedgagrmthdr.SupplierAddressID, 
      I_Schedgagrmthdr.ValidityStartDate, 
      I_Schedgagrmthdr.ValidityEndDate, 
      I_Schedgagrmthdr.PurchasingDocumentOrigin, 
      I_Schedgagrmthdr.PurchasingDocumentDeletionCode, 
      I_Schedgagrmthdr.QuotationSubmissionDate, 
      I_Schedgagrmthdr.SupplierQuotationExternalID, 
      I_Schedgagrmthdr.SupplierRespSalesPersonName, 
      I_Schedgagrmthdr.SupplierPhoneNumber, 
      I_Schedgagrmthdr.InvoicingParty, 
      I_Schedgagrmthdr.SupplyingSupplier, 
      I_Schedgagrmthdr.CompanyVATRegistration, 
      I_Schedgagrmthdr.VATRegistrationCountry, 
      I_Schedgagrmthdr.LastChangeDateTime

}
```
