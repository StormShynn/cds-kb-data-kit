---
name: D_BDRCRTEFRMEXTDATACONTROLP
description: "D Bdrcrtefrmextdatacontrolp"
semantic_vi: "View D_BDRCRTEFRMEXTDATACONTROLP cung cấp dữ liệu kiểm soát cho dữ liệu bên ngoài trong các tài liệu hóa đơn, thường được sử dụng khi quản lý dữ liệu bên ngoài trong quá trình hóa đơn."
keywords:
  - "billing document"
  - "dữ liệu bên ngoài"
  - "tài liệu hóa đơn"
  - "data control"
  - "quản lý dữ liệu"
  - "external data"
  - "billing process"
  - "kiểm soát dữ liệu"
  - "sales and distribution"
  - "bán hàng và phân phối"
semantic_en: "The D_BDRCRTEFRMEXTDATACONTROLP view provides data control for external data in billing documents, typically used when managing external data in billing processes."
app_component: SD-BIL-BDR-2CL
software_component: SAPSCORE
release_state: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SD
  - SD-BIL
  - SD-BIL-BDR
  - component:SD-BIL-BDR-2CL
  - lob:Sales & Distribution
---
# D_BDRCRTEFRMEXTDATACONTROLP

**D Bdrcrtefrmextdatacontrolp**

| Property | Value |
|---|---|
| App Component | `SD-BIL-BDR-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BillableDocValidityIsChecked` |  | |  | `billabledocvalidityischecked` |  |  |
| `_DummyAssociation` | | ✓ | | | | |

## Source Code

```abap
@EndUserText.label: 'Create BDR from Ext Data - Control Param'
@VDM.usage.type: [#ACTION_PARAMETER_STRUCTURE]
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
@ObjectModel.modelingPattern: #DATA_STRUCTURE

define abstract entity D_BDRCrteFrmExtDataControlP
{

      BillableDocValidityIsChecked : billabledocvalidityischecked;
      
      _DummyAssociation            : association to parent D_BDRCrteFrmExtDataP;
}
```
