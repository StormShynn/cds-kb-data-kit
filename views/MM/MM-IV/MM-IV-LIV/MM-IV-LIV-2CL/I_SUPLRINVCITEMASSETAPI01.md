---
name: I_SUPLRINVCITEMASSETAPI01
description: Suplrinvcitemassetapi 01
app_component: MM-IV-LIV-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - MM
  - MM-IV
  - MM-IV-LIV
  - interface-view
  - item-level
  - component:MM-IV-LIV-2CL
  - lob:Sourcing & Procurement
  - bo:Asset
---
# I_SUPLRINVCITEMASSETAPI01

**Suplrinvcitemassetapi 01**

| Property | Value |
|---|---|
| App Component | `MM-IV-LIV-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `SupplierInvoice` | `I_SupplierInvoiceItemAsset.SupplierInvoice` |
| key `FiscalYear` | `I_SupplierInvoiceItemAsset.FiscalYear` |
| key `SupplierInvoiceItem` | `cast ( cast ( coalesce ( cast ( I_SupplierInvoiceItemAsset.OrdinalNumber as abap.int2 ) - _GlItemCount.NumberOfItems , cast ( I_SupplierInvoiceItemAsset.OrdinalNumber as abap.int2 ) ) as char0016 ) as cobl_nr)` |
| `CompanyCode` | `I_SupplierInvoiceItemAsset.CompanyCode` |
| `MasterFixedAsset` | `I_SupplierInvoiceItemAsset.MasterFixedAsset` |
| `FixedAsset` | `I_SupplierInvoiceItemAsset.FixedAsset` |
| `DebitCreditCode` | `I_SupplierInvoiceItemAsset.DebitCreditCode` |
| `DocumentCurrency` | `I_SupplierInvoiceItemAsset.DocumentCurrency` |
| `SupplierInvoiceItemAmount` | `I_SupplierInvoiceItemAsset.SupplierInvoiceItemAmount` |
| `QuantityUnit` | `I_SupplierInvoiceItemAsset.QuantityUnit` |
| `Quantity` | `I_SupplierInvoiceItemAsset.Quantity` |
| `TaxCode` | `I_SupplierInvoiceItemAsset.TaxCode` |
| `TaxJurisdiction` | `I_SupplierInvoiceItemAsset.TaxJurisdiction` |
| `TaxCountry` | `I_SupplierInvoiceItemAsset.TaxCountry` |
| `TaxDeterminationDate` | `I_SupplierInvoiceItemAsset.TaxDeterminationDate` |
| `AssignmentReference` | `I_SupplierInvoiceItemAsset.AssignmentReference` |
| `SupplierInvoiceItemText` | `I_SupplierInvoiceItemAsset.SupplierInvoiceItemText` |
| `IsNotCashDiscountLiable` | `I_SupplierInvoiceItemAsset.IsNotCashDiscountLiable` |
| `ProfitCenter` | `I_SupplierInvoiceItemAsset.ProfitCenter` |
| `AssetValueDate` | `I_SupplierInvoiceItemAsset.AssetValueDate` |
| `GLAccount` | `I_SupplierInvoiceItemAsset.GLAccount` |
| `_SupplierInvoiceAPI01` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_SupplierInvoiceAPI01` | `I_SupplierInvoiceAPI01` | [1..1] |
| `_GlItemCount` | `I_SuplrInvcItemAssetCount` | [0..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #MANDATORY
@VDM.viewType: #COMPOSITE
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@EndUserText.label: 'Asset Item of Supplier Invoice'
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.usageType.dataClass: #TRANSACTIONAL
@ObjectModel.supportedCapabilities: [ #CDS_MODELING_DATA_SOURCE, #SQL_DATA_SOURCE ]
@ObjectModel.modelingPattern: #NONE
@AccessControl.personalData.blocking: #BLOCKED_DATA_EXCLUDED
@Metadata.ignorePropagatedAnnotations:true

define view entity I_SuplrInvcItemAssetAPI01
  as select from I_SupplierInvoiceItemAsset 
    inner join   I_SupplierInvoiceAPI01 on  I_SupplierInvoiceItemAsset.SupplierInvoice = I_SupplierInvoiceAPI01.SupplierInvoice
                                        and I_SupplierInvoiceItemAsset.FiscalYear      = I_SupplierInvoiceAPI01.FiscalYear
  association [1..1] to I_SupplierInvoiceAPI01 as _SupplierInvoiceAPI01 on  $projection.SupplierInvoice = _SupplierInvoiceAPI01.SupplierInvoice
                                                                        and $projection.FiscalYear      = _SupplierInvoiceAPI01.FiscalYear  
  association [0..1] to I_SuplrInvcItemAssetCount  as _GlItemCount      on  $projection.SupplierInvoice = _GlItemCount.SupplierInvoice 
                                                                        and $projection.FiscalYear      = _GlItemCount.FiscalYear    
                                                             
{
  key I_SupplierInvoiceItemAsset.SupplierInvoice,
  key I_SupplierInvoiceItemAsset.FiscalYear,
  key cast ( cast ( coalesce ( cast ( I_SupplierInvoiceItemAsset.OrdinalNumber as abap.int2 ) - _GlItemCount.NumberOfItems , cast ( I_SupplierInvoiceItemAsset.OrdinalNumber as abap.int2 ) ) as char0016 ) as cobl_nr) as SupplierInvoiceItem,
      I_SupplierInvoiceItemAsset.CompanyCode,
      I_SupplierInvoiceItemAsset.MasterFixedAsset,
      I_SupplierInvoiceItemAsset.FixedAsset,
      I_SupplierInvoiceItemAsset.DebitCreditCode,
      @ObjectModel.foreignKey.association: '_Currency'
      I_SupplierInvoiceItemAsset.DocumentCurrency,
      @Semantics.amount.currencyCode: 'DocumentCurrency'
      I_SupplierInvoiceItemAsset.SupplierInvoiceItemAmount,
      @ObjectModel.foreignKey.association: '_UnitOfMeasure'
      I_SupplierInvoiceItemAsset.QuantityUnit,
      @Semantics.quantity.unitOfMeasure: 'QuantityUnit'
      I_SupplierInvoiceItemAsset.Quantity,
      I_SupplierInvoiceItemAsset.TaxCode,
      I_SupplierInvoiceItemAsset.TaxJurisdiction,
      I_SupplierInvoiceItemAsset.TaxCountry,
      I_SupplierInvoiceItemAsset.TaxDeterminationDate,
      I_SupplierInvoiceItemAsset.AssignmentReference,
      I_SupplierInvoiceItemAsset.SupplierInvoiceItemText,      
      I_SupplierInvoiceItemAsset.IsNotCashDiscountLiable, 
      I_SupplierInvoiceItemAsset.ProfitCenter,
      I_SupplierInvoiceItemAsset.AssetValueDate,
      I_SupplierInvoiceItemAsset.GLAccount,

      /* Associations */
      _SupplierInvoiceAPI01,
      I_SupplierInvoiceItemAsset._Currency,
      I_SupplierInvoiceItemAsset._UnitOfMeasure
}
```
