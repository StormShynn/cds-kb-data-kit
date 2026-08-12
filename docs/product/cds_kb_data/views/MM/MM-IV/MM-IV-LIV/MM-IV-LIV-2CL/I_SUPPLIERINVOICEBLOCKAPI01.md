---
name: I_SUPPLIERINVOICEBLOCKAPI01
description: "Supplier InvoiceBLOCKAPI 01"
app_component: MM-IV-LIV-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - MM
  - MM-IV
  - MM-IV-LIV
  - interface-view
  - supplier
  - component:MM-IV-LIV-2CL
  - lob:Sourcing & Procurement
  - bo:Supplier
---
# I_SUPPLIERINVOICEBLOCKAPI01

**Supplier InvoiceBLOCKAPI 01**

| Property | Value |
|---|---|
| App Component | `MM-IV-LIV-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `PaymentBlockingReason` | ✓ | |  |  |  |  |
| `CompanyCode` | ✓ | |  |  |  |  |
| `FiscalYear` | ✓ | |  |  |  |  |
| `InvoicingParty` | ✓ | |  |  |  |  |
| `SupplierInvoice` | ✓ | |  |  |  |  |
| `CreatedByUser` | ✓ | |  |  |  |  |
| `PostingDate` | ✓ | |  |  |  |  |
| `PurchasingGroup` | ✓ | |  |  |  |  |
| `NetDueDate` | ✓ | |  |  |  |  |
| `_SupplierInvoiceAPI01` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_SupplierInvoiceAPI01` | `I_SupplierInvoiceAPI01` | [1..1] |

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog.sqlViewName: 'ISUPINVBLOCKAPI'
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #MANDATORY
@VDM.viewType: #BASIC
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@EndUserText.label: 'Supplier Invoice Block Logistics'
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.usageType.dataClass: #TRANSACTIONAL
@ObjectModel.supportedCapabilities: [ #CDS_MODELING_DATA_SOURCE, #SQL_DATA_SOURCE ]
@ObjectModel.modelingPattern: #NONE
@AccessControl.personalData.blocking: #BLOCKED_DATA_EXCLUDED
@Metadata.ignorePropagatedAnnotations: true
define view I_SupplierInvoiceBlockAPI01
  as select from I_SupplierInvoiceBlock
  
  association [1..1] to I_SupplierInvoiceAPI01 as _SupplierInvoiceAPI01 on  $projection.SupplierInvoice = _SupplierInvoiceAPI01.SupplierInvoice
                                                                   and $projection.FiscalYear      = _SupplierInvoiceAPI01.FiscalYear
{
  key I_SupplierInvoiceBlock.PaymentBlockingReason,
  key I_SupplierInvoiceBlock.CompanyCode,
  key I_SupplierInvoiceBlock.FiscalYear,
  key I_SupplierInvoiceBlock.InvoicingParty,
  key I_SupplierInvoiceBlock.SupplierInvoice,
  key I_SupplierInvoiceBlock.CreatedByUser,
  key I_SupplierInvoiceBlock.PostingDate,
  key I_SupplierInvoiceBlock.PurchasingGroup,
  key I_SupplierInvoiceBlock.NetDueDate,
  
      /* Associations */
      _SupplierInvoiceAPI01
  
}
```
