---
name: F_VALUATIONAREATYPE
description: "Valuationareatype"
semantic_vi: "View Valuationareatype CDS hiển thị các loại giá trị khu vực được sử dụng trong việc đánh giá vật liệu, điều này rất quan trọng cho quản lý kho và báo cáo tài chính. Nó được sử dụng để truy xuất và phân tích các loại giá trị khu vực cho các kịch bản kinh doanh cụ thể."
keywords:
  - "valuation area type"
  - "loại giá trị khu vực"
  - "material valuation"
  - "đánh giá vật liệu"
  - "inventory management"
  - "quản lý kho"
  - "financial reporting"
  - "báo cáo tài chính"
  - "mm-im-gf"
  - "sourcing & procurement"
  - "lob:sourcing & procurement"
  - "fact-view"
semantic_en: "The Valuationareatype CDS view exposes valuation area types used in material valuation, which is essential for inventory management and financial reporting. It is used to retrieve and analyze valuation area types for specific business scenarios."
app_component: MM-IM-GF-2CL
software_component: SAPSCORE
release_state: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - MM
  - MM-IM
  - MM-IM-GF
  - fact-view
  - component:MM-IM-GF-2CL
  - lob:Sourcing & Procurement
---
# F_VALUATIONAREATYPE

**Valuationareatype**

| Property | Value |
|---|---|
| App Component | `MM-IM-GF-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ValuationAreaType` | ✓ | |  | `bwkrs_cus` |  |  |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Valuation area type (Plant/CompanyCode)'
@ObjectModel: {
                derivationFunction:
                                    {
                                      applicableFor.element: ['ValuationAreaType'],
                                      result.type: #SINGLE,
                                      result.multipleRecords: false,
                                      result.element: 'ValuationAreaType'
                                    },
                usageType: {
                             sizeCategory: #S,
                             serviceQuality: #A,
                             dataClass: #CUSTOMIZING
                           },
                modelingPattern: #DERIVATION_FUNCTION,
                supportedCapabilities: [#DERIVATION_FUNCTION]          
              }
@VDM.viewType: #DERIVATION_FUNCTION
@Metadata.ignorePropagatedAnnotations: true
define view entity F_ValuationAreaType
  as select from tcurm
{
  key bwkrs_cus as ValuationAreaType
}
```
