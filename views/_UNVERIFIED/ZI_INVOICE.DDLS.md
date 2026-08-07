---
name: ZI_INVOICE.DDLS
description: Invoice - Interface View
software_component: SAPSCORE
release_state: unverified
clean_core_level: A
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://github.com/Arunagiri0512/s4-sales-cycle-rap/blob/7fa3e18bfeda18d243d72fbab74f7f21fd7f9c59/src/zi_invoice.ddls.asddls
semantic_en: Invoice - Interface View — CDS view based on zinvoice.
semantic_vi: Invoice - Interface View — CDS view dựa trên zinvoice.
keywords:
  - invoice
  - interface
  - uuid
  - customer
  - amount
tags:
  - AC
  - bo:billingdocument
  - component:AC
  - invoice
---
# ZI_INVOICE.DDLS

**Invoice - Interface View**

| Property | Value |
|---|---|
| Software Component | `SAPSCORE` |
| Release State | Unverified (auto-discovered, needs review) (Level A) |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://github.com/Arunagiri0512/s4-sales-cycle-rap/blob/7fa3e18bfeda18d243d72fbab74f7f21fd7f9c59/src/zi_invoice.ddls.asddls) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `InvoiceUuid` | ✓ | |  | `invoice_uuid` |  |  |
| `InvoiceId` |  | |  | `invoice_id` |  |  |
| `SoId` |  | |  | `so_id` |  |  |
| `Customer` |  | |  | `customer` |  |  |
| `NetAmount` |  | |  | `net_amount` |  |  |
| `TaxAmount` |  | |  | `tax_amount` |  |  |
| `GrossAmount` |  | |  | `gross_amount` |  |  |
| `Currency` |  | |  | `currency` |  |  |
| `InvoiceDate` |  | |  | `invoice_date` |  |  |
| `DueDate` |  | |  | `due_date` |  |  |
| `PaymentStatus` |  | |  | `payment_status` |  |  |
| `Status` |  | |  | `status` |  |  |
| `CreatedBy` |  | |  | `created_by` |  |  |
| `CreatedAt` |  | |  | `created_at` |  |  |
| `LastChangedBy` |  | |  | `last_changed_by` |  |  |
| `LastChangedAt` |  | |  | `last_changed_at` |  |  |
| `LocalLastChangedAt` |  | |  | `local_last_changed_at` |  |  |

## Source Code

*Source: [https://github.com/Arunagiri0512/s4-sales-cycle-rap/blob/7fa3e18bfeda18d243d72fbab74f7f21fd7f9c59/src/zi_invoice.ddls.asddls](https://github.com/Arunagiri0512/s4-sales-cycle-rap/blob/7fa3e18bfeda18d243d72fbab74f7f21fd7f9c59/src/zi_invoice.ddls.asddls)*

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Invoice - Interface View'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.usageType:{ serviceQuality: #X, sizeCategory: #S, dataClass: #MIXED }
define root view entity ZI_Invoice
  as select from zinvoice
{
  key invoice_uuid         as InvoiceUuid,
      invoice_id           as InvoiceId,
      so_id                as SoId,
      customer             as Customer,
      net_amount           as NetAmount,
      tax_amount           as TaxAmount,
      gross_amount         as GrossAmount,
      currency             as Currency,
      invoice_date         as InvoiceDate,
      due_date             as DueDate,
      payment_status       as PaymentStatus,
      status               as Status,

      @Semantics.user.createdBy: true
      created_by           as CreatedBy,
      @Semantics.systemDateTime.createdAt: true
      created_at           as CreatedAt,
      @Semantics.user.lastChangedBy: true
      last_changed_by      as LastChangedBy,
      @Semantics.systemDateTime.lastChangedAt: true
      last_changed_at      as LastChangedAt,
      @Semantics.systemDateTime.localInstanceLastChangedAt: true
      local_last_changed_at as LocalLastChangedAt
}
```
