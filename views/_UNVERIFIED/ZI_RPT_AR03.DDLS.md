---
name: ZI_RPT_AR03.DDLS
description: Interface View for AR Aging Report
software_component: SAPSCORE
release_state: unverified
clean_core_level: A
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://github.com/dataops-sap01-sp26/ders-main-backup/blob/d80d17e14ace083f67daf75d8d8719ac8e81939e/src/zi_rpt_ar03.ddls.asddls
semantic_en: Interface View for AR Aging Report — CDS view based on ZI_RPT_AR03_BASE.
semantic_vi: Interface View for AR Aging Report — CDS view dựa trên ZI_RPT_AR03_BASE.
keywords:
  - interface
  - for
  - aging
  - report
  - company
  - code
  - customer
  - local
  - currency
  - name
  - total
  - amount
tags:
  - AC
  - bo:purchaseorder
  - component:AC
---
# ZI_RPT_AR03.DDLS

**Interface View for AR Aging Report**

| Property | Value |
|---|---|
| Software Component | `SAPSCORE` |
| Release State | Unverified (auto-discovered, needs review) (Level A) |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://github.com/dataops-sap01-sp26/ders-main-backup/blob/d80d17e14ace083f67daf75d8d8719ac8e81939e/src/zi_rpt_ar03.ddls.asddls) |

## Fields

| Field | Data Source |
|---|---|
| key `CompanyCode` | `CompanyCode` |
| key `Customer` | `Customer` |
| key `LocalCurrency` | `LocalCurrency` |
| `CustomerName` | `CustomerName` |
| `TotalAmount` | `sum( OriginalAmount )` |
| `Bucket_NotDue` | `sum( Bucket_NotDue )` |
| `Bucket_0_30` | `sum( Bucket_0_30 )` |
| `Bucket_31_60` | `sum( Bucket_31_60 )` |
| `Bucket_61_90` | `sum( Bucket_61_90 )` |
| `Bucket_Over_90` | `sum( Bucket_Over_90 )` |
| `NetDueDate` | `max(NetDueDate)` |
| `_Items` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Items` | `ZI_RPT_AR03_I` | [0..*] |

## Source Code

*Source: [https://github.com/dataops-sap01-sp26/ders-main-backup/blob/d80d17e14ace083f67daf75d8d8719ac8e81939e/src/zi_rpt_ar03.ddls.asddls](https://github.com/dataops-sap01-sp26/ders-main-backup/blob/d80d17e14ace083f67daf75d8d8719ac8e81939e/src/zi_rpt_ar03.ddls.asddls)*

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Interface View for AR Aging Report'
@Metadata.ignorePropagatedAnnotations: true
@Metadata.allowExtensions: true

define view entity ZI_RPT_AR03
  as select from ZI_RPT_AR03_BASE

  association [0..*] to ZI_RPT_AR03_I as _Items on  $projection.CompanyCode = _Items.CompanyCode
                                                and $projection.Customer    = _Items.Customer
{
      @Consumption.valueHelpDefinition: [{ entity: { name: 'I_CompanyCode', element: 'CompanyCode' } }]
      @Consumption.filter: { mandatory: true, selectionType: #SINGLE, multipleSelections: false }
  key CompanyCode,

      @Consumption.valueHelpDefinition: [{ entity: { name: 'I_Customer', element: 'Customer' } }]
  key Customer,

  key LocalCurrency,

      CustomerName,

      @Aggregation.default: #SUM
      sum( OriginalAmount ) as TotalAmount,

      sum( Bucket_NotDue )  as Bucket_NotDue,
      sum( Bucket_0_30 )    as Bucket_0_30,
      sum( Bucket_31_60 )   as Bucket_31_60,
      sum( Bucket_61_90 )   as Bucket_61_90,
      sum( Bucket_Over_90 ) as Bucket_Over_90,

      max(NetDueDate)       as NetDueDate,

      _Items
}
group by
  CompanyCode,
  Customer,
  CustomerName,
  LocalCurrency
```