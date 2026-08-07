---
name: I_CN_TAXINVOICEHEADER
description: CN Taxinvoiceheader
app_component: FI-LOC-TIM-CN
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-LOC
  - FI-LOC-TIM
  - interface-view
  - tax
  - header-level
  - component:FI-LOC-TIM-CN
  - lob:Finance
---
# I_CN_TAXINVOICEHEADER

**CN Taxinvoiceheader**

| Property | Value |
|---|---|
| App Component | `FI-LOC-TIM-CN` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `CN_TaxInvcUUID` | ✓ | |  |  |
| `CN_TaxInvcCode` |  | |  |  |
| `CN_TaxInvcNmbr` |  | |  |  |
| `CN_TaxInvcType` |  | |  | `cast( hdr.CN_TaxInvcType as ficntaxinvc_type preserving type)` |
| `CN_TaxInvcDate` |  | |  |  |
| `CN_TaxSellerRegnNmbr` |  | |  |  |
| `CN_TaxSellerName` |  | |  |  |
| `CN_TaxInvcCrcy` |  | |  |  |
| `CN_TaxInvcNetAmtInInvcCrcy` |  | |  |  |
| `CN_TaxInvcTaxAmtInInvcCrcy` |  | |  |  |
| `CreatedByUser` |  | |  |  |
| `CompanyCode` |  | |  | `cast( hdr.CompanyCode as fis_bukrs preserving type)` |
| `Supplier` |  | |  | `cast( hdr.Supplier as elifn preserving type)` |
| `CN_TaxEntityID` |  | |  |  |
| `CN_TaxBuyerRegnNmbr` |  | |  |  |
| `CN_TaxInvcDeductAmtInInvcCrcy` |  | |  |  |
| `CN_TaxInvcDiscNetAmtInInvcCrcy` |  | |  |  |
| `CN_TaxInvcDiscTaxAmtInInvcCrcy` |  | |  |  |
| `TaxRate` |  | |  |  |
| `CN_TaxInvcGldnTxSystSts` |  | |  |  |
| `CN_TaxInvcInptProcgSts` |  | |  |  |
| `CN_TaxInvcDeductionType` |  | |  | `cast( hdr.CN_TaxInvcDeductionType as ficntaxinvc_deduct_type preserving type)` |
| `CN_TaxInvcComment` |  | |  |  |
| `CN_TaxInvoiceUsage` |  | |  |  |
| `CN_TaxInvoiceDataSource` |  | |  |  |
| `CN_TaxInvoiceExpenseReportNmbr` |  | |  |  |
| `IsPostedOnAccount` |  | |  |  |
| `TaxCategory` |  | |  | `cast( hdr.TaxCategory as ficntax_input_vat_cat preserving type)` |
| `CN_TaxDeclnYear` |  | |  |  |
| `CN_TaxDeclnMonth` |  | |  |  |
| `TaxInvoiceBuyerAddressPhone` |  | |  |  |
| `TaxInvoiceBuyerBankAccount` |  | |  |  |
| `TaxInvoiceSellerAddressPhone` |  | |  |  |
| `TaxInvoiceSellerBankAccount` |  | |  |  |
| `CN_TaxInvoiceVehicleType` |  | |  |  |
| `CN_TaxInvoiceVehFactoryModel` |  | |  |  |
| `CN_TaxInvoiceVehicleProdnPlace` |  | |  |  |
| `CN_TaxInvoiceVehicleCertNumber` |  | |  |  |
| `CN_TaxInvoiceVehImportCertNmbr` |  | |  |  |
| `CN_TaxInvoiceVehicleInspNumber` |  | |  |  |
| `CN_TaxInvoiceVehicleEngineNmbr` |  | |  |  |
| `CN_TaxInvoiceVehicleNumber` |  | |  |  |
| `CN_TaxInvcVehTotAmtInInvcCrcy` |  | |  |  |
| `CN_TaxInvoiceVehTxnRecordNmbr` |  | |  |  |
| `CN_TaxInvoiceVehicleTonnage` |  | |  |  |
| `CN_TaxInvoiceVehPassengerLimit` |  | |  |  |
| `PurchasingOrganization` |  | |  | `cast( hdr.PurchasingOrganization as ekorg preserving type)` |
| `PurchasingGroup` |  | |  | `cast( hdr.PurchasingGroup as ekgrp preserving type)` |
| `_InvoiceType` | | ✓ | | |
| `_Supplier` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_InvoiceType` | `I_CN_TaxInvcType` | [1] |
| `_Supplier` | `I_Supplier` | [0..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #MANDATORY
@AccessControl.personalData.blocking: #REQUIRED
@EndUserText.label: 'China Tax Invoice Header'
@VDM.viewType:  #COMPOSITE
@VDM.lifecycle.contract.type:#PUBLIC_LOCAL_API
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, 
                                      #CDS_MODELING_ASSOCIATION_TARGET ]
@ObjectModel.usageType:{
    serviceQuality: #A,
    sizeCategory: #XL,
    dataClass: #TRANSACTIONAL
}
define view entity I_CN_TaxInvoiceHeader as select from I_CN_TaxInputInvc as hdr

association [1]    to I_CN_TaxInvcType          as _InvoiceType            on $projection.CN_TaxInvcType = _InvoiceType.CN_TaxInvcType

association [0..1] to I_Supplier                as _Supplier               on $projection.Supplier = _Supplier.Supplier
{
  key hdr.CN_TaxInvcUUID,

      hdr.CN_TaxInvcCode,
      hdr.CN_TaxInvcNmbr,
      
//      @ObjectModel.sapObjectNodeTypeReference:'CN_ValueAddedTaxInvoiceType'
      cast( hdr.CN_TaxInvcType as ficntaxinvc_type preserving type) as CN_TaxInvcType,
//      hdr.CN_TaxInvcType,
      @Semantics.businessDate.at: true
      hdr.CN_TaxInvcDate,
      hdr.CN_TaxSellerRegnNmbr,
      hdr.CN_TaxSellerName,
      hdr.CN_TaxInvcCrcy,
      @Semantics.amount.currencyCode: 'CN_TaxInvcCrcy'
      hdr.CN_TaxInvcNetAmtInInvcCrcy,
      @Semantics.amount.currencyCode: 'CN_TaxInvcCrcy'
      hdr.CN_TaxInvcTaxAmtInInvcCrcy,  
      hdr.CreatedByUser,
//      hdr.CompanyCode,
      cast( hdr.CompanyCode as fis_bukrs preserving type) as CompanyCode,
      cast( hdr.Supplier as elifn preserving type) as Supplier,
      hdr.CN_TaxEntityID,
      
      
      hdr.CN_TaxBuyerRegnNmbr,
      @Semantics.amount.currencyCode: 'CN_TaxInvcCrcy'
      hdr.CN_TaxInvcDeductAmtInInvcCrcy,
//      cast( hdr.CN_TaxEntityID as FARP_BUPLA )as BusinessPlace,
      @Semantics.amount.currencyCode: 'CN_TaxInvcCrcy'
      hdr.CN_TaxInvcDiscNetAmtInInvcCrcy,
      @Semantics.amount.currencyCode: 'CN_TaxInvcCrcy'
      hdr.CN_TaxInvcDiscTaxAmtInInvcCrcy,
      hdr.TaxRate,
      @ObjectModel.sapObjectNodeTypeReference:'CN_ValueAddedTaxInvoiceSystSts'
      hdr.CN_TaxInvcGldnTxSystSts,
      //@ObjectModel.readOnly: true
      @ObjectModel.sapObjectNodeTypeReference:'CN_ValueAddedTaxInvcProcgSts'
      hdr.CN_TaxInvcInptProcgSts,
      @ObjectModel.sapObjectNodeTypeReference:'CN_ValueAddedTaxDeductionType'
      cast( hdr.CN_TaxInvcDeductionType as ficntaxinvc_deduct_type preserving type) as CN_TaxInvcDeductionType,
      hdr.CN_TaxInvcComment,
      hdr.CN_TaxInvoiceUsage,
      hdr.CN_TaxInvoiceDataSource,
      hdr.CN_TaxInvoiceExpenseReportNmbr,
      hdr.IsPostedOnAccount,
      @ObjectModel.sapObjectNodeTypeReference:'CN_ValueAddedTaxInvoiceCat'
      cast( hdr.TaxCategory as ficntax_input_vat_cat preserving type) as TaxCategory,
      //@ObjectModel.readOnly: true
      hdr.CN_TaxDeclnYear,
      //@ObjectModel.readOnly: true
      hdr.CN_TaxDeclnMonth,
      hdr.TaxInvoiceBuyerAddressPhone,
      hdr.TaxInvoiceBuyerBankAccount,
      hdr.TaxInvoiceSellerAddressPhone,
      hdr.TaxInvoiceSellerBankAccount,
      // Vehicle Invoice
      hdr.CN_TaxInvoiceVehicleType,
      hdr.CN_TaxInvoiceVehFactoryModel,
      hdr.CN_TaxInvoiceVehicleProdnPlace,
      hdr.CN_TaxInvoiceVehicleCertNumber,
      hdr.CN_TaxInvoiceVehImportCertNmbr,
      hdr.CN_TaxInvoiceVehicleInspNumber,
      hdr.CN_TaxInvoiceVehicleEngineNmbr,
      hdr.CN_TaxInvoiceVehicleNumber,
      @Semantics.amount.currencyCode: 'CN_TaxInvcCrcy'
      hdr.CN_TaxInvcVehTotAmtInInvcCrcy,
      hdr.CN_TaxInvoiceVehTxnRecordNmbr,
      hdr.CN_TaxInvoiceVehicleTonnage,
      hdr.CN_TaxInvoiceVehPassengerLimit,
      cast( hdr.PurchasingOrganization as ekorg preserving type) as PurchasingOrganization,
      cast( hdr.PurchasingGroup as ekgrp preserving type) as PurchasingGroup,
      
      _InvoiceType,
      _Supplier

} where
  hdr.IsDeleted <> 'X'
```
