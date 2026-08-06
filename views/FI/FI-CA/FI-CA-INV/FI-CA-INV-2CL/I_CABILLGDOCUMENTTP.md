---
name: I_CABILLGDOCUMENTTP
description: Cabillgdocumenttp
app_component: FI-CA-INV-2CL
software_component: SAPSCORE
release_state: released
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
# I_CABILLGDOCUMENTTP

**Cabillgdocumenttp**

| Property | Value |
|---|---|
| App Component | `FI-CA-INV-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `CABillgDocument` | `CABillgDocument` |
| `BusinessPartner` | `BusinessPartner` |
| `ContractAccount` | `ContractAccount` |
| `CABillgType` | `CABillgType` |
| `CABillgDocPeriodStartDate` | `CABillgDocPeriodStartDate` |
| `CABillgDocPeriodEndDate` | `CABillgDocPeriodEndDate` |
| `CABillgDocumentReversalReason` | `CABillgDocumentReversalReason` |
| `CABillgIsDocumentSimulated` | `CABillgIsDocumentSimulated` |
| `CABillgDocumentExternal` | `CABillgDocumentExternal` |
| `LogicalSystem` | `LogicalSystem` |
| `CAApplicationArea` | `CAApplicationArea` |
| `CABillgDocOriginProcess` | `CABillgDocOriginProcess` |
| `CAInvcgSourceDocumentType` | `CAInvcgSourceDocumentType` |
| `CAInvcgTechnicalDocumentType` | `CAInvcgTechnicalDocumentType` |
| `CAInvcgDocumentType` | `CAInvcgDocumentType` |
| `CAInvcgTargetProcess` | `CAInvcgTargetProcess` |
| `CAInvcgMasterDataType` | `CAInvcgMasterDataType` |
| `CAInvcgAltvBusinessPartner` | `CAInvcgAltvBusinessPartner` |
| `CAInvcgAltvContractAccount` | `CAInvcgAltvContractAccount` |
| `CABillgBaseDate` | `CABillgBaseDate` |
| `CABillgCurrency` | `CABillgCurrency` |
| `CAInvcgCurrency` | `CAInvcgCurrency` |
| `CATaxDetnType` | `CATaxDetnType` |
| `CATaxDateType` | `CATaxDateType` |
| `CAInvcgCategory` | `CAInvcgCategory` |
| `CAInvcgControlOfInvoicingUnit` | `CAInvcgControlOfInvoicingUnit` |
| `CAInvcgFirstDate` | `CAInvcgFirstDate` |
| `CABillgReversalDocument` | `CABillgReversalDocument` |
| `CABillgReversedDocument` | `CABillgReversedDocument` |
| `CABillgAdjustmentDocument` | `CABillgAdjustmentDocument` |
| `CABillgAdjustedDocument` | `CABillgAdjustedDocument` |
| `CAInvcgCorrectionCategory` | `CAInvcgCorrectionCategory` |
| `CaInvcgIsOrderDeleted` | `CaInvcgIsOrderDeleted` |
| `CABillgHasAdditionalInvoice` | `CABillgHasAdditionalInvoice` |
| `CAInvcgIsAccrualPostingRlvt` | `CAInvcgIsAccrualPostingRlvt` |
| `CABillgLockedForInvoicing` | `CABillgLockedForInvoicing` |
| `CABillgGrpgOfAdditionalItems` | `CABillgGrpgOfAdditionalItems` |
| `CABillgDocHasRefObjects` | `CABillgDocHasRefObjects` |
| `CABillgDocumentNumberOfItems` | `CABillgDocumentNumberOfItems` |
| `CABllbleItmNumber` | `CABllbleItmNumber` |
| `CreatedByUser` | `CreatedByUser` |
| `CABillgDocCreationDate` | `CABillgDocCreationDate` |
| `CABillgDocCreationTime` | `CABillgDocCreationTime` |
| `CABillgDocInternalNumber` | `CABillgDocInternalNumber` |
| `CABillgProcess` | `CABillgProcess` |
| `CABillgDocHasPrepaidItems` | `CABillgDocHasPrepaidItems` |
| `CABillgDocHasRefillItems` | `CABillgDocHasRefillItems` |
| `CABillgDocHasRevnRecgnItems` | `CABillgDocHasRevnRecgnItems` |
| `CAPartnerSettlementRule` | `CAPartnerSettlementRule` |
| `CABillgDocumentInvcgStatus` | `CABillgDocumentInvcgStatus` |
| `CAInvoicingDocument` | `CAInvoicingDocument` |
| `CAInvcgCreationDate` | `CAInvcgCreationDate` |
| `CASubAreaForParallelization` | `CASubAreaForParallelization` |
| `CAAltvMDOriginalIsIncluded` | `CAAltvMDOriginalIsIncluded` |
| `_ContractAccountPartner` | *Association* |
| `_CABillgDocItem` | *Association* |

## Source Code

```abap
@AbapCatalog.extensibility: {
  extensible: true,
  elementSuffix: 'BLH',
  dataSources: [ '_CABillgDocumentTP' ],
  quota: {
    maximumFields: 340,
    maximumBytes: 6800
  }
}
@AccessControl.authorizationCheck: #MANDATORY
@AccessControl.personalData.blocking: #REQUIRED
@EndUserText.label: 'Billing Document - TP'
@Metadata.ignorePropagatedAnnotations: true

