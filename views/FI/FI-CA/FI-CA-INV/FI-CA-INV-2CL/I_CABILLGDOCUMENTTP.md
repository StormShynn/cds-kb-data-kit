---
name: I_CABILLGDOCUMENTTP
description: "Cabillgdocumenttp"
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

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CABillgDocument` | ✓ | |  |  |  |  |
| `BusinessPartner` |  | |  |  |  |  |
| `ContractAccount` |  | |  |  |  |  |
| `CABillgType` |  | |  |  |  |  |
| `CABillgDocPeriodStartDate` |  | |  |  |  |  |
| `CABillgDocPeriodEndDate` |  | |  |  |  |  |
| `CABillgDocumentReversalReason` |  | |  |  |  |  |
| `CABillgIsDocumentSimulated` |  | |  |  |  |  |
| `CABillgDocumentExternal` |  | |  |  |  |  |
| `LogicalSystem` |  | |  |  |  |  |
| `CAApplicationArea` |  | |  |  |  |  |
| `CABillgDocOriginProcess` |  | |  |  |  |  |
| `CAInvcgSourceDocumentType` |  | |  |  |  |  |
| `CAInvcgTechnicalDocumentType` |  | |  |  |  |  |
| `CAInvcgDocumentType` |  | |  |  |  |  |
| `CAInvcgTargetProcess` |  | |  |  |  |  |
| `CAInvcgMasterDataType` |  | |  |  |  |  |
| `CAInvcgAltvBusinessPartner` |  | |  |  |  |  |
| `CAInvcgAltvContractAccount` |  | |  |  |  |  |
| `CABillgBaseDate` |  | |  |  |  |  |
| `CABillgCurrency` |  | |  |  |  |  |
| `CAInvcgCurrency` |  | |  |  |  |  |
| `CATaxDetnType` |  | |  |  |  |  |
| `CATaxDateType` |  | |  |  |  |  |
| `CAInvcgCategory` |  | |  |  |  |  |
| `CAInvcgControlOfInvoicingUnit` |  | |  |  |  |  |
| `CAInvcgFirstDate` |  | |  |  |  |  |
| `CABillgReversalDocument` |  | |  |  |  |  |
| `CABillgReversedDocument` |  | |  |  |  |  |
| `CABillgAdjustmentDocument` |  | |  |  |  |  |
| `CABillgAdjustedDocument` |  | |  |  |  |  |
| `CAInvcgCorrectionCategory` |  | |  |  |  |  |
| `CaInvcgIsOrderDeleted` |  | |  |  |  |  |
| `CABillgHasAdditionalInvoice` |  | |  |  |  |  |
| `CAInvcgIsAccrualPostingRlvt` |  | |  |  |  |  |
| `CABillgLockedForInvoicing` |  | |  |  |  |  |
| `CABillgGrpgOfAdditionalItems` |  | |  |  |  |  |
| `CABillgDocHasRefObjects` |  | |  |  |  |  |
| `CABillgDocumentNumberOfItems` |  | |  |  |  |  |
| `CABllbleItmNumber` |  | |  |  |  |  |
| `CreatedByUser` |  | |  |  |  |  |
| `CABillgDocCreationDate` |  | |  |  |  |  |
| `CABillgDocCreationTime` |  | |  |  |  |  |
| `CABillgDocInternalNumber` |  | |  |  |  |  |
| `CABillgProcess` |  | |  |  |  |  |
| `CABillgDocHasPrepaidItems` |  | |  |  |  |  |
| `CABillgDocHasRefillItems` |  | |  |  |  |  |
| `CABillgDocHasRevnRecgnItems` |  | |  |  |  |  |
| `CAPartnerSettlementRule` |  | |  |  |  |  |
| `CABillgDocumentInvcgStatus` |  | |  |  |  |  |
| `CAInvoicingDocument` |  | |  |  |  |  |
| `CAInvcgCreationDate` |  | |  |  |  |  |
| `CASubAreaForParallelization` |  | |  |  |  |  |
| `CAAltvMDOriginalIsIncluded` |  | |  |  |  |  |
| `_ContractAccountPartner` | | ✓ | | | | |
| `_CABillgDocItem` | | ✓ | | | | |

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
