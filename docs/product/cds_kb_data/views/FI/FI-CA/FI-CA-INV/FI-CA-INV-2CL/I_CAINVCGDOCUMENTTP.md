---
name: I_CAINVCGDOCUMENTTP
description: "Cainvcgdocumenttp"
app_component: FI-CA-INV-2CL
software_component: SAPSCORE
release_state: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-CA
  - FI-CA-INV
  - interface-view
  - transactional-processing
  - document
  - component:FI-CA-INV-2CL
  - lob:Finance
---
# I_CAINVCGDOCUMENTTP

**Cainvcgdocumenttp**

| Property | Value |
|---|---|
| App Component | `FI-CA-INV-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CAInvoicingDocument` | ✓ | |  |  |  |  |
| `CAApplicationArea` |  | |  |  |  |  |
| `CAInvcgProcess` |  | |  |  |  |  |
| `CAInvcgType` |  | |  |  |  |  |
| `CAInvcgCategory` |  | |  |  |  |  |
| `CAInvcgTechnicalDocumentType` |  | |  |  |  |  |
| `CAInvcgTargetProcess` |  | |  |  |  |  |
| `BusinessPartner` |  | |  |  |  |  |
| `ContractAccount` |  | |  |  |  |  |
| `CAInvcgMasterDataType` |  | |  |  |  |  |
| `AltvContractAcctForCollvBills` |  | |  |  |  |  |
| `CASubstituteDocumentNumber` |  | |  |  |  |  |
| `CreatedByUser` |  | |  |  |  |  |
| `CAInvcgCreationDate` |  | |  |  |  |  |
| `CAInvcgCreationTime` |  | |  |  |  |  |
| `CAInvcgDocCreationMode` |  | |  |  |  |  |
| `CAInvcgNmbrOfInvoicingDocItems` |  | |  |  |  |  |
| `CABllbleItmNumber` |  | |  |  |  |  |
| `CAInvcgDocInternalNumber` |  | |  |  |  |  |
| `CAReconciliationKey` |  | |  |  |  |  |
| `CAPostingDate` |  | |  |  |  |  |
| `DocumentDate` |  | |  |  |  |  |
| `CANetDueDate` |  | |  |  |  |  |
| `CACashDiscountDueDate` |  | |  |  |  |  |
| `CACashDiscountRate` |  | |  |  |  |  |
| `TransactionCurrency` |  | |  |  |  |  |
| `CAAmountInTransactionCurrency` |  | |  |  |  |  |
| `CAInvcgIsDocumentPosted` |  | |  |  |  |  |
| `CAInvcgIsDocumentSimulated` |  | |  |  |  |  |
| `CAInvcgIsDocumentPreliminary` |  | |  |  |  |  |
| `CAInvcgPreliminaryCategory` |  | |  |  |  |  |
| `CAPrelimInvcgDocValue` |  | |  |  |  |  |
| `CAPreliminaryInvcgDocStatus` |  | |  |  |  |  |
| `CAInvcgDocumentReversalReason` |  | |  |  |  |  |
| `CAInvcgReversalDocument` |  | |  |  |  |  |
| `CAInvcgReversedDocument` |  | |  |  |  |  |
| `CAInvcgCorrectionCategory` |  | |  |  |  |  |
| `CAInvcgDocumentPrintDate` |  | |  |  |  |  |
| `CAInvcgDocIsLockedForPrinting` |  | |  |  |  |  |
| `CAPaymentMethod` |  | |  |  |  |  |
| `CAPaymentFormNumber` |  | |  |  |  |  |
| `CAInvcgDocFormID` |  | |  |  |  |  |
| `ApplicationForm` |  | |  |  |  |  |
| `FormIDForAttachedPaymentMedium` |  | |  |  |  |  |
| `CAInvcgDocumentType` |  | |  |  |  |  |
| `CAKeyIdentification` |  | |  |  |  |  |
| `CAOfficialDocumentNumber` |  | |  |  |  |  |
| `CAPartnerSettlementRule` |  | |  |  |  |  |
| `CompanyCode` |  | |  |  |  |  |
| `BusinessPlace` |  | |  |  |  |  |
| `CAContract` |  | |  |  |  |  |
| `CASubApplication` |  | |  |  |  |  |
| `CAInvcgBaseDate` |  | |  |  |  |  |
| `CAInvcgDocPeriodCategory` |  | |  |  |  |  |
| `CAInvcgDocPeriodDate` |  | |  |  |  |  |
| `CAInvcgDocPeriodStartDate` |  | |  |  |  |  |
| `CADunningCounter` |  | |  |  |  |  |
| `CAInvcgDocHasChargeOrDiscItems` |  | |  |  |  |  |
| `CAInvcgDocHasControlDoc` |  | |  |  |  |  |
| `CAInvcgBolloTaxPostStatus` |  | |  |  |  |  |
| `CAInvcgDocIsPartOfList` |  | |  |  |  |  |
| `CAInvcgDocHasObjectRelation` |  | |  |  |  |  |
| `CAInvcgDocHasSEPAPreNotif` |  | |  |  |  |  |
| `CAInvcgDocExternal` |  | |  |  |  |  |
| `CAInvcgAdjustmentDocument` |  | |  |  |  |  |
| `CAInvcgAdjustedDocument` |  | |  |  |  |  |
| `CAClassificationKey` |  | |  |  |  |  |
| `_ContractAccountHeader` | | ✓ | | | | |
| `_ContractAccountPartner` | | ✓ | | | | |
| `_CAInvcgDocItem` | | ✓ | | | | |

