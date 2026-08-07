---
name: D_SUPPLIERINVOICEPOSTED
description: "D Supplier InvoicePOSTED"
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
  - supplier
  - component:MM-IV-LIV-2CL
  - lob:Sourcing & Procurement
  - bo:Supplier
---
# D_SUPPLIERINVOICEPOSTED

**D Supplier InvoicePOSTED**

| Property | Value |
|---|---|
| App Component | `MM-IV-LIV-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `FiscalYear` |  | |  | `gjahr` |  |  |

## Source Code

```abap
@EndUserText.label: 'Supplier Invoice Posted'
@ObjectModel.sapObjectNodeType.name: 'SupplierInvoice'
@VDM.usage.type: [#EVENT_SIGNATURE]
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
define abstract entity D_SupplierInvoicePosted
{
      FiscalYear : gjahr;
}
```
