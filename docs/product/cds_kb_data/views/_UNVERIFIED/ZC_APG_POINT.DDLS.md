---
name: ZC_APG_POINT.DDLS
description: "Maintain Point - Projection"
software_component: SAPSCORE
release_state: unverified
clean_core_level: A
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://github.com/greltel/abap-point-gate/blob/8fa3df25f0ef828ea1fac629bb9de4017628bdb4/src/zc_apg_point.ddls.asddls
semantic_en: "Maintain Point - Projection — CDS view."
semantic_vi: "Maintain Point - Projection — CDS view dựa trên Maintain Point - Projection."
keywords:
  - "maintain"
  - "point"
  - "projection"
  - "description"
  - "module"
  - "name"
  - "active"
  - "criticality"
tags:
  - AP
  - bo:project
  - component:AP
  - project
---
# ZC_APG_POINT.DDLS

**Maintain Point - Projection**

| Property | Value |
|---|---|
| Software Component | `SAPSCORE` |
| Release State | Unverified (auto-discovered, needs review) (Level A) |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://github.com/greltel/abap-point-gate/blob/8fa3df25f0ef828ea1fac629bb9de4017628bdb4/src/zc_apg_point.ddls.asddls) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `PointId` | ✓ | |  |  |  |  |
| `Description` |  | |  |  |  |  |
| `ModuleName` |  | |  |  |  |  |
| `Active` |  | |  |  |  |  |
| `ActiveCriticality` |  | |  |  |  |  |
| `SrcMainProg` |  | |  |  |  |  |
| `SrcInclude` |  | |  |  |  |  |
| `SrcLine` |  | |  |  |  |  |
| `PointTypeCode` |  | |  |  |  |  |
| `ActivationClass` |  | |  |  |  |  |
| `CreatedBy` |  | |  |  |  |  |
| `CreatedAt` |  | |  |  |  |  |
| `LastChangedBy` |  | |  |  |  |  |
| `LastChangedAt` |  | |  |  |  |  |
| `LocalLastChangedAt` |  | |  |  |  |  |
| `_Gates` | | ✓ | | | | |

## Source Code

*Source: [https://github.com/greltel/abap-point-gate/blob/8fa3df25f0ef828ea1fac629bb9de4017628bdb4/src/zc_apg_point.ddls.asddls](https://github.com/greltel/abap-point-gate/blob/8fa3df25f0ef828ea1fac629bb9de4017628bdb4/src/zc_apg_point.ddls.asddls)*

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Maintain Point - Projection'
@Metadata.allowExtensions: true
define root view entity ZC_APG_Point
  provider contract transactional_query
  as projection on ZR_APG_Point
{
  key PointId,
      Description,
      ModuleName,
      Active,
      ActiveCriticality,
      SrcMainProg,
      SrcInclude,
      SrcLine,
      PointTypeCode,
      ActivationClass,
      CreatedBy,
      CreatedAt,
      LastChangedBy,
      LastChangedAt,
      LocalLastChangedAt,
      _Gates : redirected to composition child ZC_APG_GateHandle
}
```