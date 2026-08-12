---
name: I_SUPLRINVCITEMCSGNMTAPI01
description: "Suplrinvcitemcsgnmtapi 01"
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
  - item-level
  - component:MM-IV-LIV-2CL
  - lob:Sourcing & Procurement
---
# I_SUPLRINVCITEMCSGNMTAPI01

**Suplrinvcitemcsgnmtapi 01**

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
| `MaterialDocument` |  | |  |  |  |  |
| `MaterialDocumentYear` |  | |  |  |  |  |
| `MaterialDocumentItem` |  | |  |  |  |  |
| `Material` |  | |  |  |  |  |
| `CompanyCode` |  | |  |  |  |  |
| `Plant` |  | |  |  |  |  |
| `DocumentCurrency` |  | |  |  |  |  |
| `SupplierInvoiceItemAmount` |  | |  |  |  |  |
| `DebitCreditCode` |  | |  |  |  |  |
| `TaxCode` |  | |  |  |  |  |
| `TaxJurisdiction` |  | |  |  |  |  |
| `QuantityUnit` |  | |  |  |  |  |
| `Quantity` |  | |  |  |  |  |
| `BusinessArea` |  | |  |  |  |  |
| `GLAccount` |  | |  |  |  |  |
| `ProfitCenter` |  | |  |  |  |  |
| `TaxCountry` |  | |  |  |  |  |
| `_SupplierInvoiceAPI01` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_SupplierInvoiceAPI01` | `I_SupplierInvoiceAPI01` | [1..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #MANDATORY
@VDM.viewType: #BASIC
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@EndUserText.label: 'Consignment Settlement Item'
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.usageType.dataClass: #TRANSACTIONAL
@ObjectModel.supportedCapabilities: [ #CDS_MODELING_DATA_SOURCE, #SQL_DATA_SOURCE ]
@ObjectModel.modelingPattern: #NONE
@AccessControl.personalData.blocking: #BLOCKED_DATA_EXCLUDED
@Metadata.ignorePropagatedAnnotations:true

define view entity I_SuplrInvcItemCsgnmtAPI01 
  as select from I_SuplrInvcItemConsignment as consignment
    inner join I_SupplierInvoiceAPI01 on  consignment.SupplierInvoice = I_SupplierInvoiceAPI01.SupplierInvoice
                                      and consignment.FiscalYear      = I_SupplierInvoiceAPI01.FiscalYear
  
    association [1..1] to I_SupplierInvoiceAPI01 as _SupplierInvoiceAPI01 on  $projection.SupplierInvoice = _SupplierInvoiceAPI01.SupplierInvoice
                                                                          and $projection.FiscalYear      = _SupplierInvoiceAPI01.FiscalYear
{
  key consignment.SupplierInvoice,
  key consignment.FiscalYear,
  key consignment.SupplierInvoiceItem,
      consignment.MaterialDocument,
      consignment.MaterialDocumentYear,
      consignment.MaterialDocumentItem,
      consignment.Material,
      consignment.CompanyCode,
      consignment.Plant,
      @ObjectModel.foreignKey.association: '_Currency'
      consignment.DocumentCurrency,
      @Semantics.amount.currencyCode: 'DocumentCurrency'
      consignment.SupplierInvoiceItemAmount,
      consignment.DebitCreditCode,
      consignment.TaxCode,
      consignment.TaxJurisdiction,
      @ObjectModel.foreignKey.association: '_UnitOfMeasure'
      consignment.QuantityUnit,
      @Semantics.quantity.unitOfMeasure: 'QuantityUnit'
      consignment.Quantity,
      consignment.BusinessArea,
      consignment.GLAccount,
      consignment.ProfitCenter,
      consignment.TaxCountry,  
      /* Associations */
      _SupplierInvoiceAPI01,
      consignment._Currency,
      consignment._UnitOfMeasure
}
```
