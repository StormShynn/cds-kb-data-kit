---
name: D_BILLGDOCCRTEFRMBILLGDOCIP
description: "D Billgdoccrtefrmbillgdocip"
semantic_vi: "Chỉ ra các tham chiếu tạo hóa đơn cho hóa đơn, hữu ích khi phân tích hoặc báo cáo về mối quan hệ hóa đơn."
keywords:
  - "billing document"
  - "hóa đơn"
  - "billing document creation"
  - "tạo hóa đơn"
  - "reference"
  - "tham chiếu"
  - "sap"
  - "sd-bil"
  - "sales & distribution"
semantic_en: "Exposes billing document creation references for billing documents, useful when analyzing or reporting on billing document relationships."
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
# D_BILLGDOCCRTEFRMBILLGDOCIP

**D Billgdoccrtefrmbillgdocip**

| Property | Value |
|---|---|
| App Component | `SD-BIL-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BillingDocumentDate` |  | |  | `fkdat` |  |  |
| `BillingDocumentType` |  | |  | `fkart` |  |  |
| `D_BillgDocCrteFrmBillgDocRefIP` |  | |  | `_Reference : composition [1..*] of D_BillgDocCrteFrmBillgDocRefIP` |  |  |
| `D_BlgDcCrteFrmBillgDocCtrlIP` |  | |  | `_Control : composition [0..1] of D_BlgDcCrteFrmBillgDocCtrlIP` |  |  |

## Source Code

```abap
@EndUserText.label: 'Billing Document Create from Billing Document - Parameter'
@VDM.usage.type: [#ACTION_PARAMETER_STRUCTURE]
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
define root abstract entity D_BillgDocCrteFrmBillgDocIP
{
    BillingDocumentDate    : fkdat;
    BillingDocumentType    : fkart;
    
    _Reference : composition [1..*] of D_BillgDocCrteFrmBillgDocRefIP;
    _Control   : composition [0..1] of D_BlgDcCrteFrmBillgDocCtrlIP; 
}
```
