---
name: I_ASSETSORTEDKEYFIGURESETSPEC
description: This CDS view provides the prerequisites for answering the following business question: In which sorting sequence are the key figures of my key figure groups for Asset Balances and Asset History Sheet defined?
app_component: FI-AA-AA-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ASSETSORTEDKEYFIGURESETSPEC')/$value
semantic_en: This CDS view provides the prerequisites for answering the following business question: In which sorting sequence are the key figures of my key figure groups for Asset Balances and Asset History Sheet defined?
tags:
  - FI
  - bo:companycode
  - component:FI-AA-AA-2CL
  - FI-AA
  - FI-AA-AA
  - FI-AA-AA-2CL
  - interface-view
  - lob:finance
  - metadata-only
---
# I_ASSETSORTEDKEYFIGURESETSPEC

**This CDS view provides the prerequisites for answering the following business question: In which sorting sequence are the key figures of my key figure groups for Asset Balances and Asset History Sheet defined?**

| Property | Value |
|---|---|
| App Component | `FI-AA-AA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ASSETSORTEDKEYFIGURESETSPEC')/$value) |

## Fields

| Field | Type | Description |
|---|---|---|
| `AssetAccountingKeyFigureSet` | `CHAR(10)` | Key Figure Group |
| `AssetAccountingSortedKeyFigure` | `CHAR(17)` | Key Figure Box Number for Asset Accounting |
| `AssetAccountingKeyFigure` | `CHAR(10)` | Key Figure for Asset Accounting |
| `AssetAcctgKeyFigureSortSqnc` | `NUMC(6)` | Sort sequence of Asset Acc. Key Figure Codes in a group |
| `ZeroBalAmountKeyFigureIsHidden` | `CHAR(1)` | Indicator: Key Figure is hidden when Balance Amount is zero |
| `AssetAccountingKeyFigureText` | `CHAR(70)` | Key Figure Code Name |
