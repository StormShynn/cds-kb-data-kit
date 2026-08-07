---
name: ZDD_HEADER.DDLS
description: Cabecera
software_component: SAPSCORE
release_state: unverified
clean_core_level: A
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://github.com/Herygzz/ABAP-CDS/blob/9b5ab06b27a3d147162849984bfaec2912960305/src/zdd_header.ddls.asddls
semantic_en: Cabecera — CDS view based on zta_vbak.
semantic_vi: Cabecera — CDS view dựa trên zta_vbak.
keywords:
  - cabecera
  - vbeln
  - erdat
  - erzet
  - auart
  - waerk
tags:
  - CA
  - bo:salesorder
  - component:CA
  - lob:cross_application components
---
# ZDD_HEADER.DDLS

**Cabecera**

| Property | Value |
|---|---|
| Software Component | `SAPSCORE` |
| Release State | Unverified (auto-discovered, needs review) (Level A) |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://github.com/Herygzz/ABAP-CDS/blob/9b5ab06b27a3d147162849984bfaec2912960305/src/zdd_header.ddls.asddls) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Vbeln` | ✓ | |  | `vbeln` |  |  |
| `Erdat` |  | |  | `erdat` |  |  |
| `Erzet` |  | |  | `erzet` |  |  |
| `Auart` |  | |  | `auart` |  |  |
| `Waerk` |  | |  | `waerk` |  |  |
| `Vkorg` |  | |  | `vkorg` |  |  |
| `Vtweg` |  | |  | `vtweg` |  |  |
| `Spart` |  | |  | `spart` |  |  |
| `Kunnr` |  | |  | `kunnr` |  |  |

## Source Code

*Source: [https://github.com/Herygzz/ABAP-CDS/blob/9b5ab06b27a3d147162849984bfaec2912960305/src/zdd_header.ddls.asddls](https://github.com/Herygzz/ABAP-CDS/blob/9b5ab06b27a3d147162849984bfaec2912960305/src/zdd_header.ddls.asddls)*

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Cabecera'
@Metadata.ignorePropagatedAnnotations: true
define root view entity zdd_header as select from zta_vbak
//composition of target_data_source_name as _association_name
{
    key vbeln as Vbeln,
    erdat as Erdat,
    erzet as Erzet,
    auart as Auart,
//    netwr as Netwr,
    waerk as Waerk,
    vkorg as Vkorg,
    vtweg as Vtweg,
    spart as Spart,
    kunnr as Kunnr
//    _association_name // Make association public
}
```
