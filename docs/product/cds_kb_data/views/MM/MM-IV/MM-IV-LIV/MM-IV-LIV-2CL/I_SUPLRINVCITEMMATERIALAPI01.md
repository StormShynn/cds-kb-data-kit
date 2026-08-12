---
name: I_SUPLRINVCITEMMATERIALAPI01
description: "Suplrinvcitemmaterialapi 01"
app_component: MM-IV-LIV-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - MM
  - MM-IV
  - MM-IV-LIV
  - interface-view
  - material
  - item-level
  - component:MM-IV-LIV-2CL
  - lob:Sourcing & Procurement
  - bo:Material
---
# I_SUPLRINVCITEMMATERIALAPI01

**Suplrinvcitemmaterialapi 01**

| Property | Value |
|---|---|
| App Component | `MM-IV-LIV-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SupplierInvoice` | ✓ | |  |  |  |  |
| `FiscalYear` | ✓ | |  |  |  |  |
| `SupplierInvoiceItem` | ✓ | |  |  |  |  |
| `Material` |  | |  |  |  |  |
| `ValuationArea` |  | |  |  |  |  |
| `CompanyCode` |  | |  |  |  |  |
| `Plant` |  | |  | `SuplrInvcItemMaterialPlant` |  |  |
| `InventoryValuationType` |  | |  |  |  |  |
| `DebitCreditCode` |  | |  |  |  |  |
| `IsNotCashDiscountLiable` |  | |  |  |  |  |
| `TaxCode` |  | |  |  |  |  |
| `TaxJurisdiction` |  | |  |  |  |  |
| `TaxCountry` |  | |  |  |  |  |
| `TaxDeterminationDate` |  | |  |  |  |  |
| `DocumentCurrency` |  | |  |  |  |  |
| `SupplierInvoiceItemAmount` |  | |  |  |  |  |
| `QuantityUnit` |  | |  |  |  |  |
| `Quantity` |  | |  |  |  |  |
| `_SupplierInvoiceAPI01` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_SupplierInvoiceAPI01` | `I_SupplierInvoiceAPI01` | [1..1] |

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog.sqlViewName: 'ISIITMATAPI01'
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #MANDATORY
@VDM.viewType: #BASIC
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@EndUserText.label: 'Material Item of Supplier Invoice'
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.usageType.dataClass: #TRANSACTIONAL
@ObjectModel.supportedCapabilities: [ #CDS_MODELING_DATA_SOURCE, #SQL_DATA_SOURCE ]
@ObjectModel.modelingPattern: #NONE
@AccessControl.personalData.blocking: #BLOCKED_DATA_EXCLUDED
@Metadata.ignorePropagatedAnnotations:true
 
define view I_SuplrInvcItemMaterialAPI01
  as select from I_SupplierInvoiceItemMaterial as item
      inner join I_SupplierInvoiceAPI01 on  item.SupplierInvoice = I_SupplierInvoiceAPI01.SupplierInvoice
                                        and item.FiscalYear      = I_SupplierInvoiceAPI01.FiscalYear
     association [1..1] to I_SupplierInvoiceAPI01 as _SupplierInvoiceAPI01 on  $projection.SupplierInvoice = _SupplierInvoiceAPI01.SupplierInvoice
                                                                           and $projection.FiscalYear      = _SupplierInvoiceAPI01.FiscalYear
{
  key item.SupplierInvoice,
  key item.FiscalYear,
  key item.SupplierInvoiceItem,
      item.Material,
      item.ValuationArea,
      item.CompanyCode, 
      item.SuplrInvcItemMaterialPlant as Plant,        
      item.InventoryValuationType,    
      item.DebitCreditCode,    
      item.IsNotCashDiscountLiable,        
      item.TaxCode,
      item.TaxJurisdiction,
      item.TaxCountry,   
      item.TaxDeterminationDate,
      @ObjectModel.foreignKey.association: '_Currency'
      @Semantics.currencyCode: true
      item.DocumentCurrency,
      @Semantics.amount.currencyCode: 'DocumentCurrency'
      item.SupplierInvoiceItemAmount,     
      @ObjectModel.foreignKey.association: '_UnitOfMeasure'
      @Semantics.unitOfMeasure: true
      item.QuantityUnit,
      @Semantics.quantity.unitOfMeasure: 'QuantityUnit'
      item.Quantity,           
 
      /* Associations */
      _SupplierInvoiceAPI01,
      item._UnitOfMeasure,
      item._Currency 
}
```
