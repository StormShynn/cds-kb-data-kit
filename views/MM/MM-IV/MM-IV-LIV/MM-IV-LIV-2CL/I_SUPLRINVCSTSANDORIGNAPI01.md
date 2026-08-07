---
name: I_SUPLRINVCSTSANDORIGNAPI01
description: Suplrinvcstsandorignapi 01
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
  - component:MM-IV-LIV-2CL
  - lob:Sourcing & Procurement
---
# I_SUPLRINVCSTSANDORIGNAPI01

**Suplrinvcstsandorignapi 01**

| Property | Value |
|---|---|
| App Component | `MM-IV-LIV-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SupplierInvoice` | ✓ | | `_SupplierInvoiceStsAndOrign` | `SupplierInvoice` |  |  |
| `FiscalYear` | ✓ | | `_SupplierInvoiceStsAndOrign` | `FiscalYear` |  |  |
| `InvoiceStatusAndOrigin` |  | | `_SupplierInvoiceStsAndOrign` | `InvoiceStatusAndOrigin` |  |  |
| `_SupplierInvoiceAPI01` | | ✓ | | | | |
| `_SuplrInvcStsOrignTxtAPI01` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_SupplierInvoiceAPI01` | `I_SupplierInvoiceAPI01` | [1..1] |
| `_SuplrInvcStsOrignTxtAPI01` | `I_SuplrInvcStsOrignTxtAPI01` | [0..*] |

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog.sqlViewName: 'ISISTSORIGAPI01'
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #MANDATORY
@VDM.viewType : #COMPOSITE
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@EndUserText.label: 'Supplier Invoice Status and Origin'
@ObjectModel.usageType.serviceQuality: #B
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.usageType.dataClass: #TRANSACTIONAL
@ObjectModel.supportedCapabilities: [ #CDS_MODELING_DATA_SOURCE, #SQL_DATA_SOURCE ]
@ObjectModel.modelingPattern: #NONE
@AccessControl.personalData.blocking: #BLOCKED_DATA_EXCLUDED
@Metadata.ignorePropagatedAnnotations:true
@AbapCatalog.preserveKey:true
define view I_SuplrInvcStsAndOrignAPI01 
  as select from I_SupplierInvoiceStsAndOrign as _SupplierInvoiceStsAndOrign 
  inner join   I_SupplierInvoiceAPI01 on  _SupplierInvoiceStsAndOrign.SupplierInvoice = I_SupplierInvoiceAPI01.SupplierInvoice
                                      and _SupplierInvoiceStsAndOrign.FiscalYear      = I_SupplierInvoiceAPI01.FiscalYear
  association [1..1] to I_SupplierInvoiceAPI01    as _SupplierInvoiceAPI01    on  $projection.SupplierInvoice = _SupplierInvoiceAPI01.SupplierInvoice
                                                                              and $projection.FiscalYear      = _SupplierInvoiceAPI01.FiscalYear 
  association [0..*] to I_SuplrInvcStsOrignTxtAPI01 as _SuplrInvcStsOrignTxtAPI01 on $projection.InvoiceStatusAndOrigin = _SuplrInvcStsOrignTxtAPI01.InvoiceStatusAndOrigin                                                                            
{
  key _SupplierInvoiceStsAndOrign.SupplierInvoice,
  key _SupplierInvoiceStsAndOrign.FiscalYear,
  _SupplierInvoiceStsAndOrign.InvoiceStatusAndOrigin,    

  // Associations
  _SupplierInvoiceAPI01,  
  _SuplrInvcStsOrignTxtAPI01
}
```