## Source Code

```abap
@AbapCatalog.extensibility: {
  extensible: true,
  elementSuffix: 'IDH',
  dataSources: [ '_CAInvcgDocumentTP' ],
  quota: {
    maximumFields: 340, 
    maximumBytes: 6800  
  }
}
@AccessControl.authorizationCheck: #MANDATORY
@AccessControl.personalData.blocking: #REQUIRED
@EndUserText.label: 'Invoicing Document - TP'
@Metadata.ignorePropagatedAnnotations: true

@ObjectModel: {
  modelingPattern: #TRANSACTIONAL_INTERFACE,
  representativeKey: 'CAInvoicingDocument',
  sapObjectNodeType.name: 'ContrAcctgInvoicingDocument',
  supportedCapabilities:  [ #TRANSACTIONAL_PROVIDER ],
  usageType: {
    dataClass: #TRANSACTIONAL,
    sizeCategory: #XL,
    serviceQuality: #C
  }
}

@VDM: {
  lifecycle.contract.type: #PUBLIC_LOCAL_API,
  usage.type: [ #TRANSACTIONAL_PROCESSING_SERVICE ],
  viewType: #TRANSACTIONAL
}

define root view entity I_CAInvcgDocumentTP
  provider contract transactional_interface
  as projection on R_CAInvcgDocumentTP as _CAInvcgDocumentTP
{
  key CAInvoicingDocument,
      CAApplicationArea,
      CAInvcgProcess,
      CAInvcgType,
      CAInvcgCategory,
      CAInvcgTechnicalDocumentType,
      CAInvcgTargetProcess,
      BusinessPartner,
      ContractAccount,
      CAInvcgMasterDataType,
      AltvContractAcctForCollvBills,
      CASubstituteDocumentNumber,
      CreatedByUser,
      CAInvcgCreationDate,
      CAInvcgCreationTime,
      CAInvcgDocCreationMode,
      CAInvcgNmbrOfInvoicingDocItems,
      CABllbleItmNumber,
      CAInvcgDocInternalNumber,
      CAReconciliationKey,
      CAPostingDate,
      DocumentDate,
      CANetDueDate,
      CACashDiscountDueDate,
      CACashDiscountRate,
      TransactionCurrency,
      @Semantics.amount.currencyCode: 'TransactionCurrency'
      CAAmountInTransactionCurrency,
      CAInvcgIsDocumentPosted,
      CAInvcgIsDocumentSimulated,
      CAInvcgIsDocumentPreliminary,
      CAInvcgPreliminaryCategory,
      CAPrelimInvcgDocValue,
      CAPreliminaryInvcgDocStatus,
      CAInvcgDocumentReversalReason,
      CAInvcgReversalDocument,
      CAInvcgReversedDocument,
      CAInvcgCorrectionCategory,
      CAInvcgDocumentPrintDate,
      CAInvcgDocIsLockedForPrinting,
      CAPaymentMethod,
      CAPaymentFormNumber,
      CAInvcgDocFormID,
      ApplicationForm,
      FormIDForAttachedPaymentMedium,
      CAInvcgDocumentType,
      CAKeyIdentification,
      CAOfficialDocumentNumber,
      CAPartnerSettlementRule,
      CompanyCode,
      BusinessPlace,
      CAContract,
      CASubApplication,
      CAInvcgBaseDate,
      CAInvcgDocPeriodCategory,
      CAInvcgDocPeriodDate,
      CAInvcgDocPeriodStartDate,
      CADunningCounter,
      CAInvcgDocHasChargeOrDiscItems,
      CAInvcgDocHasControlDoc,
      CAInvcgBolloTaxPostStatus,
      CAInvcgDocIsPartOfList,
      CAInvcgDocHasObjectRelation,
      CAInvcgDocHasSEPAPreNotif,
      CAInvcgDocExternal,
      CAInvcgAdjustmentDocument,
      CAInvcgAdjustedDocument,
      CAClassificationKey,

      /* Associations */
      @Consumption.hidden: true
      _ContractAccountHeader,
      @Consumption.hidden: true
      _ContractAccountPartner,
      
      _CAInvcgDocItem : redirected to composition child I_CAInvcgDocItemTP
}
```
