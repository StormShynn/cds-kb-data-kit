---
name: ZB_UOM.DDLS
description: "Units of Measurement"
software_component: SAPSCORE
release_state: unverified
clean_core_level: A
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://github.com/Keller-Michael/ALV_with_IDA_example/blob/1b9495e2fcace5dd16e5d9d2cd2ec01f7f85b1f9/src/zb_uom.ddls.asddls
semantic_en: "Units of Measurement — CDS view based on t006."
semantic_vi: "Units of Measurement — CDS view dựa trên t006."
keywords:
  - "units"
  - "measurement"
  - "client"
  - "unit_of_measurement"
  - "iso_code"
  - "language"
  - "commercial_format"
tags:
  - RE
  - component:RE
---
# ZB_UOM.DDLS

**Units of Measurement**

| Property | Value |
|---|---|
| Software Component | `SAPSCORE` |
| Release State | Unverified (auto-discovered, needs review) (Level A) |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://github.com/Keller-Michael/ALV_with_IDA_example/blob/1b9495e2fcace5dd16e5d9d2cd2ec01f7f85b1f9/src/zb_uom.ddls.asddls) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `client` |  | |  | `mandt` |  |  |
| `unit_of_measurement` |  | |  | `msehi` |  |  |
| `iso_code` |  | |  | `isocode` |  |  |
| `language` |  | |  | `spras` |  |  |
| `commercial_format` |  | |  | `mseh3` |  |  |
| `technical_format` |  | |  | `mseh6` |  |  |
| `short_text` |  | |  | `mseht` |  |  |
| `long_text` |  | |  | `msehl` |  |  |

## Source Code

*Source: [https://github.com/Keller-Michael/ALV_with_IDA_example/blob/1b9495e2fcace5dd16e5d9d2cd2ec01f7f85b1f9/src/zb_uom.ddls.asddls](https://github.com/Keller-Michael/ALV_with_IDA_example/blob/1b9495e2fcace5dd16e5d9d2cd2ec01f7f85b1f9/src/zb_uom.ddls.asddls)*

```abap
@AbapCatalog.sqlViewName: 'ZBUOM'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Units of Measurement'
define view ZB_UOM
  as select from    t006  as units_of_measurement
    left outer join t006a as units_of_measurement_texts on units_of_measurement.msehi = units_of_measurement_texts.msehi
{
  units_of_measurement.mandt       as client,
  @EndUserText.label: 'int. UOM'
  @EndUserText.quickInfo: 'internal Unit of Measurement'
  units_of_measurement.msehi       as unit_of_measurement,
  units_of_measurement.isocode     as iso_code,
  units_of_measurement_texts.spras as language,
  @EndUserText.label: 'com. UOM'
  @EndUserText.quickInfo: 'commercial Unit of Measurement'
  units_of_measurement_texts.mseh3 as commercial_format,
  @EndUserText.label: 'tech. UOM'
  @EndUserText.quickInfo: 'technical Unit of Measurement'
  units_of_measurement_texts.mseh6 as technical_format,
  units_of_measurement_texts.mseht as short_text,
  units_of_measurement_texts.msehl as long_text
}
```
