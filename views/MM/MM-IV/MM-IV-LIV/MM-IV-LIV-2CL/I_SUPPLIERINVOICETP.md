---
name: I_SUPPLIERINVOICETP
description: Supplier InvoiceTP
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
  - transactional-processing
  - supplier
  - component:MM-IV-LIV-2CL
  - lob:Sourcing & Procurement
  - bo:Supplier
---
# I_SUPPLIERINVOICETP

**Supplier InvoiceTP**

| Property | Value |
|---|---|
| App Component | `MM-IV-LIV-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `SupplierInvoice` | `SupplierInvoice` |
| key `SupplierInvoiceFiscalYear` | `SupplierInvoiceFiscalYear` |
| `CompanyCode` | `CompanyCode` |

## Source Code

```abap
@VDM.viewType: #TRANSACTIONAL
@EndUserText.label: 'Supplier Invoice - TP'
@AccessControl.authorizationCheck: #MANDATORY
@AccessControl.personalData.blocking: #BLOCKED_DATA_EXCLUDED
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.usageType.dataClass: #TRANSACTIONAL
@ObjectModel.supportedCapabilities: [#TRANSACTIONAL_PROVIDER]
@ObjectModel.modelingPattern: #TRANSACTIONAL_INTERFACE
@ObjectModel.sapObjectNodeType.name: 'SupplierInvoice'
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API

define root view entity I_SupplierInvoiceTP
  provider contract transactional_interface
  as projection on R_SupplierInvoiceTP
{
  key SupplierInvoice,
  key SupplierInvoiceFiscalYear,
      CompanyCode
}
```
