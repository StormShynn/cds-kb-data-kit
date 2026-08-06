---
name: ZCE_ODPU_FAV.DDLS
description: ZCE_ODPU_FAV.DDLS
software_component: SAPSCORE
release_state: unverified
clean_core_level: A
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://github.com/mariokernich/odapu-abap/blob/d0034f1c930ecfaf8fa2e2195931abae6be28c93/src/zce_odpu_fav.ddls.asddls
semantic_en: ZCE_ODPU_FAV.DDLS — CDS view.
semantic_vi: ZCE_ODPU_FAV.DDLS — CDS view dựa trên ZCE_ODPU_FAV.DDLS.
keywords:
  - zce
  - odpu
  - fav.ddls
  - service
  - path
  - abap_boolean
---
# ZCE_ODPU_FAV.DDLS

**ZCE_ODPU_FAV.DDLS**

| Property | Value |
|---|---|
| Software Component | `SAPSCORE` |
| Release State | Unverified (auto-discovered, needs review) (Level A) |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://github.com/mariokernich/odapu-abap/blob/d0034f1c930ecfaf8fa2e2195931abae6be28c93/src/zce_odpu_fav.ddls.asddls) |

## Fields

| Field | Data Source |
|---|---|
| `apc_appl_path` | `key ServicePath : apc_appl_path` |
| `Value` | `abap_boolean` |

## Source Code

*Source: [https://github.com/mariokernich/odapu-abap/blob/d0034f1c930ecfaf8fa2e2195931abae6be28c93/src/zce_odpu_fav.ddls.asddls](https://github.com/mariokernich/odapu-abap/blob/d0034f1c930ecfaf8fa2e2195931abae6be28c93/src/zce_odpu_fav.ddls.asddls)*

```abap
define abstract entity ZCE_ODPU_FAV
{
  key ServicePath  : apc_appl_path;
      Value : abap_boolean;
}
```
