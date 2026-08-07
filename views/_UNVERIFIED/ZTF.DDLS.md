---
name: ZTF.DDLS
description: .
software_component: SAPSCORE
release_state: unverified
clean_core_level: A
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://github.com/Arunagirish/rap_arun/blob/ffd8c7379d437257648c6e3647959c0c267b7bfa/src/ztf.ddls.asddls
semantic_en: . — CDS view.
semantic_vi: . — CDS view dựa trên ..
keywords:
  - client:mandt
  - lifnr:lifnr
---
# ZTF.DDLS

**.**

| Property | Value |
|---|---|
| Software Component | `SAPSCORE` |
| Release State | Unverified (auto-discovered, needs review) (Level A) |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://github.com/Arunagirish/rap_arun/blob/ffd8c7379d437257648c6e3647959c0c267b7bfa/src/ztf.ddls.asddls) |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `client:mandt` |  | |  | `key client:mandt` |
| `lifnr:lifnr` |  | |  | `key lifnr:lifnr` |

## Source Code

*Source: [https://github.com/Arunagirish/rap_arun/blob/ffd8c7379d437257648c6e3647959c0c267b7bfa/src/ztf.ddls.asddls](https://github.com/Arunagirish/rap_arun/blob/ffd8c7379d437257648c6e3647959c0c267b7bfa/src/ztf.ddls.asddls)*

```abap
@EndUserText.label: '.'
@VDM.viewType: #BASIC
define table function ztf
returns {
key client:mandt;
key lifnr:lifnr;
  
}
implemented by method ZCLS12345=>add;
```
