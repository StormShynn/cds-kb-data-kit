---
name: ZI_MATNR.DDLS
description: "Material list cds"
software_component: SAPSCORE
release_state: unverified
clean_core_level: A
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://github.com/huuhv-0372/rap-basic-cds/blob/7ea18c4628378fb2d9af3f889e6c1e6313108e68/src/zi_matnr.ddls.asddls
semantic_en: "Material list cds — CDS view based on zjh_mara."
semantic_vi: "Material list cds — CDS view dựa trên zjh_mara."
keywords:
  - "material"
  - "list"
  - "matnr"
  - "description"
tags:
  - IS
  - bo:material
  - component:IS
  - material
---
# ZI_MATNR.DDLS

**Material list cds**

| Property | Value |
|---|---|
| Software Component | `SAPSCORE` |
| Release State | Unverified (auto-discovered, needs review) (Level A) |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://github.com/huuhv-0372/rap-basic-cds/blob/7ea18c4628378fb2d9af3f889e6c1e6313108e68/src/zi_matnr.ddls.asddls) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Matnr` | ✓ | |  | `matnr` |  |  |
| `Description` |  | |  | `description` |  |  |

## Source Code

*Source: [https://github.com/huuhv-0372/rap-basic-cds/blob/7ea18c4628378fb2d9af3f889e6c1e6313108e68/src/zi_matnr.ddls.asddls](https://github.com/huuhv-0372/rap-basic-cds/blob/7ea18c4628378fb2d9af3f889e6c1e6313108e68/src/zi_matnr.ddls.asddls)*

```abap
@AbapCatalog.sqlViewName: 'ZI_MATNR_LIST'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Material list cds'
@Metadata.ignorePropagatedAnnotations: true

@VDM.viewType: #BASIC // Cái này cần có để hiển thị đc F4 help khi search
define view ZI_MATNR
    as select from zjh_mara
{
  key matnr       as Matnr,
      description as Description
}
```
