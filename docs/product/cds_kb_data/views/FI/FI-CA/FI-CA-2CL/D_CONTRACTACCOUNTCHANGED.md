---
name: D_CONTRACTACCOUNTCHANGED
description: "D Contractaccountchanged"
semantic_vi: "View D_CONTRACTACCOUNTCHANGED lưu trữ các thay đổi liên quan đến tài khoản hợp đồng, cung cấp thông tin về các loại tài khoản hợp đồng và tham chiếu bên ngoài được cập nhật."
keywords:
  - "contract account"
  - "tài khoản hợp đồng"
  - "fi-ca"
  - "fi"
  - "finance"
  - "finance industry"
  - "contract"
  - "hợp đồng"
  - "accounting"
  - "tài khoản"
  - "lob:finance"
semantic_en: "The D_CONTRACTACCOUNTCHANGED view captures changes to contract accounts, providing information on updated contract account categories and external references."
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
# D_CONTRACTACCOUNTCHANGED

**D Contractaccountchanged**

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
@EndUserText.label: 'Contract Account Changed'

@Metadata.allowExtensions: true

@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]

@VDM.usage.type: [#EVENT_SIGNATURE]

define abstract entity D_ContractAccountChanged
{
  ContractAccountCategory     : vktyp_kk;
  ContractAccountExtReference : vkona_kk;
}
```
