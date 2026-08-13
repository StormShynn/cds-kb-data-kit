---
name: D_BILLGDOCCRTEFRMEXTTXTIP
description: "D Billgdoccrtefrmexttxtip"
semantic_vi: "View D_BILLGDOCCRTEFRMEXTTXTIP hiển thị thông tin văn bản ngoài cho hóa đơn thanh toán, có thể được sử dụng khi hiển thị hoặc in hóa đơn thanh toán với văn bản bổ sung."
keywords:
  - "billing document"
  - "hóa đơn thanh toán"
  - "external text"
  - "text information"
  - "sap sd-bil"
  - "sd-bil-2cl"
  - "sales & distribution"
  - "sales document"
semantic_en: "The D_BILLGDOCCRTEFRMEXTTXTIP view exposes external text information for billing documents, which can be used when displaying or printing billing documents with additional text."
app_component: SD-BIL-2CL
software_component: SAPSCORE
release_state: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SD
  - SD-BIL
  - component:SD-BIL-2CL
  - lob:Sales & Distribution
---
# D_BILLGDOCCRTEFRMEXTTXTIP

**D Billgdoccrtefrmexttxtip**

| Property | Value |
|---|---|
| App Component | `SD-BIL-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `LongTextID` |  | |  | `tdid` |  |  |
| `Language` |  | |  | `spras` |  |  |
| `LongText` |  | |  | `systring` |  |  |

## Source Code

```abap
@EndUserText.label: 'Bill Doc Create From Ext Data Text - Parameter'
@VDM.usage.type: [#ACTION_PARAMETER_STRUCTURE]
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
define root abstract entity D_BillgDocCrteFrmExtTxtIP
{
  LongTextID : tdid;
  Language   : spras;
  LongText   : systring;
}
```
