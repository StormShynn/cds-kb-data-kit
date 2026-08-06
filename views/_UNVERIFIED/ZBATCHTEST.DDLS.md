---
name: ZBATCHTEST.DDLS
description: for batch test
software_component: SAPSCORE
release_state: unverified
clean_core_level: A
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://github.com/ravi075/SAP-RAP-PROJECTS/blob/0b2f7a767ccd169f6f334e9e48b6a968e57fd419/src/zbatchtest.ddls.asddls
semantic_en: for batch test — CDS view based on I_ClfnObjectCharcValue.
semantic_vi: for batch test — CDS view dựa trên I_ClfnObjectCharcValue.
keywords:
  - for
  - batch
  - test
  - clfn
  - object
  - charc
  - value
---
# ZBATCHTEST.DDLS

**for batch test**

| Property | Value |
|---|---|
| Software Component | `SAPSCORE` |
| Release State | Unverified (auto-discovered, needs review) (Level A) |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://github.com/ravi075/SAP-RAP-PROJECTS/blob/0b2f7a767ccd169f6f334e9e48b6a968e57fd419/src/zbatchtest.ddls.asddls) |

## Fields

| Field | Data Source |
|---|---|
| key `ClfnObjectID` | `ClfnObjectID` |
| `CharcValue` | `CharcValue` |

## Source Code

*Source: [https://github.com/ravi075/SAP-RAP-PROJECTS/blob/0b2f7a767ccd169f6f334e9e48b6a968e57fd419/src/zbatchtest.ddls.asddls](https://github.com/ravi075/SAP-RAP-PROJECTS/blob/0b2f7a767ccd169f6f334e9e48b6a968e57fd419/src/zbatchtest.ddls.asddls)*

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'for batch test'
@Metadata.ignorePropagatedAnnotations: true
define view entity zbatchtest as select from I_ClfnObjectCharcValue
{
  key ClfnObjectID,
      CharcValue
}
where ClfnObjectID = '00000000000000315'
```