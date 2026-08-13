---
name: D_PCLGSDCGETMXDLDGICMTSCNTRYP
description: "D Pclgsdcgetmxdldgicmtscntryp"
semantic_vi: "Chứa dữ liệu quốc gia cho quản lý chuỗi cung ứng toàn cầu, được sử dụng để truy cập thông tin quốc gia cho các giao dịch chuỗi cung ứng."
keywords:
  - "country"
  - "global supply chain"
  - "supply chain management"
  - "ehs-sus-fnd-pc"
  - "ehs"
  - "ehs-sus"
  - "ehs-sus-fnd"
  - "component:ehs-sus-fnd-pc"
  - "lob:other"
  - "national data"
  - "chuỗi cung ứng toàn cầu"
  - "quản lý chuỗi cung ứng"
semantic_en: "Exposes country data for global supply chain management, used to access country-specific information for supply chain transactions."
app_component: EHS-SUS-FND-PC
software_component: SAPSCORE
release_state: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - EHS
  - EHS-SUS
  - EHS-SUS-FND
  - component:EHS-SUS-FND-PC
  - lob:Other
---
# D_PCLGSDCGETMXDLDGICMTSCNTRYP

**D Pclgsdcgetmxdldgicmtscntryp**

| Property | Value |
|---|---|
| App Component | `EHS-SUS-FND-PC` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Country` |  | |  | `land1` |  |  |
| `_Root` | | ✓ | | | | |

## Source Code

```abap
@EndUserText.label: 'Get Mxd Loading Icmts Country Parameter'
@ObjectModel.supportedCapabilities: [ #DATA_STRUCTURE ]
@VDM.usage.type: [#ACTION_PARAMETER_STRUCTURE]
define abstract entity D_PCLgsDcGetMxdLdgIcmtsCntryP
{
  Country                    : land1;
  _Root : association to parent D_PCLgsDcGetMxdLdgIcmtsP; 
}
```
