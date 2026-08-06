---
name: I_SUPLRINVCSELDPURGDOCAPI01
description: Suplrinvcseldpurgdocapi 01
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
# I_SUPLRINVCSELDPURGDOCAPI01

**Suplrinvcseldpurgdocapi 01**

| Property | Value |
|---|---|
| App Component | `MM-IV-LIV-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `SupplierInvoice` | `I_SuplrInvcSeldPurgDocument.SupplierInvoice` |
| key `FiscalYear` | `I_SuplrInvcSeldPurgDocument.FiscalYear` |
| key `PurchaseOrder` | `I_SuplrInvcSeldPurgDocument.PurchaseOrder` |
| key `PurchaseOrderItem` | `I_SuplrInvcSeldPurgDocument.PurchaseOrderItem` |
| `_SupplierInvoiceAPI01` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_SupplierInvoiceAPI01` | `I_SupplierInvoiceAPI01` | [1..1] |

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog.sqlViewName: 'ISISELPURDOCAPI'
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #MANDATORY
@VDM.viewType: #BASIC
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@EndUserText.label: 'Purchasing Document Ref for Supplier Inv'
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.usageType.dataClass: #TRANSACTIONAL
@ObjectModel.supportedCapabilities: [ #CDS_MODELING_DATA_SOURCE, #SQL_DATA_SOURCE ]
@ObjectModel.modelingPattern: #NONE
@AccessControl.personalData.blocking: #BLOCKED_DATA_EXCLUDED
@Metadata.ignorePropagatedAnnotations: true

define view I_SuplrInvcSeldPurgDocAPI01 
  as select from I_SuplrInvcSeldPurgDocument 

  association [1..1] to I_SupplierInvoiceAPI01 as _SupplierInvoiceAPI01 on  $projection.SupplierInvoice = _SupplierInvoiceAPI01.SupplierInvoice
                                                                        and $projection.FiscalYear      = _SupplierInvoiceAPI01.FiscalYear  
{
  key I_SuplrInvcSeldPurgDocument.SupplierInvoice,
  key I_SuplrInvcSeldPurgDocument.FiscalYear,
  key I_SuplrInvcSeldPurgDocument.PurchaseOrder,
  key I_SuplrInvcSeldPurgDocument.PurchaseOrderItem,
  
      /* Associations */
      _SupplierInvoiceAPI01  
}
where              
      ( _SupplierInvoiceAPI01.SupplierInvoice is not null and _SupplierInvoiceAPI01.SupplierInvoice <> '' );
```
