---
name: D_PRJBLGREQCRTEBILLGDOCREQP
description: "D Prjblgreqcrtebillgdocreqp"
semantic_vi: "View này hiển thị dữ liệu yêu cầu tạo tài liệu yêu cầu tạo hóa đơn dự án, được sử dụng khi tạo tài liệu yêu cầu tạo hóa đơn dự án trong thành phần PPM-SCL-BIL."
keywords:
  - "project billing request"
  - "tài liệu yêu cầu tạo hóa đơn dự án"
  - "ppm-scl-bil"
  - "project management"
  - "quản lý dự án"
  - "project billing"
  - "hóa đơn dự án"
  - "document requirements"
  - "yêu cầu tạo tài liệu"
semantic_en: "This view exposes project billing request creation document requirements data, which is used when creating a project billing request document in the PPM-SCL-BIL component."
app_component: PPM-SCL-BIL
software_component: SAPSCORE
release_state: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PPM
  - PPM-SCL
  - PPM-SCL-BIL
  - component:PPM-SCL-BIL
  - lob:Other
---
# D_PRJBLGREQCRTEBILLGDOCREQP

**D Prjblgreqcrtebillgdocreqp**

| Property | Value |
|---|---|
| App Component | `PPM-SCL-BIL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Action` |  | |  | `string` |  |  |
| `OnAccountItemsAreIncluded` |  | |  | `boolean` |  |  |
| `ProjBillgAdhcBillgPlnItmIsCrtd` |  | |  | `boolean` |  |  |

## Source Code

```abap
@VDM.usage.type: [#ACTION_PARAMETER_STRUCTURE]
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
//@ObjectModel.modelingPattern: #DATA_STRUCTURE
@EndUserText.label: 'Abstract entity for creating BDR'

define root abstract entity D_PrjBlgReqCrteBillgDocReqP

{ 
  Action                    : abap.string;
  OnAccountItemsAreIncluded : boolean; 
  @UI.lineItem: [{ exclude: true  }]
  @Feature: 'PROJ_BILLG_ADHOC_BILLG'
  ProjBillgAdhcBillgPlnItmIsCrtd: boolean;
}
```
