---
name: D_BDRCRTEFRMEXTBLLBLEDOCP
description: "D Bdrcrtefrmextbllbledocp"
semantic_vi: "View D_BDRCRTEFRMEXTBLLBLEDOCP hiển thị dữ liệu kinh doanh liên quan đến hóa đơn và các mục của hóa đơn, có thể được sử dụng để lấy thông tin chi tiết về hóa đơn và các mục liên quan."
keywords:
  - "billing document"
  - "hóa đơn"
  - "billing item"
  - "mục hóa đơn"
  - "sap"
  - "sd-bil"
  - "sales and distribution"
  - "bán hàng và phân phối"
  - "ekko"
  - "reference document"
  - "đơn tham khảo"
semantic_en: "The D_BDRCRTEFRMEXTBLLBLEDOCP view exposes business data related to billing documents and their items, which can be used to retrieve detailed information about billing documents and their associated items."
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
# D_BDRCRTEFRMEXTBLLBLEDOCP

**D Bdrcrtefrmextbllbledocp**

| Property | Value |
|---|---|
| App Component | `SD-BIL-BDR-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ReferenceDocument` |  | |  | `sdbil_odata_source_document` |  |  |
| `ReferenceDocSDDocCategory` |  | |  | `sdbil_odata_src_doc_cat` |  |  |
| `D_BDRCrteFrmExtBllbleDocItemP` |  | |  | `_Item : composition [1..*] of D_BDRCrteFrmExtBllbleDocItemP` |  |  |

## Source Code

```abap
@EndUserText.label: 'Create BDR from Ext Data - Bllble Doc'
@VDM.usage.type: [#ACTION_PARAMETER_STRUCTURE]
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
@ObjectModel.modelingPattern: #DATA_STRUCTURE

define root abstract entity D_BDRCrteFrmExtBllbleDocP
{

      ReferenceDocument : sdbil_odata_source_document; //Mandatory 
      
      ReferenceDocSDDocCategory : sdbil_odata_src_doc_cat; //Mandatory

      _Item            : composition [1..*] of D_BDRCrteFrmExtBllbleDocItemP;
      
      _Text            : association [0..*] to D_BDRCrteFrmExtTextP on 1 = 0;
      
      _PaymentCard     : association [0..*] to D_BDRCrteFrmExtPaytCardP on 1 = 0;
      
}
```
