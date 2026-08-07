---
name: I_SUPPLIERINVOICETAXAPI01
description: Supplier InvoiceTAXAPI 01
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
  - supplier
  - tax
  - component:MM-IV-LIV-2CL
  - lob:Sourcing & Procurement
  - bo:Supplier
---
# I_SUPPLIERINVOICETAXAPI01

**Supplier InvoiceTAXAPI 01**

| Property | Value |
|---|---|
| App Component | `MM-IV-LIV-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `SupplierInvoice` | ✓ | |  |  |
| `FiscalYear` | ✓ | |  |  |
| `TaxCode` | ✓ | |  |  |
| `SupplierInvoiceTaxCounter` | ✓ | |  |  |
| `DocumentCurrency` |  | |  |  |
| `TaxAmount` |  | |  |  |
| `TaxCalculationProcedure` |  | |  |  |
| `TaxBaseAmountInTransCrcy` |  | |  |  |
| `TaxJurisdiction` |  | |  |  |
| `CompanyCodeCurrency` |  | |  |  |
| `TaxAmountInCoCodeCrcy` |  | |  |  |
| `TaxBaseAmountInCoCodeCrcy` |  | |  |  |
| `TaxCountry` |  | |  |  |
| `_SupplierInvoiceAPI01` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_SupplierInvoiceAPI01` | `I_SupplierInvoiceAPI01` | [1..1] |

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog.sqlViewName: 'ISUPINVTAXAPI01'
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #MANDATORY
@VDM.viewType: #COMPOSITE
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@EndUserText.label: 'Tax for Supplier Invoice'
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.usageType.dataClass: #TRANSACTIONAL
@ObjectModel.supportedCapabilities: [ #CDS_MODELING_DATA_SOURCE, #SQL_DATA_SOURCE ]
@ObjectModel.modelingPattern: #NONE
@AccessControl.personalData.blocking: #BLOCKED_DATA_EXCLUDED
@Metadata.ignorePropagatedAnnotations: true

define view I_SupplierInvoiceTaxAPI01
  as select from I_SupplierInvoiceTax  
    inner join   I_SupplierInvoiceAPI01 on  I_SupplierInvoiceTax.SupplierInvoice = I_SupplierInvoiceAPI01.SupplierInvoice
                                        and I_SupplierInvoiceTax.FiscalYear      = I_SupplierInvoiceAPI01.FiscalYear
  association [1..1] to I_SupplierInvoiceAPI01 as _SupplierInvoiceAPI01 on  $projection.SupplierInvoice = _SupplierInvoiceAPI01.SupplierInvoice
                                                                        and $projection.FiscalYear      = _SupplierInvoiceAPI01.FiscalYear
{
  key I_SupplierInvoiceTax.SupplierInvoice,
  key I_SupplierInvoiceTax.FiscalYear,
  key TaxCode,
  key SupplierInvoiceTaxCounter,
      I_SupplierInvoiceTax.DocumentCurrency,
      @Semantics.amount.currencyCode: 'DocumentCurrency'
      TaxAmount,
      TaxCalculationProcedure,
      @Semantics.amount.currencyCode: 'DocumentCurrency'      
      TaxBaseAmountInTransCrcy,
      TaxJurisdiction,    
      CompanyCodeCurrency,
      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'      
      TaxAmountInCoCodeCrcy,
      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'         
      TaxBaseAmountInCoCodeCrcy,
      I_SupplierInvoiceTax.TaxCountry,

      /* Associations */
      _SupplierInvoiceAPI01
}
```
