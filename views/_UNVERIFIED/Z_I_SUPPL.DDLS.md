---
name: Z_I_SUPPL.DDLS
description: CDS View to calculate the PRICE_SUM
software_component: SAPSCORE
release_state: unverified
clean_core_level: A
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://github.com/SAP-samples/teched2025-DT266/blob/f1db4a3f047ea8b96a623bbf599d7839d4e75cf9/src/z_i_suppl.ddls.asddls
semantic_en: CDS View to calculate the PRICE_SUM — CDS view based on zdt266_sup_l_000.
semantic_vi: CDS View to calculate the PRICE_SUM — CDS view dựa trên zdt266_sup_l_000.
keywords:
  - calculate
  - the
  - price
  - sum
  - supplement_id
  - price_lugg
  - price_meal
  - price_bev
tags:
  - CA
  - component:CA
  - lob:cross_application components
---
# Z_I_SUPPL.DDLS

**CDS View to calculate the PRICE_SUM**

| Property | Value |
|---|---|
| Software Component | `SAPSCORE` |
| Release State | Unverified (auto-discovered, needs review) (Level A) |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://github.com/SAP-samples/teched2025-DT266/blob/f1db4a3f047ea8b96a623bbf599d7839d4e75cf9/src/z_i_suppl.ddls.asddls) |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `supplement_id` | ✓ | |  |  |
| `id` |  | |  |  |
| `price_lugg` |  | |  | `case when suppl.supplement_category = 'LU' then suppl.price end` |
| `price_meal` |  | |  | `case when suppl.supplement_category = 'ML' then suppl.price end` |
| `price_bev` |  | |  | `case when suppl.supplement_category = 'BV' then suppl.price end` |
| `price` |  | |  |  |

## Source Code

*Source: [https://github.com/SAP-samples/teched2025-DT266/blob/f1db4a3f047ea8b96a623bbf599d7839d4e75cf9/src/z_i_suppl.ddls.asddls](https://github.com/SAP-samples/teched2025-DT266/blob/f1db4a3f047ea8b96a623bbf599d7839d4e75cf9/src/z_i_suppl.ddls.asddls)*

```abap
@AbapCatalog.sqlViewName: 'ZSUPPL'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'CDS View to calculate the PRICE_SUM'
@Metadata.ignorePropagatedAnnotations: true
define view  Z_I_SUPPL 
as select from zdt266_sup_l_000 as suppl
{
key supplement_id,
suppl.id as id,
case when suppl.supplement_category = 'LU' then suppl.price end as price_lugg,
case when suppl.supplement_category = 'ML' then suppl.price end as price_meal,
case when suppl.supplement_category = 'BV' then suppl.price end as price_bev,
suppl.price as price
}
```
