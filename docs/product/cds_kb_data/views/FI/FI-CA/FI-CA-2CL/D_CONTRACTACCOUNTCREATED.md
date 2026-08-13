---
name: D_CONTRACTACCOUNTCREATED
description: "D Contractaccountcreated"
semantic_vi: "View D_CONTRACTACCOUNTCREATED hiển thị dữ liệu tạo tài khoản hợp đồng, có thể sử dụng để theo dõi và phân tích sự kiện tạo tài khoản hợp đồng."
keywords:
  - "contract account creation"
  - "tạo tài khoản hợp đồng"
  - "fi-ca"
  - "fi"
  - "finance"
  - "contract"
  - "account"
  - "created"
  - "lob:finance"
semantic_en: "The D_CONTRACTACCOUNTCREATED view exposes contract account creation data, which can be used to track and analyze contract account creation events."
app_component: FI-CA-2CL
software_component: SAPSCORE
release_state: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-CA
  - contract
  - component:FI-CA-2CL
  - lob:Finance
---
# D_CONTRACTACCOUNTCREATED

**D Contractaccountcreated**

| Property | Value |
|---|---|
| App Component | `FI-CA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ContractAccountCategory` |  | |  | `vktyp_kk` |  |  |
| `ContractAccountExtReference` |  | |  | `vkona_kk` |  |  |

## Source Code

```abap
@EndUserText.label: 'Contract Account Created'

@Metadata.allowExtensions: true

@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]

@VDM.usage.type: [#EVENT_SIGNATURE]

define abstract entity D_ContractAccountCreated
{
  ContractAccountCategory     : vktyp_kk;
  ContractAccountExtReference : vkona_kk;
}
```
