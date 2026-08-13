---
name: D_BILLGDOCCRTEFRMEXTPRGELMIP
description: "D Billgdoccrtefrmextprgelmip"
semantic_vi: "View này hiển thị các bản ghi điều kiện hóa đơn thanh toán cho các phần tử chương trình bên ngoài. Nó được sử dụng để truy cập và thao tác các bản ghi điều kiện cho các phần tử chương trình bên ngoài trong hóa đơn thanh toán."
keywords:
  - "billing document"
  - "điều kiện hóa đơn thanh toán"
  - "phần tử chương trình bên ngoài"
  - "external program element"
  - "condition record"
  - "hóa đơn thanh toán"
  - "sđt"
  - "sd-bil"
  - "sales & distribution"
semantic_en: "This view exposes billing document condition records for external program elements. It is used to access and manipulate condition records for external program elements in billing documents."
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
# D_BILLGDOCCRTEFRMEXTPRGELMIP

**D Billgdoccrtefrmextprgelmip**

| Property | Value |
|---|---|
| App Component | `SD-BIL-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ConditionType` |  | |  | `kschl` |  |  |
| `ConditionRateAmount` |  | |  | `vfprc_rate_amount` |  |  |
| `ConditionCurrency` |  | |  | `waers` |  |  |
| `ConditionQuantity` |  | |  | `kpein` |  |  |
| `ConditionQuantityUnit` |  | |  | `kmein` |  |  |
| `ConditionRateRatio` |  | |  | `vfprc_element_ratio` |  |  |
| `ConditionRateRatioUnit` |  | |  | `msehi` |  |  |

## Source Code

```abap
@EndUserText.label: 'Bill Doc Create From Ext Data Pricing Element - Parameter'
@VDM.usage.type:[#ACTION_PARAMETER_STRUCTURE]
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
@ObjectModel.modelingPattern: #DATA_STRUCTURE
define root abstract entity D_BillgDocCrteFrmExtPrgElmIP
{
  ConditionType          : kschl;
 
  @OData.v2.amount.noDecimalShift: true
  @Semantics.amount.currencyCode: 'ConditionCurrency'
  ConditionRateAmount    : vfprc_rate_amount;
 
  @Semantics.currencyCode: true
  ConditionCurrency      : waers;
 
  @Semantics.quantity.unitOfMeasure: 'ConditionQuantityUnit'
  ConditionQuantity      : kpein;
 
  @Semantics.unitOfMeasure: true
  ConditionQuantityUnit  : kmein;
 
  @Semantics.quantity.unitOfMeasure: 'ConditionRateRatioUnit'
  ConditionRateRatio     : vfprc_element_ratio; 
 
  @Semantics.unitOfMeasure: true
  ConditionRateRatioUnit : msehi;
 
}
```
