---
name: I_SUPLRINVCHEADERWHLDGTAXAPI01
description: Suplrinvcheaderwhldgtaxapi 01
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
  - tax
  - header-level
  - component:MM-IV-LIV-2CL
  - lob:Sourcing & Procurement
---
# I_SUPLRINVCHEADERWHLDGTAXAPI01

**Suplrinvcheaderwhldgtaxapi 01**

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
| `WithholdingTaxType` | ✓ | |  |  |  |  |
| `DocumentCurrency` |  | |  |  |  |  |
| `WithholdingTaxCode` |  | |  |  |  |  |
| `WithholdingTaxBaseAmount` |  | |  |  |  |  |
| `ManuallyEnteredWhldgTaxAmount` |  | |  |  |  |  |
| `_SupplierInvoiceAPI01` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_SupplierInvoiceAPI01` | `I_SupplierInvoiceAPI01` | [1..1] |

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog.sqlViewName: 'ISIHDRWHLDGAPI01'
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #MANDATORY
@VDM.viewType: #COMPOSITE
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@EndUserText.label: 'Withholding Tax for Supplier Invoice'
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.usageType.dataClass: #TRANSACTIONAL
@ObjectModel.supportedCapabilities: [ #CDS_MODELING_DATA_SOURCE, #SQL_DATA_SOURCE ]
@ObjectModel.modelingPattern: #NONE
@AccessControl.personalData.blocking: #BLOCKED_DATA_EXCLUDED
@Metadata.ignorePropagatedAnnotations:true

define view I_SuplrInvcHeaderWhldgTaxAPI01
  as select from I_SuplrInvcHeaderWhldgTax  
    
    inner join   I_SupplierInvoiceAPI01 on  I_SuplrInvcHeaderWhldgTax.SupplierInvoice = I_SupplierInvoiceAPI01.SupplierInvoice
                                        and I_SuplrInvcHeaderWhldgTax.FiscalYear      = I_SupplierInvoiceAPI01.FiscalYear

  association [1..1] to I_SupplierInvoiceAPI01 as _SupplierInvoiceAPI01 on  $projection.SupplierInvoice = _SupplierInvoiceAPI01.SupplierInvoice
                                                                        and $projection.FiscalYear      = _SupplierInvoiceAPI01.FiscalYear
{

  key I_SuplrInvcHeaderWhldgTax.SupplierInvoice,
  key I_SuplrInvcHeaderWhldgTax.FiscalYear,
  key WithholdingTaxType,

      @Semantics.currencyCode: true
      I_SuplrInvcHeaderWhldgTax.DocumentCurrency,
      WithholdingTaxCode,
      @Semantics.amount.currencyCode: 'DocumentCurrency'
      @DefaultAggregation:#NONE
      WithholdingTaxBaseAmount,
      @Semantics.amount.currencyCode: 'DocumentCurrency'
      @DefaultAggregation:#NONE
      ManuallyEnteredWhldgTaxAmount,

      /* Associations */
      _SupplierInvoiceAPI01,
      I_SuplrInvcHeaderWhldgTax._Currency
}
```
