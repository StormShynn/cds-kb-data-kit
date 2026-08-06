---
name: ZC_MD_TABLE.DDLS
description: Markdown table
software_component: SAPSCORE
release_state: unverified
clean_core_level: A
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://github.com/Keller-Michael/Markdown_table_via_ABAP_CDS_and_ABAP_SQL/blob/51e0a7cddd74f03b4682dad1c2b1bd27dca67488/src/zc_md_table.ddls.asddls
semantic_en: Markdown table — CDS view based on ZI_MD_HEADER.
semantic_vi: Markdown table — CDS view dựa trên ZI_MD_HEADER.
keywords:
  - markdown
  - table
  - frame1
  - airport
  - frame2
  - name
  - frame3
tags:
  - LE
  - component:LE
  - lob:logistics execution
---
# ZC_MD_TABLE.DDLS

**Markdown table**

| Property | Value |
|---|---|
| Software Component | `SAPSCORE` |
| Release State | Unverified (auto-discovered, needs review) (Level A) |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://github.com/Keller-Michael/Markdown_table_via_ABAP_CDS_and_ABAP_SQL/blob/51e0a7cddd74f03b4682dad1c2b1bd27dca67488/src/zc_md_table.ddls.asddls) |

## Fields

| Field | Data Source |
|---|---|
| key `Frame1` | `Frame1` |
| `AirportID` | `AirportID` |
| `Frame2` | `Frame2` |
| `Name` | `Name` |
| `Frame3` | `Frame3` |
| `City` | `City` |
| `Frame4` | `Frame4` |
| `Country` | `Country` |
| `Frame5` | `Frame5` |

## Source Code

*Source: [https://github.com/Keller-Michael/Markdown_table_via_ABAP_CDS_and_ABAP_SQL/blob/51e0a7cddd74f03b4682dad1c2b1bd27dca67488/src/zc_md_table.ddls.asddls](https://github.com/Keller-Michael/Markdown_table_via_ABAP_CDS_and_ABAP_SQL/blob/51e0a7cddd74f03b4682dad1c2b1bd27dca67488/src/zc_md_table.ddls.asddls)*

```abap
@Metadata.ignorePropagatedAnnotations: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Markdown table'
define view entity ZC_MD_TABLE
  as select from ZI_MD_HEADER
{
  key Frame1,
      AirportID,
      Frame2,
      Name,
      Frame3,
      City,
      Frame4,
      Country,
      Frame5
}

union select from ZI_MD_ALIGNMENT
{
  key Frame1,
      AirportID,
      Frame2,
      Name,
      Frame3,
      City,
      Frame4,
      Country,
      Frame5
}
union select from ZI_MD_LINES
{
  key Frame1,
      AirportID,
      Frame2,
      Name,
      Frame3,
      City,
      Frame4,
      Country,
      Frame5
}
```