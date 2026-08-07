---
name: YI_LITERALS.DDLS
description: Literals in CDS
software_component: SAPSCORE
release_state: unverified
clean_core_level: A
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://github.com/keremkoseoglu/spma-2025-08/blob/05e9b4ffe4da74c8a64c802598dbd378d1666027/src/yi_literals.ddls.asddls
semantic_en: Literals in CDS — CDS view based on sflight.
semantic_vi: Literals in CDS — CDS view dựa trên sflight.
keywords:
  - literals
  - carrid
  - connid
  - fldate
---
# YI_LITERALS.DDLS

**Literals in CDS**

| Property | Value |
|---|---|
| Software Component | `SAPSCORE` |
| Release State | Unverified (auto-discovered, needs review) (Level A) |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://github.com/keremkoseoglu/spma-2025-08/blob/05e9b4ffe4da74c8a64c802598dbd378d1666027/src/yi_literals.ddls.asddls) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `carrid` | ✓ | |  |  |  |  |
| `connid` | ✓ | |  |  |  |  |
| `fldate` | ✓ | |  |  |  |  |
| `One` |  | |  | `1` |  |  |
| `Pi` |  | |  | `14` |  |  |
| `'Hello` |  | |  |  |  |  |
| `Greeting` |  | |  | `World!'` |  |  |

## Source Code

*Source: [https://github.com/keremkoseoglu/spma-2025-08/blob/05e9b4ffe4da74c8a64c802598dbd378d1666027/src/yi_literals.ddls.asddls](https://github.com/keremkoseoglu/spma-2025-08/blob/05e9b4ffe4da74c8a64c802598dbd378d1666027/src/yi_literals.ddls.asddls)*

```abap
@AbapCatalog.viewEnhancementCategory: [ #NONE ]

@AccessControl.authorizationCheck: #NOT_REQUIRED

@EndUserText.label: 'Literals in CDS'

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel.usageType: { serviceQuality: #X, sizeCategory: #S, dataClass: #MIXED }

define view entity YI_LITERALS
  as select from sflight

{
  key carrid,
  key connid,
  key fldate,

      // Numeric literals
      1               as One,
      3.14            as Pi,

      // String literals
      'Hello, World!' as Greeting
}
```