@ObjectModel: {
  modelingPattern: #TRANSACTIONAL_INTERFACE,
  representativeKey: 'CABillgDocument',
  sapObjectNodeType.name: 'ContrAcctgBillingDocument',
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

define root view entity I_CABillgDocumentTP
  provider contract transactional_interface
  as projection on R_CABillgDocumentTP as _CABillgDocumentTP
{
  key CABillgDocument,
      BusinessPartner,
      ContractAccount,
      CABillgType,
      CABillgDocPeriodStartDate,
      CABillgDocPeriodEndDate,
      CABillgDocumentReversalReason,
      CABillgIsDocumentSimulated,
      CABillgDocumentExternal,
      LogicalSystem,
      CAApplicationArea,
      CABillgDocOriginProcess,
      CAInvcgSourceDocumentType,
      CAInvcgTechnicalDocumentType,
      CAInvcgDocumentType,
      CAInvcgTargetProcess,
      CAInvcgMasterDataType,
      CAInvcgAltvBusinessPartner,
      CAInvcgAltvContractAccount,
      CABillgBaseDate,
      CABillgCurrency,
      CAInvcgCurrency,
      CATaxDetnType,
      CATaxDateType,
      CAInvcgCategory,
      CAInvcgControlOfInvoicingUnit,
      CAInvcgFirstDate,
      CABillgReversalDocument,
      CABillgReversedDocument,
      CABillgAdjustmentDocument,
      CABillgAdjustedDocument,
      CAInvcgCorrectionCategory,
      CaInvcgIsOrderDeleted,
      CABillgHasAdditionalInvoice,
      CAInvcgIsAccrualPostingRlvt,
      CABillgLockedForInvoicing,
      CABillgGrpgOfAdditionalItems,
      CABillgDocHasRefObjects,
      CABillgDocumentNumberOfItems,
      CABllbleItmNumber,
      CreatedByUser,
      CABillgDocCreationDate,
      CABillgDocCreationTime,
      CABillgDocInternalNumber,
      CABillgProcess,
      CABillgDocHasPrepaidItems,
      CABillgDocHasRefillItems,
      CABillgDocHasRevnRecgnItems,
      CAPartnerSettlementRule,
      CABillgDocumentInvcgStatus,
      CAInvoicingDocument,
      CAInvcgCreationDate,
      CASubAreaForParallelization,
      CAAltvMDOriginalIsIncluded,

      /* Associations */
      @Consumption.hidden: true
      _ContractAccountPartner,

      _CABillgDocItem : redirected to composition child I_CABillgDocItemTP
}
```
